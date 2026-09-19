import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText, Globe, BookOpen } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGlossary } from '../context/GlossaryContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPdfModal,
  onOpenConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage, t, isRTL } = useLanguage();
  const { openGlossary } = useGlossary();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: PageId }[] = [
    { name: t.nav.overview, page: 'home' },
    { name: t.nav.about, page: 'about' },
    { name: t.nav.services, page: 'services' },
    { name: t.nav.partners, page: 'partners' },
    { name: t.nav.caseStudies, page: 'case-studies' },
    { name: t.nav.calculator, page: 'calculator' },
    { name: t.nav.careers, page: 'careers' },
    { name: t.nav.contact, page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-purple-950/5 border border-slate-200/80'
                : 'bg-white/85 backdrop-blur-sm border border-slate-200/60 shadow-xs'
            }`}
          >
            {/* Logo Button */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 group text-left rtl:text-right focus:outline-none"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-amber-400 p-[2px] shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-purple-700 text-sm tracking-tighter">
                  <span className="font-extrabold text-base">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-tight flex items-center gap-1.5">
                  {t.company.name}
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 hidden sm:inline-block">
                    UAE
                  </span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-tight font-medium hidden xs:block">
                  {t.company.type}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold transition-all duration-200 flex items-center gap-1.5 relative ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50/80'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8F86E]" />
                    )}
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Bilingual Toggle (EN / العربية) */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 hover:border-purple-300 bg-slate-50/90 hover:bg-white text-slate-800 transition-all shadow-xs group cursor-pointer"
                title={t.nav.switchLangTooltip}
                aria-label="Toggle language between English and Arabic"
              >
                <Globe className="w-3.5 h-3.5 text-purple-700 transition-transform group-hover:rotate-45" />
                <span className={language === 'ar' ? 'font-black text-purple-800' : 'text-slate-400 font-medium'}>
                  العربية
                </span>
                <span className="text-slate-300 text-[10px]">|</span>
                <span className={language === 'en' ? 'font-black text-purple-800' : 'text-slate-400 font-medium'}>
                  EN
                </span>
              </button>

              {/* Profile PDF Button */}
              <button
                onClick={onOpenPdfModal}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100/80 hover:bg-slate-200 transition-colors border border-slate-200/60 cursor-pointer"
                title={t.nav.viewPdf}
              >
                <FileText className="w-3.5 h-3.5 text-purple-600" />
                <span>{t.nav.profilePdf}</span>
              </button>

              {/* Financial Glossary Button */}
              <button
                onClick={() => openGlossary()}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200/80 cursor-pointer shadow-2xs"
                title={language === 'ar' ? 'معجم المصطلحات المصرفية والمالية' : 'Financial Literacy Glossary'}
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                <span>{language === 'ar' ? 'المعجم المالي' : 'Glossary'}</span>
              </button>

              {/* Partner Desk Consultation Button */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span>{t.nav.partnerDesk}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-3 top-20 z-40 bg-white/98 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-slate-200/80 lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              
              {/* Mobile Language Switcher Bar */}
              <div className="flex items-center justify-between p-1 rounded-2xl bg-slate-100 border border-slate-200/80 mb-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                    language === 'en'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                    language === 'ar'
                      ? 'bg-purple-900 text-white shadow-xs font-arabic'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  العربية (AR)
                </button>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1 flex items-center justify-between">
                <span>{t.nav.sourcingPages}</span>
                <span className="text-[10px] text-slate-400">{t.nav.locationBrief}</span>
              </div>

              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-between text-left rtl:text-right ${
                      isActive
                        ? 'bg-purple-900 text-white shadow-xs'
                        : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className={`w-4 h-4 opacity-70 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openGlossary();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 flex items-center justify-center gap-2 border border-purple-200/80 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-purple-700" />
                  <span>{language === 'ar' ? 'معجم المصطلحات المصرفية (Glossary)' : 'Financial Literacy Glossary'}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPdfModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-purple-700" />
                  <span>{t.nav.viewPdf}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] flex items-center justify-center gap-2"
                >
                  <span>{t.nav.bookConsultation}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
