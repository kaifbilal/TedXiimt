import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MediaPartnersPage = () => {
  const mediaPartners = [
    {
      name: "The Times of India",
      category: "Print Media",
      logo: "/api/placeholder/200/100",
      description: "India's leading English daily newspaper with extensive coverage of innovation and technology.",
      website: "https://timesofindia.indiatimes.com",
      partnership: "Official Print Media Partner",
      coverage: ["Event Coverage", "Speaker Interviews", "Post-Event Articles"]
    },
    {
      name: "NDTV",
      category: "Television",
      logo: "/api/placeholder/200/100",
      description: "Premier Indian news television network known for in-depth analysis and thought leadership content.",
      website: "https://ndtv.com",
      partnership: "Official Television Partner",
      coverage: ["Live Coverage", "Speaker Profiles", "Highlights Package"]
    },
    {
      name: "YourStory",
      category: "Digital Media",
      logo: "/api/placeholder/200/100",
      description: "India's leading platform for startup and entrepreneurship stories.",
      website: "https://yourstory.com",
      partnership: "Digital Content Partner",
      coverage: ["Speaker Stories", "Innovation Focus", "Startup Features"]
    },
    {
      name: "LinkedIn News India",
      category: "Professional Network",
      logo: "/api/placeholder/200/100",
      description: "Professional networking platform's Indian editorial team focusing on business and innovation.",
      website: "https://linkedin.com/news",
      partnership: "Social Media Partner",
      coverage: ["Professional Insights", "Network Updates", "Career Focus"]
    },
    {
      name: "Economic Times",
      category: "Business Media",
      logo: "/api/placeholder/200/100",
      description: "India's leading business daily with focus on innovation and economic trends.",
      website: "https://economictimes.indiatimes.com",
      partnership: "Business Media Partner",
      coverage: ["Business Innovation", "Economic Impact", "Industry Insights"]
    },
    {
      name: "Tech2",
      category: "Technology Media",
      logo: "/api/placeholder/200/100",
      description: "Leading technology news platform covering latest innovations and digital trends.",
      website: "https://tech2.com",
      partnership: "Technology Media Partner",
      coverage: ["Tech Innovation", "Digital Trends", "Startup Technology"]
    },
    {
      name: "Hindustan Times",
      category: "Print & Digital",
      logo: "/api/placeholder/200/100",
      description: "Major Indian newspaper with strong digital presence and innovation coverage.",
      website: "https://hindustantimes.com",
      partnership: "Regional Media Partner",
      coverage: ["Regional Impact", "Educational Focus", "Community Stories"]
    },
    {
      name: "ANI News",
      category: "News Agency",
      logo: "/api/placeholder/200/100",
      description: "Asian News International - Premier news agency providing real-time news coverage.",
      website: "https://aninews.in",
      partnership: "News Distribution Partner",
      coverage: ["Breaking News", "Live Updates", "Press Releases"]
    }
  ];

  const mediaTypes = [
    {
      type: "Print Media",
      description: "Traditional newspapers and magazines",
      partners: mediaPartners.filter(p => p.category === "Print Media" || p.category === "Print & Digital").length
    },
    {
      type: "Digital Media",
      description: "Online platforms and digital publications",
      partners: mediaPartners.filter(p => p.category === "Digital Media" || p.category === "Print & Digital").length
    },
    {
      type: "Television",
      description: "TV networks and broadcasting partners",
      partners: mediaPartners.filter(p => p.category === "Television").length
    },
    {
      type: "Specialized",
      description: "Technology, business, and niche publications",
      partners: mediaPartners.filter(p => p.category === "Technology Media" || p.category === "Business Media").length
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-[#EB0028]"></div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Media <span className="text-[#EB0028]">Partners</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Amplifying ideas worth spreading through strategic media partnerships
              </p>
            </motion.div>

            {/* Media Types Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {mediaTypes.map((type, index) => (
                <motion.div
                  key={type.type}
                  className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 p-6 text-center transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-1 w-12 bg-[#EB0028] mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <div className="text-2xl font-bold text-[#EB0028]">{type.partners}</div>
                  <div className="text-sm text-gray-300">Partners</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Trusted Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Working together to bring TEDxIIMT UNIVERSITY's inspiring stories to audiences across India and beyond
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mediaPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#EB0028]/50 p-8 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-16 bg-[#1a1a1a] border border-[#EB0028]/30 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain filter brightness-110"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                        <span className="inline-block bg-[#EB0028]/20 text-[#EB0028] border border-[#EB0028]/30 px-3 py-1 text-sm font-medium mt-2 sm:mt-0">
                          {partner.category}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="bg-[#EB0028]/10 p-3 border-l-4 border-[#EB0028]">
                          <p className="text-[#EB0028] font-semibold text-sm">{partner.partnership}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {partner.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Coverage Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.coverage.map((area, i) => (
                            <span 
                              key={i}
                              className="bg-[#1a1a1a] border border-[#EB0028]/20 text-gray-300 px-3 py-1 text-xs"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[#EB0028] hover:text-[#ff1a3d] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>Visit Website</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-[#0a0a0a]/50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="h-1 w-16 bg-[#EB0028] mx-auto"></div>
              </div>
              <h2 className="text-4xl font-bold mb-6">Partnership Impact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How our media partnerships amplify the reach and impact of ideas worth spreading
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center bg-[#0a0a0a] border border-[#1a1a1a] p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-[#EB0028]/20 w-16 h-16 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 bg-[#EB0028]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Wide Reach</h3>
                <p className="text-gray-300">
                  Our media partners help us reach millions of viewers across India, amplifying the impact of every talk and idea shared at TEDxIIMT UNIVERSITY.
                </p>
              </motion.div>

              <motion.div
                className="text-center bg-[#0a0a0a] border border-[#1a1a1a] p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-[#EB0028]/20 w-16 h-16 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 bg-[#EB0028]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Targeted Coverage</h3>
                <p className="text-gray-300">
                  Each partner specializes in different audiences, ensuring our message reaches the right people - from entrepreneurs to students to innovators.
                </p>
              </motion.div>

              <motion.div
                className="text-center bg-[#0a0a0a] border border-[#1a1a1a] p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-[#EB0028]/20 w-16 h-16 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 bg-[#EB0028]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality Content</h3>
                <p className="text-gray-300">
                  Professional media coverage ensures our speakers' stories are told with the depth and quality they deserve, preserving their impact.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Media Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-[#EB0028] mx-auto"></div>
              </div>
              <h2 className="text-4xl font-bold mb-6">Join Our Media Network</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Interested in partnering with TEDxIIMT UNIVERSITY? We're always looking for media partners who share our passion for spreading ideas worth spreading.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:tedxiimtuniversity@gmail.com?subject=Media%20Inquiry"
                  className="bg-[#EB0028] hover:bg-[#ff1a3d] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Media Inquiries</span>
                </motion.a>
                
                <motion.a
                  href="mailto:tedxiimtuniversity@gmail.com?subject=Request%20Media%20Kit"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Download Media Kit</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MediaPartnersPage;