import React from 'react';
import { motion } from 'framer-motion';
import { Library, Calendar, Users, Mic, ArrowRight, Sparkles, Video } from 'lucide-react';
import { ARCHIVE_EDITIONS } from '../data/archiveData';

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase tracking-wider mb-4">
            <Library className="w-3.5 h-3.5" />
            TEDx Archival Repository
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Event Editions & <span className="text-[#EB0028]">Talk Library</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Explore the history of TEDxIIMT University across all years. Watch groundbreaking talks, meet historical organizing teams, and re-experience transformative moments.
          </p>
        </div>

        {/* Multi-Year Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARCHIVE_EDITIONS.map((edition, idx) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-[#EB0028]/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#EB0028]/10 transition-all duration-300 flex flex-col"
            >
              {/* Image Banner Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                <img
                  src={edition.banner_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
                  alt={edition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Year Pill & Active Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-zinc-700 text-white font-black text-sm rounded-lg">
                    {edition.year}
                  </span>
                  {edition.is_active && (
                    <span className="px-2.5 py-1 bg-[#EB0028] text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3" />
                      Current Active
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-1">
                    Theme
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#EB0028] transition-colors mb-3">
                    "{edition.theme}"
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edition.date}</span>
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl mb-6 text-center">
                    <div>
                      <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                        <Mic className="w-3.5 h-3.5 text-[#EB0028]" />
                        {edition.speaker_count}
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase font-semibold">Speakers</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#EB0028]" />
                        {edition.team_count}
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase font-semibold">Crew</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                        <Video className="w-3.5 h-3.5 text-[#EB0028]" />
                        {edition.gallery_count}
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase font-semibold">Media</div>
                    </div>
                  </div>
                </div>

                {/* Explore Action Button */}
                <a
                  href={`/archive/${edition.year}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 hover:bg-[#EB0028] text-zinc-200 hover:text-white font-semibold text-sm rounded-xl border border-zinc-800 hover:border-[#EB0028] transition-all group/btn"
                >
                  <span>Explore {edition.year} Edition</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LibraryPage;
