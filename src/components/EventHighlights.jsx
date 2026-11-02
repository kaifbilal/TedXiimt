import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDiv = motion.div;

const discoverCards = [
  {
    title: 'Our Speakers',
    description: 'Meet the visionaries who bring powerful ideas to our stage.',
    href: '/speakers',
    image: '/assets/Aditya_Yadav.jpeg',
    alt: 'TEDxIIMT speaker portrait',
  },
  {
    title: 'Our Team',
    description: 'Discover the passionate people who make TEDxIIMT possible.',
    href: '/team',
    image: '/hero-bg.png',
    alt: 'TEDxIIMT event background',
  },
  {
    title: 'Partners',
    description: 'Explore the organizations supporting our mission of spreading ideas.',
    href: '/partners',
    image: '/transparent-hero-bg.PNG',
    alt: 'TEDxIIMT event visual',
  },
];

const EventHighlights = () => {
  return (
    <section className="relative bg-black py-24 text-white md:py-32" aria-labelledby="discover-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 w-full text-center md:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#EB0028]">
            Explore
          </span>
          <h2 id="discover-heading" className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[#EB0028]">TEDx</span>IIMT University 
          </h2>
        </AnimatedDiv>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {discoverCards.map((card, index) => (
            <AnimatedDiv
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="h-full"
            >
              <a
                href={card.href}
                className="group relative block h-full min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#101012] outline-none transition-all duration-300 hover:border-[#EB0028]/70 hover:shadow-[0_16px_50px_-20px_rgba(235,0,40,0.65)] focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center opacity-75 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/5"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-4 h-1 w-10 bg-[#EB0028] transition-all duration-300 group-hover:w-16" />
                  <h3 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-[#ff3150]">
                    {card.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-300 md:text-base">
                    {card.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-[#ff3150] opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    Explore
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
