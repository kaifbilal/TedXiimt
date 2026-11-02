import React from 'react';
import Hero from '../components/Hero';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import WhatIsTEDx from '../components/WhatIsTEDx';
import ValueProposition from '../components/ValueProposition';
import EventHighlights from '../components/EventHighlights';
import SocialMedia from '../components/SocialMedia';
import Partners from '../components/Partners';
import Blog from '../components/Blog';
import FloatingCTA from '../components/FloatingCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip">
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Speakers */}
        <FeaturedSpeakers />
        
        {/* 3. What is TEDx */}
        <WhatIsTEDx />

       
        
        {/* 5. Event Highlights */}
        <EventHighlights />

        {/* 6. Community & Social */}
        <SocialMedia />

         {/* 4. Value Proposition */}
        <ValueProposition />

        {/* 6. Strategic Partners */}
        <Partners />

        {/* 7. Latest Editorial Stories */}
        <Blog />
      </main>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default HomePage;