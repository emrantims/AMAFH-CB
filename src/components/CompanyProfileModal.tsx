import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Building2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/amafhData';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      page: 1,
      title: 'Title & Introduction',
      tagline: 'Your Trusted Outsourced Financial Sales Partner in the UAE (2025)',
      highlights: [
        'Division of ALIYAS Group',
        'Strictly Confidential, Banking Recipient Ready',
        'End-to-end customer profiling and final submission',
        'Consistent, trusted, and compliance-first'
      ],
      color: 'bg-purple-900',
    },
    {
      page: 2,
      title: 'About Us & ALIYAS Group',
      tagline: 'Supporting UAE Banks with Credit Cards, Personal Finance & Verification',
      highlights: [
        'Experienced management & trained frontline team',
        'Robust InfoSec infrastructure',
        'Complete documentation management for strict banking standards',
        'Helping financial institutions scale with consistency and confidence'
      ],
      color: 'bg-indigo-950',
    },
    {
      page: 3,
      title: 'Vision & Mission',
      tagline: 'End-to-End Operational Ownership & Quality Execution',
      highlights: [
        '01: Complete ownership from customer interaction to document collection',
        '02: Detailed verification and quality checks to improve approval rates',
        '03: Workforce alignment with banking policies for scalable growth',
        '04: Transparent, high-performance financial ecosystem'
      ],
      color: 'bg-purple-950',
    },
    {
      page: 4,
      title: 'Core Strengths (6 Pillars)',
      tagline: 'Infrastructure, Talent, Methods, Allocation, Innovation, Security',
      highlights: [
        '9,500 sq. ft. secured workspace designed to banking specs',
        'Trained frontline sales force driving operational accuracy',
        'Standardized SOPs and multi-stage compliance checks',
        'ISO-standard InfoSec frameworks & encrypted data handling'
      ],
      color: 'bg-slate-900',
    },
    {
      page: 5,
      title: 'Core Service Portfolio',
      tagline: 'Credit Cards, Personal Finance, Vigilance & QA',
      highlights: [
        'Credit Card Sales Outsourcing (Clean file preparation)',
        'Personal Finance (Salary & Non-Salary Transfer)',
        'Customer Verification, Physical Visits & Vigilance Checks',
        'Product Onboarding & Rapid Sales Force Deployment',
        'Compliance & Quality Assurance Framework'
      ],
      color: 'bg-purple-900',
    },
    {
      page: 6,
      title: 'Value Delivery Framework',
      tagline: 'Market-Ready Enablement & Reduced Processing Gaps',
      highlights: [
        'Structured onboarding aligns with market expectations',
        'Multi-layer data-backed validation & banking policy checks',
        'Minimizing operational bottlenecks for bank underwriting teams',
        'Faster turnaround with cleaner files'
      ],
      color: 'bg-indigo-900',
    },
    {
      page: 7,
      title: 'Document Approval Process (CVVB)',
      tagline: 'Collection (Us) → Verification (Us) → Validation (Bank) → Booking (Bank)',
      highlights: [
        'C: Collecting, visiting, verifying customer documents at initial stage',
        'V: Verification, vigilance checks & uploading per bank eligibility',
        'V: Bank teams conduct final validation and system updating',
        'B: Bank completes booking, product dispatch and card activation'
      ],
      color: 'bg-slate-950',
    },
    {
      page: 8,
      title: 'Why Choose Us & Institutional Reliability',
      tagline: 'A Trusted Partner for Banking Excellence',
      highlights: [
        'Fully standardized SOPs for all financial products',
        '9,500 sq. ft. secured office infrastructure with CCTV',
        'Proven performance across 3+ major financial institutions',
        'Scalable team capacity to support volume expansion'
      ],
      color: 'bg-purple-950',
    },
    {
      page: 9,
      title: 'Our Team & Leadership',
      tagline: 'Professional Workforce Committed to Excellence',
      highlights: [
        'Experienced executive management',
        '250+ frontline sales executives, verification officers & quality auditors',
        'Regular banking product certifications & regulatory drills',
        'Trained in UAE Central Bank compliance policies'
      ],
      color: 'bg-slate-900',
    },
    {
      page: 10,
      title: 'Current Banking Portfolio',
      tagline: 'DIB, SIB, Emirates Islamic & Reem Finance',
      highlights: [
        'Dubai Islamic Bank (DIB): Credit Cards & Personal Finance',
        'Sharjah Islamic Bank (SIB): Credit Cards & Personal Finance',
        'Emirates Islamic: Credit Cards & Personal Finance',
        'Reem Finance: Accurate verification & structured profiling'
      ],
      color: 'bg-indigo-950',
    },
    {
      page: 11,
      title: 'Trusted By Leading Institutions',
      tagline: 'Corporate Employer Network & Financial Partners',
      highlights: [
        'Serving Islamic and conventional retail banks',
        'Corporate client networks: Radisson Blu, ALEC, HLG, Larsen & Toubro, Saudi Binladin',
        'FIBREX, PIVOT Engineering, DCE Dubai, Rotana, Citispace, Al Jaber',
        'High conversion through pre-approved company listings'
      ],
      color: 'bg-purple-900',
    },
    {
      page: 12,
      title: 'Contact & Appreciation',
      tagline: 'Business Village, Port Saeed, Deira, Dubai – UAE',
      highlights: [
        'Office #206 & #218, Business Village, Port Saeed, Deira, Dubai',
        'Direct Phone: +971 4 210 5555',
        'Official Portal: www.amafhdubai.com',
        'Strictly Confidential, Ready for Financial Institutions'
      ],
      color: 'bg-slate-950',
    },
  ];

  if (!isOpen) return null;

  const current = pages[currentPage - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-700 text-white flex items-center justify-center font-extrabold text-base">
              A
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                AMAFH Commercial Brokers L.L.C
              </h3>
              <p className="text-xs text-slate-500">
                Official Company Profile (2025 Edition) • Division of ALIYAS Group
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                alert('Downloading AMAFH Commercial Brokers Profile (2025). The profile contains full corporate credentials and compliance frameworks.');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Page Mockup */}
            <div className={`md:col-span-6 rounded-3xl ${current.color} text-white p-6 sm:p-8 shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-between`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest text-amber-300 uppercase">
                  AMAFH BROKERS
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-bold">
                  Page {currentPage} of 12
                </span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-display mb-2 leading-tight">
                  {current.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>Business Village, Dubai – UAE</span>
                <span>Strictly Confidential</span>
              </div>
            </div>

            {/* Extracted Key Summary */}
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                Official Document Highlights
              </span>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                {current.title}
              </h4>
              <p className="text-xs text-slate-600">
                {current.tagline}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Pagination Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-1">
            {pages.map((p) => (
              <button
                key={p.page}
                onClick={() => setCurrentPage(p.page)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  currentPage === p.page
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p.page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
            disabled={currentPage === 12}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-700 text-white hover:bg-purple-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
