import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { Toaster } from 'sonner';
import './index.css';
import Router from './Router.jsx';
import { AuthProvider } from './context/AuthContext';
import { EditionProvider } from './context/EditionContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <AuthProvider>
        <EditionProvider>
          <Router />
          <Toaster position="top-right" richColors theme="dark" />
        </EditionProvider>
      </AuthProvider>
    </MotionConfig>
  </StrictMode>,
);
