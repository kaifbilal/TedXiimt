import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Play, Mic, Users, Camera, Handshake,
  ArrowLeft, Share2, Sparkles, ExternalLink
} from 'lucide-react';
import VideoModal from '../components/VideoModal';
import { ARCHIVE_EDITIONS, getArchiveEdition } from '../data/archiveData';
import { TEAM_TIER_LABELS } from '../data/teamData';

const ArchiveEditionPage = () => {
  // Extract year from URL e.g., /archive/2024 or default 2025
  const pathParts = window.location.pathname.split('/');
  const yearFromUrl = pathParts[pathParts.length - 1] || '2025';
  const currentYear = parseInt(yearFromUrl) || 2025;

  const editionData = getArchiveEdition(currentYear);
  const teamMembers = editionData?.team_members || [];
  const groupedTeamMembers = Object.entries(teamMembers.reduce((groups, member) => {
    const group = groups[member.domain] || [];
    group.push(member);
    return { ...groups, [member.domain]: group };
  }, {}));
  const [activeTab, setActiveTab] = useState('speakers'); // 'speakers' | 'team' | 'gallery' | 'sponsors'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'speakers', label: 'Speakers & Talks', icon: Mic, count: editionData?.speakers?.length || 0 },
    { id: 'team', label: 'Organizing Team', icon: Users, count: editionData?.team_members?.length || 0 },
    { id: 'gallery', label: 'Moments & Photos', icon: Camera, count: editionData?.gallery_items?.length || 0 },
    { id: 'sponsors', label: 'Partners', icon: Handshake, count: editionData?.legacy_sponsors?.length || 0 },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link & Year Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <a
            href="/library"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Editions
          </a>

          {/* Quick Year Jump Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-xl">
            {ARCHIVE_EDITIONS.map((ed) => (
              <a
                key={ed.year}
                href={`/archive/${ed.year}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  ed.year === currentYear
                    ? 'bg-[#EB0028] text-white shadow'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {ed.year} {ed.is_active && '• Live'}
              </a>
            ))}
          </div>
        </div>

        {/* Edition Hero Header Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 p-8 sm:p-12 mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img
            src={editionData?.banner_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80'}
            alt={editionData?.title || 'Edition banner'}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="relative z-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB0028]/20 border border-[#EB0028]/40 text-[#EB0028] text-xs font-bold uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              TEDxIIMT University • {currentYear} Edition
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
              Theme: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#EB0028]">"{editionData?.theme}"</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
              {editionData?.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#EB0028]" />
                <span>{editionData?.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#EB0028]" />
                <span>{editionData?.venue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 mb-10 overflow-x-auto">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/20'
                    : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                    activeTab === tab.id ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Speakers & Talks */}
        {activeTab === 'speakers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editionData?.speakers?.map((spk, idx) => (
              <motion.div
                key={spk.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-[#EB0028]/40 transition-all flex flex-col"
              >
                {/* Speaker Photo with Video Play Overlay */}
                <div className="relative h-64 bg-zinc-900 overflow-hidden">
                  <img
                    src={spk.photo_url || spk.photo || `https://api.dicebear.com/7.x/avataaars/svg?seed=${spk.name}`}
                    alt={spk.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {spk.talk_video_url && (
                    <button
                      onClick={() => setSelectedVideo({ url: spk.talk_video_url, title: `${spk.name} — ${spk.topic}` })}
                      className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none"
                      aria-label={`Play talk by ${spk.name}`}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#EB0028] text-white flex items-center justify-center shadow-xl group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-[#EB0028] transition-all">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </button>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs uppercase font-bold text-[#EB0028] tracking-wider">Talk Topic</span>
                    <h4 className="text-base font-bold text-white leading-snug line-clamp-1">{spk.topic}</h4>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{spk.name}</h3>
                    <p className="text-xs font-medium text-zinc-400 mt-1">{spk.title}</p>
                    {spk.organization && (
                      <p className="text-xs text-zinc-500">{spk.organization}</p>
                    )}
                    <p className="text-xs text-zinc-400 leading-relaxed mt-4 line-clamp-3">
                      {spk.bio}
                    </p>
                  </div>

                  {spk.talk_video_url && (
                    <button
                      onClick={() => setSelectedVideo({ url: spk.talk_video_url, title: `${spk.name} — ${spk.topic}` })}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-[#EB0028] text-zinc-200 hover:text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Watch Talk ({spk.talk_duration_minutes || 18} mins)
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Organizing Team */}
        {activeTab === 'team' && (
          <div className="space-y-16">
            {editionData?.faculty_advisors?.length > 0 && (
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#EB0028]" />
                  <span className="rounded-full border border-[#EB0028]/40 bg-[#EB0028]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#EB0028]">
                    Faculty Advisor
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#EB0028]" />
                </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {editionData.faculty_advisors.map((advisor) => (
                  <div key={advisor.name} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all hover:border-[#EB0028]/50 hover:shadow-2xl hover:shadow-[#EB0028]/10">
                    <div className="flex flex-col items-center gap-5 p-6 text-center">
                      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#EB0028]/50 bg-zinc-900">
                        <img
                          src={advisor.photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(advisor.name)}`}
                          alt={advisor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{advisor.name}</h3>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#EB0028]">
                          {advisor.designation || 'Faculty Advisor'}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-zinc-400">
                          {advisor.bio || 'Faculty guidance and mentorship for the TEDxIIMT University organizing team.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            )}

            {groupedTeamMembers.map(([domain, members]) => (
              <section key={domain}>
                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#EB0028]/50 to-[#EB0028]" />
                    <span className="rounded-full border border-[#EB0028]/40 bg-[#EB0028]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#EB0028]">
                      {TEAM_TIER_LABELS[domain] || domain}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#EB0028]/50 to-[#EB0028]" />
                  </div>
                  <div className="mt-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
                    {members.length} {members.length === 1 ? 'Member' : 'Members'}
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {members.map((tm, idx) => (
                    <motion.div
                      key={tm.id || idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative z-10 group overflow-visible rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-[#EB0028]/50 hover:shadow-2xl hover:shadow-[#EB0028]/10"
                    >
                      {idx % 3 !== 0 && (
                        <span className="pointer-events-none absolute right-full top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#EB0028]/20 to-[#EB0028]/60 lg:block" />
                      )}
                      {idx % 3 !== 2 && idx !== members.length - 1 && (
                        <span className="pointer-events-none absolute left-full top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#EB0028]/60 to-[#EB0028]/20 lg:block" />
                      )}
                      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                        <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#EB0028]" />
                        <img
                          src={tm.photo_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${tm.name}`}
                          alt={tm.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:p-7">
                        <h3 className="text-2xl font-bold text-white">{tm.name}</h3>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#EB0028]">{tm.role}</p>
                        <p className="mt-5 border-t border-zinc-800 pt-4 text-sm leading-7 text-zinc-400">{tm.bio}</p>
                        <div className="mt-5">
                          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">Key Responsibilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {tm.responsibilities?.map((responsibility) => (
                              <span key={responsibility} className="border border-[#EB0028]/20 bg-[#1a1a1a] px-3 py-1 text-xs text-gray-300">
                                {responsibility}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-5 flex gap-3">
                          <a
                            href={`mailto:${tm.contact?.email || tm.email || 'tedxiimtuniversity@gmail.com'}`}
                            className="flex-1 rounded-lg bg-[#EB0028] px-4 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-[#ff1a3d]"
                          >
                            Contact
                          </a>
                          {(tm.contact?.linkedin || tm.linkedin) && (
                            <a
                              href={tm.contact?.linkedin || tm.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#1a1a1a] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#222]"
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Tab 3: Photo Gallery */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {editionData?.gallery_items?.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group cursor-pointer"
                onClick={() => setSelectedImage(item.image_url || item.image)}
              >
                <img
                  src={item.image_url || item.image}
                  alt={item.caption || 'Gallery moment'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs font-semibold text-white">{item.caption || 'TEDx Moment'}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 4: Sponsors */}
        {activeTab === 'sponsors' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {editionData?.legacy_sponsors?.map((sp, idx) => (
              <div key={idx} className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-lg font-bold text-white mb-1">{sp.name}</div>
                <div className="text-xs text-[#EB0028] uppercase font-bold">{sp.tier}</div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Video Lightbox Player */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      />

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Expanded preview" className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain" />
        </div>
      )}
    </div>
  );
};

export default ArchiveEditionPage;
