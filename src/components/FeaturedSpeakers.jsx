import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import speakersData from '../data/speakersData';

const FeaturedSpeakers = () => {
  const speakers = speakersData.map((speaker) => ({
    id: speaker.id,
    name: speaker.name,
    title: speaker.designation || 'Featured Speaker',
    company: 'TEDxIIMT University',
    image: speaker.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    talk: speaker.topic || speaker.quote || 'Ideas Worth Spreading',
    description: speaker.shortBio || 'Sharing revolutionary perspectives and pioneering insights at TEDxIIMT University 2025.',
    credentials: [speaker.designation?.split(',')[0] || 'Visionary Leader', 'TEDx Speaker'],
    expertise: ['Storytelling', 'Film', 'Social Impact'],
  }));
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay && speakers.length > 1) {
      interval = setInterval(() => {
        setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, speakers.length]);

  const nextSpeaker = () => {
    if (speakers.length > 0) {
      setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
      setIsAutoPlay(false);
    }
  };

  const prevSpeaker = () => {
    if (speakers.length > 0) {
      setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);
      setIsAutoPlay(false);
    }
  };

  const goToSpeaker = (index) => {
    setCurrentSpeaker(index);
    setIsAutoPlay(false);
  };

  if (speakers.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-black text-center text-zinc-500">
        <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm">Loading 2025 Speaker Lineup...</p>
      </section>
    );
  }

  const active = speakers[currentSpeaker] || speakers[0];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-[#EB0028]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="text-[#EB0028]">Speakers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Visionaries sharing ideas worth spreading
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a]">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-[#EB0028]"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpeaker}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-0"
              >
                <div className="relative aspect-square lg:aspect-auto">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#EB0028]"></div>
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>

                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="text-[#EB0028] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
                        Speaker {currentSpeaker + 1} of {speakers.length}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        {active.name}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-400 mb-2">
                        {active.title}
                      </p>
                      <p className="text-base text-gray-500">
                        {active.company}
                      </p>
                    </div>

                    <div className="h-px w-full bg-[#1a1a1a]"></div>

                    <div>
                      <h4 className="text-[#EB0028] text-sm font-bold uppercase tracking-wider mb-3">
                        Talk Topic
                      </h4>
                      <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                        {active.talk}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {active.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                          Credentials
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.credentials.map((cred, idx) => (
                            <span
                              key={idx}
                              className="bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] px-3 py-1 text-sm"
                            >
                              {cred}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                          Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.expertise.map((exp, idx) => (
                            <span
                              key={idx}
                              className="bg-[#1a1a1a] border border-[#EB0028]/20 text-gray-300 px-3 py-1 text-sm"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t-2 border-[#1a1a1a] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  onClick={prevSpeaker}
                  className="w-12 h-12 border-2 border-[#1a1a1a] hover:border-[#EB0028] text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  aria-label="Previous speaker"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSpeaker}
                  className="w-12 h-12 border-2 border-[#1a1a1a] hover:border-[#EB0028] text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                  aria-label="Next speaker"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-2">
                {speakers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSpeaker(index)}
                    className={`h-2 transition-all duration-300 cursor-pointer ${
                      index === currentSpeaker
                        ? 'w-12 bg-[#EB0028]'
                        : 'w-2 bg-[#1a1a1a] hover:bg-[#EB0028]/50'
                    }`}
                    aria-label={`Go to speaker ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="w-12 h-12 border-2 border-[#1a1a1a] hover:border-[#EB0028] text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label={isAutoPlay ? 'Pause autoplay' : 'Start autoplay'}
              >
                {isAutoPlay ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
