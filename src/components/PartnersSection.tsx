import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Landmark,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Banknote,
  Home,
  Car,
  Briefcase,
  Search,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal,
  FileCheck,
  BookOpen
} from 'lucide-react';
import { BANKING_PORTFOLIO, CORPORATE_ECOSYSTEM } from '../data/amafhData';
import { PartnerLogo } from './PartnerLogo';
import { useLanguage } from '../context/LanguageContext';
import { useGlossary } from '../context/GlossaryContext';
import { GlossaryTooltip } from './GlossaryTooltip';
import { BankPartner } from '../types';

interface PartnersSectionProps {
  onOpenConsultation?: (topic?: string) => void;
}

type ProductFilterKey = 'all' | 'Credit Cards' | 'Personal Loans' | 'Mortgages' | 'Auto Finance' | 'SME Finance';

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenConsultation }) => {
  const { t, isRTL, language } = useLanguage();
  const { openGlossary } = useGlossary();
  const [tab, setTab] = useState<'banks' | 'corporate'>('banks');
  const [selectedProduct, setSelectedProduct] = useState<ProductFilterKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [shariaOnly, setShariaOnly] = useState(false);

  // Product categories configuration with icons and bilingual labels
  const productCategories: {
    id: ProductFilterKey;
    labelEn: string;
    labelAr: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: 'all', labelEn: 'All Products', labelAr: 'جميع المنتجات', icon: Landmark },
    { id: 'Credit Cards', labelEn: 'Credit Cards', labelAr: 'بطاقات الائتمان', icon: CreditCard },
    { id: 'Personal Loans', labelEn: 'Personal Loans', labelAr: 'التمويل الشخصي', icon: Banknote },
    { id: 'Mortgages', labelEn: 'Mortgages & Home', labelAr: 'التمويل العقاري والسكني', icon: Home },
    { id: 'Auto Finance', labelEn: 'Auto Finance', labelAr: 'تمويل السيارات', icon: Car },
    { id: 'SME Finance', labelEn: 'SME Finance', labelAr: 'تمويل الشركات والـ SME', icon: Briefcase },
  ];

  // Calculate count for each product type
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { all: BANKING_PORTFOLIO.length };
    BANKING_PORTFOLIO.forEach((bank) => {
      bank.products.forEach((p) => {
        counts[p] = (counts[p] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Filter bank partners based on selected product, search query, and Sharia preference
  const filteredBanks = useMemo(() => {
    return BANKING_PORTFOLIO.filter((partner: BankPartner) => {
      // Product filter
      const matchesProduct =
        selectedProduct === 'all' || partner.products.includes(selectedProduct);

      // Search query (matches bank name, shortName, focus, or products)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        partner.name.toLowerCase().includes(query) ||
        partner.shortName.toLowerCase().includes(query) ||
        partner.focus.toLowerCase().includes(query) ||
        partner.products.some((p) => p.toLowerCase().includes(query)) ||
        (partner.features && partner.features.some((f) => f.toLowerCase().includes(query)));

      // Sharia filter
      const matchesSharia = !shariaOnly || partner.shariaCompliant === true;

      return matchesProduct && matchesSearch && matchesSharia;
    });
  }, [selectedProduct, searchQuery, shariaOnly]);

  const handleResetFilters = () => {
    setSelectedProduct('all');
    setSearchQuery('');
    setShariaOnly(false);
  };

  return (
    <section id="partners" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'المنظومة المؤسسية المعتمدة' : 'Institutional Sourcing Ecosystem'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            {language === 'ar' ? 'الشركاء المصرفيون وشبكة الشركات' : 'Banking Partners & Corporate Network'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
            {language === 'ar'
              ? 'تصفح البنوك الشريكة المعتمدة حسب نوع المنتج التمويلي، وتعرف على سقف التمويل ومعايير الرواتب المعتمدة وسرعة الإنجاز.'
              : 'Filter accredited UAE partner banks by specific product categories, compare underwriting SLAs, minimum salaries, and borrowing caps.'}
          </p>
        </div>

        {/* Tab Toggle Pills (Banks vs Corporate) */}
        <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/80 self-start md:self-auto">
          <button
            onClick={() => setTab('banks')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              tab === 'banks'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>{language === 'ar' ? 'محفظة البنوك المعتمدة' : 'Tier-1 Banking Portfolio'}</span>
          </button>
          <button
            onClick={() => setTab('corporate')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              tab === 'corporate'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>
              {language === 'ar'
                ? `شبكة الشركات (${CORPORATE_ECOSYSTEM.length})`
                : `Corporate Network (${CORPORATE_ECOSYSTEM.length})`}
            </span>
          </button>
        </div>
      </div>

      {/* Dynamic Animated Content Container */}
      <AnimatePresence mode="wait">
        {tab === 'banks' ? (
          <motion.div
            key="banks"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Filter Controls Bar */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              {/* Product Category Filter Pills */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 font-display uppercase tracking-wider shrink-0">
                  <SlidersHorizontal className="w-4 h-4 text-purple-700" />
                  <span>{language === 'ar' ? 'تصنيف حسب نوع المنتج:' : 'Filter by Product Type:'}</span>
                </div>

                {/* Product Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {productCategories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedProduct === cat.id;
                    const count = productCounts[cat.id] ?? 0;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedProduct(cat.id)}
                        className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-purple-700 text-white shadow-xs ring-2 ring-purple-300'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/50'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                            isSelected
                              ? 'bg-purple-900 text-purple-100'
                              : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Secondary Controls: Search & Sharia Filter */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      language === 'ar'
                        ? 'ابحث باسم البنك أو الميزة أو المنتج...'
                        : 'Search by bank name, feature, or keyword...'
                    }
                    className="w-full text-xs sm:text-sm pl-10 pr-8 py-2 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:bg-white transition-all rtl:pl-8 rtl:pr-10"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold rtl:right-auto rtl:left-3"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Right Side Options */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Sharia Toggle Button */}
                  <button
                    onClick={() => setShariaOnly((prev) => !prev)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer border ${
                      shariaOnly
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>{language === 'ar' ? 'البنوك الإسلامية فقط' : 'Sharia Compliant Only'}</span>
                  </button>

                  {/* Active Filter Clear */}
                  {(selectedProduct !== 'all' || searchQuery || shariaOnly) && (
                    <button
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-1 text-xs text-purple-700 hover:text-purple-900 font-bold transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'إعادة التعيين' : 'Reset Filters'}</span>
                    </button>
                  )}

                  {/* Open Financial Glossary Link */}
                  <button
                    onClick={() => openGlossary()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-purple-800 bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200/80 cursor-pointer ml-auto rtl:ml-0 rtl:mr-auto"
                    title={language === 'ar' ? 'عرض مصطلحات التمويل الإسلامي والقروض' : 'View Islamic Finance & Loan Jargon'}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                    <span>{language === 'ar' ? 'معجم المصطلحات المصرفية' : 'Banking Terms Glossary'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Counter Summary */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                {language === 'ar' ? (
                  <>
                    يتم عرض <strong className="text-slate-900">{filteredBanks.length}</strong> من أصل{' '}
                    <strong className="text-slate-900">{BANKING_PORTFOLIO.length}</strong> بنك شريك
                    {selectedProduct !== 'all' && ` في فئة ${selectedProduct}`}
                  </>
                ) : (
                  <>
                    Showing <strong className="text-slate-900">{filteredBanks.length}</strong> of{' '}
                    <strong className="text-slate-900">{BANKING_PORTFOLIO.length}</strong> partner banks
                    {selectedProduct !== 'all' && ` offering ${selectedProduct}`}
                  </>
                )}
              </span>

              {selectedProduct !== 'all' && (
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold font-mono text-[11px]">
                  {selectedProduct}
                </span>
              )}
            </div>

            {/* Filtered Bank Cards Grid */}
            {filteredBanks.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <Landmark className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1 font-display">
                  {language === 'ar' ? 'لا توجد بنوك مطابقة للتصفية الحالية' : 'No matching partner banks found'}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-5">
                  {language === 'ar'
                    ? 'جرب البحث بكلمة أخرى أو تغيير تصفية نوع المنتج أو إيقاف خيار البنوك الإسلامية فقط.'
                    : 'Try selecting a different product type, clearing your search query, or toggling off the Sharia filter.'}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2 rounded-full bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'عرض جميع البنوك' : 'Show All Banks'}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBanks.map((partner, idx) => {
                  const isFilteredProductActive = selectedProduct !== 'all';

                  return (
                    <motion.div
                      key={partner.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-purple-950/5 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xl group"
                    >
                      <div>
                        {/* Top Bank Header with Authentic Vector Logo and Badges */}
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <PartnerLogo id={partner.id} name={partner.name} />

                          <div className="flex flex-col items-end gap-1 shrink-0">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{language === 'ar' ? 'شريك مباشر' : 'Direct SLA'}</span>
                            </span>

                            {partner.shariaCompliant ? (
                              <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                                {language === 'ar' ? 'متوافق مع الشريعة' : 'Islamic / Sharia'}
                              </span>
                            ) : (
                              <span className="text-[9px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                                {language === 'ar' ? 'بنك تجاري تقليدي' : 'Conventional'}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Bank Name */}
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-display mb-2">
                          {partner.name}
                        </h3>

                        {/* Product Type Tags with Highlight on Selected Category */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {partner.products.map((p, pIdx) => {
                            const isMatch = isFilteredProductActive && p === selectedProduct;

                            return (
                              <span
                                key={pIdx}
                                className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold transition-all ${
                                  isMatch
                                    ? 'bg-[#E8F86E] text-slate-950 font-bold border border-lime-400 shadow-xs ring-1 ring-lime-300 scale-105'
                                    : 'bg-purple-50 text-purple-800 border border-purple-100'
                                }`}
                              >
                                {p}
                              </span>
                            );
                          })}
                        </div>

                        {/* Bank Operational Focus */}
                        <p className="text-xs text-slate-600 leading-relaxed mb-5">
                          {partner.focus}
                        </p>

                        {/* Key Underwriting Specifications Grid */}
                        <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs mb-4">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              {language === 'ar' ? 'الحد الأدنى للراتب' : 'Min. Salary'}
                            </span>
                            <span className="font-bold text-slate-800">
                              {partner.minSalary || 'AED 5,000'}
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              {language === 'ar' ? 'سقف التسهيل' : 'Max Facility'}
                            </span>
                            <span className="font-bold text-slate-800">
                              {partner.maxLimit || 'Up to AED 3M'}
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              {language === 'ar' ? 'سرعة الإنجاز' : 'Turnaround SLA'}
                            </span>
                            <span className="font-bold text-purple-700">
                              {partner.turnaroundTime || '24–48 Hours'}
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              {language === 'ar' ? 'نسبة قبول الملفات' : 'Approval Ratio'}
                            </span>
                            <span className="font-bold text-emerald-700">
                              {partner.approvalRate || '98% Clean Files'}
                            </span>
                          </div>
                        </div>

                        {/* Key Product Highlights */}
                        {partner.features && partner.features.length > 0 && (
                          <div className="space-y-1.5 mb-5">
                            {partner.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                <FileCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                                <span className="leading-tight">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer: Sourcing Channel & Action Button */}
                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span className="flex items-center gap-1 text-slate-600 text-[11px]">
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                            <span>{language === 'ar' ? 'وكيل مباشر: أَمَف' : 'Direct Channel: AMAFH'}</span>
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {language === 'ar' ? (
                              <>امتثال <GlossaryTooltip termId="dbr">50% DBR</GlossaryTooltip></>
                            ) : (
                              <><GlossaryTooltip termId="dbr">50% DBR</GlossaryTooltip> Compliant</>
                            )}
                          </span>
                        </div>

                        <button
                          onClick={() => onOpenConsultation && onOpenConsultation(`${partner.name} Sourcing`)}
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-purple-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                        >
                          <span>
                            {language === 'ar'
                              ? `طلب استشارة ${partner.shortName}`
                              : `Inquire for ${partner.shortName}`}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="corporate"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl"
          >
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display mb-1.5">
                  {language === 'ar' ? 'شبكات الشركات المعتمدة مسبقاً' : 'Pre-Approved Corporate Client Networks'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  {language === 'ar'
                    ? 'تدير شركة أَمَف مكاتب توعية مالية داخل مقرات العمل وبرامج تحويل رواتب معتمدة لدى كبرى شركات المقاولات والهندسة والضيافة والتجزئة في الإمارات.'
                    : 'AMAFH maintains active on-site workplace sourcing desks and approved salary-transfer programs across premier UAE construction, engineering, hospitality, and conglomerate firms.'}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 font-bold text-xs shrink-0 self-start sm:self-auto">
                {language === 'ar' ? 'خدمات مصرفية معتمدة لمقار العمل' : 'Workplace Banking Authorized'}
              </div>
            </div>

            {/* Corporate Grid with Real Partner Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {CORPORATE_ECOSYSTEM.map((corp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between gap-3 hover:bg-white hover:border-purple-200 hover:shadow-md transition-all group"
                >
                  <PartnerLogo id={corp} name={corp} />
                  <span className="text-[10px] font-bold text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'ar' ? 'معتمد' : 'Eligible'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
