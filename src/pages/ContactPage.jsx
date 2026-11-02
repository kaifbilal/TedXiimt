import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles } from 'lucide-react';
import api from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    inquiry_type: 'general'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await api.post('/api/services/contact/', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        inquiry_type: formData.inquiry_type
      });
      toast.success(res.message || 'Your inquiry has been submitted directly to the TEDx organizing team.');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '', inquiry_type: 'general' });
    } catch (err) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="main-content">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            Connect with Organizers
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Get in <span className="text-[#EB0028]">Touch</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Have questions regarding sponsorship, speaker proposals, media credentials, or attendee tickets? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Info Cards */}
          <div className="space-y-4">
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EB0028]/10 text-[#EB0028] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Official Event Email</h4>
              <p className="text-xs text-zinc-400">Direct inbox monitored by the organizing licensee and curation board.</p>
              <a href="mailto:tedxiimtuniversity@gmail.com" className="text-xs font-bold text-[#EB0028] hover:underline block pt-1">
                tedxiimtuniversity@gmail.com
              </a>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EB0028]/10 text-[#EB0028] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Venue Location</h4>
              <p className="text-xs text-zinc-400">
                Seminar Hall, 2nd Floor, B Block, IIMT University, 'O' Pocket, Ganga Nagar, Meerut, UP 250001
              </p>
              <a href="/venue" className="text-xs font-bold text-[#EB0028] hover:underline block pt-1">
                View Interactive Venue Map →
              </a>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EB0028]/10 text-[#EB0028] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Event Date & Time</h4>
              <p className="text-xs text-zinc-400 font-mono">
                November 11, 2025 • 09:00 AM - 05:00 PM IST
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Aryan Varma"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#EB0028] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. aryan@example.com"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#EB0028] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiry_type}
                    onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value, subject: `${e.target.value.toUpperCase()} Inquiry` })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#EB0028] transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sponsorship">Sponsorship & Brand Partnership</option>
                    <option value="speaker">Speaker Curation & Talk Proposal</option>
                    <option value="ticketing">Attendee Ticketing & QR Pass</option>
                    <option value="press">Press & Media Accreditation</option>
                    <option value="accessibility">Accessibility & Special Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your inquiry"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#EB0028] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Message Details *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide detailed information regarding your inquiry, organization, or questions..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#EB0028] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-[#EB0028] hover:bg-[#c90022] text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#EB0028]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Transmitting Message...' : 'Send Message to Organizing Board'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
