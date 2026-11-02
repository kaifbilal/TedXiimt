import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Sparkles, Filter, X, ExternalLink } from 'lucide-react';
import api from '../services/api';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'stage', label: 'Stage & Keynotes' },
    { id: 'audience', label: 'Audience Moments' },
    { id: 'networking', label: 'Idea Marketplace' },
    { id: 'team', label: 'Organizing Crew' },
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchGallery = async () => {
      try {
        const params = {};
        if (activeFilter !== 'all') {
          params.category = activeFilter;
        }
        const data = await api.get('/api/editions/gallery/', params);
        const list = Array.isArray(data) ? data : (data?.results || []);
        if (isMounted) {
          setGalleryItems(list);
        }
      } catch (err) {
        console.warn('Gallery fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGallery();
    return () => { isMounted = false; };
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-black text-white">
      <main id="main-content" className="pt-24 md:pt-28 lg:pt-32">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-6">
                <Image className="w-3.5 h-3.5" />
                Visual Archives
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
                Event <span className="text-[#EB0028]">Gallery</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Relive the most inspiring moments, stage talks, audience connections, and behind-the-scenes energy from TEDxIIMT University.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/25'
                    : 'bg-[#121212] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24 lg:pb-32 container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-20 text-center text-zinc-500">
              <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm">Loading Visual Archive...</p>
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-16 text-zinc-500 bg-zinc-950 border border-zinc-800 rounded-3xl max-w-xl mx-auto">
              <p>No photos or media items found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative aspect-[4/3] bg-zinc-950 border border-zinc-800 hover:border-[#EB0028] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                >
                  <img
                    src={item.image_url || item.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
                    alt={item.caption || 'TEDx Moment'}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-bold uppercase text-[#EB0028] tracking-widest">{item.category}</span>
                    <p className="text-sm font-bold text-white mt-1">{item.caption || 'TEDxIIMT University Moment'}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedMedia(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#EB0028] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[16/10] bg-black">
                  <img
                    src={selectedMedia.image_url || selectedMedia.image}
                    alt={selectedMedia.caption}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 border-t border-zinc-800 bg-zinc-950 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#EB0028] tracking-wider block mb-1">
                      {selectedMedia.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{selectedMedia.caption || 'TEDx Moment'}</h3>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">Edition 2025</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
};

export default GalleryPage;
