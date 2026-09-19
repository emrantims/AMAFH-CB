import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, HelpCircle, ShieldCheck } from 'lucide-react';
import { FINANCIAL_GLOSSARY_TERMS } from '../data/glossaryData';
import { useGlossary } from '../context/GlossaryContext';
import { useLanguage } from '../context/LanguageContext';

interface GlossaryTooltipProps {
  termId: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({
  termId,
  children,
  className = '',
  showIcon = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { openGlossary } = useGlossary();
  const { language, isRTL } = useLanguage();

  const termData = FINANCIAL_GLOSSARY_TERMS.find((item) => item.id === termId);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  if (!termData) {
    return <span className={className}>{children || termId}</span>;
  }

  const handleOpenFull = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    openGlossary(termId);
  };

  return (
    <span
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsVisible(!isVisible)}
      className={`relative inline-flex items-center gap-1 cursor-help border-b border-dotted border-purple-400 hover:border-purple-700 hover:text-purple-800 transition-colors group ${className}`}
      title={language === 'ar' ? `انقر لعرض مصطلح: ${termData.term}` : `Click to learn more about ${termData.term}`}
    >
      <span>{children || termData.term}</span>
      {showIcon && (
        <HelpCircle className="w-3 h-3 text-purple-600 inline opacity-70 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Floating Interactive Tooltip Card */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-4 rounded-2xl bg-slate-950 text-white shadow-2xl border border-slate-800 z-50 text-left rtl:text-right pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tooltip Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-purple-900/80 text-purple-200 text-[10px] font-mono font-bold tracking-wider uppercase border border-purple-700/50 mb-1">
                  {language === 'ar' ? termData.categoryLabelAr : termData.categoryLabelEn}
                </span>
                <h4 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5 font-display">
                  <span>{termData.term}</span>
                  <span className="text-slate-400 font-normal text-xs">
                    ({language === 'ar' ? termData.fullNameAr : termData.fullNameEn})
                  </span>
                </h4>
              </div>
            </div>

            {/* Tooltip Short Definition */}
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {language === 'ar' ? termData.shortDefinitionAr : termData.shortDefinitionEn}
            </p>

            {/* Rule of thumb highlight if available */}
            {termData.ruleOfThumbEn && (
              <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-800/40 text-[11px] text-purple-200 mb-3 flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  {language === 'ar' ? termData.ruleOfThumbAr : termData.ruleOfThumbEn}
                </span>
              </div>
            )}

            {/* Action Footer */}
            <button
              onClick={handleOpenFull}
              className="w-full py-1.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer group/btn"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {language === 'ar' ? 'عرض الدليل الكامل في المعجم' : 'Open Full Guide in Glossary'}
              </span>
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            {/* Subtle Downward Caret Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-slate-950" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
