import React from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calculator,
  Building2,
  FileCheck,
  Clock,
  Percent,
  Layers
} from 'lucide-react';
import { ServiceCards } from '../components/ServiceCards';
import { CvvbProcess } from '../components/CvvbProcess';
import { InitiativesTable } from '../components/InitiativesTable';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  CompanySolutionsStack,
  SteppedPillarBreakdown,
  TechInfrastructureQuad,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
  onSelectServiceForConsultation?: (service: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Services Header */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="services" onNavigate={onNavigate} className="mb-6" />
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'الحلول التمويلية والاكتتاب' : 'FINANCIAL SOLUTIONS & UNDERWRITING'}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold">
            {language === 'ar' ? 'بطاقات ائتمان • تمويل شخصي • تسهيلات بدون تحويل راتب' : 'Credit Cards • Personal Loans • NST Facilities'}
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>استقطاب التجزئة المصمم خصيصاً <br />
              <span className="text-purple-700">مع آلية CVVB الرباعية</span></>
            ) : (
              <>Tailored Retail Sourcing <br />
              <span className="text-purple-700">&amp; 4-Stage CVVB</span> Framework</>
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {t.services.heroSubtitle}
          </p>
        </div>

        {/* Quick Jump Bento Bar (Reference 1 & 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <a
            href="#retail-cards"
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">
                  {language === 'ar' ? 'بطاقات ائتمان الأفراد' : 'Retail Credit Cards'}
                </div>
                <div className="text-[11px] text-slate-500">
                  {language === 'ar' ? 'استرداد نقدي، إنفينيت، أميال' : 'Cashback, Infinite, Miles'}
                </div>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
          </a>

          <a
            href="#cvvb-framework"
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">
                  {language === 'ar' ? 'آلية الاكتتاب CVVB' : 'CVVB Underwriting'}
                </div>
                <div className="text-[11px] text-slate-500">
                  {language === 'ar' ? 'منهجية تدقيق من 4 مراحل' : '4-Stage Verification'}
                </div>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
          </a>

          <button
            onClick={() => onNavigate('calculator')}
            className="p-4 rounded-2xl bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] transition-all flex items-center justify-between text-left rtl:text-right shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-[#E8F86E] flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <div className="font-black text-xs">
                  {language === 'ar' ? 'حاسبة عبء الدين 50%' : '50% DBR Calculator'}
                </div>
                <div className="text-[11px] text-slate-800">
                  {language === 'ar' ? 'افحص أهليتك الائتمانية ↗' : 'Check Your Eligibility ↗'}
                </div>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 text-slate-950 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* REFERENCE SLIDE 3 ARCHETYPE: Company Solutions Stack */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <CompanySolutionsStack
          superHeadline={language === 'ar' ? 'هيكلية استقطاب متقدمة' : 'TAILORED SOURCING ARCHITECTURE'}
          mainHeadline={language === 'ar' ? 'حلول الاستقطاب التمويلي ↘' : 'Our Sourcing Solutions ↘'}
        />
      </section>

      {/* 1. Core Retail Products & Services */}
      <section id="retail-cards" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ServiceCards
          onConsultationRequest={(serviceTitle?: string) => onOpenConsultation(serviceTitle)}
        />
      </section>

      {/* 2. Proprietary 4-Stage CVVB Process */}
      <section id="cvvb-framework" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <CvvbProcess />
      </section>

      {/* REFERENCE SLIDE 4 ARCHETYPE: Stepped Pillar Breakdown */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <SteppedPillarBreakdown
          tag={language === 'ar' ? 'القدرة السنوية لاستقطاب التسهيلات' : 'ANNUAL FACILITY SOURCING CAPACITY'}
          headline={language === 'ar' ? 'حجم المعاملات والحدود الائتمانية ↘' : 'Origination Volume & Limit Breakdown ↘'}
          marketShareText={language === 'ar' ? 'سجل موافقات بنكية نظيفة بنسبة 96.4%' : '96.4% Clean File Approval Record'}
        />
      </section>

      {/* 3. Corporate Direct Sales & Strategic Initiatives */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <InitiativesTable />
      </section>

      {/* REFERENCE SLIDE 6 ARCHETYPE: Technology & Underwriting Infrastructure Quad */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TechInfrastructureQuad
          tag={language === 'ar' ? 'بنية الاستقطاب التمويلي والأمن' : 'SOURCING INFRASTRUCTURE & SECURITY'}
          headline={language === 'ar' ? 'منظومة المعالجة المؤسسية ↘' : 'Enterprise Processing Stack ↘'}
        />
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left rtl:md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              {language === 'ar' ? 'هل لديك متطلبات خاصة بهيكلة التمويل؟' : 'Have Specific Structuring Requirements?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'ar'
                ? 'تواصل مع أحد كبار مستشاري الائتمان في أَمَف للحصول على استشارة مخصصة لتحويل الراتب أو شراء المديونيات أو برامج الشركات.'
                : 'Connect with an AMAFH senior credit advisor for personalized salary transfer, liability buyout, or corporate sourcing programs.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('General Services Inquiry')}
              className="px-6 py-3 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-white text-xs sm:text-sm font-black transition-all cursor-pointer"
            >
              {language === 'ar' ? 'طلب استشارة مجانية' : 'Request Free Consultation'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
