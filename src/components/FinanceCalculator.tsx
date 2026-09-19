import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { GlossaryTooltip } from './GlossaryTooltip';

interface FinanceCalculatorProps {
  onPreVetRequest: (details: { product: string; salary: number; eligibleAmount: number }) => void;
}

export const FinanceCalculator: React.FC<FinanceCalculatorProps> = ({ onPreVetRequest }) => {
  const { t, isRTL, language } = useLanguage();
  const [productType, setProductType] = useState<'card' | 'personal_salary' | 'personal_non_salary'>('personal_salary');
  const [monthlySalary, setMonthlySalary] = useState<number>(15000);
  const [existingLiabilities, setExistingLiabilities] = useState<number>(2000);
  const [employerType, setEmployerType] = useState<'approved' | 'semi_approved' | 'non_listed'>('approved');

  // UAE Central Bank DBR Limit = 50% of gross salary
  const maxAllowableEmi = monthlySalary * 0.5;
  const availableEmiCapacity = Math.max(0, maxAllowableEmi - existingLiabilities);
  const dbrPercentage = Math.min(100, Math.round((existingLiabilities / monthlySalary) * 100));

  // Max finance calculation based on 48 months tenure (standard UAE)
  let maxFinanceEstimate = 0;
  if (productType === 'personal_salary') {
    // Up to 20x salary capped by DBR
    const factor = employerType === 'approved' ? 20 : employerType === 'semi_approved' ? 15 : 10;
    maxFinanceEstimate = Math.min(monthlySalary * factor, availableEmiCapacity * 42);
  } else if (productType === 'personal_non_salary') {
    const factor = employerType === 'approved' ? 12 : 8;
    maxFinanceEstimate = Math.min(monthlySalary * factor, availableEmiCapacity * 38);
  } else {
    // Credit card limit typically 3x to 5x salary
    const factor = employerType === 'approved' ? 4.5 : 3;
    maxFinanceEstimate = monthlySalary * factor;
  }

  const handleApply = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    onPreVetRequest({
      product: productType === 'card' ? (language === 'ar' ? 'بطاقة ائتمان' : 'Credit Card') : productType === 'personal_salary' ? (language === 'ar' ? 'تمويل شخصي (بتحويل راتب)' : 'Personal Finance (Salary Transfer)') : (language === 'ar' ? 'تمويل شخصي (بدون تحويل راتب)' : 'Personal Finance (Non-Salary)'),
      salary: monthlySalary,
      eligibleAmount: Math.round(maxFinanceEstimate)
    });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'محاكي معتمد وفقاً لتعليمات المصرف المركزي' : 'UAE Central Bank Compliant Simulator'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              {language === 'ar' ? 'حاسبة تقييم الأهلية والاستحقاق الائتماني' : 'Pre-Vetting & Sourcing Eligibility Estimator'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            {language === 'ar'
              ? 'احسب نسبة عبء الدين (DBR) وفقاً لإرشادات المصرف المركزي الإماراتي لتحديد مدى جاهزيتك للموافقة المسبقة الفورية.'
              : 'Simulate Debt-Burden Ratio (DBR) calculations according to UAE Central Bank guidelines to determine instant pre-approval readiness.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Product Type Tabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                {language === 'ar' ? 'اختر المنتج التمويلي' : 'Select Financial Product'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setProductType('personal_salary')}
                  className={`p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    productType === 'personal_salary'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {language === 'ar' ? 'تمويل شخصي (بتحويل راتب)' : 'Personal Finance (Salary Transfer)'}
                </button>
                <button
                  type="button"
                  onClick={() => setProductType('personal_non_salary')}
                  className={`p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    productType === 'personal_non_salary'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {language === 'ar' ? 'بدون تحويل راتب' : 'Non-Salary Transfer'}
                </button>
                <button
                  type="button"
                  onClick={() => setProductType('card')}
                  className={`p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    productType === 'card'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {language === 'ar' ? 'بطاقة ائتمان' : 'Credit Card Sourcing'}
                </button>
              </div>
            </div>

            {/* Monthly Salary Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {language === 'ar' ? 'الراتب الإجمالي الشهري (درهم)' : 'Monthly Gross Salary (AED)'}
                </label>
                <span className="text-sm font-extrabold text-purple-700">
                  {monthlySalary.toLocaleString()} {language === 'ar' ? 'درهم' : 'AED'}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="60000"
                step="1000"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>{language === 'ar' ? '5,000 درهم (الحد الأدنى)' : 'AED 5,000 (Min Threshold)'}</span>
                <span>{language === 'ar' ? '+60,000 درهم' : 'AED 60,000+'}</span>
              </div>
            </div>

            {/* Existing Monthly Liabilities Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {language === 'ar' ? 'الأقساط والالتزامات الشهرية الحالية (درهم)' : 'Existing Monthly EMIs / Liabilities (AED)'}
                </label>
                <span className="text-sm font-extrabold text-slate-900">
                  {existingLiabilities.toLocaleString()} {language === 'ar' ? 'درهم' : 'AED'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.floor(monthlySalary * 0.7)}
                step="500"
                value={existingLiabilities}
                onChange={(e) => setExistingLiabilities(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>
                  {language === 'ar' ? (
                    <>0 درهم (<GlossaryTooltip termId="aecb">سجل ائتماني نظيف</GlossaryTooltip>)</>
                  ) : (
                    <>AED 0 (<GlossaryTooltip termId="aecb">Clean AECB</GlossaryTooltip>)</>
                  )}
                </span>
                <span>
                  {language === 'ar' ? (
                    <>الحد الأقصى لعبء الدين (<GlossaryTooltip termId="dbr">50% كحد أقصى</GlossaryTooltip>)</>
                  ) : (
                    <>Max <GlossaryTooltip termId="dbr">DBR Cap</GlossaryTooltip> (~50%)</>
                  )}
                </span>
              </div>
            </div>

            {/* Employer Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                {language === 'ar' ? 'تصنيف جهة العمل في البنوك' : 'Employer Banking Status'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'approved', label: language === 'ar' ? 'شركة مدرجة (فئة أ)' : 'Tier 1 Listed Company' },
                  { id: 'semi_approved', label: language === 'ar' ? 'شبه حكومي / متوسطة' : 'Semi-Government / SME' },
                  { id: 'non_listed', label: language === 'ar' ? 'غير مدرجة' : 'Unlisted Entity' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEmployerType(item.id as any)}
                    className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                      employerType === item.id
                        ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-[2.2rem] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 block mb-1">
                {language === 'ar' ? 'القدرة التمويلية التقديرية' : 'Estimated Sourcing Capacity'}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1">
                {Math.round(maxFinanceEstimate).toLocaleString()} {language === 'ar' ? 'درهم' : 'AED'}
              </div>
              <p className="text-xs text-slate-300 mb-6">
                {productType === 'card'
                  ? (language === 'ar' ? 'الحد الإجمالي التقديري لبطاقة الائتمان.' : 'Projected combined credit card limit based on tier.')
                  : (language === 'ar' ? 'مبلغ التمويل التأشيري خاضع للاكتتاب البنكي النهائي.' : 'Indicative finance amount subject to final bank underwriting.')}
              </p>

              {/* DBR Meter */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-medium">
                    <GlossaryTooltip termId="dbr" className="text-white border-purple-300 hover:text-purple-200">
                      {language === 'ar' ? 'نسبة عبء الدين (DBR)' : 'Debt Burden Ratio (DBR)'}
                    </GlossaryTooltip>
                  </span>
                  <span className={`font-bold ${dbrPercentage > 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {dbrPercentage}% {dbrPercentage <= 50 ? (language === 'ar' ? '(ضمن الحدود)' : '(Healthy)') : (language === 'ar' ? '(يتجاوز السقف)' : '(Exceeds Cap)')}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      dbrPercentage > 50 ? 'bg-rose-500' : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, dbrPercentage)}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                  {language === 'ar'
                    ? 'يفرض المصرف المركزي الإماراتي حداً أقصى لنسبة عبء الدين لا يتجاوز 50% لعملاء التجزئة.'
                    : 'UAE Central Bank enforces a maximum DBR ceiling of 50% for retail credit customers.'}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ar' ? 'خدمة استلام الوثائق المباشرة من أَمَف مشمولة' : 'AMAFH Physical Document Collection included'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ar' ? 'مطابقة مسبقة مع سياسات بنك دبي الإسلامي والشارقة الإسلامي' : 'Pre-screened against DIB, SIB & Emirates Islamic policies'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{language === 'ar' ? 'رفع رقمي مشفر مباشرة لأنظمة البنوك' : 'Encrypted digital upload to bank processing desks'}</span>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-3.5 px-6 rounded-full bg-[#E8F86E] text-slate-950 font-extrabold text-sm hover:bg-lime-200 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
              >
                <span>{language === 'ar' ? 'طلب التحقق وحجز الملف' : 'Request Verification & File Booking'}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
