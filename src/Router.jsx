import React, { Suspense, useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkipToContent from './components/SkipToContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import { useAuth } from './context/AuthContext';
import { getArchiveEdition } from './data/archiveData';

// Router Context for programmatic navigation
export const RouterContext = createContext({
  currentPath: window.location.pathname,
  navigate: () => {}
});

export const useRouter = () => useContext(RouterContext);

// Programmatic navigation helper
export const navigate = (to) => {
  if (window.location.pathname !== to) {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const AuthLoadingScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#EB0028] border-t-transparent" />
  </div>
);

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (
        !href ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('//') ||
        anchor.getAttribute('target') === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return;
      }

      if (href.startsWith('#')) return;

      e.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Complete Route Map
  const routes = {
    '/': {
      component: React.lazy(() => import('./App')),
      title: 'TEDxIIMT University | Break the Flow',
      description: 'Official Platform for TEDxIIMT University 2025: Break the Flow.'
    },
    '/home': {
      component: React.lazy(() => import('./App')),
      title: 'TEDxIIMT University | Break the Flow',
      description: 'Official Platform for TEDxIIMT University 2025: Break the Flow.'
    },
    '/about': {
      component: React.lazy(() => import('./pages/AboutPage')),
      title: 'About TEDx | TEDxIIMT University',
      description: 'Our mission, vision, and TED philosophy at IIMT University.'
    },
    '/team': {
      component: React.lazy(() => import('./pages/TeamPage')),
      title: 'Organizing Team | TEDxIIMT University',
      description: 'Meet the organizers, curators, and team behind TEDxIIMT University.'
    },
    '/speakers': {
      component: React.lazy(() => import('./pages/SpeakersPage')),
      title: 'Speakers | TEDxIIMT University 2025',
      description: 'Meet our featured speakers, innovators, and changemakers.'
    },
    '/schedule': {
      component: React.lazy(() => import('./pages/SchedulePage')),
      title: 'Schedule & Run of Show | TEDxIIMT University',
      description: 'Full event agenda, technical cue sheet, and session timeline.',
      requiredRole: 'admin',
    },
    '/library': {
      component: React.lazy(() => import('./pages/LibraryPage')),
      title: 'Archive Library | TEDxIIMT University',
      description: 'Explore historical event editions (2025, 2024, 2023) and talk recordings.'
    },
    '/register': {
      component: React.lazy(() => import('./pages/RegisterPage')),
      title: 'Register & Get Ticket | TEDxIIMT University',
      description: 'Reserve your delegate seat for TEDxIIMT University 2025.'
    },
    '/tickets': {
      component: React.lazy(() => import('./pages/AttendeeForm')),
      title: 'Register & Get Ticket | TEDxIIMT University',
      description: 'Reserve your delegate seat for TEDxIIMT University 2025.'
    },
    '/join-us/attendee': {
      component: React.lazy(() => import('./pages/AttendeeForm')),
      title: 'Register & Get Ticket | TEDxIIMT University',
      description: 'Reserve your delegate seat for TEDxIIMT University 2025.'
    },
    '/attendee-form': {
      component: React.lazy(() => import('./pages/AttendeeForm')),
      title: 'Attendee Registration | TEDxIIMT University',
      description: 'Register to attend TEDxIIMT University and be part of the experience.'
    },
    '/join-us/sponsor': {
      component: React.lazy(() => import('./pages/SponsorForm')),
      title: 'Sponsorship Application | TEDxIIMT University',
      description: 'Partner with TEDxIIMT University and support ideas worth spreading.'
    },
    '/sponsor-form': {
      component: React.lazy(() => import('./pages/SponsorForm')),
      title: 'Sponsorship Application | TEDxIIMT University',
      description: 'Partner with TEDxIIMT University and support ideas worth spreading.'
    },
    '/speaker-apply': {
      component: React.lazy(() => import('./pages/SpeakerApplyPage')),
      title: 'Apply to Speak | TEDxIIMT University',
      description: 'Submit your talk proposal for TEDxIIMT University.'
    },
    '/join-us/speaker': {
      component: React.lazy(() => import('./pages/SpeakerApplyPage')),
      title: 'Apply to Speak | TEDxIIMT University',
      description: 'Submit your talk proposal for TEDxIIMT University.'
    },
    '/login': {
      component: React.lazy(() => import('./pages/LoginPage')),
      title: 'Member Login | TEDxIIMT University',
      description: 'Sign in to access your role-based portal.'
    },
    '/signin': {
      component: React.lazy(() => import('./pages/LoginPage')),
      title: 'Member Login | TEDxIIMT University',
      description: 'Sign in to access your role-based portal.'
    },
    '/code-of-conduct': {
      component: React.lazy(() => import('./pages/CodeOfConductPage')),
      title: 'Code of Conduct | TEDxIIMT University',
      description: 'Official Code of Conduct, expected behaviors, and safety standards.'
    },
    '/conduct': {
      component: React.lazy(() => import('./pages/CodeOfConductPage')),
      title: 'Code of Conduct | TEDxIIMT University',
      description: 'Official Code of Conduct, expected behaviors, and safety standards.'
    },
    // Portals
    '/portal/admin': {
      component: React.lazy(() => import('./pages/portals/AdminPortal')),
      title: 'Organizer Command Center | TEDxIIMT University',
      description: 'Admin ERP, gate check-in, budget tracking, and report generator.',
      requiredRole: 'admin',
    },
    '/portal/lead': {
      component: React.lazy(() => import('./pages/portals/LeadPortal')),
      title: 'Domain Lead Hub | TEDxIIMT University',
      description: 'Task delegation Kanban and resource requisition manager.',
      requiredRole: 'lead',
    },
    '/portal/volunteer': {
      component: React.lazy(() => import('./pages/portals/VolunteerPortal')),
      title: 'Volunteer Task Center | TEDxIIMT University',
      description: 'Assigned task deliverables and gate QR scanner.',
      requiredRole: 'volunteer',
    },
    '/portal/speaker': {
      component: React.lazy(() => import('./pages/portals/SpeakerPortal')),
      title: 'Speaker Preparation Portal | TEDxIIMT University',
      description: 'Slide deck uploader and TEDx Release Agreement signing.',
      requiredRole: 'speaker',
    },
    '/portal/attendee': {
      component: React.lazy(() => import('./pages/portals/AttendeePortal')),
      title: 'Delegate Pass & Portal | TEDxIIMT University',
      description: 'Your official cryptographic HMAC QR Ticket and meal preferences.',
      requiredRole: 'attendee',
    },
    // Other Pages
    '/faq': {
      component: React.lazy(() => import('./pages/FAQPage')),
      title: 'Frequently Asked Questions | TEDxIIMT University',
      description: 'Answers about ticketing, venue, directions, and participation.'
    },
    '/faqs': {
      component: React.lazy(() => import('./pages/FAQPage')),
      title: 'Frequently Asked Questions | TEDxIIMT University',
      description: 'Answers about ticketing, venue, directions, and participation.'
    },
    '/blog': {
      component: React.lazy(() => import('./pages/BlogPage')),
      title: 'Editorial & Stories | TEDxIIMT University',
      description: 'Ideas, insights, and stories from TEDxIIMT University.'
    },
    '/blogs': {
      component: React.lazy(() => import('./pages/BlogPage')),
      title: 'Editorial & Stories | TEDxIIMT University',
      description: 'Ideas, insights, and stories from TEDxIIMT University.'
    },
    '/stories': {
      component: React.lazy(() => import('./pages/BlogPage')),
      title: 'Editorial & Stories | TEDxIIMT University',
      description: 'Ideas, insights, and stories from TEDxIIMT University.'
    },
    '/venue': {
      component: React.lazy(() => import('./pages/VenuePage')),
      title: 'Venue & Directions | TEDxIIMT University',
      description: 'Campus map and directions to Seminar Hall 2nd Floor B Block, IIMT Meerut.'
    },
    '/what-to-expect': {
      component: React.lazy(() => import('./pages/WhatToExpectPage')),
      title: 'What to Expect | TEDxIIMT University',
      description: 'Complete guide to the TEDxIIMT University experience.'
    },
    '/accessibility': {
      component: React.lazy(() => import('./pages/AccessibilityPage')),
      title: 'Accessibility & Inclusion | TEDxIIMT University',
      description: 'Accessibility accommodations and campus support.'
    },
    '/gallery': {
      component: React.lazy(() => import('./pages/GalleryPage')),
      title: 'Photo & Video Gallery | TEDxIIMT University',
      description: 'Moments, stage photos, and memories from TEDx events.'
    },
    '/sponsors': {
      component: React.lazy(() => import('./pages/SponsorsPage')),
      title: 'Sponsors & Partners | TEDxIIMT University',
      description: 'Generous partners and vision sponsors.'
    },
    '/partners': {
      component: React.lazy(() => import('./pages/SponsorsPage')),
      title: 'Sponsors & Partners | TEDxIIMT University',
      description: 'Generous partners and vision sponsors.'
    },
    '/contact': {
      component: React.lazy(() => import('./pages/ContactPage')),
      title: 'Contact Us | TEDxIIMT University',
      description: 'Get in touch with the organizing licensee and team.'
    },
  };

  const getRouteData = () => {
    const cleanPath = currentPath.split('?')[0].split('#')[0];

    if (routes[cleanPath]) {
      return routes[cleanPath];
    }

    // Dynamic route for archive edition: /archive/2025, /archive/2024, /archive/2023
    if (cleanPath.startsWith('/archive/')) {
      const year = cleanPath.split('/')[2];
      const edition = getArchiveEdition(year);
      return {
        component: React.lazy(() => import('./pages/ArchiveEditionPage')),
        title: `${edition.year} Archive Edition | TEDxIIMT University`,
        description: edition.description
      };
    }

    // Dynamic blog routes
    if (cleanPath.startsWith('/blog/') || cleanPath.startsWith('/stories/')) {
      return {
        component: React.lazy(() => import('./pages/BlogPost')),
        title: 'Story | TEDxIIMT University',
        description: 'Read the latest stories and insights from TEDxIIMT University.'
      };
    }

    // Fallback 404
    return {
      component: React.lazy(() => import('./pages/NotFoundPage')),
      title: '404 - Page Not Found | TEDxIIMT University',
      description: 'The page you are looking for could not be found.'
    };
  };

  const routeData = getRouteData();
  const isPortalRoute = Boolean(routeData.requiredRole);
  const userRole = typeof user?.role === 'string' ? user.role.toLowerCase() : null;
  const hasPortalAccess = !isPortalRoute
    || userRole === routeData.requiredRole;
  const Component = isPortalRoute && authLoading
    ? AuthLoadingScreen
    : hasPortalAccess
    ? routeData.component
    : NotFoundPage;

  useEffect(() => {
    document.title = routeData.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', routeData.description);
    }
  }, [routeData.title, routeData.description]);

  const LoadingScreen = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-3 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto" />
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Loading Experience...</div>
      </div>
    </div>
  );

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      <div className="min-h-screen bg-black text-white selection:bg-[#EB0028] selection:text-white flex flex-col justify-between">
        <SkipToContent />
        <Header />

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Suspense fallback={<LoadingScreen />}>
                <Component />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </RouterContext.Provider>
  );
};

export default Router;