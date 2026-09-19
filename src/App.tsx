import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ContactFooter } from './components/ContactFooter';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { LiveChatBubble } from './components/LiveChatBubble';
import { PageId } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { GlossaryProvider } from './context/GlossaryContext';
import { FinancialGlossaryPanel } from './components/FinancialGlossaryPanel';
import { GlossaryFloatingButton } from './components/GlossaryFloatingButton';

// Distinct Sub-Pages (Designed with Reference Images)
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PartnersPage } from './pages/PartnersPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>(undefined);
  const [preVetData, setPreVetData] = useState<{ product: string; salary: number; eligibleAmount: number } | null>(null);

  // Sync URL hash with currentPage for direct linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'partners', 'case-studies', 'calculator', 'careers', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForConsultation(serviceName);
    setIsConsultationModalOpen(true);
  };

  const handlePreVetRequest = (data: { product: string; salary: number; eligibleAmount: number }) => {
    setPreVetData(data);
    setSelectedServiceForConsultation(data.product);
    setIsConsultationModalOpen(true);
  };

  return (
    <LanguageProvider>
      <GlossaryProvider>
        <div className="min-h-screen bg-[#FBFBF9] text-[#1E1B2E] selection:bg-purple-700 selection:text-white relative flex flex-col justify-between">
        {/* Viewport Top Scroll Depth Progress Bar */}
        <ScrollProgressBar />

        {/* Top Floating Glass Navigation with Multi-Page Active Links */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Main Content Area - Render Dedicated Sub-Page */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {currentPage === 'home' && (
                <HomePage
                  onNavigate={navigateTo}
                  onOpenConsultation={handleOpenConsultation}
                  onOpenPdfModal={() => setIsPdfModalOpen(true)}
                />
              )}

              {currentPage === 'about' && (
                <AboutPage
                  onNavigate={navigateTo}
                  onOpenPdfModal={() => setIsPdfModalOpen(true)}
                  onOpenConsultation={() => handleOpenConsultation('Executive Partnership')}
                />
              )}

              {currentPage === 'services' && (
                <ServicesPage
                  onNavigate={navigateTo}
                  onOpenConsultation={handleOpenConsultation}
                />
              )}

              {currentPage === 'partners' && (
                <PartnersPage
                  onNavigate={navigateTo}
                  onOpenConsultation={() => handleOpenConsultation('Bank Partnership')}
                />
              )}

              {currentPage === 'case-studies' && (
                <CaseStudiesPage
                  onNavigate={navigateTo}
                  onOpenConsultation={handleOpenConsultation}
                />
              )}

              {currentPage === 'calculator' && (
                <CalculatorPage
                  onNavigate={navigateTo}
                  onPreVetRequest={handlePreVetRequest}
                />
              )}

              {currentPage === 'careers' && (
                <CareersPage
                  onNavigate={navigateTo}
                />
              )}

              {currentPage === 'contact' && (
                <ContactPage
                  onNavigate={navigateTo}
                  onOpenConsultation={() => handleOpenConsultation('General Desk')}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Consistent Multi-Page Footer with Page Switching and Direct Newsletter */}
        <ContactFooter
          onNavigate={navigateTo}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Official 12-Page Company Profile PDF Viewer Modal */}
        <CompanyProfileModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
        />

        {/* Bank Partnership & Sourcing Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationModalOpen}
          onClose={() => {
            setIsConsultationModalOpen(false);
            setPreVetData(null);
          }}
          initialService={selectedServiceForConsultation}
          preVetData={preVetData}
        />

        {/* Floating Live Chat Quick Inquiry Bubble with WhatsApp Direct Desk */}
        <LiveChatBubble onOpenPdfModal={() => setIsPdfModalOpen(true)} />

        {/* Financial Literacy Glossary Side Panel Drawer */}
        <FinancialGlossaryPanel onOpenConsultation={handleOpenConsultation} />

        {/* Floating Financial Glossary Button */}
        <GlossaryFloatingButton />
      </div>
    </GlossaryProvider>
  </LanguageProvider>
  );
}
