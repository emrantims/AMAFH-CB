import React from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  ChevronLeft,
  ShieldCheck,
  Percent,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { FinanceCalculator } from '../components/FinanceCalculator';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGlossary } from '../context/GlossaryContext';
import { GlossaryTooltip } from '../components/GlossaryTooltip';
import {
  TriColorComplianceSection,
  EvolutionTechSplit
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onPreVetRequest: (data: any) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onPreVetRequest,
}) => {
  const { t, isRTL, language } = useLanguage();
  const { openGlossary } = useGlossary();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="calculator" onNavigate={onNavigate} className="mb-6" />

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'أداة الاستشارة المالية' : 'FINANCIAL ADVISORY TOOL'}
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            {language === 'ar' ? 'معايير المصرف المركزي لنسبة عبء الدين 50%' : 'UAE Central Bank 50% DBR Regulation'}
          </span>
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>
                حاسبة نسبة عبء الدين (<GlossaryTooltip termId="dbr">DBR</GlossaryTooltip>) <br />
                <span className="text-purple-700">وتقدير التسهيلات التمويلية</span>
              </>
            ) : (
              <>
                Debt Burden Ratio (<GlossaryTooltip termId="dbr">DBR</GlossaryTooltip>) <br />
                <span className="text-purple-700">&amp; Sourcing Estimator</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.calculator.heroSubtitle}
          </p>

          {/* Interactive Financial Literacy Glossary Callout */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-2 p-2 px-3 sm:px-4 rounded-2xl bg-purple-50 border border-purple-200/80 text-xs text-purple-950 shadow-2xs">
              <BookOpen className="w-4 h-4 text-purple-700 shrink-0" />
              <span className="font-semibold">
                {language === 'ar'
                  ? 'غير متأكد من معاني DBR أو AECB أو تقليل معدل الفائدة؟'
                  : 'Confused by DBR, AECB, APR, or Reducing vs Flat Rates?'}
              </span>
              <button
                onClick={() => openGlossary('dbr')}
                className="font-bold text-purple-700 hover:text-purple-950 underline inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{language === 'ar' ? 'تصفح معجم المصطلحات المصرفية' : 'Explore Financial Literacy Glossary'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Interactive Component */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <FinanceCalculator onPreVetRequest={onPreVetRequest} />
      </div>

      {/* REFERENCE SLIDE 2: Tri-Color Regulatory Principles */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TriColorComplianceSection
          tag={language === 'ar' ? 'المعايير التنظيمية لمصرف الإمارات المركزي' : 'UAE CENTRAL BANK REGULATORY ARCHITECTURE'}
          headline={language === 'ar' ? 'القواعد الأساسية للإقراض وحدود عبء الدين ↘' : 'Key Lending Rules & DBR Constraints ↘'}
          cards={[
            {
              num: '01',
              title: language === 'ar' ? '50% الحد الأقصى لعبء الدين' : '50% DBR Maximum Debt Cap',
              desc: language === 'ar'
                ? 'إجمالي الأقساط الشهرية للبطاقات وقروض السيارات والتمويل الشخصي لا يجوز أن تتجاوز 50% من الراتب المعتمد.'
                : 'Total monthly liabilities across cards, auto, and personal financing cannot exceed 50% of verified salary.',
              variant: 'grey'
            },
            {
              num: '02',
              title: language === 'ar' ? 'احتساب 5% كالتزام عن سقف البطاقة' : '5% Revolving Card Obligation',
              desc: language === 'ar'
                ? 'تحتسب البنوك 5% من إجمالي الحد الائتماني للبطاقة كقسط شهري دائم حتى ولو لم يتم استخدامها.'
                : 'UAE banks factor 5% of your total credit card limit as active monthly debt even with zero current utilization.',
              variant: 'lime'
            },
            {
              num: '03',
              title: language === 'ar' ? 'مضاعف 20 ضعف الراتب الإجمالي' : '20x Gross Salary Multiplier',
              desc: language === 'ar'
                ? 'الحد الأقصى لمبلغ التمويل الشخصي في الإمارات محدد بـ 20 ضعف الدخل الشهري ويقسط على 48 شهراً.'
                : 'Maximum personal loan quantum in the UAE is capped at 20 times monthly income amortized over 48 months.',
              variant: 'dark'
            }
          ]}
        />
      </section>

      {/* REFERENCE SLIDE 5: Evolution Begins With Technology */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <EvolutionTechSplit
          headline={language === 'ar' ? 'تقنية التدقيق المسبق والتنبؤ بالأهلية' : 'Pre-Vetting Technology & Score Forecasting'}
          tag={language === 'ar' ? 'تحليل المخاطر واحتساب عبء الدين' : 'RISK ANALYSIS & DBR CLEARANCE'}
          leftCardText={{
            title: language === 'ar' ? 'فحص مبدئي بدون التأثير على التقييم' : 'Zero-Inquiry Pre-Check',
            desc: language === 'ar' ? 'محاكاة الموافقات البنكية دون تسجيل استعلام رسمي سلبي في تقرير الاتحاد للمعلومات الائتمانية.' : 'Simulate banking approvals without triggering negative bureau hard checks on your AECB credit file.'
          }}
          rightCardText={{
            title: language === 'ar' ? 'مصفوفة مقارنة متعددة البنوك' : 'Multi-Bank Sourcing Matrix',
            desc: language === 'ar' ? 'مقارنة معايير الاكتتاب عبر بنك دبي الإسلامي والشارقة الإسلامي والإمارات الإسلامي فوراً.' : 'Compare underwriting criteria across DIB, SIB, and Emirates Islamic instantly.'
          }}
        />
      </section>
    </div>
  );
};
