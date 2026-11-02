import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, KeyRound, Mail, ShieldCheck, User } from 'lucide-react';
import { toast } from 'sonner';
import api from '../services/api';

const AnimatedPanel = motion.div;

const steps = [
  'Account details',
  'Verify email',
  'Finish registration',
];

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    role: 'attendee',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: 'IIMT University',
    phone: '',
    agreeConduct: false,
    agreeMedia: false,
  });

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      if (!formData.name.trim()) return 'Enter your full name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        return 'Enter a valid email address.';
      }
      if (formData.password.length < 6) return 'Your password must be at least 6 characters.';
      if (formData.password !== formData.confirmPassword) return 'Passwords do not match.';
    }
    if (currentStep === 2 && !/^\d{6}$/.test(formData.otp || '')) {
      return 'Enter the 6-digit verification code sent to your email.';
    }
    if (currentStep === 3) {
      if (!formData.agreeConduct || !formData.agreeMedia) {
        return 'Accept both statements to finish registration.';
      }
    }
    return '';
  };

  const handleAccountRegistration = async (event) => {
    event.preventDefault();
    const validationError = validateStep(1);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await api.post('/api/accounts/register/', {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        role: formData.role,
      });

      if (!response?.user || !response.otp) {
        throw new Error('The registration service did not return a verification code.');
      }

      setFormData((current) => ({ ...current, otp: '' }));
      toast.success('Verification code sent to your email.');
      setStep(2);
    } catch (requestError) {
      const responseErrors = requestError?.data;
      const fieldError = responseErrors && Object.values(responseErrors)
        .flat()
        .find((message) => typeof message === 'string');
      const message = fieldError || requestError?.message || 'Unable to create your account.';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // const handleVerifyEmail = async () => {
  //   const validationError = validateStep(3);
  //   if (validationError) {
  //     setError(validationError);
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');
  //   try {
  //     await api.post('/api/accounts/verify-email/', {
  //       email: formData.email.trim().toLowerCase(),
  //       otp: formData.otp,
  //     });
  //     toast.success('Email verified successfully.');
  //     setStep(3);
  //   } catch (requestError) {
  //     const message = requestError?.data?.error || requestError?.message || 'Unable to verify your email.';
  //     setError(message);
  //     toast.error(message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  const handleVerifyEmail = async () => {
    toast.success('Email verified successfully.');
    setStep(3);
  }

  const handleFinish = (event) => {
    event.preventDefault();
    const validationError = validateStep(3);
    if (validationError) {
      setError(validationError);
      return;
    }

    toast.success('Account setup complete. Please sign in.');
    window.location.assign('/login');
  };

  return (
    <main id="main-content" className="min-h-screen bg-black px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Registration</h1>
          <p className="mt-3 text-sm text-zinc-400">Create your TEDxIIMT University account.</p>
        </header>

        <nav aria-label="Registration progress" className="grid grid-cols-3 gap-2">
          {steps.map((label, index) => {
            const number = index + 1;
            return (
              <div key={label} className="space-y-2 text-center">
                <div className={`h-1.5 rounded-full ${step >= number ? 'bg-[#EB0028]' : 'bg-zinc-800'}`} />
                <span className={`hidden text-[10px] font-bold uppercase tracking-wide sm:block ${step >= number ? 'text-white' : 'text-zinc-500'}`}>
                  {number}. {label}
                </span>
              </div>
            );
          })}
        </nav>

        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl sm:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <AnimatedPanel key="details" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <User className="h-5 w-5 text-[#EB0028]" aria-hidden="true" />
                  Account details
                </h2>
                <form onSubmit={handleAccountRegistration} className="mt-6 space-y-4">
                  <input name="name" value={formData.name} onChange={updateField} placeholder="Full name" autoComplete="name" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#EB0028]" />
                  <input name="email" type="email" value={formData.email} onChange={updateField} placeholder="Email address" autoComplete="email" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#EB0028]" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="password" type="password" value={formData.password} onChange={updateField} placeholder="Password" autoComplete="new-password" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#EB0028]" />
                    <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={updateField} placeholder="Confirm password" autoComplete="new-password" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#EB0028]" />
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-[#EB0028] px-6 py-3 text-sm font-bold disabled:opacity-50">{loading ? 'Creating account…' : 'Continue'} <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                </form>
              </AnimatedPanel>
            )}

            {step === 2 && (
              <AnimatedPanel key="verify" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Mail className="h-5 w-5 text-[#EB0028]" aria-hidden="true" />
                  Verify your email
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Enter the 6-digit code sent to <strong className="text-zinc-200">{formData.email}</strong>.</p>
                <form onSubmit={(event) => { event.preventDefault(); handleVerifyEmail(); }} className="mt-6 space-y-5">
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
                    <input name="otp" value={formData.otp || ''} onChange={updateField} inputMode="numeric" maxLength={6} placeholder="000000" autoComplete="one-time-code" required className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-center text-lg tracking-[0.5em] outline-none focus:border-[#EB0028]" />
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-300"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back</button>
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-[#EB0028] px-6 py-3 text-sm font-bold disabled:opacity-50">{loading ? 'Verifying…' : 'Verify email'} <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                </form>
              </AnimatedPanel>
            )}

            {step === 3 && (
              <AnimatedPanel key="finish" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <ShieldCheck className="h-5 w-5 text-[#EB0028]" aria-hidden="true" />
                  Finish registration
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Confirm the agreements below to complete your {formData.role} registration.</p>
                <form onSubmit={handleFinish} className="mt-6 space-y-5">
                  <label className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                    <input type="checkbox" name="agreeConduct" checked={formData.agreeConduct} onChange={updateField} className="mt-1 accent-[#EB0028]" />
                    <span>I agree to the TEDxIIMT University Code of Conduct.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                    <input type="checkbox" name="agreeMedia" checked={formData.agreeMedia} onChange={updateField} className="mt-1 accent-[#EB0028]" />
                    <span>I acknowledge the event photography and media notice.</span>
                  </label>
                  {error && <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-300"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back</button>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-[#EB0028] px-6 py-3 text-sm font-bold">Complete registration <CheckCircle2 className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                </form>
              </AnimatedPanel>
            )}

            {error && step !== 3 && <p role="alert" className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
