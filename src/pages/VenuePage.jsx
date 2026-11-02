import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VenuePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
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
                  Event <span className="text-[#EB0028]">Venue</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Join us at IIMT UNIVERSITY for an unforgettable TEDx experience
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent"></div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="text-[#EB0028] text-sm font-bold uppercase tracking-widest mb-4">
                      Location
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                      IIMT UNIVERSITY
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-6">
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Address
                      </div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        O Pocket, Ganga Nagar<br />
                        Meerut, Uttar Pradesh, 250001<br />
                        India
                      </p>
                    </div>

                    <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-6">
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Event Type
                      </div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        University Event
                      </p>
                      <a 
                        href="https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/event-types" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#EB0028] hover:underline text-sm mt-2 inline-block"
                      >
                        What is this?
                      </a>
                    </div>

                    <div className="bg-[#0a0a0a] border-l-4 border-[#EB0028] p-6">
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Venue Features
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Modern auditorium with state-of-the-art facilities</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Capacity: 500+ attendees</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Fully accessible venue for all guests</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Ample parking available</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Professional audio-visual equipment</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#EB0028] flex-shrink-0">•</span>
                          <span>Networking spaces and refreshment areas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-4 h-[600px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.2147157729!2d77.76051131508!3d28.99796198249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64e0d67e9d9d%3A0x7f8f8f8f8f8f8f8f!2sIIMT UNIVERSITY%20University!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&markers=color:red%7C28.997962,77.762732" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IIMT UNIVERSITY Location"
                    ></iframe>
                  </div>
                  <div className="mt-6 text-center">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=28.997962,77.762732" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16 md:mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4">
                  <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                    Getting There
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  How to <span className="text-[#EB0028]">Reach</span>
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: 'By Metro',
                    description: 'Take the Metro to the Begum Pull Metro station and use local transport to reach the IIMT University.',
                    details: ['Metro connectivity available', 'Local cabs and autos nearby', 'Approximately 10-15 minutes from station']
                  },
                  {
                    title: 'By Car',
                    description: 'Drive directly to IIMT UNIVERSITY with ample on-campus parking facilities available.',
                    details: ['Free parking on campus', 'GPS coordinates: 28.997962, 77.762732', 'Well-connected by major roads']
                  },
                  {
                    title: 'By Bus',
                    description: 'Regular bus services connect Meerut to major cities. Use local transport from bus station.',
                    details: ['Multiple bus routes available', 'Inter-city connectivity', 'Local transport readily available']
                  }
                ].map((transport, index) => (
                  <motion.div
                    key={transport.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 p-6 md:p-8"
                  >
                    <div className="h-1 w-12 bg-[#EB0028] mb-6"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {transport.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {transport.description}
                    </p>
                    <ul className="space-y-2">
                      {transport.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-500">
                          <span className="text-[#EB0028]">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/20 to-transparent"></div>
        </div>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-10 md:p-12">
                  <div className="text-center space-y-6">
                    <div className="inline-block mb-4">
                      <span className="text-[#EB0028] text-sm font-bold uppercase tracking-widest">
                        Need Help?
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Questions About the <span className="text-[#EB0028]">Venue?</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      If you have any questions about the venue, accessibility, or directions, 
                      please don't hesitate to reach out to our team.
                    </p>
                    <div className="pt-6">
                      <a
                        href="/faq"
                        className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
                      >
                        View FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VenuePage;
