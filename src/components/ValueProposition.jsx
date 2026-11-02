import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const ValueProposition = () => {
  const { isAuthenticated } = useAuth();
  const benefits = [
    {
      title: 'Expand Your Mind',
      description: 'Discover groundbreaking ideas from visionary speakers across diverse fields of innovation',
      stats: 'TEDx Talks',
      features: ['Technology', 'Science', 'Social Impact']
    },
    {
      title: 'Build Connections',
      description: 'Network with like-minded innovators, entrepreneurs, and thought leaders in your field',
      stats: 'Diverse Attendees',
      features: ['Networking', 'Partnerships', 'Mentorship']
    },
    {
      title: 'Fuel Innovation',
      description: 'Get inspired to turn your ideas into reality and make a positive impact in the world',
      stats: '5 Hours',
      features: ['Workshops', 'Interactive Sessions', 'Action Plans']
    },
    {
      title: 'Join Global Movement',
      description: 'Be part of a worldwide community of changemakers spreading ideas worth spreading',
      stats: '3000+ TEDx Events',
      features: ['Global Network', 'Impact Stories', 'Community']
    }
  ];

  const [expandedCard, setExpandedCard] = React.useState(null);

  return (
    <section 
      className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden"
      aria-labelledby="value-prop-title"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-[#EB0028]"></div>
          </div>
          <h2 
            id="value-prop-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Why Attend <span className="text-[#EB0028]">TEDxIIMT UNIVERSITY?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join us for a transformative experience that will challenge your thinking, 
            expand your network, and inspire your next breakthrough
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setExpandedCard(index)}
              onHoverEnd={() => setExpandedCard(null)}
            >
              <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#EB0028] transition-all duration-300 p-6 sm:p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-[#EB0028] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#EB0028] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </p>

                  <div className="inline-flex items-center bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] px-4 py-2 text-sm font-bold">
                    {benefit.stats}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={expandedCard === index ? 
                      { opacity: 1, height: 'auto' } : 
                      { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-[#EB0028]/20">
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Includes:</p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-[#1a1a1a] border border-[#EB0028]/20 text-gray-300 px-3 py-1"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 text-center">
            {[
              { number: '500+', label: 'Expected Attendees' },
              { number: '12+', label: 'Inspiring Speakers' },
              { number: '6', label: 'Hours of Content' },
              { number: '100%', label: 'Ideas Worth Spreading' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EB0028] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.02 }}
          >
            <a
              href={isAuthenticated ? '/attendee-form' : '/register'}
              className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 md:px-12 md:py-5 text-lg transition-all duration-300 min-w-[250px]"
              aria-label="Reserve your seat at TEDxIIMT UNIVERSITY"
            >
              Reserve Your Seat Now
            </a>
            
            <p className="text-gray-400 text-sm">
              Limited seats available • University event
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;