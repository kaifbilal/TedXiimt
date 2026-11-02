import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Star, ExternalLink } from 'lucide-react';
import api from '../services/api';

const Sponsors = ({ isHomepage = false }) => {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTiers = async () => {
      try {
        const data = await api.get('/api/editions/sponsor-tiers/');
        const list = Array.isArray(data) ? data : (data?.results || []);
        if (isMounted) {
          setTiers(list.filter(t => t.sponsors && t.sponsors.length > 0));
        }
      } catch (err) {
        console.warn('Sponsors fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTiers();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-zinc-500 bg-black">
        <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm">Loading Partner Organizations...</p>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden bg-black text-white ${isHomepage ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}>
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#EB0028]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-950/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${isHomepage ? 'mb-10' : 'mb-14'} text-center`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <Handshake className="w-3.5 h-3.5" />
            Strategic Sponsorship
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-[#EB0028]">Sponsors</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Partnering with visionary organizations to make ideas worth spreading reality.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className={isHomepage ? 'space-y-10' : 'space-y-14'}>
          {tiers.map((tier) => (
            <div key={tier.id} className="space-y-5">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#EB0028]/50" />
                <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
                <Star className="w-4 h-4 text-[#EB0028]" />
                {tier.name}
                </h3>
                <span className="h-px w-10 bg-[#EB0028]/50" />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {tier.sponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.id}
                    href={sponsor.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#EB0028]/60 hover:bg-[#EB0028]/[0.06] sm:min-h-36 sm:p-6"
                  >
                    {sponsor.logo_url ? (
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.name}
                        className="mb-4 h-12 max-w-[9rem] object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-14"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <h4 className="flex items-center justify-center gap-1.5 text-xs font-bold text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
                      {sponsor.name}
                      {sponsor.website && <ExternalLink className="w-3.5 h-3.5 text-[#EB0028] opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </h4>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4 rounded-3xl border border-[#EB0028]/25 bg-gradient-to-br from-[#EB0028]/10 via-zinc-950 to-zinc-950 p-7 text-center sm:p-10">
          <h3 className="text-xl font-black text-white sm:text-2xl">Partner with TEDxIIMT University 2025</h3>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400">
            Position your organization alongside innovative thinkers and future leaders. Explore our custom sponsorship tiers and exclusive activation opportunities.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#EB0028] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(235,0,40,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#c90022]"
            >
              Request Sponsorship Deck
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
