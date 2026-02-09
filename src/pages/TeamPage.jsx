import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mohd Kaif',
      role: 'Organizer & Lead',
      image: '/assets/kaif.jpeg',
      bio: 'Visionary leader coordinating strategy, partnerships, and execution to deliver a cohesive TEDx experience that inspires the community.',
      responsibilities: ['Overall event strategy', 'Stakeholder & partner relations', 'Program direction & quality control'],
      contact: {
        email: 'kaifbilalibrahim@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mohdkaifbilal/'
      }
    },
    {
      id: 2,
      name: 'Prateek Kv',
      role: 'Co-Organizer',
      image: '/assets/Prateek.jpg',
      bio: 'Operationally focused co-organizer who ensures plans translate into flawless on-the-ground execution and strong partner coordination.',
      responsibilities: ['Logistics planning & execution', 'Cross-team coordination', 'Vendor & partner management'],
      contact: {
        email: 'Prateekkv150706@gmail.com',
        linkedin: 'https://www.linkedin.com/in/prateek-kv-613822281/'
      }
    },
    {
      id: 3,
      name: 'Tanishka Khewal',
      role: 'Co-Organizer',
      image: '/assets/tanishka.jpeg',
      bio: 'Creative operations lead who blends design thinking with event planning to craft memorable audience experiences and brand consistency.',
      responsibilities: ['Creative direction', 'Brand consistency & visual identity', 'Content planning & production'],
      contact: {
        email: 'khewaltanishka@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tanishka-k-71200k/'
      }
    },
    {
      id: 4,
      name: 'Mukesh Pal',
      role: 'Team Head',
      image: '/assets/mukesh.jpeg',
      bio: 'Finance and logistics head ensuring budget adherence, resource allocation, and smooth logistical operations throughout the event lifecycle.',
      responsibilities: ['Budget management & financial planning', 'Logistics coordination & scheduling', 'Resource allocation & vendor negotiations'],
      contact: {
        email: 'mukesh.mmp1234@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mukprabhakar/'
      }
    },
    {
      id: 5,
      name: 'Nakul Jindal',
      role: 'Team Head',
      image: '/assets/Nakul.png',
      bio: 'Marketing and outreach head focused on amplifying the event’s reach, driving engagement, and building audience relationships.',
      responsibilities: ['Marketing strategy & campaigns', 'Public relations & media outreach', 'Audience growth & engagement'],
      contact: {
        email: 'nkjindan119@gmail.com',
        linkedin: 'https://www.linkedin.com/in/nakul-jindal/'
      }
    },
    {
      id: 6,
      name: 'Sachin Sharma Maiytre',
      role: 'Operations Manager',
      image: '/assets/Sachin.jpg',
      bio: 'Operational lead ensuring venues, vendors, and technical workflows are coordinated for a smooth event experience.',
      responsibilities: ['Venue & vendor management', 'Technical logistics & equipment', 'Event-day operations and contingency planning'],
      contact: {
        email: 'sachinmaiyatre2@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sachin-sharma-9ab0bb329'
      }
    },
    {
      id: 7,
      name: 'Vansh Aneja',
      role: 'Speaker Curator',
      image: '/assets/vansh.jpeg',
      bio: 'Speaker curator dedicated to sourcing, coaching, and refining speaker narratives to maximize impact and audience resonance.',
      responsibilities: ['Speaker discovery & selection', 'Speaker coaching & feedback', 'Program sequencing & content alignment'],
      contact: {
        email: 'vanshaneja29@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vansh-aneja-0b2aa234a/'
      }
    },
    {
      id: 8,
      name: 'Akshay Dhiman',
      role: 'Content & Outreach',
      image: '/assets/akshay.jpeg',
      bio: 'AI/ML enthusiast and tech team member at TEDxIIMTU, driven by curiosity and a love for building smart solutions.',
      responsibilities: ['Content strategy & editorial', 'Community outreach & partnerships', 'Social content and campaign execution'],
      contact: {
        email: 'Akshay.cse.2005@gmail.com',
        linkedin: 'https://www.linkedin.com/in/akshay-dhiman-a95734285'
      }
    },
    {
      id: 9,
      name: 'Bakhtiar Siddiqui',
      role: 'Sponsorships & Partnerships',
      image: '/assets/bakhtiar.jpeg',
      bio: 'Partnership lead building long-term sponsor relationships and tailored proposals that align sponsor goals with event impact.',
      responsibilities: ['Sponsor acquisition & retention', 'Proposal development & negotiation', 'Partnership program management'],
      contact: {
        email: 'bakhtiarsiddiqui2@gmail.com',
        linkedin: 'https://www.linkedin.com/in/bakhtiar-siddiqui-51291b291/'
      }
    },
    {
      id: 9,
      name: 'Iram Saifi',
      role: 'Creative Team',
      image: '/assets/iram.jpeg',
      bio: 'She is the part of creative and welcome team in TEDxIIMT University . She supported event design, guest coordination, and creating a friendly memorable experience for all attendees.',
      responsibilities: ['Event design support', 'Guest coordination', 'Attendee experience enhancement'],
      contact: {
        email: 'iramsaifioo36@gmail.com',
        linkedin: 'https://www.linkedin.com/in/iram-saifi-41716338b'
      }
    },
    {
      id: 10,
      name: 'Afzal',
      role: 'Marketing Lead',
      image: '/assets/afzal.jpg',
      bio: 'Creative specialist turning concepts into visual assets and immersive experiences that elevate the TEDx brand on stage and online.',
      responsibilities: ['Concept ideation & visual direction', 'Event set and collateral design', 'Multimedia asset delivery'],
      contact: {
        email: 'afzalchodhary03@gmail.com',
        linkedin: 'https://www.linkedin.com/in/afzal-692858270'
      }
    },
    {
      id: 11,
      name: 'Mudassir Zaidi',
      role: 'Technical Lead',
      image: '/assets/mudassir.jpeg',
      bio: 'Technical lead responsible for AV, streaming, and infrastructure to ensure reliable delivery of live and recorded content.',
      responsibilities: ['Audio-visual systems design', 'Live streaming & broadcast operations', 'Technical team coordination & testing'],
      contact: {
        email: 'mudassirzaidi264@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mudassir-mehdi/'
      }
    },
    {
      id: 12,
      name: 'Sanjana Tomar',
      role: 'Creative Team',
      image: '/assets/sanjana.jpeg',
      bio: 'She supported the TEDx creative team in designing visual concepts and assisting with event aesthetics. She worked as a volunteer contributing to brainstorming, layout ideas, and digital design elements.',
      responsibilities: ['Visual design support', 'Event aesthetics assistance', 'Creative brainstorming'],
      contact: {
        email: 'sanjanatomar39@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sanjana-tomar-474413396'
      }
    },
    {
      id: 12,
      name: 'Aditya Yadav',
      role: 'Post Production Lead',
      image: '/assets/Aditya_Yadav.jpeg',
      bio: 'Post-production lead overseeing editing, color grading, and final delivery of speaker talks and promotional videos.',
      responsibilities: ['Video editing & post-production', 'Quality control & final delivery', 'Media asset organization & archival'],
      contact: {
        email: 'adityay9451@gmail.com',
        linkedin: 'https://www.linkedin.com/in/aaditya-yadav-a77416332/' 
      }
    },
    {
      id: 12,
      name: 'Reet',
      role: 'Creative Team',
      image: '/assets/reet.jpeg',
      bio: 'Creative team member focused on designing engaging visuals and event experiences that resonate with the audience.',
      responsibilities: ['Visual design & branding', 'Event experience design', 'Creative asset production'],
      contact: {
        email: 'reetchaudhary018@gmail.com',
        linkedin: 'https://www.linkedin.com/in/reet-chaudhary-503a82391'
    },
  },
    {
      id: 13,
      name: 'Aditya Kumar',
      role: 'Marketing Team',
      image: '/assets/aditya-kumar.jpeg',
      bio: 'Design specialist creating impactful graphics and collateral that communicate the event’s message with clarity and style.',
      responsibilities: ['Graphic design & templates', 'Brand collateral & print assets', 'Digital asset creation & maintenance'],
      contact: {
        email: 'kumaraditya28411@gmail.com',
        linkedin: 'https://www.linkedin.com/in/aditya-kumar-7588b5380'
      }
    },
    {
      id: 14,
      name: 'Vedans Kashyap',
      role: 'Video Editing Lead',
      image: '/assets/vedansh.jpeg',
      bio: 'Lead editor who crafts polished video narratives from raw footage to maximize clarity, pacing, and emotional impact.',
      responsibilities: ['Editing & storytelling', 'Motion graphics & titling', 'Delivery standards & encoding'],
      contact: {
        email: 'vedans.kashyap2007@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vedans-kashyap-80b51b315'
      }
    },
    {
      id: 15,
      name: 'Ankur Singh',
      role: 'Video Editing Lead',
      image: '/assets/ankur.png',
      bio: 'Video editing lead focused on transforming event footage into engaging highlight reels and promotional content.',
      responsibilities: ['Video editing & post-production', 'Highlight reel creation', 'Content optimization for social media'],
      contact: {
        email: 'ankursingh80014@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ankur-singh-ab504a332'
      }
    },
    {
      id: 16,
      name: 'Priya',
      role: 'Creative Team',
      image: '/assets/priya.jpeg',
      bio: 'Creative team member contributing to visual design and event aesthetics to enhance the overall TEDx experience.',
      responsibilities: ['Visual design support', 'Event aesthetics assistance', 'Creative brainstorming'],
      contact: {
        email: 'Sdkpriyakumari395@gmail.com',
        linkedin: 'https://www.linkedin.com/in/priya-kumari-24a492396'
      }
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 md:mb-8">
                <div className="h-1 w-20 bg-[#EB0028]"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
                Organizing <span className="text-[#EB0028]">Team</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                Meet the passionate individuals working behind the scenes to bring TEDxIIMT UNIVERSITY to life
              </p>
            </motion.div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent mt-16"></div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#0a0a0a] border-2 border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300"
                  >
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#EB0028]"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain bg-[#181818]"
                        style={{objectPosition: 'center'}}
                        onError={(e) => {
                          e.target.src = '/api/placeholder/400/400';
                        }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                      <div className="space-y-4">
                        {/* Name & Role */}
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-[#EB0028] text-sm font-bold uppercase tracking-wider">
                            {member.role}
                          </p>
                        </div>

                        <div className="h-px w-full bg-[#1a1a1a]"></div>

                        {/* Bio */}
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                            Key Responsibilities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.responsibilities.map((resp, idx) => (
                              <span
                                key={idx}
                                className="bg-[#1a1a1a] border border-[#EB0028]/20 text-gray-300 px-3 py-1 text-xs"
                              >
                                {resp}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex gap-3 pt-2">
                          <a
                            href={`mailto:${member.contact.email}`}
                            className="flex-1 bg-[#EB0028] hover:bg-[#ff1a3d] text-white text-center px-4 py-2 text-sm font-bold transition-all duration-300"
                            aria-label={`Email ${member.name}`}
                          >
                            Contact
                          </a>
                          <a
                            href={member.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 border-2 border-[#1a1a1a] hover:border-[#EB0028] text-white flex items-center justify-center transition-all duration-300"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-10 md:p-12 lg:p-16">
                <div className="h-1 w-20 bg-[#EB0028] mx-auto mb-8"></div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Join Our <span className="text-[#EB0028]">Team</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Interested in being part of the TEDxIIMT UNIVERSITY organizing team? We're always looking for passionate individuals who want to help spread ideas worth spreading.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:tedxiimtuniversity@gmail.com"
                    className="inline-block bg-[#EB0028] hover:bg-[#ff1a3d] text-white font-bold px-8 py-4 text-lg transition-all duration-300"
                  >
                    Get Involved
                  </a>
                  <a
                    href="https://forms.gle/fzwojwPnWVtsA7HKA"
                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 text-lg border border-[#1a1a1a] hover:border-[#EB0028]/50 transition-all duration-300"
                  >
                    Volunteer
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Our <span className="text-[#EB0028]">Values</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Excellence',
                    description: 'We strive for excellence in every detail, ensuring a world-class experience for speakers and attendees alike.'
                  },
                  {
                    title: 'Inclusivity',
                    description: 'We believe in creating an inclusive platform where diverse voices and ideas can be shared and celebrated.'
                  },
                  {
                    title: 'Innovation',
                    description: 'We embrace innovation and creativity in our approach to spreading ideas worth spreading.'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#EB0028]/50 p-8 transition-all duration-300"
                  >
                    <div className="h-1 w-12 bg-[#EB0028] mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
