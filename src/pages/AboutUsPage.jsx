import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-red-950 text-white">
      <section className="py-20 h-[calc(100vh-68px)] flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="relative">
            <div className="w-20 h-1 bg-red-600 mb-6 rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About <span className="text-red-500">TED</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl font-light">
            TED is a nonprofit, nonpartisan organization dedicated to discovering, 
            debating and spreading ideas that spark conversation, deepen understanding 
            and drive meaningful change.
          </p>
          <div className="pt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Watch TED Talks
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-red-400">Our Mission</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            We welcome people from every discipline and culture who seek a deeper 
            understanding of the world and connection with others, and we invite 
            everyone to engage with ideas and activate them in your community.
          </p>
        </div>
      </section>

      {/* History & Evolution */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              From <span className="text-red-500">1984</span> to Today
            </h2>
            <div className="space-y-4">
              <p className="text-white/70 text-lg leading-relaxed">
                TED began in 1984 as a conference where Technology, Entertainment 
                and Design converged, but today it spans a multitude of worldwide 
                communities and initiatives exploring everything from science and 
                business to education, arts and global issues.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                In addition to the TED Talks curated from our annual conferences 
                and published on TED.com, we produce original podcasts, short video 
                series, animated educational lessons (TED-Ed) and TV programs that 
                are translated into more than 100 languages.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900/20 to-black/50 rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                  <p className="text-white/70">Translated into 100+ languages worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">TEDx Community</h3>
                  <p className="text-white/70">Thousands of independently organized events annually</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Social Impact</h3>
                  <p className="text-white/70">$3B+ catalyzed for world-changing projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives & Impact */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-500">Initiatives</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Driving meaningful change through various platforms and programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-400">TEDx</h3>
            <p className="text-white/70 leading-relaxed">
              Each year, thousands of independently run TEDx events bring people 
              together to share ideas and bridge divides in communities on every continent.
            </p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-400">The Audacious Project</h3>
            <p className="text-white/70 leading-relaxed">
              TED has helped catalyze more than $3 billion in funding for projects 
              that seek to make the world more beautiful, sustainable and just.
            </p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Climate & Democracy</h3>
            <p className="text-white/70 leading-relaxed">
              Countdown accelerates climate solutions, while TED Democracy focuses 
              on pathways toward a more vibrant and equitable future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-3xl p-12 border border-red-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Conversation
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Follow TED on social media and be part of the global idea exchange.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X'].map((platform) => (
              <span 
                key={platform}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
