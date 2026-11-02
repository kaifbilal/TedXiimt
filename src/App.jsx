import React, { Suspense } from 'react';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="bg-black text-white font-sans scroll-smooth" id="main-content">
      <HomePage />
    </div>
  );
};

export default App;
