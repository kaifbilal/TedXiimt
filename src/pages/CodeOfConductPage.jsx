import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertTriangle, HeartHandshake, Eye, Volume2,
  Users, CheckCircle2, XCircle, Mail, Phone, MapPin, Sparkles, Scale
} from 'lucide-react';

const CodeOfConductPage = () => {
  const principles = [
    {
      icon: HeartHandshake,
      title: 'Mutual Respect & Inclusivity',
      desc: 'Treat every delegate, speaker, volunteer, and university staff member with dignity regardless of gender, sexual orientation, disability, physical appearance, race, age, religion, or background.'
    },
    {
      icon: Eye,
      title: 'Active & Mindful Listening',
      desc: 'TEDx talks explore bold and disruptive ideas. Approach differing viewpoints with intellectual openness, constructive curiosity, and critical respect.'
    },
    {
      icon: Volume2,
      title: 'Auditorium Decorum',
      desc: 'Maintain silence during live stage talks and recording sessions inside Seminar Hall 2nd Floor B Block. Switch all mobile phones and wearable devices to silent mode.'
    },
    {
      icon: Users,
      title: 'Collaborative Community',
      desc: 'Participate actively during networking sessions and interactive experience zones in a spirit of shared learning and meaningful dialogue.'
    }
  ];

  const unacceptableBehaviors = [
    'Harassment, intimidation, stalking, offensive verbal comments, or inappropriate physical contact of any kind.',
    'Disrupting live stage talks, rehearsals, audio-visual recording setups, or official speaker cue sequences.',
    'Unsolicited commercial pitching, product sales, aggressive recruitment, or unauthorized distribution of marketing flyers.',
    'Advocacy of discriminatory, defamatory, violent, or hate-speech rhetoric.',
    'Photographing or recording attendees in private areas (e.g., green rooms, restrooms) or after an explicit request to stop.'
  ];

  const enforcementSteps = [
    {
      step: '1. Verbal Warning & Review',
      detail: 'Core organizing committee issues an immediate formal warning to desist from the disruptive conduct.'
    },
    {
      step: '2. Badge Revocation & Escort',
      detail: 'Immediate cancellation of delegate pass and escort from Seminar Hall 2nd Floor B Block without refund eligibility.'
    },
    {
      step: '3. University & TED HQ Escalation',
      detail: 'Serious safety violations will be escalated to IIMT University Security Administration and noted for future TEDx licensing compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <Scale className="w-3.5 h-3.5" />
            Official Policy & Community Standards
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            TEDxIIMT University <span className="text-[#EB0028]">Code of Conduct</span>
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            TEDxIIMT University is dedicated to providing a safe, inclusive, welcoming, and harassment-free environment for everyone, celebrating bold ideas under our 2025 theme "Break the Flow".
          </p>
        </div>

        {/* 1. Core Principles Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <ShieldCheck className="w-5 h-5 text-[#EB0028]" />
            1. Expected Standards of Conduct
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-3 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EB0028]/10 text-[#EB0028] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Unacceptable Behavior */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <AlertTriangle className="w-5 h-5 text-[#EB0028]" />
            2. Zero Tolerance for Unacceptable Behavior
          </h2>
          <p className="text-xs text-zinc-400">
            The following behaviors are strictly prohibited across all venue facilities, networking corridors, lunch areas, and official digital event channels:
          </p>

          <div className="space-y-3">
            {unacceptableBehaviors.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl text-xs text-zinc-300 border border-zinc-850">
                <XCircle className="w-4 h-4 text-[#EB0028] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Photography & Media Policy */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Sparkles className="w-5 h-5 text-[#EB0028]" />
            3. Photography, Recording & Social Sharing
          </h2>
          <div className="text-xs text-zinc-300 space-y-3 leading-relaxed">
            <p>
              • <strong className="text-white">Official Broadcast:</strong> The event is professionally recorded in 4K HD and photographed for publication on the official TEDx YouTube Channel (40M+ subscribers). By attending, delegates consent to appear in background photography and archival footage.
            </p>
            <p>
              • <strong className="text-white">Personal Photography:</strong> Delegates are encouraged to capture photos and share memorable moments on social media using the official hashtags <span className="text-[#EB0028] font-bold">#TEDxIIMTUniversity</span> and <span className="text-[#EB0028] font-bold">#BreakTheFlow</span>.
            </p>
            <p>
              • <strong className="text-white">Flash Photography Prohibition:</strong> Flash photography and continuous video recording during speaker talks are strictly prohibited to avoid distracting speakers and interfering with broadcast camera ISO settings.
            </p>
          </div>
        </div>

        {/* 4. Enforcement & Consequences */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Scale className="w-5 h-5 text-[#EB0028]" />
            4. Consequences & Enforcement Protocol
          </h2>
          <p className="text-xs text-zinc-400">
            Participants asked to stop any harassing or non-compliant behavior are expected to comply immediately. If a participant engages in prohibited behavior, the event organizers retain the right to take appropriate action:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {enforcementSteps.map((step, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-2 text-xs">
                <div className="font-bold text-white text-sm">{step.step}</div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Reporting an Incident */}
        <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Mail className="w-5 h-5 text-[#EB0028]" />
            5. Incident Reporting & Safety Assistance
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            If you experience or witness behavior that violates this Code of Conduct, or have any other safety concerns, please notify an organizing team member immediately. Team members can be identified by their black <strong className="text-white">TEDx Crew T-Shirts</strong> and <strong className="text-white">Staff Lanyards</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 bg-zinc-900 rounded-xl space-y-1">
              <div className="text-zinc-500 font-bold uppercase text-[10px]">Confidential Incident Email</div>
              <a href="mailto:tedxiimtuniversity@gmail.com" className="font-bold text-[#EB0028] hover:underline text-sm block">
                tedxiimtuniversity@gmail.com
              </a>
              <div className="text-zinc-500 text-[10px]">Monitored continuously by the Organizing Licensee</div>
            </div>

            <div className="p-4 bg-zinc-900 rounded-xl space-y-1">
              <div className="text-zinc-500 font-bold uppercase text-[10px]">On-Campus Security & Help Desk</div>
              <div className="font-bold text-white text-sm">Seminar Hall Lobby B Block Helpdesk</div>
              <div className="text-zinc-500 text-[10px]">IIMT University, Ganga Nagar, Meerut</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CodeOfConductPage;
