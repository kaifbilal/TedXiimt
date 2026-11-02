import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NetworkingPage = () => {
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
                  Networking at{' '}
                  <span className="text-[#EB0028] inline-block">
                    TEDxIIMT UNIVERSITY
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Connect with innovators, creators, and changemakers who share your passion for ideas worth spreading
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent"></div>
        </section>

        {/* Why Network Section */}
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
                    Why Network
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  The Power of <span className="text-[#EB0028]">Connection</span>
                </h2>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EB0028]/5 to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Ideas Multiply Through Conversation
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The most powerful part of TEDx isn't just the talks—it's the conversations that follow. 
                        When you connect with someone who resonates with an idea you heard, magic happens.
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        Our networking sessions are designed to facilitate meaningful connections between 
                        attendees, speakers, and organizers, creating a community united by curiosity and 
                        a desire to make an impact.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {[
                    { number: "500+", label: "Expected Attendees" },
                    { number: "12+", label: "Speakers to Meet" },
                    { number: "3+", label: "Networking Sessions" },
                    { number: "100%", label: "Ideas Worth Sharing" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-[#0a0a0a] border-2 border-[#EB0028]/20 hover:border-[#EB0028] transition-all duration-300 p-6 md:p-8 text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-[#EB0028] mb-2">{stat.number}</div>
                      <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        {/* Networking Opportunities */}
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
                    Opportunities
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  When & Where to <span className="text-[#EB0028]">Connect</span>
                </h2>
              </motion.div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Morning Registration (8:00 AM - 9:00 AM)",
                    description: "Start your day by meeting fellow early birds over breakfast. Exchange introductions and set intentions for the day ahead.",
                    tips: [
                      "Arrive early for the best networking time",
                      "Grab breakfast and mingle in the lobby",
                      "Exchange business cards or LinkedIn profiles"
                    ]
                  },
                  {
                    title: "Coffee Breaks (Between Sessions)",
                    description: "Short 15-20 minute breaks between talks are perfect for quick conversations about the ideas you just heard.",
                    tips: [
                      "Approach someone new each break",
                      "Ask: 'What talk resonated with you?'",
                      "Share your own takeaways and insights"
                    ]
                  },
                  {
                    title: "Lunch Networking (12:30 PM - 1:30 PM)",
                    description: "An hour-long catered lunch provides the perfect setting for deeper conversations and relationship building.",
                    tips: [
                      "Sit with people you haven't met yet",
                      "Join group discussions about morning talks",
                      "Exchange contact information for follow-up"
                    ]
                  },
                  {
                    title: "Evening Reception (5:00 PM - 6:30 PM)",
                    description: "The flagship networking event where you can connect with speakers, organizers, and fellow attendees in a relaxed atmosphere.",
                    tips: [
                      "Approach speakers with thoughtful questions",
                      "Form small discussion groups",
                      "Plan future collaborations and meetups"
                    ]
                  }
                ].map((opportunity, index) => (
                  <motion.div
                    key={opportunity.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-[#0a0a0a] border border-[#1a1a1a] group-hover:border-[#EB0028]/50 transition-all duration-300 p-8 md:p-10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-2 h-full bg-[#EB0028] relative">
                          <div className="absolute -left-2 -top-2 w-6 h-6 bg-[#EB0028] transform rotate-45"></div>
                        </div>
                        
                        <div className="flex-grow space-y-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {opportunity.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {opportunity.description}
                          </p>
                          <div className="pt-2">
                            <div className="text-sm text-[#EB0028] font-bold uppercase tracking-wider mb-3">
                              Pro Tips:
                            </div>
                            <ul className="space-y-2">
                              {opportunity.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex gap-3 text-gray-400">
                                  <span className="text-[#EB0028] flex-shrink-0">•</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
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

        {/* Networking Tips */}
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
                    Best Practices
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Networking <span className="text-[#EB0028]">Tips</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Be Authentic",
                    description: "Don't try to impress—just be genuinely curious about others and their ideas."
                  },
                  {
                    title: "Ask Open Questions",
                    description: "Instead of 'What do you do?', try 'What ideas from today excited you most?'"
                  },
                  {
                    title: "Listen Actively",
                    description: "Give full attention. Put your phone away and make eye contact."
                  },
                  {
                    title: "Share Your Story",
                    description: "Have a brief, compelling introduction ready about who you are and what you're passionate about."
                  },
                  {
                    title: "Follow Up",
                    description: "Send a LinkedIn request or email within 48 hours while the connection is fresh."
                  },
                  {
                    title: "Give Before Taking",
                    description: "Offer help, introductions, or resources before asking for anything in return."
                  },
                  {
                    title: "Respect Boundaries",
                    description: "If someone seems engaged in another conversation, wait for a natural break."
                  },
                  {
                    title: "Be Memorable",
                    description: "Share a specific insight or personal story that makes you stand out."
                  },
                  {
                    title: "Join Group Conversations",
                    description: "Don't just approach individuals—join small groups and contribute thoughtfully."
                  }
                ].map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-1 w-0 bg-[#EB0028] group-hover:w-full transition-all duration-500"></div>
                      <div className="relative z-10">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                          {tip.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {tip.description}
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

        {/* Who You'll Meet */}
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
                    The Community
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Who You'll <span className="text-[#EB0028]">Meet</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[
                  {
                    category: "Students & Academics",
                    description: "Undergraduate and graduate students, researchers, and professors from diverse disciplines seeking intellectual stimulation."
                  },
                  {
                    category: "Entrepreneurs & Innovators",
                    description: "Startup founders, business owners, and innovators looking to connect with like-minded changemakers."
                  },
                  {
                    category: "Professionals & Experts",
                    description: "Working professionals from various industries bringing their expertise and seeking fresh perspectives."
                  },
                  {
                    category: "Artists & Creators",
                    description: "Musicians, writers, designers, and creators who express ideas through their art and craft."
                  },
                  {
                    category: "Social Change Advocates",
                    description: "NGO leaders, activists, and community organizers working toward positive social impact."
                  },
                  {
                    category: "Our Speakers",
                    description: "Access to accomplished speakers including Olympians, IAS officers, filmmakers, educators, and world record holders."
                  }
                ].map((group, index) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-10"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {group.category}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {group.description}
                    </p>
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

        {/* Online Networking */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-10 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-block mb-4">
                      <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                        Stay Connected
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Beyond the <span className="text-[#EB0028]">Event</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      The networking doesn't stop when the event ends. Join our online community to:
                    </p>
                    
                    <ul className="space-y-4 ml-6">
                      <li className="flex gap-3">
                        <span className="text-[#EB0028] flex-shrink-0">•</span>
                        <span>Continue conversations started at the event</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#EB0028] flex-shrink-0">•</span>
                        <span>Connect with attendees you missed meeting in person</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#EB0028] flex-shrink-0">•</span>
                        <span>Share resources, articles, and ideas inspired by talks</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#EB0028] flex-shrink-0">•</span>
                        <span>Organize follow-up meetups and discussions</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#EB0028] flex-shrink-0">•</span>
                        <span>Stay updated on future TEDxIIMT UNIVERSITY events</span>
                      </li>
                    </ul>
                    
                    <div className="pt-6 text-center">
                      <p className="text-sm text-gray-400 mb-4">Follow us on social media:</p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="px-6 py-3 bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-medium transition-all duration-300">
                          LinkedIn
                        </a>
                        <a href="#" className="px-6 py-3 bg-[#000000] border border-[#EB0028] hover:bg-[#EB0028] text-white font-medium transition-all duration-300">
                          Instagram
                        </a>
                        <a href="#" className="px-6 py-3 bg-[#000000] border border-[#EB0028] hover:bg-[#EB0028] text-white font-medium transition-all duration-300">
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                  Your Network is Your <span className="text-[#EB0028]">Net Worth</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Don't miss this opportunity to connect with some of the most inspiring minds in our community. 
                  Register today and start building relationships that could change your trajectory.
                </p>
                <div className="pt-6">
                  <a
                    href="/attendee-form"
                    className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 md:px-12 md:py-5 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Secure Your Spot
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

export default NetworkingPage;
