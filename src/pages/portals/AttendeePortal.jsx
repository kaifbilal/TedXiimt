import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'sonner';
import { 
  Ticket, Calendar, MapPin, Utensils, Accessibility,
  Download, Clock, CheckCircle2, AlertCircle, Share2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AttendeePortal = () => {
  const { user } = useAuth();
  const [dietary, setDietary] = useState('vegetarian');
  const [accessibility, setAccessibility] = useState('None');

  const ticketData = {
    ticketNumber: 'TEDX-2025-00247',
    attendeeName: user?.name || 'Aarav Sharma',
    attendeeEmail: user?.email || 'attendee@tedxiimt.com',
    eventTitle: 'TEDxIIMT University 2025',
    theme: 'Break the Flow',
    date: 'November 11, 2025',
    time: '09:00 AM - 05:00 PM IST',
    venue: 'Seminar Hall 2nd Floor B Block, IIMT University, Meerut',
    hmac: '7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c',
    checkedIn: false,
  };

  const handleUpdatePreferences = (e) => {
    e.preventDefault();
    toast.success('Attendee catering and accessibility preferences updated.');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-2">
              <Ticket className="w-3.5 h-3.5" />
              Verified Delegate Pass
            </div>
            <h1 className="text-3xl font-black text-white">
              Attendee <span className="text-[#EB0028]">Ticket Portal</span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Delegate: <strong className="text-white">{ticketData.attendeeName}</strong> • Seat Confirmed for Nov 11, 2025
            </p>
          </div>

          <span className="px-3.5 py-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow">
            <CheckCircle2 className="w-4 h-4" />
            Verified & Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: The Digital QR Ticket */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#EB0028]">TEDxIIMT University</div>
                  <div className="text-sm font-black text-white">{ticketData.theme}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-500">Ticket ID</div>
                  <div className="text-xs font-mono font-bold text-zinc-300">{ticketData.ticketNumber}</div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center p-4 bg-white rounded-2xl shadow-inner">
                <QRCodeSVG
                  value={JSON.stringify({
                    ticket: ticketData.ticketNumber,
                    name: ticketData.attendeeName,
                    email: ticketData.attendeeEmail,
                    hmac: ticketData.hmac,
                  })}
                  size={190}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Delegate:</span>
                  <span className="font-bold text-white">{ticketData.attendeeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Venue:</span>
                  <span className="text-zinc-300">Seminar Hall 2nd Fl, B Block</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Event Time:</span>
                  <span className="text-zinc-300">Nov 11, 2025 • 09:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Catering Choice:</span>
                  <span className="text-emerald-400 font-bold capitalize">{dietary}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => toast.success('Ticket downloaded as digital PDF.')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-xl border border-zinc-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save Pass to Device
                </button>
              </div>

              <div className="text-[9px] text-zinc-600 font-mono truncate">
                Signature: {ticketData.hmac}
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Preferences & Event Logistics */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Preferences Card */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#EB0028]" />
                Catering & Accessibility Preferences
              </h3>

              <form onSubmit={handleUpdatePreferences} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-400 font-bold uppercase mb-2">Select Dietary Choice (Buffet Lunch Included)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['vegetarian', 'non_vegetarian', 'vegan', 'jain'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDietary(type)}
                        className={`p-3 rounded-xl border font-bold capitalize text-left transition-all ${
                          dietary === type
                            ? 'bg-[#EB0028]/10 border-[#EB0028] text-white'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {type.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold uppercase mb-1.5">Special Accessibility Assistance</label>
                  <input
                    type="text"
                    value={accessibility}
                    onChange={(e) => setAccessibility(e.target.value)}
                    placeholder="e.g. Wheelchair access, front-row seating"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs focus:border-[#EB0028] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#EB0028] hover:bg-[#c90022] text-white font-bold rounded-xl text-xs shadow"
                  >
                    Save Preferences
                  </button>
                </div>
              </form>
            </div>

            {/* Event Day Guide */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#EB0028]" />
                Event-Day Arrival Guide
              </h3>
              <div className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#EB0028] font-mono">08:30 AM:</span>
                  <span>Doors & Registration Desk Open at Seminar Hall B-Block Lobby. Present QR code for physical badge & kit.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#EB0028] font-mono">09:15 AM:</span>
                  <span>Main Hall Seating Call. All delegates must be seated before stage camera broadcast begins.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#EB0028] font-mono">11:15 AM:</span>
                  <span>Networking Buffet Lunch & Interactive Experience Zones in Courtyard.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/schedule"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#EB0028] hover:underline"
                >
                  View Full 4-Session Agenda & Speaker Lineup →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AttendeePortal;
