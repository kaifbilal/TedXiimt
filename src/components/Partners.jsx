import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Star, ExternalLink } from 'lucide-react';
import api from '../services/api';

const Partners = () => {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchPartners = async () => {
      try {
        const data = await api.get('/api/editions/sponsor-tiers/');
        const list = Array.isArray(data) ? data : (data?.results || []);
        if (isMounted && list.length > 0) {
          setTiers(list.filter(t => t.sponsors && t.sponsors.length > 0));
        }
      } catch (err) {
        console.warn('Partners fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPartners();
    return () => { isMounted = false; };
  }, []);

  if (loading || tiers.length === 0) {
    return null; // Silent if no partners or loading
  }

  return (
    <section className="py-20 bg-black/90 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <Handshake className="w-3.5 h-3.5" />
            Ecosystem & Alliances
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="text-[#EB0028]">Partners & Sponsors</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We are deeply grateful to our visionary partner organizations who support the spread of transformative ideas.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider inline-flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#EB0028]" />
                  {tier.name}
                </h3>
                {tier.benefits_description && (
                  <p className="text-xs text-zinc-500 mt-1">{tier.benefits_description}</p>
                )}
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {tier.sponsors.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-zinc-950 border border-zinc-800 hover:border-[#EB0028]/60 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center justify-center min-w-[200px] max-w-[280px]"
                  >
                    {partner.logo_url ? (
                      <img
                        src={partner.logo_url}
                        alt={partner.name}
                        className="h-14 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 mb-3"
                      />
                    ) : (
                      <div className="h-14 flex items-center justify-center font-bold text-lg text-zinc-300 group-hover:text-white">
                        {partner.name}
                      </div>
                    )}
                    <span className="text-xs font-bold text-zinc-300 group-hover:text-[#EB0028] flex items-center gap-1">
                      {partner.name}
                      {partner.website && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;