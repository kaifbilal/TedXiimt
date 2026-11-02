import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mic, Coffee, Music, Video, Radio, Sparkles, Layers, Sliders, Shield, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const SchedulePage = () => {
  const { user, isVolunteer, isLead, isAdmin } = useAuth();
  const [viewMode, setViewMode] = useState('public'); // 'public' | 'backstage'
  const [publicSessions, setPublicSessions] = useState([]);
  const [backstageCues, setBackstageCues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchScheduleData = async () => {
      try {
        const [publicData, backstageData] = await Promise.all([
          api.get('/api/schedule/cues/public_schedule/', { year: 2025 }).catch(() => []),
          api.get('/api/schedule/cues/backstage_ros/', { year: 2025 }).catch(() => [])
        ]);

        if (isMounted) {
          const publicList = Array.isArray(publicData) ? publicData : (publicData?.results || []);
          const backstageList = Array.isArray(backstageData) ? backstageData : (backstageData?.results || []);

          // Group public cues by block
          if (publicList.length > 0) {
            const blocksMap = {};
            publicList.forEach(cue => {
              const bTitle = cue.block_title || 'Session';
              if (!blocksMap[bTitle]) {
                blocksMap[bTitle] = {
                  session: `Block ${cue.block_sequence || 1} • ${cue.start_time || '09:00 AM'} - ${cue.end_time || '11:00 AM'}`,
                  title: bTitle,
                  desc: cue.block_desc || 'Keynote talks, discussions, and live performances.',
                  cues: []
                };
              }
              blocksMap[bTitle].cues.push({
                time: cue.start_time || '09:00 AM',
                title: cue.title,
                type: cue.item_type || 'talk',
                speaker: cue.speaker_name || cue.description || 'TEDx Speaker',
                duration: cue.duration_minutes ? `${cue.duration_minutes} min` : null
              });
            });
            setPublicSessions(Object.values(blocksMap));
          }

          // Backstage Cues
          if (backstageList.length > 0) {
            const mappedRos = backstageList.map((cue, idx) => ({
              seq: String(cue.sequence_order || idx + 1).padStart(2, '0'),
              time: cue.start_time || '09:00 AM',
              cue: cue.title,
              type: cue.item_type,
              mic: cue.mic_channel ? `Mic ${cue.mic_channel} (${cue.mic_type || 'Wireless'})` : '—',
              light: cue.lighting_preset || 'House 100%',
              av: cue.av_screen_notes || cue.video_clip_name || 'Slide Deck / Cam live feed',
              crew: cue.assigned_crew_names?.join(', ') || 'AV & Stage Crew'
            }));
            setBackstageCues(mappedRos);
          }
        }
      } catch (err) {
        console.warn('Schedule API error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchScheduleData();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            November 11, 2025 • Seminar Hall 2nd Fl, B Block
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Event Schedule & <span className="text-[#EB0028]">Run of Show</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Dynamic minute-by-minute timeline for TEDxIIMT University 2025: "Break the Flow".
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <button
              onClick={() => setViewMode('public')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'public'
                  ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Public Delegate Agenda
            </button>

            <button
              onClick={() => setViewMode('backstage')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'backstage'
                  ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Backstage Technical Cue Sheet (ROS)
            </button>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-zinc-500">
            <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm">Loading Live Schedule & Cue Sheets...</p>
          </div>
        ) : (
          <>
            {/* Tab 1: Public Delegate Agenda */}
            {viewMode === 'public' && (
              <div className="max-w-4xl mx-auto space-y-8">
                {publicSessions.length === 0 ? (
                  <div className="p-12 text-center text-zinc-500 bg-zinc-950 border border-zinc-800 rounded-3xl">
                    <p>No public sessions scheduled for this edition yet.</p>
                  </div>
                ) : (
                  publicSessions.map((session, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                      className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6"
                    >
                      <div className="border-b border-zinc-800 pb-4">
                        <div className="text-xs font-mono font-bold text-[#EB0028] uppercase tracking-wider">{session.session}</div>
                        <h3 className="text-2xl font-black text-white mt-1">{session.title}</h3>
                        <p className="text-xs text-zinc-400 mt-1">{session.desc}</p>
                      </div>

                      <div className="space-y-4">
                        {session.cues.map((cue, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                          >
                            <div className="flex items-start sm:items-center gap-3">
                              <span className="font-mono font-bold text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                                {cue.time}
                              </span>
                              <div>
                                <div className="font-bold text-white text-sm">{cue.title}</div>
                                <div className="text-zinc-400 text-xs mt-0.5">{cue.speaker}</div>
                              </div>
                            </div>

                            {cue.duration && (
                              <span className="px-2.5 py-1 bg-zinc-900 text-zinc-400 rounded-lg text-[11px] font-mono border border-zinc-800 self-start sm:self-auto">
                                {cue.duration}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}

            {/* Tab 2: Backstage Run-of-Show Technical Cue Sheet */}
            {viewMode === 'backstage' && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-[#EB0028]" />
                      Live Show Caller & Technical Cue Matrix
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Derived from Rundown-TEDxSanDiego cue standard: Audio channels 1-7, lighting presets & camera assignments.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 font-bold rounded-lg self-start">
                    Live Status: Synchronized
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[900px]">
                    <thead className="bg-zinc-900 text-zinc-400 uppercase font-bold text-[10px] border-b border-zinc-800">
                      <tr>
                        <th className="p-3">Seq</th>
                        <th className="p-3">Time</th>
                        <th className="p-3">Cue Title & Description</th>
                        <th className="p-3">Mic Channel</th>
                        <th className="p-3">Lighting Preset</th>
                        <th className="p-3">AV & Screen Notes</th>
                        <th className="p-3">Crew Lead</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 font-mono text-[11px]">
                      {backstageCues.map((row, idx) => (
                        <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                          <td className="p-3 font-bold text-[#EB0028]">{row.seq}</td>
                          <td className="p-3 font-bold text-white whitespace-nowrap">{row.time}</td>
                          <td className="p-3 font-sans font-bold text-white">{row.cue}</td>
                          <td className="p-3 text-emerald-400">{row.mic}</td>
                          <td className="p-3 text-amber-400">{row.light}</td>
                          <td className="p-3 font-sans text-zinc-400">{row.av}</td>
                          <td className="p-3 font-sans text-zinc-300 font-semibold">{row.crew}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default SchedulePage;