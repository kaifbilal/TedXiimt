import React from 'react';
import logo from './logo-white.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#EB0028]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#EB0028]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          
          {/* Column 1: About & Identity */}
          <div className="max-w-sm space-y-5">
            <a href="/" className="inline-block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]">
              <img 
                src={logo} 
                alt="TEDxIIMT UNIVERSITY Logo" 
                className="h-11 object-contain" 
              />
            </a>
            <div className="h-px w-12 bg-[#EB0028]" />
            <p className="text-sm leading-7 text-zinc-400">
              TEDxIIMT University is an independently organized TED event operated under license from TED. We curate transformative ideas, courageous thinkers, and ground-level innovators.
            </p>
          </div>

          {/* Column 2: Event Experience */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Event Navigation
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/about" className="transition-colors hover:text-white">About TEDx & Mission</a></li>
              <li><a href="/speakers" className="transition-colors hover:text-white">2025 Speaker Lineup</a></li>
              <li><a href="/schedule" className="transition-colors hover:text-white">Schedule & Run of Show</a></li>
              <li><a href="/library" className="font-medium text-zinc-300 transition-colors hover:text-[#EB0028]">Multi-Year Library</a></li>
              <li><a href="/team" className="transition-colors hover:text-white">Organizing Team</a></li>
              <li><a href="/venue" className="transition-colors hover:text-white">Campus Map & Directions</a></li>
              <li><a href="/what-to-expect" className="transition-colors hover:text-white">Attendee Guide</a></li>
              <li><a href="/code-of-conduct" className="transition-colors hover:text-white">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Column 3: Portals & Media */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Media
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/gallery" className="transition-colors hover:text-white">Photo & Video Gallery</a></li>
              <li><a href="/faq" className="transition-colors hover:text-white">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 4: Join Us & Registration */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Get Involved
            </h3>
            <div className="mb-6 space-y-3">
              <a 
                href="/register" 
                className="block rounded-lg border border-[#EB0028] bg-[#EB0028] px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#EB0028]/20 transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-[#EB0028] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                Register as Attendee
              </a>
              <div>
                <a 
                  href="/speaker-apply" 
                  className="block rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-zinc-300 transition-all hover:border-[#EB0028]/60 hover:bg-[#EB0028]/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  Apply to Speak
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory TEDx Licensing Disclaimer (Official Brand Guidelines) */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-xs text-zinc-500 md:flex-row">
          <p className="text-center leading-relaxed md:text-left">
            This independent <strong className="text-zinc-300">TEDx</strong> event is operated under license from <a href="https://www.ted.com/tedx" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#EB0028] underline">TED</a>. © {new Date().getFullYear()} TEDxIIMT University. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="/code-of-conduct" className="transition-colors hover:text-white">Code of Conduct</a>
            <span className="text-zinc-700">•</span>
            <a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
            <span className="text-zinc-700">•</span>
            <a href="/terms" className="transition-colors hover:text-white">Terms of Service</a>
            <span className="text-zinc-700">•</span>
            <a href="https://www.ted.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">TED.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
