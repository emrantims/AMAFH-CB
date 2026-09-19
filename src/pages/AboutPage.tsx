import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  TrendingUp,
  Target,
  Landmark
} from 'lucide-react';
import { CoreStrengths } from '../components/CoreStrengths';
import { COMPANY_INFO } from '../data/amafhData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  TriColorComplianceSection,
  EvolutionTechSplit,
  TechInfrastructureQuad,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenPdfModal,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Page Header (Editorial Style from Reference 3) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="about" onNavigate={onNavigate} className="mb-6" />
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold font-mono">
            {language === 'ar' ? 'نبذة عن الشركة والملف التعريفي' : 'COMPANY OVERVIEW & CORPORATE PROFILE'}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            {language === 'ar' ? 'تأسست ومصرح بها في دبي، دولة الإمارات' : 'Established & Licensed in Dubai, UAE'}
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight">
            {language === 'ar' ? (
              <>بناء الركيزة الأساسية <span className="text-purple-700">للاستقطاب المالي</span> في دولة الإمارات</>
            ) : (
              <>Building the Premier <span className="text-purple-700">Financial Sourcing</span> Backbone of the UAE</>
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {t.about.heroSubtitle}
          </p>
        </div>

        {/* 3-Column Executive Snapshot (Reference 3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="text-xs font-bold text-[#E8F86E] uppercase tracking-wider mb-2">
              01 / {language === 'ar' ? 'المجموعة الأم' : 'The Corporate Group'}
            </div>
            <h3 className="text-xl font-bold font-display mb-2">
              {language === 'ar' ? 'إحدى شركات مجموعة إلياس' : 'Division of ALIYAS Group'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'ar'
                ? 'مدعومة برأس مال مؤسسي واستثمارات متعددة القطاعات وشبكات توزيع تجزئة موسعة عبر الإمارات ودول مجلس التعاون.'
                : 'Backed by institutional capital, multi-sector regional investments, and extensive retail distribution networks across the UAE and GCC.'}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-md">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              02 / {language === 'ar' ? 'المساحة التشغيلية' : 'Physical Scale'}
            </div>
            <h3 className="text-xl font-black font-display mb-2">
              {language === 'ar' ? 'مركز عمليات بمساحة 9,500 قدم مربع' : '9,500 Sq. Ft Operations Hub'}
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              {language === 'ar'
                ? 'المكاتب 405-408، المبنى B، قرية الأعمال، ديرة. يضم أكثر من 100 مستشار علاقات معتمد وأخصائي امتثال.'
                : 'Offices 405-408, Block B, Business Village, Deira. Housing over 100 certified relationship officers and compliance specialists.'}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
              03 / {language === 'ar' ? 'الثقة التنظيمية' : 'Regulatory Trust'}
            </div>
            <h3 className="text-xl font-bold text-slate-950 font-display mb-2">
              {language === 'ar' ? 'حوكمة صفر استرجاع ملفات' : 'Zero-Kickback Governance'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'امتثال كامل للحد الأقصى لنسبة عبء الدين (DBR 50%) ومعايير الاتحاد للمعلومات الائتمانية وخصوصية البيانات ISO 9001.'
                : '100% compliant with UAE Central Bank Debt-Burden Ratio (DBR 50%) guidelines, AECB protocols, and ISO 9001:2015 customer data privacy standards.'}
            </p>
          </div>
        </div>
      </section>

      {/* REFERENCE SLIDE 2: Tri-Color Compliance & Governance Section */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TriColorComplianceSection
          tag={language === 'ar' ? 'الحوكمة المؤسسية والنزاهة' : 'CORPORATE GOVERNANCE & INTEGRITY'}
          headline={language === 'ar' ? 'الاستقطاب المسؤول والامتثال البنكي ↘' : 'Responsible Sourcing & Banking Compliance ↘'}
        />
      </section>

      {/* Leadership & Executive Reflection (Reference 3: CEO Reflection) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left rtl:lg:text-right">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-purple-800 to-indigo-900 text-[#E8F86E] flex items-center justify-center font-black text-2xl mx-auto lg:mx-0 shadow-md font-display">
              AMAFH
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-950 font-display">
                {language === 'ar' ? 'القيادة التنفيذية' : 'Executive Leadership'}
              </h3>
              <p className="text-xs text-purple-700 font-semibold">
                {language === 'ar' ? 'المدير العام ورئيس التحالفات المصرفية' : 'Managing Director & Head of Banking Alliances'}
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenPdfModal}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-purple-100 text-purple-900 text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-700" />
                <span>{language === 'ar' ? 'قراءة الملف التعريفي الكامل' : 'Read Full Corporate Profile'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 rtl:lg:pr-8">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'رؤية القيادة وفلسفة الاستقطاب المالي' : 'Leadership Vision & Sourcing Philosophy'}</span>
            </div>
            <blockquote className="text-sm sm:text-base md:text-lg text-slate-800 font-medium italic leading-relaxed">
              {language === 'ar'
                ? '«غالباً ما تثقل الخدمات المصرفية التقليدية كاهل العميل بزيارات الفروع المتكررة والمعاملات الورقية وفترات الانتظار الطويلة. هدفنا في أَمَف هو توفير جسر ائتماني مؤسسي يحترم وقت المقترض ويزود البنوك الشريكة بملفات جاهزة ونقية.»'
                : '“Traditional retail banking often burdens clients with convoluted branch visits, repetitive paperwork, and unpredictable turnaround times. At AMAFH, our goal is to deliver an institutional-grade sourcing bridge that respects borrower time and provides partner banks with pre-cleared, non-delinquent portfolios.”'}
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'انطلاقاً من مقرنا الرئيسي في قرية الأعمال بدبي، يطبق فريقنا أعلى معايير التحقق البيومتري من الهوية، وتصنيف جهات العمل، وحساب عبء الدين بدقة قبل التقديم للبنوك.'
                : 'Operating out of our central Business Village Deira headquarters, our team executes biometric KYC validation, employer categorization checks, and debt burden calculations before any dossier is submitted to our partner banking portals.'}
            </p>
          </div>
        </div>
      </section>

      {/* REFERENCE SLIDE 5: Evolution Begins With Technology & Underwriting Mockup */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <EvolutionTechSplit
          headline={language === 'ar' ? 'التطور التشغيلي من خلال الاستقطاب الرقمي' : 'Operational Evolution Through Digital Sourcing'}
          tag={language === 'ar' ? 'القدرات المؤسسية' : 'ENTERPRISE CAPABILITIES'}
        />
      </section>

      {/* 6 Core Enterprise Strengths */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <CoreStrengths />
      </section>

      {/* REFERENCE SLIDE 6: Technology Infrastructure 4-Card Quad */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TechInfrastructureQuad
          headline={language === 'ar' ? 'الأمن المصرفي والبنية التحتية ↘' : 'Banking Security & Infrastructure ↘'}
          tag={language === 'ar' ? 'بيئة عمل وأنظمة بيانات متوافقة مع الأيزو' : 'ISO-ALIGNED WORKSPACE & DATA SYSTEMS'}
        />
      </section>

      {/* REFERENCE SLIDE 7: Moment of Scale & 10+ Years Sourcing Leadership */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <MomentOfScaleBanner
          headline={language === 'ar' ? 'مسيرة ممتدة من الريادة في القطاع المصرفي ↘' : 'Tenured Track Record in UAE Banking ↘'}
          yearNumber="10+"
          totalProjects="15,000+"
        />
      </section>

      {/* Corporate Milestones & Historical Key Achievements (Reference 3) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
            {language === 'ar' ? 'سجل حافل بالإنجازات' : 'PROVEN TRACK RECORD'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mt-3">
            {language === 'ar' ? 'أبرز الإنجازات المؤسسية في دولة الإمارات' : 'Key Corporate Achievements in the UAE'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {language === 'ar' ? 'إثبات المرونة التشغيلية وثقة البنوك والريادة في سوق التجزئة.' : 'Demonstrating operational resilience, bank confidence, and retail market leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <span className="text-2xl font-black text-purple-700 font-display">01</span>
            <h3 className="text-base font-bold text-slate-900">
              {language === 'ar' ? 'اعتماد بنكي من الفئة الأولى' : 'Tier-1 Bank Accreditation'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'إبرام عقود وكالة مباشرة مع بنك دبي الإسلامي وبنك الشارقة الإسلامي ومصرف الإمارات الإسلامي مع خطوط ربط مباشرة.'
                : 'Secured direct enterprise DSA contracts with Dubai Islamic Bank, Sharjah Islamic Bank, and Emirates Islamic with dedicated API & branch liaisons.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <span className="text-2xl font-black text-purple-700 font-display">02</span>
            <h3 className="text-base font-bold text-slate-900">
              {language === 'ar' ? 'استقطاب واسع النطاق في مقار العمل' : 'Workplace Sourcing at Scale'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'تنظيم حملات توعية مالية وبطاقات ائتمان لدى كبرى شركات المقاولات والضيافة، واستقطاب أكثر من 3000 حامل بطاقة.'
                : 'Successfully executed corporate payroll roadshows across top contracting giants (ALEC, HLG, L&T, Saudi Binladin), sourcing over 3,000+ cardholders.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <span className="text-2xl font-black text-purple-700 font-display">03</span>
            <h3 className="text-base font-bold text-slate-900">
              {language === 'ar' ? 'توسعة المقر إلى 9,500 قدم مربعة' : '9,500 sq.ft Facility Expansion'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'دمج 4 مكاتب تنفيذية متصلة في قرية الأعمال بديرة لاستيعاب فريقنا المتنامي المكون من 100+ خبير مبيعات وتدقيق مخاطر.'
                : 'Consolidated 4 contiguous executive suites in Business Village Deira to house our growing team of 100+ sales and risk verification professionals.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
            <h3 className="text-xl font-bold font-display">
              {language === 'ar' ? 'هل ترغب في استكشاف خدماتنا أو حجز اجتماع؟' : 'Want to see our services or book a meeting?'}
            </h3>
            <p className="text-xs text-purple-200">
              {language === 'ar' ? 'استكشف حلول التجزئة لدينا أو تفضل بزيارة مكتبنا في قرية الأعمال بديرة.' : 'Explore our retail solutions or visit our Business Village Deira office.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-2.5 rounded-full bg-white text-slate-950 hover:bg-[#E8F86E] text-xs font-bold transition-all cursor-pointer"
            >
              {language === 'ar' ? 'استكشف الخدمات ↗' : 'Explore Services ↗'}
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-white text-xs font-bold transition-all cursor-pointer"
            >
              {language === 'ar' ? 'تواصل مع الإدارة' : 'Contact Leadership'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
