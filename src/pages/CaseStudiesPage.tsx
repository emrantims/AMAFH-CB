import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ChevronLeft,
  Building2
} from 'lucide-react';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  TriColorComplianceSection,
  SteppedPillarBreakdown,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Top Banner / Breadcrumb */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="case-studies" onNavigate={onNavigate} className="mb-6" />

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'سجل نجاحات المحفظة' : 'PORTFOLIO TRACK RECORD'}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            {language === 'ar' ? 'نتائج موثقة 100%' : '100% Verified Outcomes'}
          </span>
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>حلول موثوقة للعملاء <br />
              <span className="text-purple-700">ونتائج مالية ملموسة</span></>
            ) : (
              <>Proven Client Solutions <br />
              <span className="text-purple-700">&amp; Financial Outcomes</span></>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.caseStudies.heroSubtitle}
          </p>
        </div>
      </div>

      {/* REFERENCE SLIDE 2: Tri-Color Client Challenge Resolution Archetype */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TriColorComplianceSection
          tag={language === 'ar' ? 'هيكلية حل تحديات العملاء' : 'CASE STUDY RESOLUTION ARCHITECTURE'}
          headline={language === 'ar' ? 'حلول مهيكلة وتخليص مخاطر معتمد ↘' : 'Structured Solutions & Risk Clearance ↘'}
          cards={[
            {
              num: '01',
              title: language === 'ar' ? 'انخفاض تقييم الاتحاد واستعلامات متعددة' : 'AECB Low Score & Multiple Inquiries',
              desc: language === 'ar'
                ? 'إعادة جدولة الاستعلامات وتصحيح الأخطاء التاريخية مع شركات المعلومات الائتمانية قبل التقديم للبنوك.'
                : 'Restructured inquiry timeline and cleared historical reporting errors with bureaus before submission.',
              variant: 'grey'
            },
            {
              num: '02',
              title: language === 'ar' ? 'تجاوز نسبة عبء الدين 50%' : 'Excessive 50%+ Debt Burden Ratio',
              desc: language === 'ar'
                ? 'تنفيذ شراء مديونية بنكية، ودمج 4 بطاقات مرتفعة الفائدة في قرض شخصي واحد بنسبة ربح مخفضة.'
                : 'Executed bank liability buyout, consolidating 4 high-interest cards into one low-profit rate personal loan.',
              variant: 'lime'
            },
            {
              num: '03',
              title: language === 'ar' ? 'توثيق شركات غير مدرجة في قوائم البنوك' : 'Non-Listed Employer Documentation',
              desc: language === 'ar'
                ? 'إعداد الميزانيات المدققة، وتأكيد الامتثال لنظام حماية الأجور (WPS)، وإدراج الشركة رسمياً في البنوك.'
                : 'Prepared audited financials, verified WPS compliance, and obtained institutional bank employer listing.',
              variant: 'dark'
            }
          ]}
        />
      </section>

      {/* Main Interactive Case Studies Component */}
      <CaseStudiesSection onOpenConsultation={onOpenConsultation} />

      {/* REFERENCE SLIDE 4: Stepped Pillar Measurable Financial Impact */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <SteppedPillarBreakdown
          tag={language === 'ar' ? 'أثر مالي ملموس للعملاء' : 'MEASURABLE CLIENT IMPACT'}
          headline={language === 'ar' ? 'تخفيض الالتزامات والتوفير الشهري ↘' : 'Financial Relief & Savings Breakdown ↘'}
          marketShareText={language === 'ar' ? 'تخفيض -42% في عبء الأقساط الشهرية' : '-42% Monthly EMI Burden Reduction'}
          pillars={[
            {
              label: language === 'ar' ? 'الحالة 1: شراء مديونيات بطاقات' : 'Case 01: Card Buyout',
              amount: language === 'ar' ? '3,400 درهم/شهرياً' : 'AED 3,400/mo',
              desc: language === 'ar' ? 'متوسط الوفر النقدي الشهري المحقق للعملاء الأفراد.' : 'Average monthly cashflow savings achieved for retail clients.',
              isLime: false,
              height: 'h-48 sm:h-56'
            },
            {
              label: language === 'ar' ? 'الحالة 2: رواتب الشركات' : 'Case 02: SME Payroll',
              amount: language === 'ar' ? '1.8 مليون درهم' : 'AED 1.8M',
              desc: language === 'ar' ? 'إجمالي السيولة الموفرة لموظفي الشركات غير المدرجة.' : 'Total liquidity injected for non-listed corporate employees.',
              isLime: false,
              height: 'h-60 sm:h-72'
            },
            {
              label: language === 'ar' ? 'الحالة 3: استقطاب سريع' : 'Case 03: Fast Sourcing',
              amount: language === 'ar' ? '24 ساعة' : '24 Hours',
              desc: language === 'ar' ? 'زمن قياسي لتحقيق الموافقة وإصدار البطاقات الرقمية.' : 'Record approval & digital card issuance turnaround achieved.',
              isLime: true,
              height: 'h-72 sm:h-88'
            }
          ]}
        />
      </section>

      {/* REFERENCE SLIDE 7: Moment of Scale Banner */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <MomentOfScaleBanner
          headline={language === 'ar' ? 'أكثر من 15,000 ملف ائتماني ناجح ↘' : '15,000+ Clean Sourcing Outcomes ↘'}
          yearNumber="10+"
          totalProjects="15,000+"
        />
      </section>
    </div>
  );
};
