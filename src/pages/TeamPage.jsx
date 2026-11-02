import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FACULTY_ADVISORS, TEAM_DOMAIN_TABS, TEAM_MEMBERS, TEAM_TIER_LABELS } from '../data/teamData';

const TeamPage = () => {
<<<<<<< HEAD
  const [activeDomain, setActiveDomain] = useState('all');
  const teamMembers = TEAM_MEMBERS;

  const domainTabs = TEAM_DOMAIN_TABS;

  const filteredMembers = activeDomain === 'all'
    ? teamMembers
    : teamMembers.filter((member) => member.domain === activeDomain);
  const groupedMembers = activeDomain === 'all'
    ? Object.entries(filteredMembers.reduce((groups, member) => {
      const group = groups[member.domain] || [];
      group.push(member);
      return { ...groups, [member.domain]: group };
    }, {}))
    : [[activeDomain, filteredMembers]];
  const domainLabels = Object.fromEntries(domainTabs.map((tab) => [tab.id, tab.label]));
  const tierLabels = TEAM_TIER_LABELS;
=======
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
>>>>>>> 761e8fd46eee9bafe00db9acb2acf2734561e9b5

  return (
    <div className="min-h-screen bg-black text-white">
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

        <section className="container mx-auto mb-16 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#EB0028]" />
              <span className="rounded-full border border-[#EB0028]/40 bg-[#EB0028]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#EB0028]">
                Faculty Advisor
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#EB0028]" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FACULTY_ADVISORS.map((advisor) => (
                <motion.article
                  key={advisor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all hover:border-[#EB0028]/50 hover:shadow-2xl hover:shadow-[#EB0028]/10"
                >
                  <div className="flex flex-col items-center gap-5 p-6 text-center">
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#EB0028]/50 bg-zinc-900">
                      <img
                        src={advisor.photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(advisor.name)}`}
                        alt={advisor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{advisor.name}</h2>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#EB0028]">
                        {advisor.designation || 'Faculty Advisor'}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-zinc-400">
                        {advisor.bio || 'Faculty guidance and mentorship for the TEDxIIMT University organizing team.'}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Domain Filter Tabs */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {domainTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeDomain === tab.id
                    ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/25'
                    : 'bg-[#121212] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {filteredMembers.length === 0 ? (
                <div className="text-center py-16 text-zinc-500">
                  <p>No team members found for this department.</p>
                </div>
              ) : (
                <div className="space-y-16">
                  {groupedMembers.map(([domain, members]) => (
                    <div key={domain}>
                      {activeDomain === 'all' && (
                        <div className="mb-8">
                          <div className="flex items-center gap-4">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#EB0028]/50 to-[#EB0028]" />
                            <span className="rounded-full border border-[#EB0028]/40 bg-[#EB0028]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#EB0028] shadow-[0_0_24px_rgba(235,0,40,0.12)]">
                              {tierLabels[domain] || domainLabels[domain] || domain}
                            </span>
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#EB0028]/50 to-[#EB0028]" />
                          </div>
                          <div className="mt-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
                            {members.length} {members.length === 1 ? 'Member' : 'Members'}
                          </div>
                        </div>
                      )}
                      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="relative z-10 group overflow-visible rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-[#EB0028]/50 hover:shadow-2xl hover:shadow-[#EB0028]/10"
                    >
                      {index % 3 !== 0 && (
                        <span className="pointer-events-none absolute right-full top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#EB0028]/20 to-[#EB0028]/60 lg:block" />
                      )}
                      {index % 3 !== 2 && index !== members.length - 1 && (
                        <span className="pointer-events-none absolute left-full top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#EB0028]/60 to-[#EB0028]/20 lg:block" />
                      )}
                      {/* Image Section */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                        <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#EB0028]"></div>
                        <img
                          src={member.photo_url}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
                          }}
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-6 md:p-7">
                        <div className="space-y-4">
                          {/* Name & Role */}
                          <div>
                            <h3 className="mb-2 text-2xl font-bold text-white">
                              {member.name}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#EB0028]">
                              {member.role}
                            </p>
                          </div>

                          <div className="h-px w-full bg-[#1a1a1a]"></div>

                          {/* Bio */}
                          <p className="text-sm leading-7 text-gray-300">
                            {member.bio}
                          </p>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                              Focus Area
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {member.responsibilities.map((resp, idx) => (
                                <span
                                  key={idx}
                                  className="border border-[#EB0028]/20 bg-[#1a1a1a] px-3 py-1 text-xs text-gray-300"
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
                              className="flex-1 rounded-lg bg-[#EB0028] px-4 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff1a3d]"
                              aria-label={`Email ${member.name}`}
                            >
                              Email
                            </a>
                            {member.contact.linkedin && (
                              <a
                                href={member.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#1a1a1a] px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-[#222]"
                                aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;
