import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  ListTodo, Plus, Package, Users, CheckCircle2, Clock,
  AlertCircle, ArrowRight, ShieldCheck, X, FilePlus
} from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const LeadPortal = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Test 4 HD camera HDMI feeds with mixer', domain: 'logistics', priority: 'urgent', status: 'assigned', assigned_to_name: 'Rohan Gupta', deadline: '2025-11-09' },
    { id: 2, title: 'Verify 7 wireless mic battery levels & RF', domain: 'logistics', priority: 'high', status: 'in_progress', assigned_to_name: 'Rohan Gupta', deadline: '2025-11-10' },
    { id: 3, title: 'Print 350 attendee delegate badges with QR', domain: 'logistics', priority: 'high', status: 'pending_review', assigned_to_name: 'Sneha Verma', deadline: '2025-11-08' },
    { id: 4, title: 'Setup red circle dot carpet and stage lights', domain: 'logistics', priority: 'medium', status: 'assigned', assigned_to_name: 'Rohan Gupta', deadline: '2025-11-10' },
    { id: 5, title: 'Verify 16:9 slide decks from all 4 speakers', domain: 'curation', priority: 'medium', status: 'completed', assigned_to_name: 'Aarav Sharma', deadline: '2025-11-05' },
  ]);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showReqModal, setShowReqModal] = useState(false);

  // New Task Form
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    domain: 'logistics',
    priority: 'high',
    assigned_to: '',
    deadline: '',
  });

  // Requisition Form
  const [newReq, setNewReq] = useState({
    title: 'Stage & AV Equipment Requisition for TEDx 2025',
    purpose: 'Required for speaker talk recording and confidence monitor display.',
    camera_qty: 4,
    mic_qty: 7,
    catering_qty: 370,
  });

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title) {
      toast.error('Task title is required');
      return;
    }
    const created = {
      id: Date.now(),
      title: newTask.title,
      domain: newTask.domain,
      priority: newTask.priority,
      status: 'assigned',
      assigned_to_name: 'Volunteer Rohan Gupta',
      deadline: newTask.deadline || '2025-11-10',
    };
    setTasks(prev => [created, ...prev]);
    toast.success(`Task "${newTask.title}" assigned to volunteer team.`);
    setShowTaskModal(false);
    setNewTask({ title: '', description: '', domain: 'logistics', priority: 'high', assigned_to: '', deadline: '' });
  };

  const handleCreateRequisition = (e) => {
    e.preventDefault();
    toast.success('Resource Requisition submitted to University Administration.');
    setShowReqModal(false);
  };

  const kanbanColumns = [
    { id: 'assigned', label: 'Assigned', color: 'border-blue-500/30' },
    { id: 'in_progress', label: 'In Progress', color: 'border-amber-500/30' },
    { id: 'pending_review', label: 'Pending Review', color: 'border-purple-500/30' },
    { id: 'completed', label: 'Completed', color: 'border-emerald-500/30' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Domain Lead Operations
            </div>
            <h1 className="text-3xl font-black text-white">
              Logistics & Stage <span className="text-[#EB0028]">Lead Hub</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Domain Manager: <strong className="text-white">{user?.name || 'Prateek Kv'}</strong> • Team: 4 Active Volunteers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowReqModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white rounded-xl text-xs font-bold transition-colors"
            >
              <Package className="w-4 h-4 text-[#EB0028]" />
              Request University Resources
            </button>
            <button
              onClick={() => setShowTaskModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#EB0028] hover:bg-[#c90022] text-white rounded-xl text-xs font-bold shadow-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              Assign New Task
            </button>
          </div>
        </div>

        {/* Kanban Task Matrix */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ListTodo className="w-4 h-4 text-[#EB0028]" />
              Domain Task Board
            </h3>
            <span className="text-xs text-zinc-500">Drag & delegation enabled</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kanbanColumns.map((col) => {
              const colTasks = tasks.filter(t => t.status === col.id);
              return (
                <div key={col.id} className="p-4 bg-zinc-950 border border-zinc-850 rounded-2xl flex flex-col min-h-[400px]">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                    <span className="text-xs font-bold uppercase text-zinc-300">{col.label}</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-zinc-900 text-zinc-400 rounded-md">
                      {colTasks.length}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {colTasks.map((t) => (
                      <div
                        key={t.id}
                        className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-2 hover:border-zinc-700 transition-all text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                            t.priority === 'urgent' ? 'bg-red-950 text-red-400 border border-red-800' :
                            t.priority === 'high' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                            'bg-zinc-800 text-zinc-400'
                          }`}>
                            {t.priority}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">Due {t.deadline}</span>
                        </div>

                        <div className="font-bold text-white leading-snug">{t.title}</div>

                        <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80 text-[10px] text-zinc-400">
                          <span className="truncate">{t.assigned_to_name}</span>
                          {t.status === 'pending_review' && (
                            <button
                              onClick={() => {
                                setTasks(prev => prev.map(item => item.id === t.id ? { ...item, status: 'completed' } : item));
                                toast.success('Completion report approved!');
                              }}
                              className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded font-bold hover:bg-emerald-900"
                            >
                              Approve
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    {colTasks.length === 0 && (
                      <div className="text-center py-10 text-xs text-zinc-600">No tasks in this lane</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal: Create Task */}
        <AnimatePresence>
          {showTaskModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ListTodo className="w-4 h-4 text-[#EB0028]" />
                    Delegate Task to Volunteer
                  </h3>
                  <button onClick={() => setShowTaskModal(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateTask} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Task Title *</label>
                    <input
                      type="text"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      placeholder="e.g. Test 4K display confidence monitor HDMI cable"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 font-bold uppercase mb-1">Domain</label>
                      <select
                        value={newTask.domain}
                        onChange={(e) => setNewTask({ ...newTask, domain: e.target.value })}
                        className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                      >
                        <option value="logistics">Logistics & Venue</option>
                        <option value="curation">Curation & Speakers</option>
                        <option value="marketing">Marketing & Social</option>
                        <option value="design">Design & Print</option>
                        <option value="hospitality">Hospitality & Catering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-400 font-bold uppercase mb-1">Priority</label>
                      <select
                        value={newTask.priority}
                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                        className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                      >
                        <option value="urgent">Urgent / Blocker</option>
                        <option value="high">High Priority</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Assignee Volunteer</label>
                    <select
                      value={newTask.assigned_to}
                      onChange={(e) => setNewTask({ ...newTask, assigned_to: e.target.value })}
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                    >
                      <option value="1">Rohan Gupta (Stage Crew Specialist)</option>
                      <option value="2">Ananya Singh (Hospitality)</option>
                      <option value="3">Vikramaditya (AV Technician)</option>
                    </select>
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowTaskModal(false)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl shadow"
                    >
                      Assign Task
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal: Resource Requisition */}
        <AnimatePresence>
          {showReqModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#EB0028]" />
                    College Resource Requisition Form
                  </h3>
                  <button onClick={() => setShowReqModal(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateRequisition} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Requisition Title *</label>
                    <input
                      type="text"
                      value={newReq.title}
                      onChange={(e) => setNewReq({ ...newReq, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-zinc-900 rounded-xl">
                      <div className="text-zinc-400 font-bold">HD Cameras</div>
                      <input
                        type="number"
                        min="1"
                        max="8"
                        value={newReq.camera_qty}
                        onChange={(e) => setNewReq({ ...newReq, camera_qty: parseInt(e.target.value) })}
                        className="w-full mt-1 px-2 py-1 bg-zinc-950 border border-zinc-700 rounded text-white font-bold"
                      />
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-xl">
                      <div className="text-zinc-400 font-bold">Wireless Mics</div>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={newReq.mic_qty}
                        onChange={(e) => setNewReq({ ...newReq, mic_qty: parseInt(e.target.value) })}
                        className="w-full mt-1 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded text-white font-bold"
                      />
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-xl">
                      <div className="text-zinc-400 font-bold">Meals Covers</div>
                      <input
                        type="number"
                        min="50"
                        max="500"
                        value={newReq.catering_qty}
                        onChange={(e) => setNewReq({ ...newReq, catering_qty: parseInt(e.target.value) })}
                        className="w-full mt-1 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded text-white font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Operational Purpose</label>
                    <textarea
                      value={newReq.purpose}
                      onChange={(e) => setNewReq({ ...newReq, purpose: e.target.value })}
                      rows="3"
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-[#EB0028] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReqModal(false)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl shadow"
                    >
                      Submit Requisition to University
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

export default LeadPortal;
