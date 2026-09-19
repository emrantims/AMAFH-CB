import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { useGlossary } from '../context/GlossaryContext';
import { useLanguage } from '../context/LanguageContext';
import { FINANCIAL_GLOSSARY_TERMS } from '../data/glossaryData';

export const GlossaryFloatingButton: React.FC = () => {
  const { openGlossary, isGlossaryOpen } = useGlossary();
  const { language, isRTL } = useLanguage();

  if (isGlossaryOpen) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none rtl:left-auto rtl:right-auto rtl:left-6">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260, delay: 0.8 }}
        className="pointer-events-auto"
      >
        <button
          onClick={() => openGlossary()}
          className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-slate-900/95 hover:bg-purple-900 text-white shadow-xl backdrop-blur-md border border-slate-700/80 hover:border-purple-500 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title={language === 'ar' ? 'افتح معجم المصطلحات المصرفية' : 'Open Financial Literacy Glossary'}
          aria-label="Open Financial Literacy Glossary"
        >
          <div className="w-6 h-6 rounded-full bg-purple-700 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex flex-col text-left rtl:text-right">
            <span className="text-xs font-extrabold tracking-tight text-white leading-none">
              {language === 'ar' ? 'المعجم المالي' : 'Financial Glossary'}
            </span>
            <span className="text-[10px] text-purple-300 leading-tight mt-0.5 font-mono">
              {FINANCIAL_GLOSSARY_TERMS.length} {language === 'ar' ? 'مصطلح مصرفي' : 'Banking Terms'}
            </span>
          </div>
        </button>
      </motion.div>
    </div>
  );
};
