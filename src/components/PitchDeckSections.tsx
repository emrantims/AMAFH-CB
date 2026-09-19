import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
  CreditCard,
  Briefcase,
  Layers,
  Database,
  Cpu,
  Globe,
  Plus,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Sparkles,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/amafhData';
import { useLanguage } from '../context/LanguageContext';

// -------------------------------------------------------------
// 1. SLIDE 1 ARCHETYPE: Dark Hero Vault with Floating Stat Badge
// -------------------------------------------------------------
export const PitchHeroVault: React.FC<{
  badge?: string;
  title?: string;
  subtitle?: string;
  statNumber?: string;
  statLabel?: string;
  onCtaClick?: () => void;
}> = ({
  badge,
  title,
  subtitle,
  statNumber = '5,000+',
  statLabel,
  onCtaClick,
}) => {
  const { isRTL, language } = useLanguage();

  const displayBadge = badge || (language === 'ar' ? 'ذكاء الاستقطاب المؤسسي المالي' : 'INSTITUTIONAL SOURCING INTELLIGENCE');
  const displayTitle = title || (language === 'ar' ? 'تمكين الاستقطاب المالي والاكتتاب البنكي' : 'Empowering Financial Sourcing & Underwriting');
  const displaySubtitle = subtitle || (language === 'ar' ? 'صياغة المستقبل عبر شراكات بنكية رائدة في الإمارات، والتدقيق الائتماني، وملفات التمويل المكتملة' : 'Shaping The Future With UAE Banking Alliances, Risk Verification & Clean File Documentation');
  const displayStatLabel = statLabel || (language === 'ar' ? 'ملف تمويلي ناجح ومعتمد' : 'Successful Sourcing Files');

  return (
    <div className="relative rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E8F86E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Headline & Meta */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8F86E] text-xs font-mono font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#E8F86E] animate-pulse" />
            <span>{displayBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] uppercase max-w-2xl">
            {displayTitle}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            {displaySubtitle}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onCtaClick}
              className="w-14 h-14 rounded-full bg-white hover:bg-[#E8F86E] text-slate-950 flex items-center justify-center transition-all duration-300 shadow-lg group cursor-pointer"
              title={language === 'ar' ? 'استكشف المحفظة' : 'Explore Portfolio'}
            >
              <ArrowDownRight className={`w-6 h-6 group-hover:rotate-[-45deg] transition-transform duration-300 ${isRTL ? 'rotate-90' : ''}`} />
            </button>
            <span className="text-xs sm:text-sm font-bold text-slate-400">
              {language === 'ar' ? 'استكشف منظومة الخدمات المؤسسية ↖' : 'Explore Enterprise Framework ↗'}
            </span>
          </div>
        </div>

        {/* Right Floating Stat Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Ambient artwork container */}
            <div className="w-56 sm:w-64 h-64 sm:h-72 rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-950 to-slate-900 p-1 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-end p-4">
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/80 pointer-events-none" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono text-[#E8F86E] uppercase tracking-wider">
                  AMAFH HUB • DEIRA
                </span>
                <div className="text-xs font-bold text-white">
                  {language === 'ar' ? 'مركز عمليات 9,500 قدم²' : '9,500 sq.ft Operations'}
                </div>
              </div>
            </div>

            {/* Floating White Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`absolute -bottom-6 ${isRTL ? '-right-6 sm:-right-8' : '-left-6 sm:-left-8'} bg-white text-slate-950 p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-200/80 flex items-center gap-3.5`}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-slate-950">
                  {statNumber}
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  {displayStatLabel}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-purple-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------
// 2. SLIDE 2 ARCHETYPE: 3 Tri-Colored Cards (Grey, Lime, Dark) + Responsible Header
// ---------------------------------------------------------------------------------
export const TriColorComplianceSection: React.FC<{
  tag?: string;
  headline?: string;
  cards?: {
    num: string;
    title: string;
    desc: string;
    variant: 'grey' | 'lime' | 'dark';
  }[];
}> = ({
  tag,
  headline,
  cards,
}) => {
  const { isRTL, language } = useLanguage();

  const displayTag = tag || (language === 'ar' ? 'الحوكمة والنزاهة الائتمانية لدى أَمَف' : 'AMAFH GOVERNANCE & SOURCING INTEGRITY');
  const displayHeadline = headline || (language === 'ar' ? 'المسؤولية والامتثال الرقابي ↘' : 'Responsible and Compliance ↘');

  const defaultCards = language === 'ar' ? [
    {
      num: '01',
      title: 'جودة البيانات والتحقق من الهوية (KYC)',
      desc: 'تحقق بيومتري مركزي ومطابقة تراخيص الشركات وتدقيق السجلات التجارية قبل التقديم لمكاتب الاكتتاب البنكية.',
      variant: 'grey' as const,
    },
    {
      num: '02',
      title: 'التميز المهني في الاستشارات التمويلية',
      desc: 'أكثر من 100 مستشار مالي معتمد ومدرب على لوائح الإقراض الاستهلاكي الصادرة عن مصرف الإمارات المركزي وأخلاقيات المبيعات.',
      variant: 'lime' as const,
    },
    {
      num: '03',
      title: 'الالتزام بسقف 50% لنسبة عبء الدين (DBR)',
      desc: 'فحص مسبق دقيق يضمن عدم تجاوز أي عميل للنسبة النظامية المحددة من المصرف المركزي لحماية المحافظ المصرفية.',
      variant: 'dark' as const,
    },
  ] : [
    {
      num: '01',
      title: 'Data Quality and KYC Verification',
      desc: 'Centralized biometric document verification and employer trade license validation before submission to bank underwriting desks.',
      variant: 'grey' as const,
    },
    {
      num: '02',
      title: 'Talent Excellence in Financial Advisory',
      desc: '100+ certified relationship managers trained in UAE Central Bank consumer lending guidelines and ethical sales practices.',
      variant: 'lime' as const,
    },
    {
      num: '03',
      title: 'Central Bank 50% DBR Debt Caps',
      desc: 'Strict automated pre-screening ensuring no client exceeds the regulatory debt-burden ratio, safeguarding bank portfolios.',
      variant: 'dark' as const,
    },
  ];

  const activeCards = cards || defaultCards;

  return (
    <section className="space-y-8">
      {/* 3 Tri-Color Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {activeCards.map((card, idx) => {
          if (card.variant === 'lime') {
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-2xl sm:text-3xl font-black font-display text-slate-950">
                    {card.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black font-display leading-tight">
                    {card.title}
                  </h3>
                  <div className="w-8 h-1 bg-slate-950 rounded-full" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed mt-6">
                  {card.desc}
                </p>
              </div>
            );
          }

          if (card.variant === 'dark') {
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#E8F86E]">
                    {card.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display leading-tight">
                    {card.title}
                  </h3>
                  <div className="w-8 h-1 bg-[#E8F86E] rounded-full" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-6">
                  {card.desc}
                </p>
              </div>
            );
          }

          // Default: Grey
          return (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#F4F4F5] text-slate-900 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-2xl sm:text-3xl font-black font-display text-purple-700">
                  {card.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display leading-tight">
                  {card.title}
                </h3>
                <div className="w-8 h-1 bg-purple-700 rounded-full" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-6">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Header Bar from Reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            {displayTag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 mt-1">
            {displayHeadline}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          {language === 'ar'
            ? 'عمليات تدقيق مستمرة، واستعلامات عبر الاتحاد للمعلومات الائتمانية، ومراجعات امتثال متعددة المراحل تحقق 99.4% ملفات مكتملة ونظيفة.'
            : 'Continuous quality audits, AECB verification, and multi-tier compliance reviews maintaining 99.4% clean file approvals.'}
        </p>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------
// 3. SLIDE 3 ARCHETYPE: Solutions Stack (Title Left + Center Visual + 3 Stacked Cards)
// -----------------------------------------------------------------------------------
export const CompanySolutionsStack: React.FC<{
  superHeadline?: string;
  mainHeadline?: string;
  items?: { num: string; title: string; desc: string; isLime?: boolean }[];
}> = ({
  superHeadline,
  mainHeadline,
  items,
}) => {
  const { isRTL, language } = useLanguage();

  const displaySuper = superHeadline || (language === 'ar' ? 'صياغة المستقبل باستقطاب ائتماني متوافق رقابياً' : 'SHAPING THE FUTURE WITH COMPLIANT CREDIT SOURCING');
  const displayMain = mainHeadline || (language === 'ar' ? 'حلول الاستقطاب المالي ↘' : 'Our Sourcing Solutions ↘');

  const defaultItems = language === 'ar' ? [
    {
      num: '01',
      title: 'استقطاب بطاقات الائتمان للأفراد',
      desc: 'بطاقات مصرفية إسلامية وتقليدية توفر استرداداً نقدياً، وأميال طيران، ودخول صالات المطارات، ومزايا مجانية مدى الحياة.',
      isLime: true,
    },
    {
      num: '02',
      title: 'تمويل شخصي بتحويل وبدون تحويل راتب',
      desc: 'حلول شراء وتوحيد المديونيات، وسداد الالتزامات المتعددة، وتسهيلات السيولة النقدية لموظفي الشركات المعتمدة.',
      isLime: false,
    },
    {
      num: '03',
      title: 'مكاتب استقطاب وتوعية داخل مقرات العمل',
      desc: 'جلسات استشارات مالية ميدانية مجانية وحملات بطاقات ائتمان مسبقة الموافقة لشركات المقاولات والضيافة والتجزئة.',
      isLime: false,
    },
  ] : [
    {
      num: '01',
      title: 'Optimize Retail Credit Card Sourcing',
      desc: 'Tier-1 Islamic and conventional cards tailored for cashback, skywards miles, lounge access, and free-for-life privileges.',
      isLime: true,
    },
    {
      num: '02',
      title: 'Salary Transfer & NST Personal Finance',
      desc: 'Seamless debt buyout, salary consolidation, and non-salary transfer liquidity with approved company listings.',
      isLime: false,
    },
    {
      num: '03',
      title: 'Corporate Workplace Onboarding Desks',
      desc: 'Free on-site financial wellness clinics and pre-cleared credit card drives for contracting and hospitality employers.',
      isLime: false,
    },
  ];

  const activeItems = items || defaultItems;

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Headlines */}
        <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
              {displaySuper}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-950 leading-tight">
              {displayMain}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              {language === 'ar'
                ? 'استراتيجيات استقطاب عملاء مصممة خصيصاً لإلغاء زيارات الفروع اليدوية وتسريع الصرف البنكي خلال 48 ساعة.'
                : 'Bespoke customer acquisition strategies engineered to eliminate branch drop-offs and accelerate disbursals to within 48 hours.'}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{language === 'ar' ? 'إنجاز التمويل والصرف خلال 48 ساعة' : '48-Hour Bank Disbursal Turnaround'}</span>
          </div>
        </div>

        {/* Center Column: Visual Card */}
        <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#E8F86E] text-[10px] font-mono font-bold">
              {language === 'ar' ? 'بوابة إلكترونية جاهزة' : 'PORTAL READY'}
            </span>
            <h4 className="text-lg font-black font-display">
              {language === 'ar' ? 'ذكاء الاكتتاب المصرفي' : 'Underwriting Intelligence'}
            </h4>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1 mt-12">
            <div className="text-xs font-bold text-slate-200">{language === 'ar' ? 'ضمان خلو الملف من النواقص' : 'Zero Kickback Guarantee'}</div>
            <div className="text-[11px] text-slate-400">{language === 'ar' ? 'تقديم مباشر عبر أنظمة البنوك' : 'Direct submission via bank CRM'}</div>
          </div>
        </div>

        {/* Right Column: 3 Stacked Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {activeItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl transition-all shadow-xs flex items-start gap-4 ${
                item.isLime
                  ? 'bg-[#E8F86E] text-slate-950'
                  : 'bg-white border border-slate-200/80 text-slate-900'
              }`}
            >
              <span
                className={`text-xl font-black font-display shrink-0 ${
                  item.isLime ? 'text-slate-950' : 'text-purple-700'
                }`}
              >
                {item.num}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold leading-tight">
                  {item.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    item.isLime ? 'text-slate-800 font-medium' : 'text-slate-600'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------------------
// 4. SLIDE 4 ARCHETYPE: Stepped Pillar Breakdown (Volume & Sourcing Breakdown)
// -------------------------------------------------------------------------------------
export const SteppedPillarBreakdown: React.FC<{
  tag?: string;
  headline?: string;
  marketShareText?: string;
  pillars?: { label: string; amount: string; desc: string; isLime?: boolean; height: string }[];
}> = ({
  tag,
  headline,
  marketShareText,
  pillars,
}) => {
  const { isRTL, language } = useLanguage();

  const displayTag = tag || (language === 'ar' ? 'مؤشرات وأحجام استقطاب أَمَف' : 'AMAFH SOURCING METRICS & VOLUME');
  const displayHeadline = headline || (language === 'ar' ? 'توزيع المحفظة وحجم التسهيلات ↘' : 'Revenue Expense Breakdown ↘');
  const displayMarket = marketShareText || (language === 'ar' ? '96.4% نسبة الموافقة من أول تقديم' : '96.4% First-Time Bank Approval Rate');

  const defaultPillars = language === 'ar' ? [
    {
      label: 'المرحلة 01: بطاقات الائتمان',
      amount: '+85 مليون درهم',
      desc: 'سقوف بطاقات ائتمان سنوية مستقطبة لصالح بنوك إسلامية رائدة.',
      isLime: false,
      height: 'h-48 sm:h-56',
    },
    {
      label: 'المرحلة 02: التمويل الشخصي',
      amount: '+120 مليون درهم',
      desc: 'تسهيلات تحويل رواتب وهيكلة شراء مديونيات متوافقة مع الشريعة.',
      isLime: false,
      height: 'h-60 sm:h-72',
    },
    {
      label: 'المرحلة 03: التمويل المؤسسي',
      amount: '+175 مليون درهم',
      desc: 'المستهدف الإجمالي للتمويلات البنكية المعتمدة لعام 2025/2026.',
      isLime: true,
      height: 'h-72 sm:h-88',
    },
  ] : [
    {
      label: 'Stage 01: Retail Cards',
      amount: 'AED 85M+',
      desc: 'Annual card limits sourced across Tier-1 Islamic institutions.',
      isLime: false,
      height: 'h-48 sm:h-56',
    },
    {
      label: 'Stage 02: Personal Finance',
      amount: 'AED 120M+',
      desc: 'Salary transfer facilities structured with debt buyouts.',
      isLime: false,
      height: 'h-60 sm:h-72',
    },
    {
      label: 'Stage 03: Corporate Sourcing',
      amount: 'AED 175M+',
      desc: 'Projected 2025/2026 total verified banking originations.',
      isLime: true,
      height: 'h-72 sm:h-88',
    },
  ];

  const activePillars = pillars || defaultPillars;

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        {/* Left Info & Black Stat Box */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              {displayTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-950 mt-1">
              {displayHeadline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              {language === 'ar'
                ? 'نمو متواصل واستقطاب متصاعد لمحفظة تمويل التجزئة المصرفية الإسلامية والتقليدية في الإمارات.'
                : 'Demonstrating steady origination scale across premier UAE Islamic and conventional retail portfolios.'}
            </p>
          </div>

          {/* Black Stat Box with Plus Icon */}
          <div className="p-6 rounded-3xl bg-slate-950 text-white shadow-xl flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E8F86E] text-slate-950 flex items-center justify-center font-black text-xs">
                  +
                </div>
                <span className="text-3xl sm:text-4xl font-black font-display text-[#E8F86E]">
                  96.4%
                </span>
              </div>
              <div className="text-xs font-bold text-slate-300">
                {displayMarket}
              </div>
            </div>
            <ShieldCheck className="w-8 h-8 text-[#E8F86E]/80" />
          </div>
        </div>

        {/* Right Stepped Pillar Cards */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4 items-end">
          {activePillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-4 sm:p-6 flex flex-col justify-between transition-all ${
                pillar.height
              } ${
                pillar.isLime
                  ? 'bg-[#E8F86E] text-slate-950 shadow-lg'
                  : 'bg-[#F4F4F5] text-slate-900 border border-slate-200/80 shadow-xs'
              }`}
            >
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider font-display">
                {pillar.label}
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-2xl font-black font-display">
                  {pillar.amount}
                </div>
                <p
                  className={`text-[10px] sm:text-xs leading-snug ${
                    pillar.isLime ? 'text-slate-800 font-medium' : 'text-slate-500'
                  }`}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------------
// 5. SLIDE 5 ARCHETYPE: Evolution With Technology (Split Cards + Portal Frame)
// ---------------------------------------------------------------------------------
export const EvolutionTechSplit: React.FC<{
  headline?: string;
  tag?: string;
  leftCardText?: { title: string; desc: string };
  rightCardText?: { title: string; desc: string };
}> = ({
  headline,
  tag,
  leftCardText,
  rightCardText,
}) => {
  const { isRTL, language } = useLanguage();

  const displayTag = tag || (language === 'ar' ? 'قدرات الاكتتاب الرقمي المتقدمة' : 'DIGITAL UNDERWRITING CAPABILITIES');
  const displayHeadline = headline || (language === 'ar' ? 'التطور يبدأ مع التكنولوجيا ↘' : 'Evolution Begins With Technology');

  const defaultLeft = language === 'ar' ? {
    title: 'الالتزام بأعلى معايير التميز',
    desc: 'قوائم تدقيق CVVB الحصرية يتم فحصها بدقة قبل إرسال أي ملف من مركز عملياتنا بقرية الأعمال.',
  } : {
    title: 'Commitment To Excellence',
    desc: 'Proprietary CVVB checklists verified before any file leaves our Business Village operations hub.',
  };

  const defaultRight = language === 'ar' ? {
    title: 'حلول تركز على السرعة القصوى',
    desc: 'ربط مباشر مع بوابات الائتمان بالبنوك الشريكة لإرسال المستندات واعتمادها في الوقت الفعلي.',
  } : {
    title: 'Solutions Focused On Speed',
    desc: 'Direct API integrations with partner banking credit portals for real-time document submission.',
  };

  const activeLeft = leftCardText || defaultLeft;
  const activeRight = rightCardText || defaultRight;

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Headline & Split 2 Cards */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              {displayTag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 mt-1 leading-tight">
              {displayHeadline}
            </h2>
          </div>

          <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-md">
            <ArrowDownRight className={`w-5 h-5 text-[#E8F86E] ${isRTL ? 'rotate-90' : ''}`} />
          </div>

          {/* Split 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-[#F4F4F5] border border-slate-200/80 text-slate-900 shadow-xs space-y-2">
              <h4 className="font-extrabold text-sm text-slate-950">
                {activeLeft.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeLeft.desc}
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-xs space-y-2">
              <h4 className="font-black text-sm">
                {activeRight.title}
              </h4>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {activeRight.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Banking Portal Frame */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                AMAFH-CVVB-UNDERWRITING-TERMINAL.ae
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{language === 'ar' ? 'محرك معالجة الملفات الائتمانية' : 'File Processing Engine'}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  {language === 'ar' ? 'نشط • صفر رفض' : 'ACTIVE • 0 REJECTIONS'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xl font-black font-display text-[#E8F86E]">
                    99.4%
                  </div>
                  <div className="text-[10px] text-slate-300">{language === 'ar' ? 'ملفات مكتملة خالية من النواقص' : 'Clean File Ratio'}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xl font-black font-display text-white">
                    {language === 'ar' ? '48 ساعة' : '48 Hours'}
                  </div>
                  <div className="text-[10px] text-slate-300">{language === 'ar' ? 'سرعة صرف التمويل' : 'Fast Disbursals'}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/50 to-indigo-950/50 border border-purple-500/20 text-xs text-purple-200">
                {language === 'ar'
                  ? 'بوابات مباشرة مع بنك دبي الإسلامي، مصرف الشارقة الإسلامي، ومصرف الإمارات الإسلامي.'
                  : 'Direct bank portals with Dubai Islamic Bank, Sharjah Islamic Bank, and Emirates Islamic.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------------
// 6. SLIDE 6 ARCHETYPE: Technology & Sourcing Infrastructure 4-Card Quad
// ---------------------------------------------------------------------------------
export const TechInfrastructureQuad: React.FC<{
  headline?: string;
  tag?: string;
}> = ({
  headline,
  tag,
}) => {
  const { isRTL, language } = useLanguage();

  const displayTag = tag || (language === 'ar' ? 'بنية الاستقطاب المصرفي المؤسسي' : 'ENTERPRISE SOURCING ARCHITECTURE');
  const displayHeadline = headline || (language === 'ar' ? 'البنية التحتية التكنولوجية ↘' : 'Technology Infrastructure ↘');

  return (
    <section className="space-y-8">
      {/* 2 Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-6 rounded-3xl bg-[#F4F4F5] border border-slate-200/80 text-slate-900 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-700">{language === 'ar' ? '01 استقطاب بنكي مباشر' : '01 Direct Bank Sourcing'}</span>
            <h4 className="font-black text-base text-slate-950">{language === 'ar' ? 'تكامل واجهات برمجة التطبيقات البنكية' : 'Bank API Portal Integrations'}</h4>
            <p className="text-xs text-slate-500">{language === 'ar' ? 'تحويل آمن ومؤتمت للملفات مباشرة لمكاتب الاكتتاب.' : 'Secure automated file transfers straight to underwriting desks.'}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-xs">
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-slate-950">{language === 'ar' ? '02 تدقيق بيومتري متقدم' : '02 Biometric Underwriting'}</span>
            <h4 className="font-black text-base">{language === 'ar' ? 'فحص الهوية الإماراتية وبيانات E-KYC' : 'E-KYC & Emirates ID Scanners'}</h4>
            <p className="text-xs text-slate-800 font-medium">{language === 'ar' ? 'تحقق بيومتري فوري يضمن صحة وموثوقية الهوية 100%.' : 'Instant biometric verification ensuring 100% genuine identity.'}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-950 text-[#E8F86E] flex items-center justify-center shrink-0 shadow-xs">
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </div>
        </div>
      </div>

      {/* Central Headline */}
      <div className="text-center max-w-2xl mx-auto py-2">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
          {displayTag}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 mt-1">
          {displayHeadline}
        </h2>
      </div>

      {/* 2 Bottom Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-6 rounded-3xl bg-[#F4F4F5] border border-slate-200/80 text-slate-900 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-700">{language === 'ar' ? '03 خزانة بيانات آمنة ومشفرة' : '03 Secure Customer Data Vault'}</span>
            <h4 className="font-black text-base text-slate-950">{language === 'ar' ? 'تخزين مشفر بمعيار AES-256' : 'AES-256 Encrypted Storage'}</h4>
            <p className="text-xs text-slate-500">{language === 'ar' ? 'متوافقة مع معيار ISO 9001:2015 وتلتزم الصرامة بخصوصية البيانات الإماراتية.' : 'ISO 9001:2015 aligned data privacy adhering strictly to UAE regulations.'}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-xs">
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-slate-950">{language === 'ar' ? '04 أدوات المصرف المركزي' : '04 Central Bank Tools'}</span>
            <h4 className="font-black text-base">{language === 'ar' ? 'محرك الفحص المسبق للاتحاد للمعلومات الائتمانية' : 'AECB Bureau Pre-Check Engine'}</h4>
            <p className="text-xs text-slate-800 font-medium">{language === 'ar' ? 'فحص تقييم ائتماني آلي يتجنب التأثير السلبي غير الضروري على تقييم العميل.' : 'Automated credit scoring checks avoiding unnecessary credit hits.'}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-950 text-[#E8F86E] flex items-center justify-center shrink-0 shadow-xs">
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------------
// 7. SLIDE 7 ARCHETYPE: Moment of Scale (10+ Years Experience + Full Width Banner)
// ---------------------------------------------------------------------------------
export const MomentOfScaleBanner: React.FC<{
  headline?: string;
  yearNumber?: string;
  totalProjects?: string;
}> = ({
  headline,
  yearNumber = '10+',
  totalProjects = '15,000+',
}) => {
  const { isRTL, language } = useLanguage();

  const displayHeadline = headline || (language === 'ar' ? 'وقفة مع حجم النمو والإنجاز ↘' : "Let's Take A Moment For Scale ↘");

  return (
    <section className="space-y-6">
      {/* Top Split: Big Headline Left + Lime Stat Card Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold">
            {language === 'ar' ? 'ريادة تاريخية في سوق الوساطة المالية' : 'HISTORICAL MARKET LEADERSHIP'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 leading-tight">
            {displayHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            {language === 'ar'
              ? 'من جذور تأسيسنا تحت مظلة مجموعة الياس القابضة إلى إدارة أكبر مركز وساطة واكتتاب بمساحة 9,500 قدم² في بور سعيد بديرة، دبي.'
              : "From our founding roots under ALIYAS Group to managing Dubai's premier 9,500 sq.ft underwriting hub in Port Saeed, Deira."}
          </p>
        </div>

        {/* Lime Card */}
        <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-lg flex items-center justify-between">
          <div>
            <div className="text-4xl sm:text-5xl font-black font-display">
              {yearNumber}
            </div>
            <div className="text-xs sm:text-sm font-black mt-1">
              {language === 'ar' ? 'سنوات من الريادة في الاستقطاب' : 'Years Sourcing Leadership'}
            </div>
            <div className="text-[11px] text-slate-800">
              {language === 'ar' ? 'شريك موثوق لكبرى بنوك الإمارات' : 'Trusted by UAE Tier-1 Banks'}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-slate-950 text-[#E8F86E] flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Full-Width Ambient Banner with Total Projects / Files Badge */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left rtl:sm:text-right">
          <span className="text-xs font-mono text-[#E8F86E] uppercase tracking-wider">
            {language === 'ar' ? 'إجمالي الصرف والتمويلات التاريخية' : 'HISTORIC PORTFOLIO DISBURSALS'}
          </span>
          <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white">
            {totalProjects}
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'ar'
              ? 'إجمالي ملفات بطاقات الائتمان والتمويل الشخصي المعتمدة بنجاح دون أي جزاءات بنكية.'
              : 'Total verified retail credit card and personal financing files closed with zero bank penalties.'}
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0">
          <div className="text-xl sm:text-2xl font-black text-[#E8F86E]">
            {language === 'ar' ? '+1.2 مليار درهم' : 'AED 1.2B+'}
          </div>
          <div className="text-[11px] text-slate-300">{language === 'ar' ? 'تسهيلات تراكمية مستقطبة' : 'Cumulative Facilities Sourced'}</div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------------
// 8. SLIDE 8 ARCHETYPE: Closing Presentation Desk (Thank You For Watching & 4 Blocks)
// ---------------------------------------------------------------------------------
export const ClosingPresentationDesk: React.FC<{
  onOpenConsultation?: () => void;
}> = ({ onOpenConsultation }) => {
  const { isRTL, language } = useLanguage();

  return (
    <section className="space-y-8">
      {/* Top Header & 4 Meta Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Headline */}
        <div className="lg:col-span-5 space-y-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-mono font-bold">
            {language === 'ar' ? 'مكتب العمليات الرسمي' : 'OFFICIAL OPERATIONS DESK'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 leading-tight">
            {language === 'ar' ? 'شكراً لاهتمامكم وشراكتكم ↘' : 'Thank You For Partnering ↘'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'تواصل مباشرة مع فريق الاكتتاب المؤسسي في قرية الأعمال، بور سعيد، ديرة، دبي.'
              : 'Connect directly with our corporate underwriting team in Business Village, Port Saeed, Deira, Dubai.'}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>{language === 'ar' ? 'حجز موعد استشارة ذات أولوية' : 'Schedule Priority Meeting'}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right 4 Clean Meta Blocks */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold">
              <MapPin className="w-4 h-4" />
              <span>{language === 'ar' ? 'الموقع' : 'Location'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-900">
              {language === 'ar'
                ? 'المكاتب 405-408، المبنى B، قرية الأعمال، بور سعيد، ديرة، دبي، الإمارات العربية المتحدة'
                : 'Offices 405-408, Block B, Business Village, Port Saeed, Deira, Dubai, UAE'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold">
              <Phone className="w-4 h-4" />
              <span>{language === 'ar' ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-900" dir="ltr">
              {COMPANY_INFO.phone}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold">
              <Mail className="w-4 h-4" />
              <span>{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-900" dir="ltr">
              {COMPANY_INFO.email}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold">
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'الموقع الرسمي' : 'Official Website'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-900" dir="ltr">
              {COMPANY_INFO.website}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ambient Graphic Bar */}
      <div className="h-28 sm:h-36 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-700 to-purple-900 shadow-md p-6 flex items-center justify-between text-white relative overflow-hidden">
        <div className="space-y-1 relative z-10">
          <div className="text-lg sm:text-xl font-black font-display">
            {language === 'ar' ? 'شركة أَمَف للوساطة التجارية ذ.م.م' : 'AMAFH Commercial Brokers LLC'}
          </div>
          <div className="text-xs text-white/80">
            {language === 'ar' ? 'إحدى شركات مجموعة الياس القابضة • دبي، الإمارات العربية المتحدة' : 'A Proud Division of ALIYAS Group • Dubai, United Arab Emirates'}
          </div>
        </div>
        <span className="text-2xl sm:text-4xl font-black text-white/30 font-display">
          2025–2026
        </span>
      </div>
    </section>
  );
};
