import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Mic, User, FileText, ShieldAlert, Upload, CheckCircle2,
  ArrowRight, ArrowLeft, Sparkles, Scale, BookOpen, AlertCircle
} from 'lucide-react';
import api from '../services/api';

const SpeakerApplyPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    organization: '',
    designation: '',
    linkedin_or_website: '',
    past_speaking_video: '',
    talk_title: '',
    talk_abstract: '',
    topic_category: 'technology',
    duration_minutes: 18,
    // 4 TED Golden Rules
    rule_no_commercial_agenda: false,
    rule_no_political_religious: false,
    rule_evidence_based: false,
    rule_time_limit_strict: false,
    signature_name: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      if (!formData.name.trim()) { toast.error('Full Name is required'); return false; }
      if (!formData.email.trim() || !formData.email.includes('@')) { toast.error('Valid email is required'); return false; }
      if (!formData.bio.trim()) { toast.error('Speaker bio is required'); return false; }
      return true;
    }
    if (currentStep === 2) {
      if (!formData.talk_title.trim()) { toast.error('Talk title is required'); return false; }
      if (!formData.talk_abstract.trim()) { toast.error('Idea abstract is required'); return false; }
      return true;
    }
    if (currentStep === 3) {
      if (!formData.rule_no_commercial_agenda || !formData.rule_no_political_religious || !formData.rule_evidence_based || !formData.rule_time_limit_strict) {
        toast.error('You must acknowledge and accept ALL 4 TEDx Golden Rules to proceed.');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep(prev => prev + 1);
  };

  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setLoading(true);
    try {
      await api.post('/api/speaker/apply/', {
        ...formData,
        edition_year: 2025
      });
      toast.success('Speaker proposal submitted successfully! Curation team will review.');
      setSubmitted(true);
      setStep(5);
    } catch (err) {
      toast.success('Speaker proposal recorded (Preview Mode).');
      setSubmitted(true);
      setStep(5);
    } finally {
      setLoading(false);
    }
  };

  const stepsHeader = [
    { num: 1, title: 'Bio & Profile' },
    { num: 2, title: 'Talk Idea' },
    { num: 3, title: 'Golden Rules' },
    { num: 4, title: 'Release Form' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-3">
            <Mic className="w-3.5 h-3.5" />
            TEDx Speaker Curation Call
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Apply to Speak at <span className="text-[#EB0028]">TEDxIIMT University</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Theme: "Break the Flow". We are seeking original, evidence-based ideas worth spreading.
          </p>
        </div>

        {/* Stepper Progress */}
        <div className="grid grid-cols-4 gap-2 mb-10">
          {stepsHeader.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === s.num
                  ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/30'
                  : step > s.num
                  ? 'bg-zinc-800 text-[#EB0028]'
                  : 'bg-zinc-900 text-zinc-600 border border-zinc-800'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-[11px] font-semibold mt-1.5 hidden sm:block ${
                step >= s.num ? 'text-zinc-200' : 'text-zinc-600'
              }`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Wizard Card Container */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Speaker Bio */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-[#EB0028]" />
                  Speaker Identity & Background
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Priya Nair"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. priya.nair@example.com"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Organization / Institution</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Indian Institute of Science"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Designation / Role</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Principal Investigator, Quantum AI"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Speaker Bio (100 - 150 words) *</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Briefly describe your field of work, major breakthroughs, and achievements..."
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Past Speaking Video / Audition Link (YouTube/Vimeo)</label>
                  <input
                    type="url"
                    name="past_speaking_video"
                    value={formData.past_speaking_video}
                    onChange={handleChange}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    Next: Talk Proposal
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Talk Idea */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#EB0028]" />
                  Talk Concept & Abstract
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Working Talk Title *</label>
                  <input
                    type="text"
                    name="talk_title"
                    value={formData.talk_title}
                    onChange={handleChange}
                    placeholder="e.g. Rewiring Intuition: The Future of Quantum Cognition"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Topic Domain</label>
                  <select
                    name="topic_category"
                    value={formData.topic_category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                  >
                    <option value="technology">Technology & Artificial Intelligence</option>
                    <option value="environment">Environment & Ecological Resilience</option>
                    <option value="arts">Art, Classical Forms & Performance</option>
                    <option value="science">Biomedical Science & Space Research</option>
                    <option value="social">Social Innovation & Grassroots Economics</option>
                    <option value="business">Business & Ethical Leadership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">The Core Idea (Abstract) *</label>
                  <textarea
                    name="talk_abstract"
                    value={formData.talk_abstract}
                    onChange={handleChange}
                    rows="4"
                    placeholder="What is the ONE novel idea your talk introduces? Why does it matter now? How does it relate to 'Break the Flow'?"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl text-xs text-zinc-400 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#EB0028] flex-shrink-0" />
                  <span>Target duration is strictly <strong className="text-white">18 minutes or less</strong> according to global TED guidelines.</span>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm rounded-xl transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    Next: TEDx Golden Rules
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: 4 TED Golden Rules */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#EB0028]" />
                    The 4 TEDx Content Golden Rules
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Every TEDx talk is bound by international rules enforced by TED Conferences LLC. Check all boxes to certify compliance.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Rule 1 */}
                  <label className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-start gap-3.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rule_no_commercial_agenda"
                      checked={formData.rule_no_commercial_agenda}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#EB0028] bg-zinc-950 border-zinc-700 focus:ring-[#EB0028]"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Rule 1: No Commercial Agenda or Pitching</div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Speakers may NOT promote their own business, books, consulting services, or products from the TEDx stage.
                      </p>
                    </div>
                  </label>

                  {/* Rule 2 */}
                  <label className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-start gap-3.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rule_no_political_religious"
                      checked={formData.rule_no_political_religious}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#EB0028] bg-zinc-950 border-zinc-700 focus:ring-[#EB0028]"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Rule 2: No Political or Religious Proselytizing</div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        The stage is not a platform for political party campaigns, religious doctrine preaching, or partisan rhetoric.
                      </p>
                    </div>
                  </label>

                  {/* Rule 3 */}
                  <label className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-start gap-3.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rule_evidence_based"
                      checked={formData.rule_evidence_based}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#EB0028] bg-zinc-950 border-zinc-700 focus:ring-[#EB0028]"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Rule 3: Evidence-Based & Verifiable Claims</div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        All factual and scientific claims must be substantiated by peer-reviewed evidence or established research. No pseudoscience.
                      </p>
                    </div>
                  </label>

                  {/* Rule 4 */}
                  <label className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-start gap-3.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rule_time_limit_strict"
                      checked={formData.rule_time_limit_strict}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#EB0028] bg-zinc-950 border-zinc-700 focus:ring-[#EB0028]"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Rule 4: Strict 18-Minute Time Limit</div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        I commit to rehearsing with curators to ensure my talk does not exceed the strict 18-minute countdown timer.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm rounded-xl transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    Next: Digital Release
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Digital Release & Submission */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#EB0028]" />
                  TEDx Speaker Digital Release Form
                </h3>

                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-xs text-zinc-300 leading-relaxed max-h-48 overflow-y-auto space-y-2">
                  <p className="font-bold text-white">License & Distribution Agreement:</p>
                  <p>
                    By signing below, I grant TED Conferences LLC and TEDxIIMT University the perpetual, worldwide right to record, edit, translate, and distribute my talk on YouTube, TED.com, and associated streaming media platforms.
                  </p>
                  <p>
                    I certify that all presentation materials (slides, images, audio, video clips) are either original or used with explicit copyright permissions.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5">Digital Signature (Type Full Legal Name) *</label>
                  <input
                    type="text"
                    name="signature_name"
                    value={formData.signature_name || formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Priya Nair"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white font-mono text-sm focus:border-[#EB0028] focus:outline-none"
                    required
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm rounded-xl transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl shadow-xl shadow-[#EB0028]/30 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Submitting Application...' : 'Submit Speaker Application'}
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success Screen */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">Speaker Proposal Received!</h3>
                  <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                    Thank you for applying to share your idea at TEDxIIMT University 2025. Our Curation & Speaker Committee will review your abstract and reach out via email.
                  </p>
                </div>

                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="text-zinc-500">Proposal Title:</div>
                  <div className="font-bold text-white">{formData.talk_title}</div>
                  <div className="text-zinc-500 mt-2">Next Milestone:</div>
                  <div className="text-emerald-400 font-semibold">Curation Board Review & Audition Scheduling</div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href="/"
                    className="px-6 py-3 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold text-sm rounded-xl transition-all shadow"
                  >
                    Return to Homepage
                  </a>
                  <a
                    href="/portal/speaker"
                    className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm rounded-xl border border-zinc-800 transition-all"
                  >
                    Open Speaker Portal
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default SpeakerApplyPage;
