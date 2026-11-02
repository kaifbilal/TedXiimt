import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const reelVideos = ['/1.mp4', '/2.mp4', '/3.mp4', '/4.mp4'];

const ReelCard = ({ post, index, onPlaybackStart }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.warn('Unable to play reel:', error));
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlay = () => {
    onPlaybackStart(videoRef.current);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVideoKeyDown = (event) => {
    if (isPlaying && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      togglePlayback();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#EB0028]/70 hover:shadow-[0_24px_70px_-28px_rgba(235,0,40,0.7)]"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black">
        <video
          ref={videoRef}
          src={post.src}
          className="h-full w-full object-cover"
          playsInline
          loop
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
          onClick={isPlaying ? togglePlayback : undefined}
          onKeyDown={handleVideoKeyDown}
          tabIndex={isPlaying ? 0 : -1}
          aria-label={`Reel ${index + 1}; press Enter or Space to pause while playing`}
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlayback}
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#EB0028]"
            aria-label={`Play reel ${index + 1}`}
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-md transition-transform group-hover:scale-110">
              <Play className="h-10 w-10 fill-current" aria-hidden="true" />
            </span>
            <span className="absolute bottom-8 left-4 right-4 text-center text-sm font-semibold uppercase tracking-widest text-white/80 drop-shadow-md">
              Play Reel
            </span>
          </button>
        )}
      </div>
    </motion.article>
  );
};

const SocialMedia = () => {
  const activeVideoRef = useRef(null);

  const handlePlaybackStart = (video) => {
    if (activeVideoRef.current && activeVideoRef.current !== video) {
      activeVideoRef.current.pause();
    }

    activeVideoRef.current = video;
  };

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12" aria-labelledby="social-media-heading">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#EB0028]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#EB0028]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center gap-5 text-center md:mb-16"
        >
          <div className="max-w-2xl">
            <h2 id="social-media-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Highlights
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Explore our latest stories and features across social media.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reelVideos.map((src, index) => {
            return (
              <ReelCard
                key={src}
                post={{ src }}
                index={index}
                onPlaybackStart={handlePlaybackStart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;