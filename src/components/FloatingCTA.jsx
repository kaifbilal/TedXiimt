import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronRight, Mic, Ticket, X } from 'lucide-react';

const AnimatedDiv = motion.div;
const AnimatedButton = motion.button;

const ctaActions = [
  {
    primary: 'Get Tickets',
    secondary: 'Reserve your seat',
    action: 'tickets',
    Icon: Ticket,
  },
  {
    primary: 'Our Speakers',
    secondary: 'Meet the voices behind the ideas',
    action: 'speakers',
    Icon: Mic,
  },
  {
    primary: 'Become a Sponsor',
    secondary: 'Partner with TEDxIIMT',
    action: 'sponsor',
    Icon: Award,
  },
];

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const totalScroll = document.body.offsetHeight - window.innerHeight;
      const scrollProgress = totalScroll > 0 ? scrollTop / totalScroll : 0;

      setIsVisible(scrollTop > 300 && scrollProgress < 0.9);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleCTAClick = (action) => {
    if (action === 'sponsor') {
      window.location.href = '/join-us/sponsor';
      return;
    }

    if (action === 'speakers') {
      window.location.href = '/speakers';
      return;
    }

    window.location.href = '/join-us/attendee';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <AnimatePresence>
        {isExpanded && (
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full right-0 mb-4 w-[min( calc(100vw-3rem), 320px)]"
          >
            <div className="rounded-xl border border-white/10 bg-[#101012] p-4 shadow-2xl shadow-black/50">
              <div className="mb-4 border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white">TEDxIIMT UNIVERSITY</h3>
                <p className="mt-1 text-sm text-gray-400">Ideas worth spreading</p>
              </div>

              <div className="space-y-2">
                {ctaActions.map((cta) => (
                  <AnimatedButton
                    key={cta.action}
                    type="button"
                    onClick={() => handleCTAClick(cta.action)}
                    className="flex min-h-14 w-full items-center gap-3 rounded-lg border border-white/10 bg-[#18181b] p-3 text-left text-gray-200 transition-colors duration-300 hover:border-[#EB0028]/60 hover:bg-[#242428] hover:text-white"
                    whileHover={{ x: 2 }}
                    whileTap={{ y: 1 }}
                  >
                    {React.createElement(cta.Icon, {
                      className: 'h-5 w-5 shrink-0 text-[#EB0028]',
                      'aria-hidden': true,
                    })}
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{cta.primary}</span>
                      <span className="mt-0.5 block text-xs text-gray-500">{cta.secondary}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-500" aria-hidden="true" />
                  </AnimatedButton>
                ))}
              </div>

            </div>
          </AnimatedDiv>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        aria-label={isExpanded ? 'Close quick actions menu' : 'Open quick actions menu'}
        aria-expanded={isExpanded}
        className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/20 bg-[#EB0028] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(235,0,40,0.9)] transition-colors duration-300 hover:bg-[#c90024] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {isExpanded ? <X className="h-4 w-4" aria-hidden="true" /> : <Ticket className="h-4 w-4" aria-hidden="true" />}
        <span>{isExpanded ? 'Close' : 'Get Tickets'}</span>
      </button>
    </div>
  );
};

export default FloatingCTA;
