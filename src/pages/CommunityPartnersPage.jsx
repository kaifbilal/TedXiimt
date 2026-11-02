import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Globe, TrendingUp, FileText, Calendar, Users, Lightbulb, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CommunityPartnersPage = () => {
  const partnerCategories = [
    {
      category: "Educational Institutions",
      description: "Leading universities and colleges fostering innovation",
      partners: [
        {
          name: "Delhi University",
          logo: "/api/placeholder/150/80",
          description: "Premier educational institution with focus on research and innovation",
          collaboration: "Student Exchange & Research",
          website: "https://du.ac.in"
        },
        {
          name: "IIT Delhi",
          logo: "/api/placeholder/150/80",
          description: "India's leading technology institute known for cutting-edge research",
          collaboration: "Technology Innovation Hub",
          website: "https://iitd.ac.in"
        },
        {
          name: "Jamia Millia Islamia",
          logo: "/api/placeholder/150/80",
          description: "Central university with strong focus on social innovation",
          collaboration: "Community Outreach Programs",
          website: "https://jmi.ac.in"
        },
        {
          name: "Amity University",
          logo: "/api/placeholder/150/80",
          description: "Private university with emphasis on entrepreneurship and innovation",
          collaboration: "Startup Incubation Support",
          website: "https://amity.edu"
        }
      ]
    },
    {
      category: "Innovation Hubs",
      description: "Organizations driving technological and social innovation",
      partners: [
        {
          name: "91springboard",
          logo: "/api/placeholder/150/80",
          description: "India's largest co-working and collaboration hub for startups",
          collaboration: "Startup Mentorship",
          website: "https://91springboard.com"
        },
        {
          name: "T-Hub",
          logo: "/api/placeholder/150/80",
          description: "Innovation ecosystem enabler supporting tech startups",
          collaboration: "Innovation Showcase",
          website: "https://t-hub.co"
        },
        {
          name: "Social Alpha",
          logo: "/api/placeholder/150/80",
          description: "Multi-stage innovation platform for science and technology startups",
          collaboration: "Social Innovation Track",
          website: "https://socialalpha.org"
        },
        {
          name: "Villgro",
          logo: "/api/placeholder/150/80",
          description: "India's oldest social enterprise incubator",
          collaboration: "Social Enterprise Development",
          website: "https://villgro.org"
        }
      ]
    },
    {
      category: "NGOs & Social Organizations",
      description: "Non-profits creating positive social impact",
      partners: [
        {
          name: "Teach for India",
          logo: "/api/placeholder/150/80",
          description: "Educational non-profit working to eliminate educational inequity",
          collaboration: "Educational Impact Programs",
          website: "https://teachforindia.org"
        },
        {
          name: "Akshaya Patra",
          logo: "/api/placeholder/150/80",
          description: "Non-profit providing nutritious meals to school children",
          collaboration: "Community Nutrition Initiatives",
          website: "https://akshayapatra.org"
        },
        {
          name: "Pratham",
          logo: "/api/placeholder/150/80",
          description: "Educational NGO focused on improving learning outcomes",
          collaboration: "Learning Innovation Programs",
          website: "https://pratham.org"
        },
        {
          name: "Goonj",
          logo: "/api/placeholder/150/80",
          description: "NGO working on disaster relief and community development",
          collaboration: "Community Development Projects",
          website: "https://goonj.org"
        }
      ]
    },
    {
      category: "Government & Policy",
      description: "Government bodies and policy organizations",
      partners: [
        {
          name: "NITI Aayog",
          logo: "/api/placeholder/150/80",
          description: "Government think tank providing strategic policy direction",
          collaboration: "Policy Innovation Dialogue",
          website: "https://niti.gov.in"
        },
        {
          name: "Startup India",
          logo: "/api/placeholder/150/80",
          description: "Government initiative to build a strong ecosystem for innovation",
          collaboration: "Startup Ecosystem Support",
          website: "https://startupindia.gov.in"
        },
        {
          name: "Digital India",
          logo: "/api/placeholder/150/80",
          description: "Campaign to transform India into a digitally empowered society",
          collaboration: "Digital Innovation Showcase",
          website: "https://digitalindia.gov.in"
        },
        {
          name: "Smart Cities Mission",
          logo: "/api/placeholder/150/80",
          description: "Urban renewal program to develop smart cities across India",
          collaboration: "Urban Innovation Solutions",
          website: "https://smartcities.gov.in"
        }
      ]
    },
    {
      category: "Industry Bodies",
      description: "Professional associations and industry organizations",
      partners: [
        {
          name: "NASSCOM",
          logo: "/api/placeholder/150/80",
          description: "Trade body for the Indian IT-BPM industry",
          collaboration: "Technology Leadership Forum",
          website: "https://nasscom.in"
        },
        {
          name: "CII",
          logo: "/api/placeholder/150/80",
          description: "Confederation of Indian Industry promoting business excellence",
          collaboration: "Industry Innovation Council",
          website: "https://cii.in"
        },
        {
          name: "FICCI",
          logo: "/api/placeholder/150/80",
          description: "Federation of Indian Chambers of Commerce & Industry",
          collaboration: "Business Innovation Network",
          website: "https://ficci.in"
        },
        {
          name: "TiE Delhi-NCR",
          logo: "/api/placeholder/150/80",
          description: "Non-profit organization fostering entrepreneurship",
          collaboration: "Entrepreneur Mentorship",
          website: "https://delhi.tie.org"
        }
      ]
    }
  ];

  const impactStats = [
    {
      number: "50+",
      label: "Community Partners",
      description: "Organizations across various sectors"
    },
    {
      number: "100K+",
      label: "Community Reach",
      description: "People impacted through partnerships"
    },
    {
      number: "25+",
      label: "Joint Initiatives",
      description: "Collaborative projects launched"
    },
    {
      number: "5",
      label: "Years",
      description: "Of building community connections"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Community <span className="text-red-500">Partners</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Building bridges across sectors to amplify the impact of ideas worth spreading
              </p>
            </motion.div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        {partnerCategories.map((category, categoryIndex) => (
          <section key={category.category} className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-red-500">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="max-w-full max-h-full object-contain filter brightness-110"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {partner.name}
                        </h3>
                        
                        <div className="mb-3">
                          <span className="inline-block bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30">
                            {partner.collaboration}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {partner.description}
                        </p>
                        
                        <motion.a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                          whileHover={{ x: 5 }}
                        >
                          <span>Learn More</span>
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
        ))}

        {/* Partnership Benefits */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our ecosystem of changemakers and amplify your organization's impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-800/50 rounded-xl p-8 text-center border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Collaborative Impact</h3>
                <p className="text-gray-300">
                  Work together on initiatives that create meaningful change in your communities and sectors.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-xl p-8 text-center border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Extended Network</h3>
                <p className="text-gray-300">
                  Access our diverse community of innovators, entrepreneurs, and thought leaders across industries.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-xl p-8 text-center border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Amplified Reach</h3>
                <p className="text-gray-300">
                  Leverage our platform and media presence to amplify your organization's message and mission.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Partnership Opportunities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to collaborate and create impact together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: "Content Collaboration",
                  description: "Co-create content and share expertise",
                  Icon: FileText
                },
                {
                  type: "Event Partnership",
                  description: "Joint events and speaker exchanges",
                  Icon: Calendar
                },
                {
                  type: "Community Building",
                  description: "Build stronger communities together",
                  Icon: Users
                },
                {
                  type: "Innovation Projects",
                  description: "Collaborative innovation initiatives",
                  Icon: Lightbulb
                }
              ].map((opportunity, index) => {
                const OppIcon = opportunity.Icon;
                return (
                  <motion.div
                    key={opportunity.type}
                    className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="p-3 bg-gray-700/40 rounded-xl w-14 h-14 mx-auto mb-4 flex items-center justify-center text-red-500">
                      <OppIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{opportunity.type}</h3>
                    <p className="text-gray-400 text-sm">{opportunity.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to partner with TEDxIIMT UNIVERSITY? Let's explore how we can create impact together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/join-us/sponsor"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Handshake className="w-5 h-5" />
                  <span>Partner With Us</span>
                </motion.a>
                
                <motion.a
                  href="mailto:tedxiimtuniversity@gmail.com?subject=Community%20Partnership%20Inquiry"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Partnerships</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityPartnersPage;