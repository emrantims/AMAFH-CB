import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  Award,
  FileCheck,
  Landmark,
  Scale,
  Building2,
  Fingerprint,
  CheckCircle2,
  ExternalLink,
  FileText,
  ChevronDown,
  Sparkles,
  Copy,
  Check,
  X,
  ArrowUpRight,
  Shield,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPLIANCE_ITEMS, HNW_TRUST_PILLARS } from '../data/complianceData';
import { ComplianceCertificationItem, ComplianceCategory } from '../types';

interface ComplianceCertificationsSectionProps {
  onOpenConsultation?: (topic?: string) => void;
  onOpenPdfModal?: () => void;
  className?: string;
  variant?: 'full' | 'compact';
}

export const ComplianceCertificationsSection: React.FC<ComplianceCertificationsSectionProps> = ({
  onOpenConsultation,
  onOpenPdfModal,
  className = '',
  variant = 'full',
}) => {
  const { language, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ComplianceCategory>('all');
  const [activeItem, setActiveItem] = useState<ComplianceCertificationItem | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const filterTabs: { id: ComplianceCategory; labelEn: string; labelAr: string; count: number }[] = [
    {
      id: 'all',
      labelEn: 'All Certifications & Licenses',
      labelAr: 'كافة المعايير والتراخيص',
      count: COMPLIANCE_ITEMS.length,
    },
    {
      id: 'iso',
      labelEn: 'ISO Standards',
      labelAr: 'معايير الأيزو الدولية',
      count: COMPLIANCE_ITEMS.filter((i) => i.category === 'iso').length,
    },
    {
      id: 'uae-license',
      labelEn: 'UAE Regulatory Licenses',
      labelAr: 'التراخيص الإماراتية الرسمية',
      count: COMPLIANCE_ITEMS.filter((i) => i.category === 'uae-license').length,
    },
    {
      id: 'data-security',
      labelEn: 'Data Privacy & PDPL',
      labelAr: 'حماية البيانات والخصوصية',
      count: COMPLIANCE_ITEMS.filter((i) => i.category === 'data-security').length,
    },
    {
      id: 'sharia',
      labelEn: 'Islamic Governance',
      labelAr: 'الحوكمة الشرعية (AAOIFI)',
      count: COMPLIANCE_ITEMS.filter((i) => i.category === 'sharia').length,
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? COMPLIANCE_ITEMS
      : COMPLIANCE_ITEMS.filter((item) => item.category === selectedCategory);

  const getIcon = (name: string, classNameStr: string) => {
    switch (name) {
      case 'Lock':
        return <Lock className={classNameStr} />;
      case 'Award':
        return <Award className={classNameStr} />;
      case 'ShieldCheck':
        return <ShieldCheck className={classNameStr} />;
      case 'Scale':
        return <Scale className={classNameStr} />;
      case 'Building2':
        return <Building2 className={classNameStr} />;
      case 'Landmark':
        return <Landmark className={classNameStr} />;
      case 'FileCheck':
        return <FileCheck className={classNameStr} />;
      case 'Fingerprint':
        return <Fingerprint className={classNameStr} />;
      default:
        return <CheckCircle2 className={classNameStr} />;
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="compliance-certifications" className={`space-y-12 sm:space-y-16 ${className}`}>
      {/* 1. SECTION HEADER */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono tracking-tight flex items-center gap-1.5 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-[#E8F86E]" />
            <span>{language === 'ar' ? 'الامتثال والاعتماد المؤسسي' : 'COMPLIANCE & CERTIFICATIONS'}</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-purple-700" />
            <span>{language === 'ar' ? 'رخصة وساطة تجارية دبي #802194' : 'Dubai DET License #802194'}</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'ar' ? 'تدقيق سنوي معتمد 2025/2026' : 'Audited & Active 2025/2026'}</span>
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight leading-tight">
          {language === 'ar' ? (
            <>
              معايير الأيزو العالمية <br className="hidden sm:inline" />
              <span className="text-purple-700">والتراخيص الرقابية المعتمدة في الإمارات</span>
            </>
          ) : (
            <>
              Institutional ISO Standards <br className="hidden sm:inline" />
              <span className="text-purple-700">&amp; UAE Regulatory Accreditations</span>
            </>
          )}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          {language === 'ar'
            ? 'تلتزم شركة أَمَف للوساطة التجارية بأعلى معايير حوكمة البيانات وأمن المعلومات وسرية المعاملات المالية المعتمدة من المنظمة الدولية للأيزو ودائرة الاقتصاد والسياحة بدبي ومصرف الإمارات المركزي، لضمان الطمأنينة الكاملة لكبار العملاء وأصحاب الثروات والشركات.'
            : 'AMAFH Commercial Brokers operates under rigorous international quality frameworks, formal Dubai economic licensing, and UAE Central Bank retail lending directives. Designed to offer high-net-worth clients, family offices, and corporate executives complete legal assurance, zero-compromise confidentiality, and audit-grade file integrity.'}
        </p>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 w-fit">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>{language === 'ar' ? tab.labelAr : tab.labelEn}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-[#E8F86E]' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. CERTIFICATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((item) => {
          const isExpanded = expandedCardId === item.id;
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Stripe based on item accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="space-y-4">
                {/* Header row: Icon & Status Badge */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs shrink-0"
                    style={{ backgroundColor: item.accentColor }}
                  >
                    {getIcon(item.iconName, 'w-6 h-6 text-white')}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{language === 'ar' ? item.statusAr : item.status}</span>
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-400">
                      {language === 'ar' ? item.categoryLabelAr : item.categoryLabelEn}
                    </span>
                  </div>
                </div>

                {/* Badge & Code */}
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-bold">
                    <span>{item.badge}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-950 font-display mt-2 leading-tight">
                    {language === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    {language === 'ar' ? item.authorityAr : item.authorityEn}
                  </p>
                </div>

                {/* Brief description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'ar' ? item.shortDescAr : item.shortDescEn}
                </p>

                {/* High-Net-Worth Client Safeguard Box */}
                <div className="p-3.5 rounded-2xl bg-[#F5F3FF] border border-purple-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-900">
                    <Lock className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>{language === 'ar' ? 'ضمانة كبار العملاء (HNW Safeguard)' : 'HNW Client Safeguard'}</span>
                  </div>
                  <p className="text-[11px] text-purple-950/80 leading-relaxed">
                    {language === 'ar' ? item.hnwSignificanceAr : item.hnwSignificanceEn}
                  </p>
                </div>

                {/* Expandable Key Institutional Assurances */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 border-t border-slate-100 space-y-2"
                  >
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      {language === 'ar' ? 'الضمانات المؤسسية المعتمدة:' : 'Key Institutional Assurances:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {(language === 'ar' ? item.keyAssurancesAr : item.keyAssurancesEn).map(
                        (assurance, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{assurance}</span>
                          </li>
                        )
                      )}
                    </ul>

                    <div className="mt-3 pt-2 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                      <span>{language === 'ar' ? 'دورة المراقبة:' : 'Audit Cycle:'}</span>
                      <span>{language === 'ar' ? item.validityOrCycleAr : item.validityOrCycleEn}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={() => setExpandedCardId(isExpanded ? null : item.id)}
                  className="text-purple-700 hover:text-purple-950 flex items-center gap-1 font-bold cursor-pointer transition-colors"
                >
                  <span>{isExpanded ? (language === 'ar' ? 'إخفاء التفاصيل' : 'Less Details') : (language === 'ar' ? 'عرض الضمانات' : 'View Assurances')}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                <button
                  onClick={() => setActiveItem(item)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>{language === 'ar' ? 'التحقق الرسمي' : 'Verify'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. HNW TRUST PILLARS (BENTO STRIP SPECIFIC TO HIGH-NET-WORTH DISCRETION) */}
      <div className="rounded-3xl bg-slate-950 text-white p-7 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8F86E] font-mono">
                {language === 'ar' ? 'بروتوكولات الخصوصية والعملاء النخبة' : 'PRIVATE CLIENT TRUST CHARTER'}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display">
                {language === 'ar'
                  ? 'لماذا يثق كبار العملاء وأصحاب الثروات بشركة أَمَف؟'
                  : 'Why High-Net-Worth Executives & Family Offices Trust AMAFH'}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenConsultation?.('Private Client Sourcing Desk')}
                className="px-4 py-2.5 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-white text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{language === 'ar' ? 'حجز جلسة خاصة لكبار العملاء' : 'Request Private Desk Sourcing'}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HNW_TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 backdrop-blur-xs hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-[#E8F86E]">
                  {getIcon(pillar.icon, 'w-5 h-5')}
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  {language === 'ar' ? pillar.titleAr : pillar.titleEn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'ar' ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. VERIFICATION & CREDENTIAL DETAILS MODAL */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                    style={{ backgroundColor: activeItem.accentColor }}
                  >
                    {getIcon(activeItem.iconName, 'w-7 h-7 text-white')}
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold">
                      <span>{activeItem.badge}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-950 font-display mt-1 leading-tight">
                      {language === 'ar' ? activeItem.titleAr : activeItem.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {language === 'ar' ? activeItem.authorityAr : activeItem.authorityEn}
                    </p>
                  </div>
                </div>

                {/* Verification Registry Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <span className="text-slate-500">{language === 'ar' ? 'الكيان القانوني المرخص:' : 'Licensed Legal Entity:'}</span>
                    <span className="font-bold text-slate-950 font-mono">AMAFH Commercial Brokers L.L.C</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <span className="text-slate-500">{language === 'ar' ? 'المجموعة التجارية:' : 'Parent Entity:'}</span>
                    <span className="font-bold text-slate-950">ALIYAS Group</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <span className="text-slate-500">{language === 'ar' ? 'رمز المعيار / رقم القيد:' : 'Registration Ref / Code:'}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold font-mono text-purple-800 bg-purple-50 px-2 py-0.5 rounded">
                        {activeItem.codeOrNumber}
                      </span>
                      <button
                        onClick={() => handleCopy(activeItem.codeOrNumber)}
                        className="p-1 rounded hover:bg-slate-200 text-slate-500 cursor-pointer"
                        title={language === 'ar' ? 'نسخ' : 'Copy reference'}
                      >
                        {copiedCode === activeItem.codeOrNumber ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{language === 'ar' ? 'المقر المادي المعتمد:' : 'Registered Physical Hub:'}</span>
                    <span className="font-semibold text-slate-800 text-[11px] text-right rtl:text-left">
                      Business Village, Port Saeed, Deira, Dubai
                    </span>
                  </div>
                </div>

                {/* Scope & Significance */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {language === 'ar' ? 'نطاق التطبيق وحماية أصحاب الثروات:' : 'Scope & High-Net-Worth Protection:'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'ar' ? activeItem.hnwSignificanceAr : activeItem.hnwSignificanceEn}
                  </p>
                </div>

                {/* Assurances */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {language === 'ar' ? 'الضمانات الميدانية المعتمدة:' : 'Field Operational Assurances:'}
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {(language === 'ar' ? activeItem.keyAssurancesAr : activeItem.keyAssurancesEn).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onOpenConsultation?.(`Compliance Inquiry: ${activeItem.badge}`);
                    }}
                    className="flex-1 py-3 px-4 rounded-full bg-slate-950 text-white hover:bg-purple-900 text-xs font-bold transition-colors text-center cursor-pointer shadow-sm"
                  >
                    {language === 'ar' ? 'طلب استشارة ائتمانية خاصة' : 'Speak to Senior Underwriting Officer'}
                  </button>
                  {onOpenPdfModal && (
                    <button
                      onClick={() => {
                        setActiveItem(null);
                        onOpenPdfModal();
                      }}
                      className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-purple-700" />
                      <span>{language === 'ar' ? 'الملف التعريفي' : 'Corporate Dossier'}</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
