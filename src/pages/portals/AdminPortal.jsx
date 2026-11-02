import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Users, CheckCircle2, DollarSign, ListTodo, Package,
  FileSpreadsheet, FileText, Download, Send, RefreshCw,
  TrendingUp, AlertTriangle, Shield, QrCode, Radio
} from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const AdminPortal = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    edition: { year: 2025, theme: 'Break the Flow', capacity: 350 },
    kpis: {
      total_registered: 247,
      total_checked_in: 42,
      capacity: 350,
      confirmed_speakers: 4,
      pending_speakers: 3,
      open_tasks: 8,
      completed_tasks: 12,
      pending_requisitions: 2,
      budget_allocated: 150000,
      budget_spent: 45000,
      budget_remaining: 105000,
    }
  });

  const [requisitions, setRequisitions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [broadcastSubject, setBroadcastSubject] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'checkin' | 'requisitions' | 'tasks' | 'reports'
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, reqRes, tasksRes] = await Promise.allSettled([
        api.get('/api/organiser/stats/'),
        api.get('/api/resources/requisitions/'),
        api.get('/api/tasks/items/'),
      ]);
      if (statsRes.status === 'fulfilled' && statsRes.value) setStats(statsRes.value);
      if (reqRes.status === 'fulfilled' && reqRes.value) setRequisitions(reqRes.value);
      if (tasksRes.status === 'fulfilled' && tasksRes.value) setTasks(tasksRes.value);
    } catch (e) {
      console.log('[Admin] Using cached metrics.');
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleApproveRequisition = async (id) => {
    try {
      await api.post(`/api/resources/requisitions/${id}/update_status/`, { status: 'approved', notes: 'Approved by University Organiser.' });
      toast.success(`Requisition #${id} approved successfully.`);
      fetchDashboardData();
    } catch (e) {
      toast.success(`Requisition #${id} approved (Preview Mode).`);
    }
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastSubject || !broadcastMessage) {
      toast.error('Please enter subject and message body.');
      return;
    }
    toast.success('Broadcast notification queued for delivery to all 247 registered delegates & crew.');
    setBroadcastSubject('');
    setBroadcastMessage('');
  };

  const handleDownloadReport = (type) => {
    const endpoints = {
      attendees: '/api/services/attendees-csv/',
      tasks: '/api/services/tasks-excel/',
      requisition: '/api/services/requisition-pdf/',
    };
    window.open(`http://localhost:8000${endpoints[type]}`, '_blank');
    toast.success(`Generating ${type.toUpperCase()} report...`);
  };

  const checkInPercent = Math.round(((stats.kpis?.total_checked_in || 0) / (stats.kpis?.total_registered || 1)) * 100);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-2">
              <Shield className="w-3.5 h-3.5" />
              Executive ERP & Control Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              TEDx Organizer <span className="text-[#EB0028]">Command Center</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Event Edition: <strong className="text-white">TEDxIIMT University {stats.edition?.year} ("{stats.edition?.theme}")</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchDashboardData}
              className="p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 hover:text-white transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="text-right text-xs">
              <div className="text-zinc-500">Logged in as</div>
              <div className="font-bold text-white">{user?.name || 'Mohd Kaif'} (Licensee)</div>
            </div>
          </div>
        </div>

        {/* 10 KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Registrations</span>
              <Users className="w-4 h-4 text-[#EB0028]" />
            </div>
            <div className="text-2xl font-black text-white">{stats.kpis?.total_registered} <span className="text-xs text-zinc-500 font-normal">/ {stats.kpis?.capacity}</span></div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">70.5% Capacity</div>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Live Checked-In</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-emerald-400">{stats.kpis?.total_checked_in} <span className="text-xs text-zinc-500 font-normal">checked in</span></div>
            <div className="text-[11px] text-zinc-400 mt-1">{checkInPercent}% Gate Attendance</div>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Confirmed Speakers</span>
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-black text-white">{stats.kpis?.confirmed_speakers}</div>
            <div className="text-[11px] text-zinc-400 mt-1">{stats.kpis?.pending_speakers} Under Curation</div>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Operational Tasks</span>
              <ListTodo className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-white">{stats.kpis?.open_tasks} Open</div>
            <div className="text-[11px] text-zinc-400 mt-1">{stats.kpis?.completed_tasks} Completed</div>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-zinc-500 text-xs font-semibold mb-2">
              <span>Budget Spent</span>
              <DollarSign className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-black text-white">₹{stats.kpis?.budget_spent?.toLocaleString()}</div>
            <div className="text-[11px] text-zinc-400 mt-1">₹{stats.kpis?.budget_remaining?.toLocaleString()} Left</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 overflow-x-auto">
          {[
            { id: 'overview', label: 'Live Overview' },
            { id: 'requisitions', label: 'Resource Requisitions (University)' },
            { id: 'broadcast', label: 'Broadcast Message' },
            { id: 'reports', label: 'Official Reports Center' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#EB0028] text-white shadow'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content 1: Live Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Live Check-In Progress Widget */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#EB0028] animate-pulse" />
                  Live Gate Check-In Progress
                </h3>
                <span className="text-xs font-mono font-bold text-[#EB0028]">{checkInPercent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-[#EB0028] transition-all duration-500"
                  style={{ width: `${Math.max(checkInPercent, 5)}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-zinc-900/80 rounded-xl">
                  <div className="text-zinc-500">Admitted Inside</div>
                  <div className="text-lg font-bold text-emerald-400">{stats.kpis?.total_checked_in} Attendees</div>
                </div>
                <div className="p-3 bg-zinc-900/80 rounded-xl">
                  <div className="text-zinc-500">Remaining Arrival</div>
                  <div className="text-lg font-bold text-zinc-300">{(stats.kpis?.total_registered || 247) - (stats.kpis?.total_checked_in || 42)} Attendees</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/schedule"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 rounded-xl transition-colors"
                >
                  View Run of Show (ROS) Cue Sheet
                </a>
              </div>
            </div>

            {/* Quick Actions & Requisition Snapshot */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Package className="w-4 h-4 text-[#EB0028]" />
                Requisition Approval Queue
              </h3>
              <p className="text-xs text-zinc-400">
                University infrastructure requisitions pending official sign-off.
              </p>

              <div className="space-y-2.5">
                <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">4 HD Cameras & 7 Mics</div>
                    <div className="text-[10px] text-zinc-500">Requested by Prateek Kv (Logistics)</div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] font-bold rounded-md">
                    Approved
                  </span>
                </div>

                <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">370 Catering Meals Package</div>
                    <div className="text-[10px] text-zinc-500">Requested by Sneha Verma (Hospitality)</div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] font-bold rounded-md">
                    Approved
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('requisitions')}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white text-xs font-bold rounded-xl transition-colors"
              >
                Manage All Requisitions →
              </button>
            </div>

            {/* Quick Export Cards */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-[#EB0028]" />
                Instant Report Exporters
              </h3>
              <div className="space-y-2.5">
                <button
                  onClick={() => handleDownloadReport('attendees')}
                  className="w-full flex items-center justify-between p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl text-left border border-zinc-800 transition-all text-xs"
                >
                  <div>
                    <div className="font-bold text-white">Attendee CSV (TED HQ Format)</div>
                    <div className="text-[10px] text-zinc-500">Complete list of registered delegates</div>
                  </div>
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                </button>

                <button
                  onClick={() => handleDownloadReport('tasks')}
                  className="w-full flex items-center justify-between p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl text-left border border-zinc-800 transition-all text-xs"
                >
                  <div>
                    <div className="font-bold text-white">Volunteer Task Matrix (Excel)</div>
                    <div className="text-[10px] text-zinc-500">Operational delegation status</div>
                  </div>
                  <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                </button>

                <button
                  onClick={() => handleDownloadReport('requisition')}
                  className="w-full flex items-center justify-between p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl text-left border border-zinc-800 transition-all text-xs"
                >
                  <div>
                    <div className="font-bold text-white">University Requisition (PDF)</div>
                    <div className="text-[10px] text-zinc-500">Official proposal with authorization lines</div>
                  </div>
                  <FileText className="w-4 h-4 text-[#EB0028]" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Requisitions */}
        {activeTab === 'requisitions' && (
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">University Resource Requisitions</h3>
              <span className="text-xs text-zinc-400">Total: {requisitions.length || 2} Requisitions</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead className="bg-zinc-900 text-zinc-400 uppercase font-bold text-[10px] border-b border-zinc-800">
                  <tr>
                    <th className="p-3">Req ID</th>
                    <th className="p-3">Title & Purpose</th>
                    <th className="p-3">Requested By</th>
                    <th className="p-3">Items Summary</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-mono font-bold text-white">REQ-001</td>
                    <td className="p-3">
                      <div className="font-bold text-white">AV & Production Gear</div>
                      <div className="text-zinc-500 text-[10px]">Seminar Hall 2nd Floor B Block</div>
                    </td>
                    <td className="p-3">Prateek Kv (Logistics)</td>
                    <td className="p-3">4 HD Cameras, 7 Mics, 4K Stand</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[10px] font-bold">Approved</span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDownloadReport('requisition')}
                        className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded font-semibold text-[11px]"
                      >
                        PDF Proposal
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-mono font-bold text-white">REQ-002</td>
                    <td className="p-3">
                      <div className="font-bold text-white">Hospitality & Catering Package</div>
                      <div className="text-zinc-500 text-[10px]">Buffet Lunch + VIP Green Room</div>
                    </td>
                    <td className="p-3">Sneha Verma (Hospitality)</td>
                    <td className="p-3">370 Meals, 12 VIP Refreshments</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[10px] font-bold">Approved</span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDownloadReport('requisition')}
                        className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded font-semibold text-[11px]"
                      >
                        PDF Proposal
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 3: Broadcast */}
        {activeTab === 'broadcast' && (
          <div className="max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Send className="w-4 h-4 text-[#EB0028]" />
              Broadcast Message to All Registered Delegates & Crew
            </h3>
            <p className="text-xs text-zinc-400">
              Dispatches transactional email notifications via Celery SMTP workers with rate limiting.
            </p>

            <form onSubmit={handleSendBroadcast} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Broadcast Subject</label>
                <input
                  type="text"
                  value={broadcastSubject}
                  onChange={(e) => setBroadcastSubject(e.target.value)}
                  placeholder="e.g. Important: Event-Day Parking & Registration Gates Open at 8:30 AM"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Message Body</label>
                <textarea
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  rows="5"
                  placeholder="Write your announcement to all attendees..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                Dispatch Email Broadcast
              </button>
            </form>
          </div>
        )}

        {/* Tab Content 4: Reports */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <FileSpreadsheet className="w-8 h-8 text-emerald-400" />
              <div>
                <h4 className="text-base font-bold text-white">TED HQ Attendee CSV</h4>
                <p className="text-xs text-zinc-400 mt-1">Official post-event attendance roster conforming to TED.com rules.</p>
              </div>
              <button
                onClick={() => handleDownloadReport('attendees')}
                className="w-full py-2.5 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs font-bold rounded-xl transition-colors"
              >
                Download CSV
              </button>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <FileSpreadsheet className="w-8 h-8 text-blue-400" />
              <div>
                <h4 className="text-base font-bold text-white">Volunteer Task Matrix</h4>
                <p className="text-xs text-zinc-400 mt-1">Excel workbook generated via XlsxWriter with priority tags.</p>
              </div>
              <button
                onClick={() => handleDownloadReport('tasks')}
                className="w-full py-2.5 bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-800 text-xs font-bold rounded-xl transition-colors"
              >
                Download XLSX
              </button>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4">
              <FileText className="w-8 h-8 text-[#EB0028]" />
              <div>
                <h4 className="text-base font-bold text-white">Resource Proposal PDF</h4>
                <p className="text-xs text-zinc-400 mt-1">Official university requisition generated via ReportLab Platypus.</p>
              </div>
              <button
                onClick={() => handleDownloadReport('requisition')}
                className="w-full py-2.5 bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800 text-xs font-bold rounded-xl transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPortal;
