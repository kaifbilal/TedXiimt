import React from 'react';
import AdminPortal from './AdminPortal';
import AttendeePortal from './AttendeePortal';
import LeadPortal from './LeadPortal';
import SpeakerPortal from './SpeakerPortal';
import VolunteerPortal from './VolunteerPortal';
import { useAuth } from '../../context/AuthContext';

const portalByRole = {
  admin: AdminPortal,
  attendee: AttendeePortal,
  lead: LeadPortal,
  speaker: SpeakerPortal,
  volunteer: VolunteerPortal,
};

const Portal = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <p className="text-sm text-zinc-400" role="status">
          Loading your portal...
        </p>
      </main>
    );
  }

  const PortalComponent = portalByRole[user?.role?.toLowerCase()];

  if (!PortalComponent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
        <div className="max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-2xl">
          <h1 className="text-2xl font-bold">Portal access unavailable</h1>
          <p className="mt-3 text-zinc-400">
            You do not have access to this portal.
          </p>
          {!user && (
            <a
              href="/login"
              className="mt-6 inline-flex rounded-full bg-[#EB0028] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c90024] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Sign in
            </a>
          )}
        </div>
      </main>
    );
  }

  return <PortalComponent />;
};

export default Portal;
