import React, { useState, useEffect } from 'react';
import {motion, useReducedMotion } from 'framer-motion';
import api from '../services/api';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [editionData, setEditionData] = useState({
    theme: 'Break the Flow',
    date: '2025-11-11T09:00:00',
    attendee_capacity: 350,
    speaker_count: 10
  });

  useEffect(() => {
    let isMounted = true;
    const fetchActiveEdition = async () => {
      try {
        const data = await api.get('/api/editions/events/active/');
        if (isMounted && data) {
          setEditionData({
            theme: data.theme || 'Break the Flow',
            date: data.date ? `${data.date}T09:00:00` : '2025-11-11T09:00:00',
            attendee_capacity: data.attendee_capacity || 350,
            speaker_count: data.speaker_count || (Array.isArray(data.speakers) ? data.speakers.length : 10)
          });
        }
      } catch (err) {
        console.warn('Active edition fetch error:', err);
      }
    };

    fetchActiveEdition();
    return () => { isMounted = false; };
  }, []);

  // Event date countdown timer
  useEffect(() => {
    const eventDate = new Date(editionData.date);
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, [editionData.date]);

  // Animation variants optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  // const fadeInVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { duration: 0.8 }
  //   }
  // };

  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#242424] text-white"
      aria-label="Hero Section"
    >
{/* Background Image */}

<div
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/transparent-hero-bg.PNG')",
    opacity: 1,
    filter: "brightness(1) contrast(1) saturate(1)",
  }}
  aria-hidden="true"
/>

{/* Very Light Bottom Gradient — For Text Readability */}
<div
  className="absolute inset-0 z-10 pointer-events-none"
  style={{
    background:
      "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.4) 100%)",
  }}
  aria-hidden="true"
/>
{/* Subtle Red Accent */}
<motion.div
  className="absolute inset-0 z-10 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at 50% 50%, rgba(235, 0, 40, 0.12), transparent 65%)",
  }}
  animate={
    prefersReducedMotion
      ? {}
      : { opacity: [0.2, 0.6, 0.2] }
  }
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  aria-hidden="true"
/>

{/* Subtle Grid Pattern */}
<div
  className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
  aria-hidden="true"
/>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 pb-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow - Event Type */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-4 md:mb-6"
          >
            <div className="h-px w-8 bg-[#EB0028]" aria-hidden="true"></div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
              Independently Organized TED Event
            </span>
            <div className="h-px w-8 bg-[#EB0028]" aria-hidden="true"></div>
          </motion.div>

          {/* Main Title - Enhanced Typography */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-[#EB0028]">TED</span>
              <span className="text-[#EB0028] relative">
                x
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#EB0028]" aria-hidden="true"></span>
              </span>
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-4 tracking-wide">
              IIMT UNIVERSITY
            </span>
          </motion.h1>

          {/* Value Proposition - Enhanced Clarity */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light"
          >
            <span className="text-white font-semibold">Theme: {editionData.theme}.</span>
            <br className="hidden sm:block" />
            <span className="block mt-2">
              Experience transformative talks, connect with innovators, and discover perspectives that challenge convention.
            </span>
          </motion.p>

          {/* Countdown Timer - Urgency Element */}
          {countdown.days > 0 && (
            <motion.div
              variants={itemVariants}
              className="mb-8 md:mb-12"
            >
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Event Starts In
              </p>
              <div className="flex justify-center gap-3 md:gap-6">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' }
                ].map((item) => (
                  <div 
                    key={item.label}
                    className="bg-[#0a0a0a] border-2 border-[#1a1a1a] px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]"
                  >
                    <div className="text-2xl md:text-4xl font-bold text-[#EB0028] tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Call-to-Action Buttons
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
          >
            <a
              href="/register"
              className="group relative w-full sm:w-auto bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg transition-all duration-300 overflow-hidden cursor-pointer"
              aria-label="Register for TEDxIIMT UNIVERSITY event"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Your Tickets
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" aria-hidden="true"></div>
            </a>

            <a
              href="/speakers"
              className="group w-full sm:w-auto bg-transparent border-2 border-white hover:border-[#EB0028] hover:bg-[#EB0028]/10 text-white font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg transition-all duration-300 cursor-pointer"
              aria-label="View TEDxIIMT UNIVERSITY speakers"
            >
              <span className="flex items-center justify-center gap-2">
                Meet Our Speakers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </motion.div> */}

          {/* Social Proof - Trust Signals
          <motion.div
            variants={fadeInVariants}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">{editionData.attendee_capacity}+</span>
              <span>Delegates</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">{editionData.speaker_count}+</span>
              <span>Visionary Speakers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EB0028]" aria-hidden="true"></div>
              <span className="font-semibold text-white">6 Hours</span>
              <span>of Inspiration</span>
            </div>
          </motion.div> */}
        </motion.div>

      
      </div>
    </section>
  );
};

export default Hero;
