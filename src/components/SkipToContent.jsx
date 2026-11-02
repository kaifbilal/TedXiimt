import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#EB0028] focus:text-white focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
