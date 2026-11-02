import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Radio, Calendar, MessageSquare, Send, Bell, Sparkles } from 'lucide-react';
import api from '../services/api';

const LiveStreamPage = () => {
  const [streamConfig, setStreamConfig] = useState({
    title: 'TEDxIIMT University 2025: Break the Flow',
    is_live: false,
    stream_status: 'upcoming',
    youtube_video_id: 'dQw4w9WgXcQ',
    youtube_embed_url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    announcement_text: 'Official Live Broadcast begins November 11, 2025 at 09:00 AM IST.',
    viewer_count: 0,
    chat_enabled: true
  });
  const [loading, setLoading] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "TEDx Host", message: "Welcome to TEDxIIMT University 2025 Live Stream! The broadcast starts at 09:00 AM IST on November 11.", time: "09:00" },
    { id: 2, user: "TechEnthusiast", message: "Excited for Dr. Miriam Chandy and the robotics talks!", time: "09:05" },
    { id: 3, user: "StudentDelegate", message: "Streaming live from Meerut!", time: "09:12" },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const fetchStream = async () => {
      try {
        const data = await api.get('/api/services/livestream/');
        if (isMounted && data) {
          setStreamConfig(data);
        }
      } catch (err) {
        console.warn('Livestream config fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchStream();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && isNameSet) {
      const message = {
        id: Date.now(),
        user: userName,
        message: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleSetName = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setIsNameSet(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-28 pb-20">
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
        
        {/* Live Broadcast Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-lg flex items-center gap-1.5 ${
              streamConfig.is_live
                ? 'bg-[#EB0028] text-white animate-pulse'
                : 'bg-zinc-800 text-zinc-400'
            }`}>
              <Radio className="w-3.5 h-3.5" />
              {streamConfig.is_live ? 'LIVE NOW' : 'UPCOMING BROADCAST'}
            </span>
            <span className="text-xs text-zinc-300 font-semibold">{streamConfig.announcement_text}</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#EB0028]" />
              November 11, 2025
            </span>
            {streamConfig.is_live && (
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Users className="w-3.5 h-3.5" />
                {streamConfig.viewer_count} Watching
              </span>
            )}
          </div>
        </div>

        {/* Video & Interactive Chat Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Video Stream Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
              {streamConfig.youtube_video_id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${streamConfig.youtube_video_id}?autoplay=0&rel=0`}
                  title={streamConfig.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-950">
                  <Radio className="w-12 h-12 text-[#EB0028] mb-4 animate-pulse" />
                  <h3 className="text-xl font-bold text-white mb-2">4K Broadcast Standby</h3>
                  <p className="text-xs text-zinc-400 max-w-md">
                    Stream will go live promptly at 09:00 AM IST on November 11, 2025 from Seminar Hall 2nd Floor, B Block.
                  </p>
                </div>
              )}
            </div>

            {/* Stream Title & Description */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-3">
              <h1 className="text-2xl font-black text-white">{streamConfig.title}</h1>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Official TEDx license feed produced with 4 HD cinema cameras, 7 wireless audio channels, and live multi-track mixing. Connect with fellow virtual delegates in the live discussion room.
              </p>
            </div>
          </div>

          {/* Live Chat Panel */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl flex flex-col h-[520px] shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#EB0028]" />
                <h3 className="text-sm font-bold text-white">Delegate Live Chat</h3>
              </div>
              <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                Live Room
              </span>
            </div>

            {/* Messages Feed */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs scroll-smooth"
            >
              {chatMessages.map(msg => (
                <div key={msg.id} className="p-2.5 bg-zinc-900/50 rounded-xl border border-zinc-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-zinc-200">{msg.user}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{msg.time}</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{msg.message}</p>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-900/40">
              {!isNameSet ? (
                <form onSubmit={handleSetName} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your name to chat..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#EB0028]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#EB0028] text-white font-bold text-xs rounded-xl hover:bg-[#c90022] transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={`Message as ${userName}...`}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#EB0028]"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#EB0028] text-white rounded-xl hover:bg-[#c90022] transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LiveStreamPage;