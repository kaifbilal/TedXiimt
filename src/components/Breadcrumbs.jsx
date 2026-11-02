import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ currentPath: propPath }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const path = propPath || window.location.pathname;
    const cleanPath = path.split('?')[0].split('#')[0];
    const pathSegments = cleanPath.split('/').filter(segment => segment);
    
    // Don't show breadcrumbs on homepage
    if (pathSegments.length === 0 || cleanPath === '/') {
      setBreadcrumbs([]);
      return;
    }

    const breadcrumbItems = [
      { label: 'Home', url: '/' }
    ];

    const pathMap = {
      'about': { label: 'About' },
      'about-us': { label: 'About' },
      'team': { label: 'Team' },
      'speakers': { label: 'Speakers' },
      'blog': { label: 'Stories' },
      'blogs': { label: 'Stories' },
      'stories': { label: 'Stories' },
      'schedule': { label: 'Schedule' },
      'venue': { label: 'Venue' },
      'faq': { label: 'FAQ' },
      'faqs': { label: 'FAQ' },
      'gallery': { label: 'Gallery' },
      'mystery': { label: 'Mystery Speaker' },
      'sponsors': { label: 'Sponsors' },
      'media-partners': { label: 'Media Partners' },
      'community-partners': { label: 'Community Partners' },
      'live': { label: 'Live Stream' },
      'live-stream': { label: 'Live Stream' },
      'what-to-expect': { label: 'What to Expect' },
      'networking': { label: 'Networking' },
      'accessibility': { label: 'Accessibility' },
      'join-us': { label: 'Join Us' },
      'speaker': { label: 'Speaker Application' },
      'speaker-form': { label: 'Speaker Application' },
      'sponsor': { label: 'Sponsor Application' },
      'sponsor-form': { label: 'Sponsor Application' },
      'attendee': { label: 'Attendee Registration' },
      'attendee-form': { label: 'Attendee Registration' },
      'test': { label: 'Test Page' }
    };

    let accumPath = '';
    pathSegments.forEach((segment) => {
      accumPath += `/${segment}`;
      const segmentInfo = pathMap[segment.toLowerCase()];
      
      if (segmentInfo) {
        breadcrumbItems.push({
          label: segmentInfo.label,
          url: accumPath
        });
      } else {
        // Handle dynamic slug routes
        breadcrumbItems.push({
          label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          url: accumPath
        });
      }
    });

    setBreadcrumbs(breadcrumbItems);
  }, [propPath]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-900/80 px-4 sm:px-6 py-2">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-1.5 text-xs sm:text-sm text-gray-400 overflow-x-auto whitespace-nowrap py-0.5">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-600 mx-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="text-red-500 font-semibold truncate max-w-xs">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.url}
                  className="hover:text-white transition-colors truncate"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumbs;