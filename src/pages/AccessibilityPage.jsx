import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccessibilityPage = () => {
  const accessibilityFeatures = [
    {
      category: "Physical Accessibility",
      features: [
        {
          title: "Wheelchair Accessibility",
          description: "Fully wheelchair accessible venue with ramps, elevators, and designated seating areas",
          details: ["Accessible parking spaces", "Wheelchair-accessible restrooms", "Clear pathways throughout venue", "Reserved front-row seating"]
        },
        {
          title: "Mobility Assistance",
          description: "Support for attendees with mobility challenges",
          details: ["Mobility equipment available on request", "Assistance with navigation", "Priority seating arrangements", "Accessible registration desk"]
        },
        {
          title: "Seating Accommodations",
          description: "Flexible seating options for various needs",
          details: ["Aisle seats available", "Companion seating", "Space for mobility devices", "Clear sightlines to stage"]
        }
      ]
    },
    {
      category: "Visual Accessibility",
      features: [
        {
          title: "Sign Language Interpretation",
          description: "Professional sign language interpreters for all sessions",
          details: ["ISL (Indian Sign Language) interpreters", "Advance booking required", "Positioned for clear visibility", "Available for Q&A sessions"]
        },
        {
          title: "Large Print Materials",
          description: "Materials available in accessible formats",
          details: ["Large print programs", "High contrast materials", "Digital versions available", "Braille materials on request"]
        },
        {
          title: "Audio Description",
          description: "Detailed audio descriptions for visual content",
          details: ["Slide descriptions", "Visual element narration", "Speaker appearance descriptions", "Gesture and movement descriptions"]
        }
      ]
    },
    {
      category: "Hearing Accessibility",
      features: [
        {
          title: "Assistive Listening Systems",
          description: "Hearing loops and assistive devices available",
          details: ["FM hearing loops installed", "Personal listening devices", "Adjustable volume controls", "Clear audio throughout venue"]
        },
        {
          title: "Captioning Services",
          description: "Real-time captioning for all presentations",
          details: ["Live CART captioning", "Multiple language options", "Screen placement for visibility", "Speaker identification"]
        },
        {
          title: "Quiet Zones",
          description: "Designated areas for those sensitive to noise",
          details: ["Reduced noise areas", "Sound dampening", "Alternative viewing spaces", "Sensory break areas"]
        }
      ]
    },
    {
      category: "Cognitive Accessibility",
      features: [
        {
          title: "Clear Communication",
          description: "Information presented in clear, simple language",
          details: ["Plain English materials", "Visual aids and diagrams", "Structured presentations", "Summary documents available"]
        },
        {
          title: "Sensory Accommodations",
          description: "Support for sensory processing needs",
          details: ["Sensory-friendly lighting", "Quiet spaces available", "Reduced stimulation areas", "Flexible participation options"]
        },
        {
          title: "Navigation Support",
          description: "Assistance with venue navigation and scheduling",
          details: ["Clear signage throughout", "Digital maps available", "Personal assistance available", "Simplified schedules"]
        }
      ]
    }
  ];

  const digitalAccessibility = [
    {
      feature: "Website Accessibility",
      description: "WCAG 2.1 AA compliant website",
      standards: ["Screen reader compatible", "Keyboard navigation", "High contrast mode", "Adjustable text size"]
    },
    {
      feature: "Live Stream Accessibility",
      description: "Accessible online viewing experience",
      standards: ["Closed captions", "Audio descriptions", "Multiple viewing options", "Keyboard controls"]
    },
    {
      feature: "Mobile App Features",
      description: "Accessible mobile experience",
      standards: ["Voice control support", "Large touch targets", "High contrast themes", "Screen reader support"]
    },
    {
      feature: "Registration Process",
      description: "Accessible online registration",
      standards: ["Screen reader friendly", "Clear error messages", "Multiple input methods", "Assistance available"]
    }
  ];

  const supportServices = [
    {
      service: "Personal Care Attendants",
      description: "Support for attendees who require personal assistance"
    },
    {
      service: "Service Animals",
      description: "Welcome for guide dogs and service animals"
    },
    {
      service: "Dietary Accommodations",
      description: "Special dietary requirements catered for"
    },
    {
      service: "Medical Support",
      description: "On-site medical assistance available"
    },
    {
      service: "Rest Areas",
      description: "Quiet spaces for breaks and recovery"
    },
    {
      service: "Priority Services",
      description: "Express registration and priority assistance"
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
                <span className="text-[#EB0028]">Accessibility</span> at TEDxIIMT UNIVERSITY
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We believe ideas worth spreading should be accessible to everyone. Our commitment to inclusion ensures all attendees can fully participate in the TEDxIIMT UNIVERSITY experience.
              </p>
            </motion.div>

            {/* Accessibility Promise */}
            <motion.div
              className="bg-[#0a0a0a] border-2 border-[#EB0028]/30 p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-1 w-16 bg-[#EB0028] mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold mb-4 text-center text-[#EB0028]">Our Accessibility Commitment</h2>
              <p className="text-gray-200 text-center leading-relaxed">
                TEDxIIMT UNIVERSITY is committed to providing an inclusive experience for all attendees. We work continuously to identify and remove barriers, ensuring everyone can access, enjoy, and benefit from our event. If you have specific accessibility needs, please reach out to us at least two weeks before the event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        {accessibilityFeatures.map((category, categoryIndex) => (
          <section key={category.category} className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4">
                  <div className="h-1 w-16 bg-[#EB0028]"></div>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-[#EB0028]">
                  {category.category}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 p-6 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-1 w-12 bg-[#EB0028] mb-4"></div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-400">
                          <span className="text-[#EB0028] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Digital Accessibility */}
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
              <h2 className="text-4xl font-bold mb-6 text-[#EB0028]">Digital Accessibility</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our digital platforms are designed to be accessible to everyone
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {digitalAccessibility.map((item, index) => (
                <motion.div
                  key={item.feature}
                  className="bg-[#0a0a0a] border border-[#1a1a1a] p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-1 w-12 bg-[#EB0028] mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.feature}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {item.standards.map((standard, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="text-[#EB0028]">•</span>
                        <span>{standard}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Additional Support Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive support services to ensure your comfort and participation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <motion.div
                  key={service.service}
                  className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 p-6 text-center transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-1 w-12 bg-[#EB0028] mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold mb-3">{service.service}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Accommodations */}
        <section className="py-20 bg-[#0a0a0a]/50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-[#EB0028] mx-auto"></div>
              </div>
              <h2 className="text-4xl font-bold mb-6">Request Accommodations</h2>
              <p className="text-xl text-gray-300 mb-8">
                Need specific accommodations? We're here to help make your TEDxIIMT UNIVERSITY experience exceptional.
              </p>
              
              <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-8 mb-8">
                <div className="h-1 w-16 bg-[#EB0028] mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-[#EB0028]">How to Request Accommodations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="bg-[#EB0028]/20 w-12 h-12 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-bold mb-2">Contact Us Early</h4>
                    <p className="text-gray-400 text-sm">Reach out at least 2 weeks before the event to ensure we can arrange appropriate accommodations.</p>
                  </div>
                  <div>
                    <div className="bg-[#EB0028]/20 w-12 h-12 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-bold mb-2">Describe Your Needs</h4>
                    <p className="text-gray-400 text-sm">Provide detailed information about your accessibility requirements and any specific equipment needed.</p>
                  </div>
                  <div>
                    <div className="bg-[#EB0028]/20 w-12 h-12 border-2 border-[#EB0028] flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h4 className="font-bold mb-2">Confirmation</h4>
                    <p className="text-gray-400 text-sm">We'll confirm your accommodations and provide event day details for your specific needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:accessibility@tedxIIMT UNIVERSITY.com"
                  className="bg-[#EB0028] hover:bg-[#ff1a3d] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Request Accommodations</span>
                </motion.a>
                
                <motion.a
                  href="tel:+91-9876543210"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Call for Support</span>
                </motion.a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm font-bold">Additional Resources</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <motion.a
                    href="/accessibility"
                    className="text-[#EB0028] hover:text-[#ff1a3d] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Accessibility Guide
                  </motion.a>
                  <motion.a
                    href="/venue"
                    className="text-[#EB0028] hover:text-[#ff1a3d] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Accessible Venue Map
                  </motion.a>
                  <motion.a
                    href="/venue"
                    className="text-[#EB0028] hover:text-[#ff1a3d] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Accessible Transportation
                  </motion.a>
                  <motion.a
                    href="/faq"
                    className="text-[#EB0028] hover:text-[#ff1a3d] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    Accessibility FAQ
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccessibilityPage;