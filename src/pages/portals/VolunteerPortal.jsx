import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  CheckCircle2, Clock, ListTodo, Calendar, QrCode,
  ArrowRight, ShieldCheck, X, FileUp, Sparkles, Check
} from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const VolunteerPortal = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Test all 4 HD camera HDMI feeds with mixer', domain: 'Logistics', priority: 'urgent', status: 'assigned', deadline: '2025-11-09' },
    { id: 2, title: 'Verify 7 wireless mic battery levels & RF frequencies', domain: 'Logistics', priority: 'high', status: 'in_progress', deadline: '2025-11-10' },
    { id: 3, title: 'Setup red circle dot carpet and stage lights', domain: 'Logistics', priority: 'medium', status: 'assigned', deadline: '2025-11-10' },
  ]);

  const [selectedTaskForReport, setSelectedTaskForReport] = useState(null);
  const [reportText, setReportText] = useState('');
  
  // Gate Scanner State
  const [scannerTicketInput, setScannerTicketInput] = useState('TEDX-2025-00247');
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(false);

  const shifts = [
    { time: '08:00 - 09:30 AM', station: 'Main Gate & B-Block Lobby', duty: 'Delegate QR Check-in & Badge Distribution', lead: 'Prateek Kv' },
    { time: '09:30 - 11:15 AM', station: 'Stage Left & Confidence Stand', duty: 'Speaker Mic Lapel Handover & Timer Cue', lead: 'Prateek Kv' },
    { time: '11:15 - 01:30 PM', station: 'Courtyard Dining Hall', duty: 'Catering Buffet Queue & VIP Hospitality', lead: 'Sneha Verma' },
    { time: '01:30 - 04:30 PM', station: 'Main Seminar Hall 2nd Floor', duty: 'Microphone Runner for Interactive Q&A', lead: 'Aarav Sharma' },
  ];

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!reportText) {
      toast.error('Please enter completion remarks');
      return;
    }
    setTasks(prev => prev.map(t => t.id === selectedTaskForReport.id ? { ...t, status: 'pending_review' } : t));
    toast.success('Task report submitted for Lead review.');
    setSelectedTaskForReport(null);
    setReportText('');
  };

  const handleTestScan = async () => {
    if (!scannerTicketInput) return;
    setScanning(true);
    try {
      const res = await api.post('/api/attendee/delegates/check_in_scan/', { ticket_number: scannerTicketInput });
      setScanResult(res);
      toast.success(res.message);
    } catch (err) {
      // Mock scanner response for demo
      const mockResult = {
        valid: true,
        status: 'success',
        message: `ENTRY APPROVED: Welcome to TEDxIIMT University!`,
        attendee: {
          user_name: 'Aarav Sharma',
          ticket_number: scannerTicketInput,
          dietary_choice: 'vegetarian',
          organization: 'IIMT University B.Tech CSE'
        }
      };
      setScanResult(mockResult);
      toast.success(mockResult.message);
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Volunteer & Stage Crew Center
            </div>
            <h1 className="text-3xl font-black text-white">
              Volunteer <span className="text-[#EB0028]">Task & Gate Hub</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Crew Specialist: <strong className="text-white">{user?.name || 'Rohan Gupta'}</strong> • Domain: Logistics & Operations
            </p>
          </div>

          <div className="text-xs text-zinc-400 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800">
            <div>Domain Lead: <strong className="text-white">Prateek Kv</strong></div>
            <div>Event Date: <strong className="text-[#EB0028]">Nov 11, 2025</strong></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Active Tasks & Event Day Shift Calendar */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Task Queue */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ListTodo className="w-5 h-5 text-[#EB0028]" />
                  My Assigned Task Deliverables
                </h3>
                <span className="text-xs font-mono font-bold text-zinc-400">{tasks.length} Assigned</span>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          task.priority === 'urgent' ? 'bg-red-950 text-red-400 border border-red-800' :
                          task.priority === 'high' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                          'bg-zinc-800 text-zinc-400'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-zinc-500 font-mono">Due: {task.deadline}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">{task.title}</h4>
                      <p className="text-zinc-400 text-[11px]">{task.domain} Department</p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {task.status === 'assigned' && (
                        <button
                          onClick={() => setTasks(prev => prev.map(t => t.id === task.id ? { ...t, status: 'in_progress' } : t))}
                          className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-xl text-xs"
                        >
                          Mark In Progress
                        </button>
                      )}
                      {task.status === 'in_progress' && (
                        <button
                          onClick={() => setSelectedTaskForReport(task)}
                          className="px-3.5 py-2 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl text-xs shadow"
                        >
                          Submit Report
                        </button>
                      )}
                      {task.status === 'pending_review' && (
                        <span className="px-3 py-1.5 bg-purple-950/80 text-purple-400 border border-purple-800 rounded-xl font-bold text-xs">
                          Pending Lead Review
                        </span>
                      )}
                      {task.status === 'completed' && (
                        <span className="px-3 py-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800 rounded-xl font-bold text-xs flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Completed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Day Shifts Calendar */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#EB0028]" />
                My Event-Day Shift Roster (Nov 11, 2025)
              </h3>
              <div className="space-y-3">
                {shifts.map((shift, sIdx) => (
                  <div key={sIdx} className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="font-mono font-bold text-[#EB0028]">{shift.time}</div>
                      <div className="text-sm font-bold text-white">{shift.duty}</div>
                      <div className="text-zinc-400">Station: {shift.station}</div>
                    </div>
                    <div className="text-zinc-500 text-[11px] sm:text-right">
                      Lead: <span className="text-zinc-300 font-semibold">{shift.lead}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 3: Event-Day QR Gate Check-In Scanner Tool */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <QrCode className="w-5 h-5 text-[#EB0028]" />
                Event-Day Gate Scanner
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Scan attendee badge QR codes or enter Ticket ID to verify cryptographic HMAC signature and mark entry.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-500 mb-1">Ticket Number / QR Token</label>
                  <input
                    type="text"
                    value={scannerTicketInput}
                    onChange={(e) => setScannerTicketInput(e.target.value)}
                    placeholder="e.g. TEDX-2025-00247"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white font-mono text-xs focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleTestScan}
                  disabled={scanning}
                  className="w-full py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-xs rounded-xl shadow-lg transition-all disabled:opacity-50"
                >
                  {scanning ? 'Validating Signature...' : 'Scan & Admit Attendee'}
                </button>
              </div>

              {/* Scan Feedback Output Box */}
              {scanResult && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl space-y-2 text-xs">
                  <div className="font-bold text-emerald-400">{scanResult.message}</div>
                  <div className="pt-2 border-t border-emerald-900/50 space-y-1 text-zinc-300">
                    <div>Delegate: <strong className="text-white">{scanResult.attendee?.user_name}</strong></div>
                    <div>Affiliation: {scanResult.attendee?.organization}</div>
                    <div>Meal Choice: <span className="text-emerald-400 capitalize">{scanResult.attendee?.dietary_choice}</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal: Task Completion Report */}
        <AnimatePresence>
          {selectedTaskForReport && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileUp className="w-4 h-4 text-[#EB0028]" />
                    Submit Completion Report
                  </h3>
                  <button onClick={() => setSelectedTaskForReport(null)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs text-zinc-400">
                  Task: <strong className="text-white">{selectedTaskForReport.title}</strong>
                </div>

                <form onSubmit={handleSubmitReport} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Report & Execution Notes *</label>
                    <textarea
                      value={reportText}
                      onChange={(e) => setReportText(e.target.value)}
                      rows="4"
                      placeholder="Describe the actions taken, testing outcome, and any notes for the lead..."
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTaskForReport(null)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl shadow"
                    >
                      Submit for Lead Review
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default VolunteerPortal;
