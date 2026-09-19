import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  Plus,
  Minus,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Building2,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/amafhData';
import { FaqItem } from '../types';
import { FaqJsonLd } from './FaqJsonLd';

interface FaqAccordionProps {
  onOpenConsultation: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const categories = [
    { id: 'all', label: 'All FAQs', icon: HelpCircle },
    { id: 'Process & CVVB', label: 'Process & CVVB', icon: FileCheck2 },
    { id: 'Credit Cards', label: 'Credit Cards', icon: CreditCard },
    { id: 'Personal Finance', label: 'Personal Finance', icon: Building2 },
    { id: 'Compliance & KYC', label: 'Compliance & KYC', icon: ShieldCheck },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Schema.org FAQPage Rich Snippet JSON-LD for Google Rich Results */}
      <FaqJsonLd />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UAE Banking Protocol &amp; Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
            Everything you need to know about outsourced sales operations, Central Bank Debt-Burden Ratio (DBR) calculations, and the 4-stage CVVB lifecycle.
          </p>
        </div>

        {/* Search Bar matching pill style */}
        <div className="w-full md:w-80 relative">
          <div className="relative flex items-center bg-white rounded-full border border-slate-200 px-4 py-2 shadow-xs focus-within:ring-2 focus-within:ring-purple-700 transition-all">
            <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search banking questions..."
              className="w-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 ml-1 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills and Expand/Collapse Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200/60">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={handleExpandAll}
            className="text-slate-500 hover:text-purple-700 font-semibold transition-colors"
          >
            Expand All
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={handleCollapseAll}
            className="text-slate-500 hover:text-purple-700 font-semibold transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-bold text-slate-700">No matching questions found</p>
            <p className="text-xs text-slate-500 mt-1">Try searching with a different term or reset your category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-1.5 rounded-full bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-purple-300 shadow-md shadow-purple-950/5 ring-1 ring-purple-100'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-display">
                        {faq.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-950 font-display leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Circular Toggle Button matching reference design */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#E8F86E] text-slate-950 rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-purple-100 hover:text-purple-700'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                        <p>{faq.answer}</p>

                        {/* Key Compliance & Process Takeaways */}
                        {faq.keyPoints && faq.keyPoints.length > 0 && (
                          <div className="pt-2">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-2">
                              Key Standards &amp; Highlights
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                              {faq.keyPoints.map((point, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="flex items-start gap-2 p-2.5 rounded-xl bg-purple-50/50 border border-purple-100/60 text-xs text-slate-800"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                                  <span className="font-medium leading-tight">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-[2rem] bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Dedicated Bank Sourcing Desk
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold font-display">
            Need a tailored sourcing or verification solution for your bank?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            Our Dubai operations leadership is ready to discuss turnkey sales pod deployments, SLA structures, and ISO-compliant integration.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="flex-shrink-0 px-6 py-3 rounded-full bg-[#E8F86E] text-slate-950 font-bold text-xs sm:text-sm hover:bg-lime-200 transition-all flex items-center gap-2 shadow-lg active:scale-95"
        >
          <span>Speak With Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
