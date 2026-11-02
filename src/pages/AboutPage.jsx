import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
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
                  About{' '}
                  <br />
                  <span className="text-[#EB0028] inline-block">
                    TEDx
                  </span>IIMT UNIVERSITY
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                  A platform for ideas worth spreading, connecting minds, and inspiring change in the IIMT UNIVERSITY community
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent"></div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column - Label */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-4"
                >
                  <div className="lg:sticky lg:top-32">
                    <div className="inline-block mb-4">
                      <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                        Our Story
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      Where Ideas
                      <br />
                      <span className="text-[#EB0028]">Come Alive</span>
                    </h2>
                  </div>
                </motion.div>
                
                {/* Right Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-8"
                >
                  <div className="space-y-8 md:space-y-10">
                    <div className="space-y-6">
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        TEDxIIMT UNIVERSITY was born from a simple belief: that powerful ideas have the 
                        ability to transform perspectives, inspire action, and create lasting change. 
                        As an independently organized TED event, we bring together thinkers, 
                        innovators, and dreamers from diverse backgrounds.
                      </p>
                      
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Our mission extends beyond hosting an event—we're building a community 
                        where curiosity thrives, where questions are celebrated, and where every 
                        voice has the potential to spark a movement. Through carefully curated 
                        talks, we create moments of insight that resonate long after the 
                        curtain closes.
                      </p>
                    </div>
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

         {/* About TED Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-block mb-4">
                    <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                      About TED
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    About <span className="text-[#EB0028]">TED</span>
                  </h2>
                </div>
                
                <div className="space-y-8 md:space-y-10">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and 
                      spreading ideas that spark conversation, deepen understanding and drive meaningful 
                      change. Our organization is devoted to curiosity, reason, wonder and the pursuit of 
                      knowledge — without an agenda.
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      We welcome people from every discipline and culture who seek a deeper understanding 
                      of the world and connection with others, and we invite everyone to engage with ideas 
                      and activate them in your community.
                    </p>
                  </div>
                  
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-10 space-y-6">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
                      but today it spans a multitude of worldwide communities and initiatives exploring everything 
                      from science and business to education, arts and global issues.
                    </p>
                    
                    <p className="text-base text-gray-400 leading-relaxed">
                      In addition to the TED Talks curated from our annual conferences and published on TED.com, 
                      we produce original podcasts, short video series, animated educational lessons (TED-Ed) 
                      and TV programs that are translated into more than 100 languages and distributed via 
                      partnerships around the world.
                    </p>
                    
                    <p className="text-base text-gray-400 leading-relaxed">
                      Each year, thousands of independently run TEDx events bring people together to share ideas 
                      and bridge divides in communities on every continent. Through the Audacious Project, TED 
                      has helped catalyze more than $3 billion in funding for projects that seek to make the 
                      world more beautiful, sustainable and just.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-base text-gray-400 leading-relaxed">
                      In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate 
                      crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy 
                      to spark a new kind of conversation focused on realistic pathways towards a more vibrant 
                      and equitable future.
                    </p>
                    
                    <div className="pt-6">
                      <a 
                        href="https://www.ted.com/about/programs-initiatives" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#EB0028] hover:text-[#ff1a3d] transition-colors duration-300 font-medium"
                      >
                        View a full list of TED's programs and initiatives
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-t border-[#1a1a1a] pt-8">
                    <p className="text-base text-gray-400 mb-4">Follow TED on social media:</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { name: "Facebook", url: "https://www.facebook.com/TED" },
                        { name: "Instagram", url: "https://www.instagram.com/ted" },
                        { name: "LinkedIn", url: "https://www.linkedin.com/company/ted-conferences" },
                        { name: "TikTok", url: "https://www.tiktok.com/@tedtoks" },
                        { name: "X (Twitter)", url: "https://twitter.com/TEDTalks" }
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 text-sm text-gray-300"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <div className="inline-flex items-center gap-4 bg-[#0a0a0a] border border-[#EB0028]/30 px-6 py-4 md:px-8 md:py-5">
                      <div className="w-1 h-12 bg-[#EB0028]"></div>
                      <p className="text-sm md:text-base text-gray-500 italic text-left">
                        This independent TEDx event is operated
                        <br className="hidden sm:block" />
                        under license from TED
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        {/* About TEDx Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-block mb-4">
                    <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                      About TEDx
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    About <span className="text-[#EB0028]">TEDx</span>, x = independently organized event
                  </h2>
                </div>
                
                <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-12 mb-16 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EB0028]/5 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      In the spirit of discovering and spreading ideas, TEDx is a program of local, 
                      self-organized events that bring people together to share a TED-like experience. 
                      At a TEDx event, TED Talks video and live speakers combine to spark deep discussion 
                      and connection.
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      These local, self-organized events are branded TEDx, where x = independently 
                      organized TED event. The TED Conference provides general guidance for the TEDx 
                      program, but individual TEDx events are self-organized. (Subject to certain rules 
                      and regulations.)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>


        {/* Values Section */}
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
                    What Drives Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Our Core <span className="text-[#EB0028]">Values</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {[
                  {
                    title: "Curiosity",
                    description: "We believe in asking bold questions and exploring unconventional paths to discovery and innovation."
                  },
                  {
                    title: "Authenticity",
                    description: "Every speaker brings their true self, sharing genuine experiences that resonate deeply with our audience."
                  },
                  {
                    title: "Community",
                    description: "We're not just hosting an event—we're nurturing a movement of engaged, passionate individuals."
                  },
                  {
                    title: "Excellence",
                    description: "From speaker selection to event execution, we pursue the highest standards in everything we create."
                  },
                  {
                    title: "Impact",
                    description: "Ideas alone aren't enough. We focus on insights that inspire tangible action and meaningful change."
                  },
                  {
                    title: "Inclusivity",
                    description: "Diverse perspectives make us stronger. We celebrate voices from all backgrounds and experiences."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 p-8 md:p-10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-1 w-0 bg-[#EB0028] group-hover:w-full transition-all duration-500"></div>
                      
                      <div className="relative z-10 space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {value.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {value.description}
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

        {/* Vision Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="order-2 lg:order-1"
                >
                  <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EB0028]/5 to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <div className="inline-block">
                        <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                          Vision 2025
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Creating Ripples of Change
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        We envision a future where every individual in our community feels 
                        empowered to share their ideas, challenge the status quo, and contribute 
                        to a collective journey of growth and discovery.
                      </p>
                      
                      <p className="text-gray-400 leading-relaxed">
                        Through TEDxIIMT UNIVERSITY, we're not just spreading ideas—we're cultivating 
                        a culture of lifelong learning, critical thinking, and purposeful action 
                        that extends far beyond a single day.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="order-1 lg:order-2"
                >
                  <div className="space-y-8">
                    <div>
                      <div className="inline-block mb-4">
                        <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                          Our Commitment
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Beyond the
                        <br />
                        <span className="text-[#EB0028]">Stage</span>
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-1 bg-[#EB0028]"></div>
                        <div className="space-y-2 flex-grow">
                          <h4 className="text-lg font-bold">Lasting Connections</h4>
                          <p className="text-gray-400">
                            Building networks that extend beyond the event, fostering collaborations 
                            and friendships that drive real-world impact.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-1 bg-[#EB0028]"></div>
                        <div className="space-y-2 flex-grow">
                          <h4 className="text-lg font-bold">Continuous Learning</h4>
                          <p className="text-gray-400">
                            Providing resources and follow-up sessions to keep the conversation 
                            alive and ideas evolving.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-1 bg-[#EB0028]"></div>
                        <div className="space-y-2 flex-grow">
                          <h4 className="text-lg font-bold">Action-Oriented</h4>
                          <p className="text-gray-400">
                            Empowering attendees to transform inspiration into concrete steps 
                            toward positive change.
                          </p>
                        </div>
                      </div>
                    </div>
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
      
      </main>
    </div>
  );
};

export default AboutPage;












 

        
