import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MysteryPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20">
        <section className="w-full px-6 py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-red-950">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The <span className="text-red-500">Mystery</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step into the unknown. Embrace the questions that challenge everything you believe.
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-red-500/20"
              >
                <div className="p-3 bg-red-500/10 rounded-xl w-14 h-14 mb-4 flex items-center justify-center text-red-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Enigma</h3>
                <p className="text-gray-400">
                  What lies beyond the boundaries of conventional thinking? 
                  Prepare to question everything you thought you knew about reality, innovation, and human potential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-red-500/20"
              >
                <div className="p-3 bg-red-500/10 rounded-xl w-14 h-14 mb-4 flex items-center justify-center text-red-500">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Unknown</h3>
                <p className="text-gray-400">
                  In the vast expanse of human knowledge, there are territories yet unexplored. 
                  Join us as we venture into the darkness to illuminate new possibilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-red-500/20"
              >
                <div className="p-3 bg-red-500/10 rounded-xl w-14 h-14 mb-4 flex items-center justify-center text-red-500">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Revelation</h3>
                <p className="text-gray-400">
                  Every great discovery began with a question. Every revolution started with doubt. 
                  What revelations await those brave enough to seek them?
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center bg-gradient-to-r from-red-500/10 to-transparent rounded-3xl p-12 border border-red-500/20"
            >
              <div className="text-8xl text-red-500/30 mb-8 font-black">?</div>
              <h2 className="text-3xl font-bold mb-6">The Journey Begins</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                The mystery isn't just about what we don't know—it's about having the courage to ask the right questions. 
                Are you ready to embark on this journey of discovery?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/join-us/attendee"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Join the Quest
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-red-500 font-semibold text-lg mb-4">
                "The important thing is not to stop questioning." - Albert Einstein
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-2 h-2 bg-red-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MysteryPage;