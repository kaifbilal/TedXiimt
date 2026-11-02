import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhatToExpectPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-20 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="inline-block">
                  <div className="h-1 w-20 bg-[#EB0028] mb-6 md:mb-8"></div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  What to{' '}
                  <span className="text-[#EB0028] inline-block">
                    Expect
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Your guide to experiencing TEDxIIMT UNIVERSITY—from the moment you arrive to the connections you'll make
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent"></div>
        </section>

        {/* Event Overview */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 md:mb-20"
              >
                <div className="inline-block mb-4">
                  <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                    Event Overview
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  A Day of <span className="text-[#EB0028]">Ideas</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Event Format</h3>
                    <div className="space-y-4 text-gray-300">
                      <p className="leading-relaxed">
                        TEDxIIMT UNIVERSITY follows the classic TED format—short, powerful talks delivered by speakers 
                        who are experts, innovators, and thought leaders in their fields.
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>12+ inspiring speakers</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>18-minute presentations maximum</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Mix of live talks and TED Talk videos</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Interactive sessions and Q&A</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Networking breaks between sessions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#EB0028]">Duration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Full-day event starting from morning registration through evening networking reception. 
                      Plan to be with us for approximately 8-10 hours of immersive content and connection.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#EB0028]">Venue</h3>
                    <div className="space-y-4 text-gray-300">
                      <p className="leading-relaxed">
                        <strong className="text-white">IIMT UNIVERSITY</strong><br />
                        'O' Pocket, Ganga Nagar<br />
                        Meerut, Uttar Pradesh
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        The event takes place in our state-of-the-art auditorium with comfortable seating, 
                        excellent acoustics, and modern AV equipment to ensure the best viewing experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Dress Code</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Business casual to smart casual. Come comfortable but presentable—you'll want to 
                      look good in photos with speakers and fellow attendees!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        {/* Schedule Flow */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 md:mb-20"
              >
                <div className="inline-block mb-4">
                  <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                    Your Day
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Event <span className="text-[#EB0028]">Timeline</span>
                </h2>
              </motion.div>
              
              <div className="space-y-6">
                {[
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Registration & Welcome",
                    description: "Check in, collect your badge and event materials, enjoy breakfast, and connect with early arrivals."
                  },
                  {
                    time: "9:00 AM - 9:30 AM",
                    title: "Opening Ceremony",
                    description: "Official welcome, introduction to TEDx, and setting the tone for an incredible day of ideas."
                  },
                  {
                    time: "9:30 AM - 12:30 PM",
                    title: "Morning Session",
                    description: "First set of powerful talks covering diverse topics. Includes short breaks between speakers."
                  },
                  {
                    time: "12:30 PM - 1:30 PM",
                    title: "Lunch & Networking",
                    description: "Enjoy a catered lunch while discussing the morning's ideas with fellow attendees and speakers."
                  },
                  {
                    time: "1:30 PM - 4:30 PM",
                    title: "Afternoon Session",
                    description: "More inspiring talks, performances, and interactive moments that challenge and inspire."
                  },
                  {
                    time: "4:30 PM - 5:00 PM",
                    title: "Closing Remarks",
                    description: "Reflection on the day's journey, final thoughts, and call to action for spreading ideas."
                  },
                  {
                    time: "5:00 PM - 6:30 PM",
                    title: "Networking Reception",
                    description: "Connect with speakers, organizers, and fellow attendees. Share insights, exchange contacts, and build lasting relationships."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 md:gap-8 group"
                  >
                    <div className="flex-shrink-0 w-2 bg-[#EB0028] relative">
                      <div className="absolute -left-2 top-0 w-6 h-6 bg-[#EB0028] transform rotate-45"></div>
                    </div>
                    
                    <div className="flex-grow pb-8">
                      <div className="bg-[#0a0a0a] border border-[#1a1a1a] group-hover:border-[#EB0028]/50 transition-all duration-300 p-6 md:p-8">
                        <div className="text-sm text-[#EB0028] font-bold uppercase tracking-wider mb-2">
                          {item.time}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        {/* What to Bring */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-block mb-4">
                    <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                      Preparation
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    What to <span className="text-[#EB0028]">Bring</span>
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    {
                      title: "Your Ticket/Confirmation",
                      desc: "Digital or printed confirmation email required for entry"
                    },
                    {
                      title: "Valid ID",
                      desc: "Government-issued photo identification for verification"
                    },
                    {
                      title: "Notebook & Pen",
                      desc: "Capture insights, quotes, and ideas throughout the day"
                    },
                    {
                      title: "Business Cards",
                      desc: "Exchange contacts during networking sessions"
                    },
                    {
                      title: "Open Mind",
                      desc: "Be ready to challenge assumptions and embrace new perspectives"
                    },
                    {
                      title: "Curiosity",
                      desc: "Ask questions, engage with speakers, and dive deep into ideas"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 p-6 md:p-8 relative overflow-hidden group"
                    >
                      <div className="absolute top-0 left-0 h-1 w-0 bg-[#EB0028] group-hover:w-full transition-all duration-500"></div>
                      <div className="relative z-10">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        {/* Experience Highlights */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 md:mb-20"
              >
                <div className="inline-block mb-4">
                  <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                    Experience
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  More Than <span className="text-[#EB0028]">Just Talks</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {[
                  {
                    title: "Performances",
                    description: "Enjoy live music, dance, and artistic performances that complement the day's themes and energize the audience."
                  },
                  {
                    title: "Photo Opportunities",
                    description: "Professional photo booths and backdrops to capture memories with speakers and fellow attendees."
                  },
                  {
                    title: "Refreshments",
                    description: "Complimentary breakfast, lunch, and refreshments throughout the day to keep you energized."
                  },
                  {
                    title: "Interactive Sessions",
                    description: "Participate in Q&A sessions, workshops, and discussions with speakers and thought leaders."
                  },
                  {
                    title: "Community Building",
                    description: "Connect with like-minded individuals who share your passion for ideas and positive change."
                  },
                  {
                    title: "Inspiration",
                    description: "Leave with actionable insights, new perspectives, and motivation to implement ideas in your own life."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-[#0a0a0a] border-2 border-[#EB0028]/20 hover:border-[#EB0028] transition-all duration-300 p-8 md:p-10 h-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Ready for an <span className="text-[#EB0028]">Unforgettable Experience</span>?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Join us for a day that will challenge your thinking, expand your network, 
                  and inspire you to take action on ideas that matter.
                </p>
                <div className="pt-6">
                  <a
                    href="/attendee-form"
                    className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 md:px-12 md:py-5 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Register Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhatToExpectPage;
