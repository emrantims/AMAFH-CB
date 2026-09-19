import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Linkedin,
  Globe,
  ArrowRight,
  TrendingUp,
  Building2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/amafhData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactFooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenConsultation: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onNavigate,
  onOpenPdfModal,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 },
      });
    } catch {
      // ignore
    }
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative bg-slate-950 text-white overflow-hidden mt-16 sm:mt-24">
      {/* 1. SCENIC DUBAI SKYLINE & GROWTH PANORAMA BACKGROUND */}
      <div className="w-full relative min-h-[620px] lg:min-h-[700px] flex flex-col justify-between pt-12 sm:pt-16">
        
        {/* SVG Atmospheric Dubai Skyline & Financial Growth Trajectory */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          <svg
            className="w-full h-full object-cover object-bottom"
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sky Twilight Mist Transition from White Page */}
              <linearGradient id="dubaiSkyGradient" x1="720" y1="0" x2="720" y2="440" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#e8f3ee" stopOpacity="0.75" />
                <stop offset="55%" stopColor="#7ba395" stopOpacity="0.45" />
                <stop offset="85%" stopColor="#2c5244" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10261e" stopOpacity="0.0" />
              </linearGradient>

              {/* Distant Sheikh Zayed Road Skyline Gradient */}
              <linearGradient id="distantSkylineGrad" x1="720" y1="120" x2="720" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#558173" />
                <stop offset="100%" stopColor="#315448" />
              </linearGradient>

              {/* Midground Towers & Architecture Gradient */}
              <linearGradient id="midSkylineGrad" x1="720" y1="200" x2="720" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#284c3f" />
                <stop offset="100%" stopColor="#163127" />
              </linearGradient>

              {/* Foreground Business Village & Creek Waterfront */}
              <linearGradient id="foregroundDubaiGrad" x1="720" y1="360" x2="720" y2="720" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#132c22" />
                <stop offset="50%" stopColor="#0d1f17" />
                <stop offset="100%" stopColor="#060f0c" />
              </linearGradient>

              {/* Golden Growth Surge Trajectory Line Gradient */}
              <linearGradient id="growthLineGrad" x1="0" y1="460" x2="1440" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E8F86E" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#E8F86E" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#34D399" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E8F86E" stopOpacity="1" />
              </linearGradient>

              {/* Upward Light Beam / Spire Glow */}
              <linearGradient id="spireBeacon" x1="720" y1="60" x2="720" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E8F86E" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#A7F3D0" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10261e" stopOpacity="0.0" />
              </linearGradient>

              {/* Window Grid Pattern */}
              <pattern id="windowGrid" width="6" height="8" patternUnits="userSpaceOnUse">
                <rect x="1" y="1" width="2.5" height="3.5" fill="#E8F86E" opacity="0.4" />
              </pattern>
              <pattern id="denseWindows" width="4" height="6" patternUnits="userSpaceOnUse">
                <rect x="1" y="1" width="1.5" height="2" fill="#E8F86E" opacity="0.3" />
              </pattern>
            </defs>

            {/* Sky Background */}
            <rect width="1440" height="720" fill="url(#dubaiSkyGradient)" />

            {/* UPWARD GROWTH TRAJECTORY CHART (Visualizing Dubai D33 Economic Expansion) */}
            <g opacity="0.85">
              {/* Soaring Trendline Curves Rising from Left to Right */}
              <path
                d="M-20,530 C220,510 420,470 640,380 C820,310 1020,220 1260,140 L1460,95"
                stroke="url(#growthLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                fill="none"
              />
              <path
                d="M-20,550 C240,530 460,490 680,400 C860,330 1060,240 1300,160 L1460,115"
                stroke="#E8F86E"
                strokeWidth="1"
                opacity="0.3"
                fill="none"
              />

              {/* Growth Trajectory Data Markers */}
              {/* Point 1: 1971 / Dubai Creek Roots */}
              <circle cx="280" cy="495" r="4.5" fill="#E8F86E" />
              <circle cx="280" cy="495" r="9" stroke="#E8F86E" strokeWidth="1" opacity="0.4" />
              <text x="295" y="492" fill="#d1fae5" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1971: UAE Union &amp; Creek Trade</text>

              {/* Point 2: 2010 / Global Financial Capital & Burj Khalifa */}
              <circle cx="680" cy="365" r="5" fill="#E8F86E" />
              <circle cx="680" cy="365" r="11" stroke="#E8F86E" strokeWidth="1.2" opacity="0.5" />
              <text x="695" y="360" fill="#E8F86E" fontSize="10" fontWeight="bold" fontFamily="sans-serif">2010: Global Banking Sourcing Hub</text>

              {/* Point 3: 2026-2033 / D33 Agenda Peak Growth */}
              <circle cx="1260" cy="140" r="6" fill="#E8F86E" />
              <circle cx="1260" cy="140" r="14" stroke="#E8F86E" strokeWidth="1.5" opacity="0.6" />
              <circle cx="1260" cy="140" r="22" stroke="#E8F86E" strokeWidth="0.8" opacity="0.3" />
              <text x="1130" y="125" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">↗ D33: AED 32T ECONOMIC SCALE</text>
            </g>

            {/* Upward Spire Light Beam shooting from Burj Khalifa Spire into the clouds */}
            <polygon points="700,40 730,40 740,260 690,260" fill="url(#spireBeacon)" />

            {/* LAYER 1: DISTANT DUBAI HIGH-RISE SKYLINES (SHEIKH ZAYED ROAD & DOWNTOWN) */}
            <g fill="url(#distantSkylineGrad)" opacity="0.8">
              {/* Left Background Cluster (Dubai Creek / Deira & Maritime City) */}
              <rect x="40" y="340" width="35" height="240" />
              <polygon points="40,340 57,305 75,340" />
              <rect x="90" y="320" width="45" height="260" />
              <rect x="150" y="300" width="40" height="280" />
              <line x1="170" y1="265" x2="170" y2="300" stroke="#558173" strokeWidth="2" />
              <rect x="205" y="335" width="50" height="250" />

              {/* DUBAI FRAME Silhouette (Zabeel Park Landmark) */}
              <g transform="translate(320, 245)">
                {/* Outer Frame Shape: 50m wide, 95m tall */}
                <path d="M0,0 L56,0 L56,120 L0,120 Z M8,12 L48,12 L48,108 L8,108 Z" fill="#4b7467" />
                {/* Cross diagonal decorative strut in the void */}
                <rect x="2" y="2" width="52" height="8" fill="#588575" />
                <rect x="2" y="110" width="52" height="8" fill="#588575" />
              </g>

              {/* SZR Center Cluster (Emirates Financial Towers, Al Yaqoub, Gevora) */}
              <rect x="420" y="270" width="38" height="310" />
              <polygon points="420,270 439,240 458,270" />
              <rect x="475" y="250" width="45" height="330" />
              <line x1="497" y1="210" x2="497" y2="250" stroke="#558173" strokeWidth="2.5" />

              {/* EMIRATES TOWERS (Twin Iconic Triangular Spires) */}
              {/* Tower 1 (Office Tower 354m) */}
              <g transform="translate(545, 175)">
                <polygon points="0,170 18,30 36,170" fill="#446b5e" />
                <line x1="18" y1="0" x2="18" y2="30" stroke="#446b5e" strokeWidth="3" />
                <line x1="18" y1="30" x2="18" y2="170" stroke="#315448" strokeWidth="1.5" />
              </g>
              {/* Tower 2 (Hotel Tower 309m) */}
              <g transform="translate(590, 205)">
                <polygon points="0,140 16,30 32,140" fill="#3c6155" />
                <line x1="16" y1="5" x2="16" y2="30" stroke="#3c6155" strokeWidth="2.5" />
              </g>

              {/* Right Background Cluster (Business Bay & DIFC) */}
              <rect x="800" y="280" width="40" height="300" />
              <polygon points="800,280 820,245 840,280" />
              <rect x="855" y="260" width="48" height="320" />
              <rect x="915" y="295" width="42" height="290" />
              <rect x="970" y="320" width="38" height="260" />

              {/* BURJ AL ARAB (Iconic Sail Silhouette on the coast) */}
              <g transform="translate(1040, 235)">
                {/* Curved Sail Spine */}
                <path d="M10,130 C10,60 25,20 60,0 C45,45 42,90 44,130 Z" fill="#487265" />
                {/* Mast & Helipad */}
                <line x1="10" y1="0" x2="10" y2="130" stroke="#487265" strokeWidth="3" />
                {/* Helipad disc extending on top right */}
                <line x1="10" y1="35" x2="35" y2="35" stroke="#487265" strokeWidth="2.5" />
                <ellipse cx="38" cy="35" rx="7" ry="2" fill="#487265" />
              </g>

              {/* Dubai Marina / JBR Distant Towers */}
              <rect x="1130" y="310" width="36" height="270" />
              <rect x="1175" y="280" width="42" height="300" />
              <polygon points="1175,280 1196,250 1217,280" />
              <rect x="1230" y="325" width="40" height="260" />
              <rect x="1285" y="290" width="45" height="290" />
              <line x1="1307" y1="250" x2="1307" y2="290" stroke="#558173" strokeWidth="2" />
              <rect x="1345" y="330" width="50" height="250" />
            </g>

            {/* LAYER 2: MIDGROUND ICONIC TOWERS FEATURING MAJESTIC BURJ KHALIFA & CRANES */}
            <g fill="url(#midSkylineGrad)">
              
              {/* Construction Cranes on Active Towers (Symbol of Dubai's Constant Growth & Expansion) */}
              <g stroke="#2c5244" strokeWidth="1.5">
                {/* Crane 1 (Left Tower Growth) */}
                <line x1="230" y1="290" x2="230" y2="230" />
                <line x1="205" y1="235" x2="260" y2="235" />
                <line x1="230" y1="230" x2="205" y2="235" />
                <line x1="230" y1="230" x2="250" y2="235" />
                <line x1="252" y1="235" x2="252" y2="255" strokeWidth="1" strokeDasharray="2 2" />

                {/* Crane 2 (Business Bay Growth Tower) */}
                <line x1="930" y1="260" x2="930" y2="195" />
                <line x1="900" y1="202" x2="965" y2="202" />
                <line x1="930" y1="195" x2="900" y2="202" />
                <line x1="930" y1="195" x2="955" y2="202" />
                <line x1="958" y1="202" x2="958" y2="225" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* MUSEUM OF THE FUTURE (Toroidal Calligraphic Oval Landmark) */}
              <g transform="translate(370, 360)">
                {/* Outer Torus Ellipse */}
                <ellipse cx="45" cy="30" rx="45" ry="26" fill="#204034" />
                {/* Central Void / Eye */}
                <ellipse cx="45" cy="30" rx="20" ry="12" fill="#558173" opacity="0.6" />
                {/* Calligraphic incisions */}
                <path d="M15,28 Q45,18 75,28" stroke="#E8F86E" strokeWidth="1" opacity="0.4" fill="none" />
                <path d="M22,34 Q45,26 68,34" stroke="#E8F86E" strokeWidth="0.8" opacity="0.4" fill="none" />
              </g>

              {/* THE SOARING BURJ KHALIFA (Centerpiece of Dubai's Global Supremacy - World's Tallest Tower) */}
              <g transform="translate(685, 70)" id="burj-khalifa">
                {/* Spire Peak with Illuminated Beacon */}
                <line x1="30" y1="0" x2="30" y2="55" stroke="#163127" strokeWidth="3" />
                <circle cx="30" cy="0" r="3.5" fill="#E8F86E" />
                <circle cx="30" cy="0" r="7" stroke="#E8F86E" strokeWidth="0.8" opacity="0.7" />

                {/* Tier 1 - Spire Column */}
                <rect x="27" y="55" width="6" height="40" fill="#1d3d31" />

                {/* Tier 2 - Narrow Upper Shaft */}
                <rect x="24" y="95" width="12" height="50" fill="#19372c" />
                <polygon points="24,95 27,85 33,85 36,95" fill="#19372c" />

                {/* Tier 3 - Stepped Setback Left */}
                <rect x="21" y="145" width="18" height="60" fill="#152f25" />
                <polygon points="21,145 24,135 36,135 39,145" fill="#152f25" />
                <rect x="27" y="150" width="6" height="50" fill="url(#denseWindows)" />

                {/* Tier 4 - Stepped Setback Right */}
                <rect x="16" y="205" width="28" height="70" fill="#122a20" />
                <polygon points="16,205 21,195 39,195 44,205" fill="#122a20" />
                <rect x="18" y="210" width="24" height="60" fill="url(#denseWindows)" />

                {/* Tier 5 - Mid Setback Stepped Wings */}
                <rect x="10" y="275" width="40" height="80" fill="#0f241c" />
                <polygon points="10,275 16,260 44,260 50,275" fill="#0f241c" />
                <rect x="13" y="280" width="34" height="70" fill="url(#denseWindows)" />

                {/* Tier 6 - Massive Y-Shaped Lower Tower Base */}
                <rect x="2" y="355" width="56" height="110" fill="#0c1f17" />
                <polygon points="2,355 10,335 50,335 58,355" fill="#0c1f17" />
                <rect x="6" y="360" width="48" height="95" fill="url(#windowGrid)" />

                {/* Architectural Vertical Ridge Lines */}
                <line x1="30" y1="55" x2="30" y2="465" stroke="#254d3e" strokeWidth="1.5" />
                <line x1="20" y1="205" x2="20" y2="465" stroke="#254d3e" strokeWidth="1" />
                <line x1="40" y1="205" x2="40" y2="465" stroke="#254d3e" strokeWidth="1" />
              </g>

              {/* Flanking High-Tech SZR & DIFC Towers */}
              <rect x="615" y="310" width="45" height="230" fill="#163127" />
              <rect x="620" y="320" width="35" height="200" fill="url(#denseWindows)" />
              <polygon points="615,310 637,275 660,310" fill="#163127" />

              <rect x="765" y="325" width="48" height="215" fill="#163127" />
              <rect x="770" y="335" width="38" height="190" fill="url(#denseWindows)" />
              <line x1="789" y1="290" x2="789" y2="325" stroke="#163127" strokeWidth="2" />
            </g>

            {/* LAYER 3: FOREGROUND BUSINESS VILLAGE DEIRA, DUBAI METRO VIADUCT & CREEK HARBOR */}
            <g fill="url(#foregroundDubaiGrad)">
              
              {/* DUBAI METRO Elevated Curvilinear Track (Modern Dubai Mobility System) */}
              <g stroke="#224838" strokeWidth="4" opacity="0.9">
                <path d="M-10,505 Q280,485 580,480 T1180,470 T1460,455" fill="none" />
                <path d="M-10,511 Q280,491 580,486 T1180,476 T1460,461" fill="none" strokeWidth="2" />
                {/* Metro Pillars */}
                <line x1="120" y1="500" x2="120" y2="560" strokeWidth="5" />
                <line x1="280" y1="490" x2="280" y2="560" strokeWidth="5" />
                <line x1="450" y1="485" x2="450" y2="560" strokeWidth="5" />
                <line x1="620" y1="480" x2="620" y2="560" strokeWidth="5" />
                <line x1="820" y1="475" x2="820" y2="560" strokeWidth="5" />
                <line x1="1020" y1="472" x2="1020" y2="560" strokeWidth="5" />
                <line x1="1240" y1="465" x2="1240" y2="560" strokeWidth="5" />
                <line x1="1400" y1="458" x2="1400" y2="560" strokeWidth="5" />
                {/* Futuristic Red Line Metro Train speeding on the viaduct */}
                <rect x="520" y="470" width="90" height="9" rx="3" fill="#E8F86E" />
                <circle cx="530" cy="474" r="1.5" fill="#0d1f17" />
                <circle cx="545" cy="474" r="1.5" fill="#0d1f17" />
                <circle cx="560" cy="474" r="1.5" fill="#0d1f17" />
                <circle cx="575" cy="474" r="1.5" fill="#0d1f17" />
                <circle cx="590" cy="474" r="1.5" fill="#0d1f17" />
              </g>

              {/* FOREGROUND DOWNTOWN & BUSINESS VILLAGE BLOCKS */}
              {/* Left Commercial Block: Business Village Deira / Port Saeed */}
              <rect x="0" y="460" width="130" height="260" />
              <rect x="15" y="480" width="100" height="180" fill="url(#windowGrid)" />
              <rect x="140" y="440" width="110" height="280" />
              <rect x="155" y="460" width="80" height="200" fill="url(#windowGrid)" />

              {/* Center Institutional Underwriting Pods */}
              <rect x="270" y="470" width="120" height="250" />
              <rect x="410" y="450" width="140" height="270" />
              <rect x="570" y="480" width="130" height="240" />
              <rect x="720" y="460" width="140" height="260" />
              <rect x="880" y="475" width="120" height="245" />

              {/* Right Banking Conglomerate Blocks */}
              <rect x="1020" y="450" width="130" height="270" />
              <rect x="1170" y="470" width="140" height="250" />
              <rect x="1330" y="440" width="130" height="280" />

              {/* Dubai Creek Dhow Vessel silhouette on waterfront (Heritage to Future Bridge) */}
              <g transform="translate(60, 525)">
                {/* Traditional Wooden Dhow Hull */}
                <path d="M0,25 Q30,30 65,25 L55,34 L10,34 Z" fill="#09140f" />
                {/* Triangular Lateen Sail */}
                <polygon points="15,23 35,2 40,23" fill="#132c22" />
                <line x1="12" y1="25" x2="38" y2="0" stroke="#09140f" strokeWidth="1.5" />
              </g>
            </g>

            {/* Deep Dark Base Fog Overlay so Links & Text have 100% Crisp WCAG Legibility */}
            <rect x="0" y="480" width="1440" height="240" fill="url(#foregroundDubaiGrad)" opacity="0.98" />
          </svg>
        </div>

        {/* 2. DUBAI ECONOMIC GROWTH TRAJECTORY PILL BAR */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full mb-6">
          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 backdrop-blur-md border border-white/10 p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-2xl">
            {/* Growth Metrics Title */}
            <div className="flex flex-wrap items-center gap-3 text-center lg:text-left rtl:lg:text-right">
              <div className="w-10 h-10 rounded-2xl bg-[#E8F86E] text-slate-950 flex items-center justify-center font-black shadow-md shrink-0 mx-auto lg:mx-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E8F86E] text-slate-950 text-[10px] font-black uppercase tracking-wider font-mono">
                    {t.footer.d33Agenda}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    {t.footer.economicTarget}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white font-display mt-0.5">
                  {t.footer.poweringGrowth}
                </h3>
              </div>
            </div>

            {/* 3 Quick Growth Stat Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-y lg:border-y-0 lg:border-x border-white/10 py-3 lg:py-0 lg:px-6 text-center">
              <div>
                <div className="text-sm sm:text-base font-black text-[#E8F86E] font-display">
                  +9.4%
                </div>
                <div className="text-[10px] text-slate-300">{t.footer.retailSourcing}</div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-black text-white font-display">
                  AED 1.2B+
                </div>
                <div className="text-[10px] text-slate-300">{t.footer.facilitiesOriginated}</div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-black text-emerald-400 font-display">
                  96.4%
                </div>
                <div className="text-[10px] text-slate-300">{t.footer.approvalRate}</div>
              </div>
            </div>

            {/* Newsletter Pill Form */}
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-sm">
              <div className="flex items-center bg-white/10 hover:bg-white/15 focus-within:bg-white/20 rounded-full p-1 border border-white/20 focus-within:border-[#E8F86E] transition-all">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none rtl:text-right"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-black bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>{subscribed ? t.footer.newsletterJoined : t.footer.newsletterJoin}</span>
                  <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 3. MAIN FOOTER CONTENT OVERLAY (Matching Reference Layout Exactly) */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pt-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            
            {/* Column 1: Links (Reference Image Style: Underlined "Links") */}
            <div className="lg:col-span-2 space-y-3">
              <div className="pb-1.5 border-b border-white/70 w-24">
                <h4 className="text-sm font-extrabold text-white tracking-wide">
                  {t.footer.linksCol1}
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                <li>
                  <button
                    onClick={() => handlePageClick('contact')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.nav.contact}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('calculator')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.nav.calculator}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('services')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {language === 'ar' ? 'بطاقات الائتمان للأفراد' : 'Retail Credit Cards'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('services')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {language === 'ar' ? 'التمويل الشخصي' : 'Personal Financing'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Links (Careers, Case Studies, Partners) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="pb-1.5 border-b border-white/70 w-24">
                <h4 className="text-sm font-extrabold text-white tracking-wide">
                  {t.footer.linksCol2}
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                <li>
                  <button
                    onClick={() => handlePageClick('careers')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right font-bold text-[#E8F86E] cursor-pointer"
                  >
                    {t.nav.careers}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('case-studies')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.nav.caseStudies}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('partners')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.nav.partners}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('about')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {language === 'ar' ? 'عن مجموعة إلياس' : 'About ALIYAS Group'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Links (EULA, Privacy, Compliance) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="pb-1.5 border-b border-white/70 w-24">
                <h4 className="text-sm font-extrabold text-white tracking-wide">
                  {t.footer.linksCol3}
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                <li>
                  <button
                    onClick={() => {
                      handlePageClick('about');
                      setTimeout(() => {
                        const el = document.getElementById('compliance-certifications');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? 'معايير الأيزو والتراخيص الرسمية' : 'ISO Standards & Licenses'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8F86E]" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenPdfModal}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.nav.profilePdf}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('calculator')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.footer.cbuaeDbr}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('contact')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.footer.privacyPolicy}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageClick('contact')}
                    className="hover:text-[#E8F86E] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {t.footer.termsConditions}
                  </button>
                </li>
              </ul>
            </div>

            {/* Circular Social / Action Icons (Exact Style from Reference Image: 3 White Circular Outline Buttons) */}
            <div className="lg:col-span-2 flex items-center gap-3 pt-3 lg:pt-6">
              {/* Circle 1: Email / Message */}
              <button
                onClick={() => {
                  window.location.href = `mailto:${COMPANY_INFO.email}`;
                }}
                title={t.common.emailUs}
                className="w-11 h-11 rounded-full border border-white/80 text-white hover:border-[#E8F86E] hover:bg-[#E8F86E] hover:text-slate-950 transition-all flex items-center justify-center group shadow-sm active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>

              {/* Circle 2: WhatsApp / Phone */}
              <button
                onClick={() => {
                  window.open('https://wa.me/971501234567', '_blank');
                }}
                title={t.common.callNow}
                className="w-11 h-11 rounded-full border border-white/80 text-white hover:border-[#E8F86E] hover:bg-[#E8F86E] hover:text-slate-950 transition-all flex items-center justify-center group shadow-sm active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>

              {/* Circle 3: LinkedIn / Corporate Alliance */}
              <button
                onClick={() => {
                  window.open('https://www.linkedin.com', '_blank');
                }}
                title="LinkedIn Corporate Profile"
                className="w-11 h-11 rounded-full border border-white/80 text-white hover:border-[#E8F86E] hover:bg-[#E8F86E] hover:text-slate-950 transition-all flex items-center justify-center group shadow-sm active:scale-95 cursor-pointer"
              >
                <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Right Side: Brand & Direct Dubai Office (Reference Style: Domain Title + Address with Arrows) */}
            <div className="lg:col-span-4 space-y-2 text-left lg:text-right rtl:lg:text-left">
              <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
                AMAFH.ae
              </h3>
              
              <div className="space-y-1 text-xs text-slate-300 font-medium">
                <a
                  href="https://maps.google.com/?q=Business+Village+Deira+Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E8F86E] transition-colors inline-flex items-center lg:justify-end rtl:lg:justify-start gap-1 w-full"
                >
                  <span>{language === 'ar' ? 'مكاتب 405-408، المبنى B' : 'Offices 405-408, Block B'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>

                <a
                  href="https://maps.google.com/?q=Business+Village+Deira+Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E8F86E] transition-colors inline-flex items-center lg:justify-end rtl:lg:justify-start gap-1 w-full"
                >
                  <span>{language === 'ar' ? 'قرية الأعمال، بورسعيد، ديرة، دبي' : 'Business Village, Port Saeed, Deira, Dubai'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>

                <div className="inline-flex items-center lg:justify-end rtl:lg:justify-start gap-1.5 w-full text-slate-300 pt-1">
                  <span>tel.: {COMPANY_INFO.phone}</span>
                  <Phone className="w-3 h-3 text-[#E8F86E]" />
                </div>

                <div className="inline-flex items-center lg:justify-end rtl:lg:justify-start gap-1.5 w-full text-slate-300">
                  <span>email: {COMPANY_INFO.email}</span>
                  <Mail className="w-3 h-3 text-[#E8F86E]" />
                </div>
              </div>

              {/* Consultation Quick Button */}
              <div className="pt-2 flex lg:justify-end rtl:lg:justify-start">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#E8F86E] hover:text-slate-950 text-white text-xs font-bold transition-all border border-white/20 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.footer.scheduleConsultation}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. SUB-FOOTER BOTTOM STRIP (Matching Reference Image Exact Layout) */}
      <div className="w-full bg-[#060f0c] border-t border-white/10 py-5 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Left: Brand Name with colored accent asterisk like "TrafficBot*" */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base tracking-tight text-white font-display">
              {t.company.name}<span className="text-[#E8F86E] font-mono">*</span>
            </span>
            <span className="text-[11px] text-slate-400 border-l rtl:border-r rtl:border-l-0 border-white/20 pl-2 rtl:pr-2 rtl:pl-0">
              {t.company.type} • Dubai
            </span>
          </div>

          {/* Center: Legal Quick Links matching reference */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-slate-300 font-medium text-[11px]">
            <button
              onClick={onOpenPdfModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.eula}
            </button>
            <button
              onClick={() => handlePageClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <button
              onClick={() => handlePageClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.termsConditions}
            </button>
            <button
              onClick={() => handlePageClick('calculator')}
              className="hover:text-[#E8F86E] transition-colors text-purple-300 cursor-pointer"
            >
              {t.footer.cbuaeDbr}
            </button>
          </div>

          {/* Payment & Banking Security Badges matching the reference image's card logos */}
          <div className="flex items-center gap-2">
            {/* Mastercard Badge */}
            <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-0.5" title="Mastercard Accredited">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B] opacity-90" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] -ml-1 opacity-90" />
            </div>

            {/* VISA Badge */}
            <div className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-black italic tracking-wider text-blue-400 font-serif" title="VISA Verified">
              VISA
            </div>

            {/* Islamic Banking Badge */}
            <div className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-bold text-emerald-400 tracking-tight" title="Sharia Compliant">
              ISLAMIC
            </div>

            {/* UAE Central Bank Badge */}
            <div className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-bold text-amber-300 tracking-tight" title="UAE Central Bank DBR Compliant">
              CBUAE
            </div>
          </div>

          {/* Right: Copyright & Attribution matching reference */}
          <div className="text-[11px] text-slate-400 text-center lg:text-right rtl:lg:text-left">
            {t.footer.subFooterLicensing}
          </div>

        </div>
      </div>
    </footer>
  );
};
