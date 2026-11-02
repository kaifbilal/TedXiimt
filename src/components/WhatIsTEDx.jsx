import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedArticle = motion.article;

const cards = [
  {
    title: (
      <>
        What is <span className="text-red-500">TEDx</span>?
      </>
    ),
    description:
      'TEDx is a global initiative designed to bring the spirit of TED—Technology, Entertainment, Design—to local communities. Organized independently under a license from TED, these events spark meaningful conversations and inspire change.',
    imageAlt: 'TEDx stage',
    linkLabel: 'Discover TEDx',
    link: '/about',
    imageClassName: 'order-1',
    contentClassName: 'order-2',
  },
  {
    title: 'IIMT University',
    description:
      'IIMT University, Meerut is a vibrant centre of learning that brings together academic excellence, innovation, and a strong culture of community engagement.',
    imageAlt: 'IIMT University campus',
    linkLabel: 'Explore the Campus',
    link: '/about',
    imageClassName: 'order-1 md:order-2',
    contentClassName: 'order-2 md:order-1',
  },
  {
    title: (
      <>
        About <span className="text-red-500">TEDx</span>IIMT
      </>
    ),
    description: (
      <>
        Dedicated to creating a TED-like experience at IIMT University. We
        bring together bright minds to explore our theme:{' '}
        <strong>"Education, Entertainment & Entrepreneurship"</strong>.
      </>
    ),
    imageAlt: 'TEDxIIMT University event',
    linkLabel: 'Our Mission',
    link: '/about',
    imageClassName: 'order-1 md:order-2',
    contentClassName: 'order-2 md:order-1',
    badge: 'Student-Led Initiative',
  },
];

const cardBaseClassName =
  'absolute inset-0 flex h-full w-full flex-col overflow-y-auto rounded-[1.5rem] border border-white/[0.12] bg-[radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.12),transparent_32%),rgba(9,9,11,0.97)] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-500 hover:border-red-500/80 hover:bg-[radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.18),transparent_34%),rgba(9,9,11,0.98)] hover:shadow-[0_0_60px_rgba(220,38,38,0.24)] md:rounded-3xl md:overflow-visible md:p-12';

const WhatIsTEDx = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const cardTransforms = [
    {
      y: useTransform(scrollYProgress, [0, 0.27, 0.37], ['0%', '0%', '-6%'], { clamp: true }),
      opacity: useTransform(scrollYProgress, [0, 0.27, 0.37], [1, 1, 0], { clamp: true }),
      scale: useTransform(scrollYProgress, [0, 0.37], [1, 0.96], { clamp: true }),
      pointerEvents: useTransform(scrollYProgress, (v) => (v < 0.37 ? 'auto' : 'none')),
    },
    {
      y: useTransform(
        scrollYProgress,
        [0, 0.25, 0.37, 0.60, 0.70],
        ['110%', '110%', '0%', '0%', '-6%'],
        { clamp: true },
      ),
      opacity: useTransform(
        scrollYProgress,
        [0, 0.25, 0.37, 0.60, 0.70],
        [0, 0, 1, 1, 0],
        { clamp: true },
      ),
      scale: useTransform(scrollYProgress, [0.25, 0.37, 0.70], [0.96, 1, 0.96], { clamp: true }),
      pointerEvents: useTransform(scrollYProgress, (v) => (v >= 0.25 && v < 0.70 ? 'auto' : 'none')),
    },
    {
      y: useTransform(scrollYProgress, [0, 0.58, 0.70, 1], ['110%', '110%', '0%', '0%'], { clamp: true }),
      opacity: useTransform(scrollYProgress, [0, 0.58, 0.70, 1], [0, 0, 1, 1], { clamp: true }),
      scale: useTransform(scrollYProgress, [0.58, 0.70, 1], [0.96, 1, 1], { clamp: true }),
      pointerEvents: useTransform(scrollYProgress, (v) => (v >= 0.58 ? 'auto' : 'none')),
    },
  ];

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-3 py-4 sm:px-5 md:px-8">
        <div className="relative isolate h-[min(620px,calc(100vh-2rem))] w-full max-w-[1400px] md:h-[min(650px,calc(100vh-2rem))]">
          {cards.map((card, index) => (
            <AnimatedArticle
              key={card.imageAlt}
              className={cardBaseClassName}
              style={{
                y: cardTransforms[index].y,
                opacity: cardTransforms[index].opacity,
                scale: cardTransforms[index].scale,
                pointerEvents: cardTransforms[index].pointerEvents,
                zIndex: (index + 1) * 10,
              }}
            >
              <div className="grid min-h-full grid-cols-1 content-center items-center gap-7 md:grid-cols-2 md:gap-12">
                <div
                  className={`group/image relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl md:aspect-[3/2] ${card.imageClassName}`}
                >
                  <img
                    src="/ted-conference.webp"
                    alt={card.imageAlt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/image:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={`flex max-w-2xl flex-col justify-center space-y-4 p-1 md:space-y-6 md:p-6 ${card.contentClassName}`}
                >
                  {card.badge && (
                    <div className="w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-400 md:text-sm">
                      {card.badge}
                    </div>
                  )}
                  <h2 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
                    {card.title}
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-zinc-300 md:text-lg md:leading-8">
                    {card.description}
                  </p>
                  <div className={index === 1 ? 'md:self-end' : ''}>
                    <a
                      href={card.link}
                      className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-black shadow-lg shadow-black/20 transition-all duration-300 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/70 after:to-transparent hover:-translate-y-0.5 hover:bg-red-600 hover:text-white hover:shadow-red-600/25 hover:after:animate-shimmer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                      {card.linkLabel}
                      {index === 1 && <span>→</span>}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsTEDx;
