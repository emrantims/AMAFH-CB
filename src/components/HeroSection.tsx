import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  MapPin,
  TrendingUp,
  FileCheck,
  ChevronRight,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PartnerLogo } from './PartnerLogo';

interface HeroSectionProps {
  onOpenPdfModal: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPdfModal, onOpenConsultation }) => {
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7C3AED', '#F59E0B', '#10B981']
    });
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-3 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Split Container - Direct Reference Design Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Left Hero Card (Vibrant Highlight Box inspired by reference image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#E8F86E] text-slate-900 rounded-[2.5rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-lime-950/5 border border-lime-300/60"
          >
            {/* Background geometric accents */}
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/40 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-purple-500/10 blur-xl pointer-events-none" />

            <div>
              {/* Top Sub-Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/10 backdrop-blur-sm border border-slate-900/10 text-xs font-semibold text-slate-800 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-purple-800" />
                <span>AMAFH • Division of ALIYAS Group</span>
              </div>

              {/* Big Display Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-950 mb-6 font-display">
                Precision Sales &amp;{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-2xl bg-white/80 border border-slate-900/10 text-purple-900 align-middle">
                  <ShieldCheck className="w-6 h-6 inline-block text-purple-700" />
                  Banking
                </span>{' '}
                Outsourcing in UAE.
              </h1>

              <p className="text-sm sm:text-base text-slate-800/90 leading-relaxed max-w-md mb-8">
                Your trusted outsourced channel partner for credit card sourcing, personal finance, and clean document management across leading financial institutions in Dubai &amp; UAE.
              </p>
            </div>

            <div>
              {/* Quick Consultation Pill Form */}
              <form onSubmit={handleQuickSubmit} className="relative mb-6">
                <div className="flex items-center bg-white/95 rounded-full p-1.5 shadow-md border border-slate-900/10 focus-within:ring-2 focus-within:ring-purple-700 transition-all">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your bank or business email..."
                    className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
                    disabled={submitted}
                    required
                  />
                  <button
                    type="submit"
                    className={`flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      submitted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-950 text-white hover:bg-purple-900 active:scale-95'
                    }`}
                  >
                    <span>{submitted ? 'Inquiry Sent' : 'Inquire'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-4 text-xs font-semibold text-emerald-800 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3" /> We will contact your team within 2 hours.
                  </motion.p>
                )}
              </form>

              {/* Social Proof Avatar Cluster */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="AMAFH Banking Executive"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Verification Officer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Sales Supervisor"
                  />
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white text-[10px] font-bold ring-2 ring-white">
                    250+
                  </div>
                </div>
                <div className="text-xs text-slate-800">
                  <span className="font-bold block text-slate-950">250+ Certified Team Members</span>
                  <span className="text-slate-700">Dedicated frontline &amp; QA desks in UAE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Frame (Landscape / Modern Dubai Tech Operations with Hotspots) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80"
              alt="Dubai Skyline & Financial District"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-900/30" />

            {/* Top Floating Badge 1: Team Pill (like reference image) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-6 z-20"
            >
              <div className="glass-pill px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/90">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                  alt="Team lead"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-purple-600"
                />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">Frontline Sales Pod</p>
                  <p className="text-[9px] text-slate-500 font-medium">Deira Business Village</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>
            </motion.div>

            {/* Top Right Floating Badge: ISO Badge */}
            <div className="absolute top-6 right-6 z-20">
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white text-purple-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* Interactive Hotspot 1: 9,500 sq.ft Workspace */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[38%] left-[20%] z-20 cursor-pointer"
            >
              <div className="group/hotspot relative">
                <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white flex items-center gap-1.5 text-xs font-semibold text-slate-900 transition-all hover:bg-white hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                  <span>9,500 sq.ft Facility</span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-white text-[11px] opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 z-30">
                  <p className="font-bold text-amber-400">Secured Banking Operations</p>
                  <p className="text-slate-300 text-[10px] mt-0.5">
                    Equipped with biometric access, 24/7 CCTV surveillance, and strict ISO InfoSec standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive Hotspot 2: Clean Submissions */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[28%] right-[18%] z-20 cursor-pointer"
            >
              <div className="group/hotspot relative">
                <div className="px-3 py-1.5 rounded-full bg-amber-300/95 backdrop-blur-md shadow-lg border border-amber-200 flex items-center gap-1.5 text-xs font-bold text-slate-950 transition-all hover:scale-105">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-900" />
                  <span>99.4% Clean Files</span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-white text-[11px] opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 z-30">
                  <p className="font-bold text-emerald-400">Pre-Vetted Accuracy</p>
                  <p className="text-slate-300 text-[10px] mt-0.5">
                    Multi-stage verification minimizing bank rejection rates.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Floating Hotspot 3: UAE Central Bank Compliance */}
            <div className="absolute bottom-24 left-[15%] z-20 hidden sm:block">
              <div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-white shadow-xl">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Port Saeed, Deira, Dubai</span>
              </div>
            </div>

            {/* Bottom Bar inside Image Frame (matching reference bottom card) */}
            <div className="absolute bottom-6 inset-x-6 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
              <div className="flex items-center gap-3">
                <PartnerLogo id="dib" name="Dubai Islamic Bank" className="py-1 px-2.5 bg-white border-slate-200" />
                <div className="hidden sm:block">
                  <h2 className="text-xs font-bold text-slate-900">Authorized Channel Partner</h2>
                  <p className="text-[11px] text-slate-600">DIB • SIB • Emirates Islamic • Reem</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenPdfModal}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors flex items-center gap-1"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Profile PDF</span>
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-purple-900 transition-colors flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Banner Statement with Floating Bubbles (Direct match with reference image) */}
        <div id="about" className="mt-16 sm:mt-24 text-center relative py-6">
          {/* Floating Bubble 1 */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 left-[12%] hidden md:block"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-4 ring-white border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=120&q=80"
                alt="Document verification"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Bubble 2 */}
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-12 left-[24%] hidden lg:block"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-white">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80"
                alt="Sales execution"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Bubble 3 */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-2 right-[18%] hidden md:block"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-4 ring-white border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80"
                alt="Banking tower"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Bubble 4 */}
          <motion.div
            animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-10 right-[8%] hidden lg:block"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden shadow-md ring-2 ring-white">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=120&q=80"
                alt="Financial files"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full inline-block mb-3">
              A Division of ALIYAS Group
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-display">
              Empowering UAE Banks with Flawless Files &amp; Higher Sourcing Volume
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              We manage the entire financial sales cycle with end-to-end operational ownership. From customer interaction to verification and document collection, we help banks achieve their vision with clean, audit-grade files.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>View Portfolio &amp; Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPdfModal}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all border border-slate-200/80"
              >
                <span>Download Profile</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
