import React from 'react';
import Speakers from '../components/Speakers';

const SpeakersPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20">
        <Speakers isHomepage={false} />
      </main>
    </div>
  );
};

export default SpeakersPage;
