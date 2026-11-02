import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Mail, Ticket } from 'lucide-react';
import api from '../services/api';

const FAQPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchFAQs = async () => {
      try {
        const data = await api.get('/api/services/faqs/');
        const list = Array.isArray(data) ? data : (data?.results || []);
        if (isMounted) {
          setCategories(list);
        }
      } catch (err) {
        console.warn('FAQ fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchFAQs();
    return () => { isMounted = false; };
  }, []);

  const toggleFAQ = (itemKey) => {
    setOpenFAQ(openFAQ === itemKey ? null : itemKey);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base & FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Frequently Asked <span className="text-[#EB0028]">Questions</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Everything you need to know about TEDxIIMT University 2025, delegate tickets, venue directions, and speaker guidelines.
          </p>
        </div>

        {/* Categories */}
        {loading ? (
          <div className="py-16 text-center text-zinc-500">
            <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm">Loading Knowledge Base...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-16 text-zinc-500">
            <p>No FAQ items currently published.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {categories.map((cat, catIdx) => (
              <div key={cat.id || catIdx} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-3">
                  <span className="w-2 h-2 rounded-full bg-[#EB0028]" />
                  {cat.name}
                </h3>
                {cat.description && (
                  <p className="text-xs text-zinc-500 -mt-2 mb-2">{cat.description}</p>
                )}

                <div className="space-y-3">
                  {(cat.questions || []).map((q, qIdx) => {
                    const itemKey = `${catIdx}-${qIdx}`;
                    const isOpen = openFAQ === itemKey;

                    return (
                      <div
                        key={q.id || qIdx}
                        className="border border-zinc-800/60 rounded-2xl overflow-hidden bg-zinc-900/40 hover:border-zinc-700 transition-colors"
                      >
                        <button
                          onClick={() => toggleFAQ(itemKey)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                        >
                          <span className="font-bold text-sm text-zinc-200">{q.question}</span>
                          <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#EB0028]' : ''
                          }`} />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-3"
                            >
                              {q.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Strip */}
        <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Still Have Questions?</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Our organizing team is available to assist with ticketing, speaker curation, accessibility accommodations, or sponsorship inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs pt-2">
            <a
              href="mailto:tedxiimtuniversity@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-700 text-zinc-200 rounded-xl font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-[#EB0028]" />
              tedxiimtuniversity@gmail.com
            </a>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl shadow transition-all"
            >
              <Ticket className="w-4 h-4" />
              Register for November 11
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;