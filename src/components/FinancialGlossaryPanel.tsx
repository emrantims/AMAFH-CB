import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Calculator,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Info,
  Scale,
  Landmark,
  FileText
} from 'lucide-react';
import { FINANCIAL_GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from '../data/glossaryData';
import { useGlossary } from '../context/GlossaryContext';
import { useLanguage } from '../context/LanguageContext';
import { GlossaryTerm } from '../types';

interface FinancialGlossaryPanelProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const FinancialGlossaryPanel: React.FC<FinancialGlossaryPanelProps> = ({
  onOpenConsultation,
}) => {
  const { isGlossaryOpen, closeGlossary, activeTermId, selectTerm } = useGlossary();
  const { language, isRTL } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isGlossaryOpen) {
        closeGlossary();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGlossaryOpen, closeGlossary]);

  // Lock body scroll when panel is open on mobile
  useEffect(() => {
    if (isGlossaryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGlossaryOpen]);

  // Filter terms by category and search query
  const filteredTerms = useMemo(() => {
    return FINANCIAL_GLOSSARY_TERMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.term.toLowerCase().includes(query) ||
        (item.arabicTerm && item.arabicTerm.toLowerCase().includes(query)) ||
        item.fullNameEn.toLowerCase().includes(query) ||
        item.fullNameAr.toLowerCase().includes(query) ||
        item.shortDefinitionEn.toLowerCase().includes(query) ||
        item.shortDefinitionAr.toLowerCase().includes(query) ||
        item.fullExplanationEn.toLowerCase().includes(query) ||
        item.fullExplanationAr.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Determine active term
  const activeTerm: GlossaryTerm = useMemo(() => {
    const found = FINANCIAL_GLOSSARY_TERMS.find((t) => t.id === activeTermId);
    if (found) return found;
    if (filteredTerms.length > 0) return filteredTerms[0];
    return FINANCIAL_GLOSSARY_TERMS[0];
  }, [activeTermId, filteredTerms]);

  const handleCopyDefinition = () => {
    const textToCopy = `${activeTerm.term} (${language === 'ar' ? activeTerm.fullNameAr : activeTerm.fullNameEn}):\n${language === 'ar' ? activeTerm.shortDefinitionAr : activeTerm.shortDefinitionEn}\n\nRule of Thumb: ${language === 'ar' ? activeTerm.ruleOfThumbAr || '' : activeTerm.ruleOfThumbEn || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isGlossaryOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeGlossary}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Slide-over Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 rtl:right-auto rtl:left-0 rtl:pl-0 rtl:sm:pr-10">
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-2xl sm:max-w-3xl lg:max-w-4xl bg-white shadow-2xl flex flex-col h-full border-l border-slate-200 rtl:border-l-0 rtl:border-r"
            >
              {/* Top Drawer Header */}
              <div className="p-4 sm:p-6 bg-slate-950 text-white border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-500 p-0.5 shadow-md flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-black tracking-tight font-display text-white">
                        {language === 'ar'
                          ? 'معجم المصطلحات المصرفية والمالية'
                          : 'Financial Literacy Glossary'}
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-purple-900/90 text-purple-200 text-[10px] font-mono font-bold uppercase tracking-wider border border-purple-700/50">
                        {FINANCIAL_GLOSSARY_TERMS.length} {language === 'ar' ? 'مصطلح' : 'Terms'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'ar'
                        ? 'دليلك المبسط لفهم معايير المصرف المركزي ومصطلحات التمويل والائتمان في دولة الإمارات.'
                        : 'Demystifying UAE Central Bank regulations, credit bureau jargon, and retail finance metrics.'}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeGlossary}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close glossary panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search and Category Filter Toolbar */}
              <div className="p-4 bg-slate-50 border-b border-slate-200/80 space-y-3 shrink-0">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      language === 'ar'
                        ? 'ابحث عن أي مصطلح (مثل DBR أو AECB أو المرابحة أو الفائدة)...'
                        : 'Search terms (e.g. DBR, AECB, APR, Murabaha, Reducing Rate)...'
                    }
                    className="w-full text-xs sm:text-sm pl-10 pr-8 py-2.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all rtl:pl-8 rtl:pr-10 shadow-xs"
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

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {GLOSSARY_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-purple-700 text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80'
                        }`}
                      >
                        {language === 'ar' ? cat.labelAr : cat.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Split Body: Left List + Right Detail */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Terms List Sidebar */}
                <div className="w-full md:w-5/12 lg:w-4/12 border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-200 overflow-y-auto max-h-56 md:max-h-full bg-slate-50/50">
                  {filteredTerms.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                      <HelpCircle className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                      <p className="text-xs font-bold">
                        {language === 'ar' ? 'لا توجد نتائج مطابقة' : 'No terms match your search'}
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="mt-2 text-xs text-purple-700 font-bold hover:underline"
                      >
                        {language === 'ar' ? 'إعادة ضبط الفلتر' : 'Reset search filters'}
                      </button>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {filteredTerms.map((item) => {
                        const isSelected = item.id === activeTerm.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => selectTerm(item.id)}
                            className={`w-full text-left rtl:text-right p-3.5 transition-all flex items-start justify-between gap-2 cursor-pointer ${
                              isSelected
                                ? 'bg-purple-50 border-l-4 rtl:border-l-0 rtl:border-r-4 border-purple-700 text-purple-950 font-bold'
                                : 'hover:bg-slate-100 text-slate-800'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span
                                  className={`text-xs font-extrabold font-mono px-2 py-0.5 rounded ${
                                    isSelected
                                      ? 'bg-purple-700 text-white'
                                      : 'bg-slate-200/80 text-slate-700'
                                  }`}
                                >
                                  {item.term}
                                </span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider truncate">
                                  {language === 'ar' ? item.categoryLabelAr : item.categoryLabelEn}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-slate-900 truncate">
                                {language === 'ar' ? item.fullNameAr : item.fullNameEn}
                              </h4>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {language === 'ar' ? item.shortDefinitionAr : item.shortDefinitionEn}
                              </p>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 text-slate-400 shrink-0 mt-2 transition-transform rtl:rotate-180 ${
                                isSelected ? 'text-purple-700 translate-x-0.5 rtl:-translate-x-0.5' : ''
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Term In-Depth Detail View */}
                <div className="w-full md:w-7/12 lg:w-8/12 overflow-y-auto p-5 sm:p-8 space-y-6 bg-white">
                  {/* Term Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800 border border-purple-200">
                          {activeTerm.term}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                          {language === 'ar' ? activeTerm.categoryLabelAr : activeTerm.categoryLabelEn}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight">
                        {language === 'ar' ? activeTerm.fullNameAr : activeTerm.fullNameEn}
                      </h3>
                      {language === 'ar' && (
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {activeTerm.fullNameEn}
                        </p>
                      )}
                    </div>

                    {/* Copy and Actions */}
                    <button
                      onClick={handleCopyDefinition}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-700 hover:text-purple-700 transition-colors shrink-0 self-start cursor-pointer"
                      title="Copy definition"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">{language === 'ar' ? 'تم النسخ' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'نسخ التعريف' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Plain Language Summary Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider mb-2 font-display">
                      <Sparkles className="w-4 h-4 text-purple-700" />
                      <span>{language === 'ar' ? 'التعريف المبسط' : 'Plain-Language Overview'}</span>
                    </div>
                    <p className="text-sm font-medium text-purple-950 leading-relaxed">
                      {language === 'ar' ? activeTerm.shortDefinitionAr : activeTerm.shortDefinitionEn}
                    </p>
                  </div>

                  {/* Detailed Explanation */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                      {language === 'ar' ? 'كيف يعمل في البنوك الإماراتية؟' : 'How It Works in UAE Banking'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {language === 'ar' ? activeTerm.fullExplanationAr : activeTerm.fullExplanationEn}
                    </p>
                  </div>

                  {/* CBUAE Rule of Thumb / Golden Rule */}
                  {activeTerm.ruleOfThumbEn && (
                    <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5 font-display">
                        <Scale className="w-4 h-4 text-amber-700" />
                        <span>
                          {language === 'ar'
                            ? 'معيار المصرف المركزي / نصيحة الخبراء'
                            : 'UAE Central Bank Benchmark / Pro-Tip'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                        {language === 'ar' ? activeTerm.ruleOfThumbAr : activeTerm.ruleOfThumbEn}
                      </p>
                    </div>
                  )}

                  {/* Formula / Calculation (if applicable) */}
                  {activeTerm.formulaOrCalculationEn && (
                    <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E8F86E] uppercase tracking-wider font-display">
                        <Calculator className="w-4 h-4" />
                        <span>{language === 'ar' ? 'صيغة الحساب الرسمية' : 'Official Calculation Formula'}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm text-purple-200 border border-slate-800 break-words">
                        {language === 'ar'
                          ? activeTerm.formulaOrCalculationAr || activeTerm.formulaOrCalculationEn
                          : activeTerm.formulaOrCalculationEn}
                      </div>
                    </div>
                  )}

                  {/* Practical Example Scenario */}
                  {activeTerm.exampleScenarioEn && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-display">
                        <FileText className="w-4 h-4 text-purple-700" />
                        <span>{language === 'ar' ? 'مثال توضيحي واقعي' : 'Real-World UAE Scenario'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {language === 'ar' ? activeTerm.exampleScenarioAr : activeTerm.exampleScenarioEn}
                      </p>
                    </div>
                  )}

                  {/* Related Terms Cross-Links */}
                  {activeTerm.relatedTermIds && activeTerm.relatedTermIds.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-display">
                        {language === 'ar' ? 'مصطلحات مرتبطة بها:' : 'Related Financial Concepts:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeTerm.relatedTermIds.map((relId) => {
                          const rel = FINANCIAL_GLOSSARY_TERMS.find((t) => t.id === relId);
                          if (!rel) return null;
                          return (
                            <button
                              key={relId}
                              onClick={() => selectTerm(relId)}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-900 text-xs font-bold transition-all inline-flex items-center gap-1 cursor-pointer border border-slate-200/60 hover:border-purple-300"
                            >
                              <span>{rel.term}</span>
                              <span className="text-[10px] text-slate-400">
                                ({language === 'ar' ? rel.arabicTerm || rel.fullNameAr : rel.fullNameEn})
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Consultation Banner at Bottom of Drawer */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                    <div>
                      <h4 className="text-sm font-extrabold tracking-tight">
                        {language === 'ar'
                          ? `هل تحتاج إلى استشارة متخصصة حول ${activeTerm.term}؟`
                          : `Need tailored guidance on ${activeTerm.term}?`}
                      </h4>
                      <p className="text-xs text-purple-200 mt-0.5">
                        {language === 'ar'
                          ? 'يتولى مستشارو أَمَف تدقيق ملفك وفق أحدث معايير المصرف المركزي مجاناً.'
                          : 'AMAFH senior advisors verify your AECB readiness and DBR capacity free of charge.'}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        closeGlossary();
                        if (onOpenConsultation) {
                          onOpenConsultation(`Glossary Advisory: ${activeTerm.term}`);
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-[#E8F86E] hover:bg-[#d8e85e] text-slate-950 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs flex items-center gap-1.5"
                    >
                      <span>{language === 'ar' ? 'تواصل مع مستشار' : 'Speak to an Advisor'}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
