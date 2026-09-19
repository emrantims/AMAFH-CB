import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  CreditCard,
  Briefcase,
  Users,
  Calculator,
  ChevronRight,
  Sparkles,
  Phone,
  FileText,
  Award,
  Clock,
  Landmark,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { PageId } from '../types';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { PartnerLogo } from '../components/PartnerLogo';
import { COMPANY_INFO } from '../data/amafhData';
import { useLanguage } from '../context/LanguageContext';
import {
  PitchHeroVault,
  TriColorComplianceSection,
  CompanySolutionsStack,
  SteppedPillarBreakdown,
  EvolutionTechSplit,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { ComplianceCertificationsSection } from '../components/ComplianceCertificationsSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string) => void;
  onOpenPdfModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPdfModal,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. EDITORIAL HERO & HIGH-CONTRAST BENTO GRID (Inspired by Reference Images) */}
      <section className="pt-28 sm:pt-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Top Badges & Super-Headline */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono tracking-tight flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8F86E] animate-pulse" />
            {t.home.heroBadge}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-purple-700" />
            {language === 'ar' ? 'قرية الأعمال، بورسعيد، ديرة، دبي' : 'Business Village, Port Saeed, Deira, Dubai'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            {language === 'ar' ? 'معتمد ومصرح من البنوك الشريكة للمصرف المركزي' : 'Licensed by UAE Central Bank Partner Banks'}
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl mb-8 sm:mb-12">
          {language === 'ar' ? (
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 font-display tracking-tight leading-[1.15]">
              ريادة استقطاب <span className="text-purple-700 underline decoration-purple-300 decoration-wavy decoration-2">الائتمان المؤسسي</span> في الإمارات
            </h1>
          ) : (
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 font-display tracking-tight leading-[1.05] uppercase">
              Revolutionize <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full border-2 border-slate-950 font-normal text-2xl sm:text-4xl lg:text-5xl lowercase align-middle mx-1">with</span> <br className="hidden sm:inline" />
              Institutional <span className="text-purple-700 underline decoration-purple-300 decoration-wavy decoration-2">Credit</span> Sourcing
            </h1>
          )}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 max-w-2xl leading-relaxed">
            {t.home.heroSubtitle}
          </p>
        </div>

        {/* BENTO GRID TABLE OF CONTENTS / DOORS TO SUB-PAGES (Reference 1, 2, 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1: Services & CVVB Framework (Large Dark Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => onNavigate('services')}
            className="md:col-span-7 rounded-3xl bg-slate-950 text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden cursor-pointer group shadow-xl"
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-purple-900/40 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
                  01 / {t.nav.services}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#E8F86E] group-hover:text-slate-950 text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight max-w-md">
                {t.home.exploreCvvb}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
                {t.home.cvvbDesc}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{language === 'ar' ? 'بطاقات ائتمان • تمويل شخصي • تسهيلات بدون تحويل راتب' : 'Credit Cards • Personal Loans • NST Facilities'}</span>
              </div>
              <span className="text-xs font-bold text-[#E8F86E] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform flex items-center gap-1">
                {language === 'ar' ? 'عرض صفحة الخدمات' : 'View Services Page'} <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategic Banking Partners (Bright Lime Accent Card - Ref 1 & 2) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => onNavigate('partners')}
            className="md:col-span-5 rounded-3xl bg-[#E8F86E] text-slate-950 p-7 sm:p-8 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-950 text-[#E8F86E] text-xs font-bold uppercase tracking-wider">
                  02 / {t.nav.partners}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-950 text-white group-hover:scale-110 transition-transform flex items-center justify-center">
                  <ArrowUpRight className={`w-5 h-5 text-[#E8F86E] ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display leading-tight">
                {t.home.bankingPortals}
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {t.home.bankingDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-950/20 flex items-center justify-between">
              <div className="flex -space-x-2 overflow-hidden rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black border border-slate-300">DIB</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black border border-slate-300">SIB</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black border border-slate-300">EI</div>
              </div>
              <span className="text-xs font-black underline underline-offset-2">
                {language === 'ar' ? 'استكشف الشركاء ↗' : 'Explore Partners ↗'}
              </span>
            </div>
          </motion.div>

          {/* Card 3: Real Client Case Studies (Ref 3: Revenue Breakdown / Impact) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => onNavigate('case-studies')}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 text-[11px] font-bold">
                  03 / {t.nav.caseStudies}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-purple-700 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 font-display">
                {language === 'ar' ? 'تحديات العملاء والنتائج القابلة للقياس' : 'Client Challenges & Measurable Outcomes'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar' ? (
                  <>تعرف على كيفية مساعدة عملائنا في تحقيق <strong>تخفيض بنسبة 42% في الأقساط الشهرية</strong> ونسبة <strong>96.4% في الموافقات من المرة الأولى</strong>.</>
                ) : (
                  <>See how we helped clients achieve <strong>-42% monthly debt relief</strong> and <strong>96.4% first-time approvals</strong> across remote sites.</>
                )}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>{language === 'ar' ? 'قراءة 5 دراسات حالة مفصلة' : 'Read 5 Detailed Studies'}</span>
              <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </div>
          </motion.div>

          {/* Card 4: Corporate Profile & 9,500 sq.ft Hub (Ref 3: Company Overview) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => onNavigate('about')}
            className="md:col-span-4 rounded-3xl bg-[#F5F3FF] border border-purple-100 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-purple-200 text-purple-900 text-[11px] font-bold">
                  04 / {t.nav.about}
                </span>
                <div className="w-8 h-8 rounded-full bg-white group-hover:bg-purple-700 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              <h3 className="text-xl font-black text-purple-950 font-display">
                {language === 'ar' ? 'مقر 9,500 قدم مربعة ورؤية قيادية' : '9,500 sq.ft Hub & Executive Vision'}
              </h3>
              <p className="text-xs text-purple-900/80 leading-relaxed">
                {language === 'ar' ? 'إحدى أذرع مجموعة إلياس. مكاتب اكتتاب حديثة في قرية الأعمال بديرة مع امتثال لمعايير الجودة وأكثر من 100 مستشار.' : 'Division of ALIYAS Group. Modern underwriting pods in Business Village Deira with full ISO compliance & 100+ agents.'}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-purple-200/50 flex items-center justify-between text-xs font-bold text-purple-800">
              <span>{language === 'ar' ? 'القيادة التنفيذية ↗' : 'Corporate Leadership ↗'}</span>
              <Building2 className="w-4 h-4 text-purple-600" />
            </div>
          </motion.div>

          {/* Card 5: Finance Calculator & DBR (Ref 2 & 3: Interactive Tool) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => onNavigate('calculator')}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                  05 / {t.nav.calculator}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 font-display">
                {language === 'ar' ? 'حاسبة نسبة عبء الدين 50% للمصرف المركزي' : 'UAE Central Bank 50% DBR Estimator'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar' ? 'احسب الحد الأقصى لبطاقة الائتمان وسعة التمويل بناءً على راتبك الشهري وأقساطك الحالية قبل التقديم.' : 'Calculate maximum card limit & loan capacity based on your monthly salary and current EMIs before applying.'}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
              <span>{language === 'ar' ? 'فحص فوري للأهلية' : 'Instant Eligibility Check'}</span>
              <Calculator className="w-4 h-4 text-amber-600" />
            </div>
          </motion.div>

          {/* Card 6: Join Team & DSA Career Portal (Bottom Strip Card) */}
          <motion.div
            whileHover={{ y: -3 }}
            onClick={() => onNavigate('careers')}
            className="md:col-span-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group shadow-md"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-extrabold uppercase">
                  {language === 'ar' ? 'توظيف 30+ مستشار مبيعات' : 'Hiring 30+ Sales Agents'}
                </span>
                <span className="text-xs text-purple-200">
                  {language === 'ar' ? 'بجانب محطة مترو ديرة سيتي سنتر' : 'Deira City Centre Metro Hub'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black font-display">
                {language === 'ar' ? 'تبحث عن مسيرة مهنية مجزية في مبيعات الائتمان بدبي؟' : 'Looking for a High-Commission DSA Sales Career in Dubai?'}
              </h3>
              <p className="text-xs text-slate-300 max-w-lg">
                {language === 'ar' ? 'عمولات غير محدودة، إقامة عمل على وزارة الموارد البشرية، مكتب CRM مخصص، وبنوك فئة أولى.' : 'Uncapped monthly commissions, MOHRE employment visa, dedicated CRM desk, and Tier-1 bank allocations.'}
              </p>
            </div>

            <div className="px-4 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs shrink-0 group-hover:bg-[#E8F86E] transition-colors flex items-center gap-1.5">
              <span>{language === 'ar' ? 'عرض الوظائف الشاغرة' : 'View Openings'}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </div>
          </motion.div>

          {/* Card 7: Direct Contact & Branch Desk */}
          <motion.div
            whileHover={{ y: -3 }}
            onClick={() => onNavigate('contact')}
            className="md:col-span-4 rounded-3xl bg-slate-100 hover:bg-slate-200/80 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group transition-colors"
          >
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 text-[11px] font-bold">
                07 / {t.nav.contact}
              </span>
              <h3 className="text-lg font-black text-slate-900 font-display">
                {language === 'ar' ? 'تفضل بزيارة مكتبنا أو تواصل معنا' : 'Visit or Message Our Dubai Desk'}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'ar' ? 'المكاتب 405-408، المبنى B، قرية الأعمال، ديرة.' : 'Offices 405-408, Block B, Business Village, Deira.'}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-900">
              <span>{t.nav.contact}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE MARQUEE STRIP OF PARTNER INSTITUTIONS */}
      <section className="border-y border-slate-200/80 bg-white py-4">
        <MarqueeStrip onSelectAction={() => onOpenConsultation('Institutional Sourcing')} />
      </section>

      {/* 3. REFERENCE SLIDE 1 ARCHETYPE: Dark Hero Vault with Floating Stat Badge */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <PitchHeroVault
          badge={language === 'ar' ? 'ذكاء الاستقطاب المؤسسي' : 'INSTITUTIONAL SOURCING INTELLIGENCE'}
          title={language === 'ar' ? 'تمكين الاستقطاب المالي والاكتتاب البنكي' : 'Empowering Financial Sourcing & Underwriting'}
          subtitle={language === 'ar' ? 'ربط عملاء التجزئة والشركات مباشرة ببوابات البنوك الرائدة في الإمارات بدون أي تأخير وسيط.' : 'Connecting retail customers and large employers directly to UAE Tier-1 banking portals with zero intermediary delay.'}
          statNumber="5,000+"
          statLabel={language === 'ar' ? 'ملف تمويلي ناجح' : 'Successful Sourcing Files'}
          onCtaClick={() => onNavigate('services')}
        />
      </section>

      {/* 4. REFERENCE SLIDE 2 ARCHETYPE: Tri-Color Cards + Responsible Compliance Header */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TriColorComplianceSection />
      </section>

      {/* 4B. COMPLIANCE & CERTIFICATIONS: ISO Standards & UAE Regulatory Accreditations (HNW Trust) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ComplianceCertificationsSection
          onOpenConsultation={onOpenConsultation}
          onOpenPdfModal={onOpenPdfModal}
        />
      </section>

      {/* 5. REFERENCE SLIDE 3 ARCHETYPE: Company Solutions Stack */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <CompanySolutionsStack />
      </section>

      {/* 6. REFERENCE SLIDE 4 ARCHETYPE: Stepped Pillar Breakdown (Volume & Sourcing Breakdown) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <SteppedPillarBreakdown />
      </section>

      {/* 7. REFERENCE SLIDE 5 ARCHETYPE: Evolution With Technology & Banking Terminal Frame */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <EvolutionTechSplit />
      </section>

      {/* 8. REFERENCE SLIDE 7 ARCHETYPE: Moment of Scale & 10+ Years Sourcing Leadership */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <MomentOfScaleBanner />
      </section>

      {/* 9. KEY METRICS BENTO DISPLAY (Inspired by Reference 2 & 3: Stat Boxes) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight">
              99.4%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {t.home.cleanFileRatio}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === 'ar' ? 'صفر رفض إجرائي عبر كافة البنوك' : 'Zero regulatory kickbacks across UAE banks'}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-700 font-display tracking-tight">
              48h
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {t.home.fastDisbursal}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === 'ar' ? 'مقارنة مع 10-14 يوم في الفروع التقليدية' : 'Compressed from 10–14 standard branch days'}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight">
              100+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {t.home.certifiedAgents}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === 'ar' ? 'نشطون عبر دبي والإمارات الشمالية' : 'Active across Dubai & Northern Emirates'}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-xs">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
              9,500
            </div>
            <div className="text-xs sm:text-sm font-black mt-1">
              {t.home.sqFtHub}
            </div>
            <div className="text-[11px] text-slate-800 mt-0.5 font-medium">
              {language === 'ar' ? 'قرية الأعمال، بورسعيد، ديرة' : 'Business Village, Port Saeed, Deira'}
            </div>
          </div>
        </div>
      </section>

      {/* 10. EXECUTIVE HIGHLIGHT BANNER WITH QUICK ACTION BUTTONS */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left rtl:md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الملف التعريفي الرسمي 2025 متاح الآن' : 'Official 2025 Corporate Profile Ready'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-tight">
              {t.home.readyToPartner}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'ar' ? 'اطلع على ملفنا التعريفي الموثق أو تواصل مباشرة مع فريق الاكتتاب في قرية الأعمال بديرة.' : 'Explore our verified corporate dossier or connect directly with our senior underwriting desk at Business Village Deira.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenPdfModal}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E8F86E]" />
              <span>{t.home.viewCorporatePdf}</span>
            </button>

            <button
              onClick={() => onOpenConsultation('Executive Partnership')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] text-xs sm:text-sm font-black transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.home.bookConsultation}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
