import React from 'react';
import Sponsors from '../components/Sponsors';

const SponsorsPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20">
        <Sponsors isHomepage={false} />
      </main>
    </div>
  );
};

export default SponsorsPage;