import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Building2,
  Landmark,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { TESTIMONIALS } from '../data/amafhData';
import { TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const ClientTestimonials: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'bank' | 'corporate'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const filteredTestimonials = TESTIMONIALS.filter((item) => {
    if (filter === 'all') return true;
    return item.orgType === filter;
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, filteredTestimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Carousel slide animations variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? (isRTL ? -80 : 80) : (isRTL ? 80 : -80),
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? (isRTL ? 80 : -80) : (isRTL ? -80 : 80),
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'شهادات الاعتماد المؤسسي' : 'Institutional Validation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            {language === 'ar' ? 'آراء العملاء والشركاء المصرفيين' : 'Client & Banking Partner Testimonials'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg">
            {language === 'ar'
              ? 'استمع مباشرة إلى مديري الاكتتاب ورؤساء الخدمات المصرفية للأفراد ومسؤولي الموارد البشرية في الإمارات.'
              : "Hear directly from UAE underwriting heads, retail directors, and corporate human capital leaders who rely on AMAFH's compliant sales force."}
          </p>
        </div>

        {/* Filter Pills & Play/Pause Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200/80">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ar' ? 'الكل' : 'All'} ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setFilter('bank')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'bank'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ar' ? 'البنوك والتمويل' : 'Banks & Lending'}
            </button>
            <button
              onClick={() => setFilter('corporate')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'corporate'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ar' ? 'عملاء الشركات' : 'Corporate Clients'}
            </button>
          </div>

          {/* Autoplay toggle button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1 cursor-pointer ${
              isAutoPlaying
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-slate-100 border-slate-200 text-slate-500'
            }`}
            title={isAutoPlaying ? (language === 'ar' ? 'إيقاف التشغيل التلقائي' : 'Pause Auto-play') : (language === 'ar' ? 'استئناف التشغيل التلقائي' : 'Resume Auto-play')}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Interactive Carousel Showcase */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="min-h-[420px] sm:min-h-[380px] md:min-h-[340px] relative flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            {currentTestimonial && (
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl shadow-purple-950/5 border border-slate-200/90 relative overflow-hidden"
              >
                {/* Background decorative watermark */}
                <div className={`absolute top-6 ${isRTL ? 'left-8' : 'right-8'} text-purple-100 pointer-events-none opacity-40`}>
                  <Quote className="w-28 h-28 stroke-[1]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Quote & Testimonial Details */}
                  <div className="lg:col-span-8 space-y-5">
                    {/* Top Pill Meta */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 flex items-center gap-1.5">
                        {currentTestimonial.orgType === 'bank' ? (
                          <Landmark className="w-3.5 h-3.5 text-purple-700" />
                        ) : (
                          <Building2 className="w-3.5 h-3.5 text-purple-700" />
                        )}
                        <span>{currentTestimonial.tag}</span>
                      </span>

                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-600 text-xs font-semibold">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="mx-1 text-slate-800 font-bold">5.0</span>
                      </div>
                    </div>

                    {/* The Quote Statement */}
                    <p className="text-base sm:text-lg md:text-xl font-medium text-slate-900 leading-relaxed font-display">
                      "{currentTestimonial.quote}"
                    </p>

                    {/* Author & Organization Details */}
                    <div className="flex items-center gap-3.5 pt-2">
                      <div className="relative">
                        <img
                          src={currentTestimonial.avatarUrl}
                          alt={currentTestimonial.clientName}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-600/30 shadow-sm"
                        />
                        <div className={`absolute -bottom-1 ${isRTL ? '-left-1' : '-right-1'} w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white`}>
                          <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-tight">
                          {currentTestimonial.clientName}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {currentTestimonial.designation} • <span className="font-semibold text-purple-800">{currentTestimonial.organization}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Metric Highlight Card (Reference design aesthetic) */}
                  <div className="lg:col-span-4">
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 text-white shadow-lg relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-purple-500/20 blur-xl pointer-events-none" />

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                          {language === 'ar' ? 'نتيجة استقطاب معتمدة' : 'Verified Sourcing Result'}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">
                        {currentTestimonial.highlightMetric}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {currentTestimonial.metricLabel}
                      </p>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {language === 'ar' ? 'شريك ممتثل رقابياً' : 'Compliant Partner'}
                        </span>
                        <span className="text-amber-300 font-semibold">{language === 'ar' ? 'اتفاقية مستوى الخدمة' : 'AMAFH SLA'}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Bar */}
        <div className="flex items-center justify-between mt-6 px-2">
          
          {/* Dot Pagination with active expanding pill */}
          <div className="flex items-center gap-2">
            {filteredTestimonials.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-purple-700'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-semibold text-slate-400 mx-2">
              {currentIndex + 1} / {filteredTestimonials.length}
            </span>
          </div>

          {/* Previous & Next Circular Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all flex items-center justify-center active:scale-95 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#E8F86E] border border-lime-300 shadow-md text-slate-950 hover:bg-lime-200 transition-all flex items-center justify-center active:scale-95 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className={`w-5 h-5 stroke-[2.5] ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
