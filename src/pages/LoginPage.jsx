import React, { useId, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';

const AnimatedSection = motion.section;

const getPortalPath = (role) => `/portal/${String(role || 'attendee').toLowerCase()}`;

const LoginPage = () => {
  const { login, isAuthenticated, user, logout } = useAuth();
  const emailId = useId();
  const passwordId = useId();
  const errorId = useId();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError('Enter your email address and password to continue.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError('Enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const result = await login(normalizedEmail, password);
      if (!result?.success || !result.user?.role) {
        throw new Error('We could not verify your account.');
      }

      toast.success(`Welcome back, ${result.user.name || 'member'}!`);
      window.location.assign(getPortalPath(result.user.role));
    } catch (loginError) {
      const message =
        loginError?.status === 401
          ? 'The email or password is incorrect.'
          : loginError?.message || 'Unable to sign in right now. Please try again.';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (error) setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (error) setError('');
  };

  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-black px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#EB0028]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-20">
        <AnimatedSection
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden max-w-xl lg:block"
          aria-labelledby="login-intro-heading"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EB0028]/30 bg-[#EB0028]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ff4764]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Secure member access
          </div>
          <h1 id="login-intro-heading" className="text-5xl font-black leading-[1.05] tracking-tight xl:text-6xl">
            Ideas worth spreading need a team behind them.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
            Sign in to manage your TEDxIIMT University experience, from speaker preparation to
            attendee access.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <ShieldCheck className="h-5 w-5 text-[#EB0028]" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">Role-based access</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">Only the tools assigned to your role are available.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <LockKeyhole className="h-5 w-5 text-[#EB0028]" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">Protected session</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">Your session is handled by the TEDxIIMT account service.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto w-full max-w-md"
          aria-labelledby="login-heading"
        >
          <div className="mb-7 text-center lg:hidden">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EB0028]/30 bg-[#EB0028]/10">
              <LockKeyhole className="h-7 w-7 text-[#EB0028]" aria-hidden="true" />
            </div>
          </div>

          {isAuthenticated ? (
            <div className="rounded-3xl border border-white/10 bg-zinc-950/95 p-7 text-center shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:p-9">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <UserCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold">You are already signed in</h2>
              <p className="mt-2 break-all text-sm text-zinc-400">{user?.email}</p>
              <a
                href={getPortalPath(user?.role)}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#EB0028] px-4 py-3.5 text-sm font-bold transition-colors hover:bg-[#c90022] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                Open my dashboard
              </a>
              <button
                type="button"
                onClick={logout}
                className="mt-4 text-xs font-semibold text-zinc-500 transition-colors hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Sign out of this account
              </button>
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-zinc-950/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:p-9">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EB0028]">TEDxIIMT University</p>
                <h2 id="login-heading" className="mt-2 text-3xl font-black tracking-tight">Welcome back</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Sign in to continue to your member portal.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor={emailId} className="mb-2 block text-sm font-semibold text-zinc-200">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#EB0028] focus:ring-2 focus:ring-[#EB0028]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor={passwordId} className="text-sm font-semibold text-zinc-200">Password</label>
                    <a href="/contact" className="text-xs font-semibold text-[#ff4764] hover:text-white focus-visible:outline-none focus-visible:underline">
                      Need help signing in?
                    </a>
                  </div>
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
                    <input
                      id={passwordId}
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-10 pr-12 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#EB0028] focus:ring-2 focus:ring-[#EB0028]/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028]"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p id={errorId} role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-3 text-sm leading-5 text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#EB0028] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#EB0028]/20 transition-all hover:-translate-y-0.5 hover:bg-[#c90022] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  {loading ? 'Signing in…' : 'Sign in'}
                  {!loading && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>
              </form>

              <p className="mt-7 border-t border-white/10 pt-6 text-center text-xs leading-5 text-zinc-500">
                Need an attendee ticket?{' '}
                <a href="/register" className="font-bold text-[#ff4764] hover:text-white focus-visible:outline-none focus-visible:underline">
                  Register here
                </a>
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </main>
  );
};

export default LoginPage;
