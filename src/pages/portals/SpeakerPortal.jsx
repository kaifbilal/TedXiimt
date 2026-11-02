import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Mic, CheckCircle2, AlertCircle, Upload, FileText,
  Clock, Calendar, Sparkles, Scale, BookOpen, X, Play
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SpeakerPortal = () => {
  const { user } = useAuth();
  const [slideVersion, setSlideVersion] = useState(2);
  const [releaseSigned, setReleaseSigned] = useState(true);
  const [showSignModal, setShowSignModal] = useState(false);
  const [signInput, setSignInput] = useState('');

  const talkData = {
    title: 'The Unseen Current: Reclaiming River Narratives',
    category: 'Environment & Ecological Resilience',
    duration: '16 Minutes',
    status: 'Confirmed Speaker',
    rehearsalTime: 'Nov 09, 2025 • 02:00 PM IST',
    micAllocation: 'Mic 2 (Wireless Lapel)',
    cueTime: 'Session 1 • 09:40 AM',
  };

  const checklist = [
    { label: 'Speaker Bio & High-Res Headshot Submitted', completed: true },
    { label: 'Core Talk Abstract Approved by Curation Board', completed: true },
    { label: 'TEDx 4 Content Golden Rules Acknowledged', completed: true },
    { label: `16:9 Widescreen Slide Deck Uploaded (v${slideVersion})`, completed: true },
    { label: 'TEDx Speaker Release Agreement Signed', completed: releaseSigned },
  ];

  const handleUploadNewDeck = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSlideVersion(prev => prev + 1);
      toast.success(`Slide Deck v${slideVersion + 1} (${file.name}) uploaded for AV team check.`);
    }
  };

  const handleSignRelease = (e) => {
    e.preventDefault();
    if (!signInput.trim()) {
      toast.error('Please enter your full legal name as signature');
      return;
    }
    setReleaseSigned(true);
    toast.success('TEDx Speaker Release Form digitally signed.');
    setShowSignModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase mb-2">
              <Mic className="w-3.5 h-3.5" />
              Speaker Backstage Hub
            </div>
            <h1 className="text-3xl font-black text-white">
              Speaker <span className="text-[#EB0028]">Preparation Portal</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Featured Speaker: <strong className="text-white">{user?.name || 'Dr. Miriam Chandy'}</strong> • Topic: "{talkData.title}"
            </p>
          </div>

          <span className="px-3.5 py-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow">
            <CheckCircle2 className="w-4 h-4" />
            {talkData.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Checklist & Slide Management */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Checklist */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#EB0028]" />
                Event Readiness Checklist
              </h3>
              <div className="space-y-3">
                {checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex items-center justify-between gap-3 text-xs"
                  >
                    <span className={`font-semibold ${item.completed ? 'text-zinc-200' : 'text-zinc-400'}`}>
                      {item.label}
                    </span>
                    {item.completed ? (
                      <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-lg font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done
                      </span>
                    ) : (
                      <button
                        onClick={() => setShowSignModal(true)}
                        className="px-3 py-1 bg-[#EB0028] hover:bg-[#c90022] text-white rounded-lg font-bold text-xs"
                      >
                        Sign Now
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Deck Uploader */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Upload className="w-5 h-5 text-[#EB0028]" />
                    Presentation Slide Deck (16:9 Widescreen)
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Upload your latest .pptx or .pdf for technical rehearsal in Seminar Hall 2nd Floor B Block.
                  </p>
                </div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 rounded-lg">
                  Active: v{slideVersion}.0
                </span>
              </div>

              {/* Upload Box */}
              <label className="border-2 border-dashed border-zinc-800 hover:border-[#EB0028]/60 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all">
                <input type="file" accept=".pptx,.pdf" onChange={handleUploadNewDeck} className="hidden" />
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-[#EB0028] flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-white">Click to Upload Updated Slides</div>
                <div className="text-xs text-zinc-500 mt-1">Supports PowerPoint (.pptx) & PDF up to 100MB</div>
              </label>

              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-1">
                <div className="font-bold text-white">Stage AV Guidelines:</div>
                <div>• Format: Strict 16:9 Widescreen aspect ratio (No 4:3).</div>
                <div>• Fonts: Embed all custom typefaces or convert text to vectors.</div>
                <div>• Embedded Media: Provide any video audio tracks separately to the sound engineer.</div>
              </div>
            </div>

          </div>

          {/* Column 3: Talk & Stage Technical Details */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EB0028]" />
                Stage Technical Specs
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-zinc-900/80 rounded-xl space-y-1">
                  <div className="text-zinc-500">Stage Call Time</div>
                  <div className="font-bold text-white">{talkData.cueTime}</div>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl space-y-1">
                  <div className="text-zinc-500">Microphone Allocation</div>
                  <div className="font-bold text-emerald-400">{talkData.micAllocation}</div>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl space-y-1">
                  <div className="text-zinc-500">Technical Rehearsal Slot</div>
                  <div className="font-bold text-blue-400">{talkData.rehearsalTime}</div>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl space-y-1">
                  <div className="text-zinc-500">Venue Confidence Monitor</div>
                  <div className="font-bold text-zinc-300">4K Display Stand with Timer Display</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/schedule"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 rounded-xl transition-colors"
                >
                  View Full Event-Day Schedule
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Modal: Sign Release Form */}
        <AnimatePresence>
          {showSignModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#EB0028]" />
                    Sign TEDx Speaker Release Form
                  </h3>
                  <button onClick={() => setShowSignModal(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 bg-zinc-900 rounded-xl text-xs text-zinc-400 space-y-2 max-h-40 overflow-y-auto">
                  <p>
                    I grant TED Conferences LLC and TEDxIIMT University the irrevocable right to record, reproduce, and distribute my talk on YouTube and global TED platforms.
                  </p>
                </div>

                <form onSubmit={handleSignRelease} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Type Full Name as Digital Signature *</label>
                    <input
                      type="text"
                      value={signInput}
                      onChange={(e) => setSignInput(e.target.value)}
                      placeholder="e.g. Dr. Miriam Chandy"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white font-mono focus:border-[#EB0028] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowSignModal(false)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl shadow"
                    >
                      Sign Release Agreement
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

export default SpeakerPortal;
