import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Landmark,
  FileCheck,
  Percent,
  Layers
} from 'lucide-react';
import { PartnerLogo } from './PartnerLogo';
import { useLanguage } from '../context/LanguageContext';

export interface CaseStudy {
  id: string;
  category: 'Workplace Sourcing' | 'Debt Consolidation' | 'Non-Salary Transfer' | 'Executive & VIP' | 'Bank B2B';
  categoryAr: string;
  title: string;
  titleAr: string;
  clientProfile: string;
  clientProfileAr: string;
  bankPartner: string;
  bankId: string;
  metrics: {
    label: string;
    labelAr: string;
    value: string;
    sub: string;
    subAr: string;
  }[];
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  outcome: string;
  outcomeAr: string;
  cvvbStageHighlight: string;
  cvvbStageHighlightAr: string;
  timeline: string;
  timelineAr: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    category: 'Workplace Sourcing',
    categoryAr: 'استقطاب مقرات العمل',
    title: 'Multi-Site Workplace Sourcing for Tier-1 Contracting Conglomerate',
    titleAr: 'استقطاب متعدد المواقع لمجموعة مقاولات كبرى في الإمارات',
    clientProfile: '350+ Construction Project Engineers & Managers across Dubai & Northern Emirates (ALEC / HLG project sites)',
    clientProfileAr: 'أكثر من 350 مهندس ومدير مشروع إنشائي في دبي والإمارات الشمالية',
    bankPartner: 'Dubai Islamic Bank (DIB)',
    bankId: 'dib',
    metrics: [
      { label: 'Approval Ratio', labelAr: 'نسبة الموافقة', value: '96.4%', sub: 'First-time clean submissions', subAr: 'ملفات مكتملة من أول تقديم' },
      { label: 'Turnaround Time', labelAr: 'زمن الإنجاز', value: '48 Hours', sub: 'Compressed from 14 days', subAr: 'تقليص من 14 يوماً' },
      { label: 'Total Volume', labelAr: 'إجمالي التسهيلات', value: 'AED 18.2M', sub: 'Disbursed personal finance & cards', subAr: 'تمويل شخصي وبطاقات ائتمان' },
    ],
    challenge:
      'Employees working across active remote job sites faced persistent retail branch rejections due to non-standard construction site allowances, decentralized HR pay slips, and strict banking employer category quotas.',
    challengeAr:
      'واجه الموظفون في المواقع الإنشائية رفضاً متكرراً في فروع البنوك بسبب بدلات الموقع غير النمطية وشهادات الراتب اللامركزية وقيود حصص الشركات غير المدرجة.',
    solution:
      'AMAFH deployed a dedicated mobile CVVB desk on-site at project headquarters. Pre-scrutinized AECB credit bureau scores in real-time, consolidated salary transfer undertakings directly with group payroll, and routed pre-vetted files through an exclusive high-volume corporate underwriting lane with Dubai Islamic Bank.',
    solutionAr:
      'نشرت أَمَف مكتب تدقيق وفحص ميداني متنقل بمقر إدارة المشاريع، وفحصت تقارير الاتحاد للمعلومات الائتمانية لحظياً، وحصلت على تعهدات تحويل الرواتب مباشرة، ثم وجهت الملفات عبر مسار الاكتتاب المؤسسي الحصري مع بنك دبي الإسلامي.',
    outcome:
      '280+ personal finance and premium Islamic credit card files approved within 48 hours. Eliminated customer branch visits, achieved a 96.4% first-time approval rate, and zero documentation kickbacks.',
    outcomeAr:
      'تمت الموافقة على أكثر من 280 ملف تمويل شخصي وبطاقات ائتمانية إسلامية خلال 48 ساعة دون حاجة الموظفين لزيارة أي فرع، مع نسبة موافقة 96.4% وصفر نواقص توثيقية.',
    cvvbStageHighlight: 'CVVB Stage 1 & 3: Direct Workplace Sourcing & Bank Policy Validation',
    cvvbStageHighlightAr: 'المرحلة 1 و3: استقطاب مقرات العمل ومطابقة سياسات البنك',
    timeline: 'Completed in 14 Days',
    timelineAr: 'أُنجز خلال 14 يوماً',
  },
  {
    id: 'cs-2',
    category: 'Debt Consolidation',
    categoryAr: 'شراء وتوحيد المديونيات',
    title: 'High-Exposure Multi-Card Liability Buyout & DBR Restructuring',
    titleAr: 'شراء مديونيات بطاقات متعددة وإعادة هيكلة نسبة عبء الدين',
    clientProfile: 'Senior Airline Pilot / Aviation Crew (Monthly Salary AED 42,000)',
    clientProfileAr: 'طيار أول في شركة طيران كبرى (الراتب الشهري 42,000 درهم)',
    bankPartner: 'Sharjah Islamic Bank (SIB)',
    bankId: 'sib',
    metrics: [
      { label: 'Monthly EMI Saved', labelAr: 'التوفير الشهري للأقساط', value: 'AED 6,800/mo', sub: 'Replaced card min dues', subAr: 'بدل الفوائد المرتفعة' },
      { label: 'DBR Corrected', labelAr: 'تعديل عبء الدين', value: '62% → 38%', sub: 'Within UAE Central Bank cap', subAr: 'أصبح متوافقاً مع سقف المصرف المركزي' },
      { label: 'Profit Rate', labelAr: 'معدل الربح السنوي', value: '3.99% Flat', sub: 'Islamic Murabaha buyout', subAr: 'مرابحة إسلامية لشراء المديونية' },
    ],
    challenge:
      'The client had accumulated AED 380,000 across 5 credit cards with different UAE banks. Minimum monthly repayments exceeded AED 19,000 (a 62% DBR), threatening Central Bank legal collection action and triggering multiple negative AECB inquiry penalties.',
    challengeAr:
      'تراكمت على العميل مديونيات بقيمة 380,000 درهم عبر 5 بطاقات ائتمان لدى بنوك مختلفة، وبلغت الدفعات الشهرية الدنيا أكثر من 19,000 درهم (نسبة عبء دين 62%) مما هدد باتخاذ إجراءات قانونية وتراجع تقييم الائتمان.',
    solution:
      'AMAFH conducted an in-depth bureau reconciliation, audited liability certificates from all 5 card issuers, and structured a comprehensive Bank Buyout Loan with Sharjah Islamic Bank, consolidating all unsecured card balances into a single Islamic personal finance facility amortized over 48 months.',
    solutionAr:
      'أجرت أَمَف تدقيقاً شاملاً للتقرير الائتماني، واستخرجت شهادات المديونية من البنوك الخمسة، وهيكلت تمويل شراء مديونية لدى بنك الشارقة الإسلامي لدمج كافة البطاقات في تمويل شخصي إسلامي واحد مقسط على 48 شهراً.',
    outcome:
      'Monthly liability obligation slashed from AED 19,200 to AED 9,150, restoring DBR to a compliant 38%. The client saved over AED 81,000 in compounded credit card interest charges and restored an AECB rating above 730.',
    outcomeAr:
      'انخفض الالتزام الشهري من 19,200 درهم إلى 9,150 درهم، لتعود نسبة عبء الدين إلى 38% المعتمدة نظامياً، مع توفير أكثر من 81,000 درهم من فوائد البطاقات المركبة ورفع تقييم الاتحاد فوق 730 نقطة.',
    cvvbStageHighlight: 'CVVB Stage 2 & 4: AECB Pre-Vetting & Central Bank DBR Clearance',
    cvvbStageHighlightAr: 'المرحلة 2 و4: التدقيق المسبق وتصفية الالتزامات لدى المصرف المركزي',
    timeline: 'Cleared in 5 Business Days',
    timelineAr: 'أُنجزت التصفية في 5 أيام عمل',
  },
  {
    id: 'cs-3',
    category: 'Non-Salary Transfer',
    categoryAr: 'بدون تحويل راتب',
    title: 'Non-Salary Transfer (NST) Liquidity for Semi-Government Executives',
    titleAr: 'سيولة نقدية بدون تحويل راتب (NST) لقيادات جهات شبه حكومية',
    clientProfile: 'Corporate Strategy Director at Dubai Media City Freezone Entity (Salary AED 55,000)',
    clientProfileAr: 'مدير استراتيجيات بشركة في مدينة دبي للإعلام (الراتب 55,000 درهم)',
    bankPartner: 'Emirates Islamic',
    bankId: 'emirates_islamic',
    metrics: [
      { label: 'Facility Quantum', labelAr: 'مبلغ التسهيل', value: 'AED 350,000', sub: 'Zero salary transfer required', subAr: 'بدون اشتراط تحويل الراتب' },
      { label: 'AECB Inquiries', labelAr: 'استعلامات التقرير', value: '1 Only', sub: 'Zero footprint pre-vetting', subAr: 'استعلام رسمي واحد فقط' },
      { label: 'Sourcing Route', labelAr: 'قناة الاستقطاب', value: 'Direct Desk', sub: 'High-Net-Worth Desk', subAr: 'مكتب كبار الشخصيات' },
    ],
    challenge:
      'The client required emergency renovation and property down-payment liquidity without moving their primary salary account from an international bank that offered no personal loans to freezone-based staff.',
    challengeAr:
      'احتاج العميل سيولة فورية لدفعة عقارية دون نقل حسابه المصرفي الأساسي لتحويل الراتب من بنكه الدولي الذي لا يمنح قروضاً شخصية لموظفي المناطق الحرة.',
    solution:
      'Leveraged AMAFH’s authorized Non-Salary Transfer (NST) allocation with Emirates Islamic. Verified company trade license and 6-month primary bank statements demonstrating flawless salary credits, circumventing the salary transfer requirement completely.',
    solutionAr:
      'استفادت أَمَف من تخصيص منتجات (بدون تحويل راتب) مع مصرف الإمارات الإسلامي، وتأكدت من السجل التجاري وكشوف الحساب التي تثبت انتظام تحويل الرواتب دون الحاجة لنقل الحساب البنكي.',
    outcome:
      'AED 350,000 liquid funds credited in 72 hours against post-dated security cheques and digital direct debit mandate. Primary bank salary remained untouched.',
    outcomeAr:
      'تم إيداع مبلغ 350,000 درهم نقداً خلال 72 ساعة بضمان شيكات وخصم مباشر آلي، مع بقاء الراتب الأساسي في بنكه دون أي تغيير.',
    cvvbStageHighlight: 'CVVB Stage 3: Direct Bank Submission & Underwriting Clearance',
    cvvbStageHighlightAr: 'المرحلة 3: التقديم المباشر للبنوك والتخليص الائتماني',
    timeline: '72 Hours Disbursed',
    timelineAr: 'صُرف خلال 72 ساعة',
  },
  {
    id: 'cs-4',
    category: 'Bank B2B',
    categoryAr: 'خدمات مؤسسية للبنوك',
    title: 'Outsourced Direct Sales Pod Deployment for Northern Emirates Expansion',
    titleAr: 'نشر فرق مبيعات خارجية لتوسيع محفظة بنك شريك بالإمارات الشمالية',
    clientProfile: 'Head of Retail Assets & Retail Cards, Leading UAE Sharia Bank',
    clientProfileAr: 'رئيس الأصول وبطاقات التجزئة ببنك إسلامي رائد في الإمارات',
    bankPartner: 'Reem Finance & Islamic Banking Pod',
    bankId: 'reem_finance',
    metrics: [
      { label: 'Monthly Cards Issued', labelAr: 'البطاقات الصادرة شهرياً', value: '1,200+', sub: 'Average active run-rate', subAr: 'معدل شهري منتظم' },
      { label: 'Document Rejection', labelAr: 'نسبة ارتداد الملفات', value: '< 1.2%', sub: 'Audited pre-submission', subAr: 'أقل من 1.2% بعد التدقيق' },
      { label: 'Cost to Acquire', labelAr: 'تكلفة الاستقطاب', value: '-35%', sub: 'Vs. internal branch direct sales', subAr: 'أقل بنسبة 35% مقارنة بالفروع' },
    ],
    challenge:
      'The bank sought rapid expansion across retail card assets in Sharjah, Ajman, and Ras Al Khaimah, but faced hiring freezes and CapEx limits on building physical branches in high-density commercial clusters.',
    challengeAr:
      'سعى البنك لتوسيع محفظة بطاقاته سريعاً في الشارقة وعجمان ورأس الخيمة، لكنه واجه قيوداً على الإنفاق الرأسمالي لبناء فروع جديدة وتجميداً مؤقتاً للتوظيف المباشر.',
    solution:
      'AMAFH deployed a turnkey 35-agent dedicated sales pod stationed out of our 9,500 sq.ft Business Village operations hub. The pod operated under bank-mandated SOPs, handling corporate prospecting, biometric Emirates ID validation, and complete document dossier assembly.',
    solutionAr:
      'نشرت أَمَف فريق مبيعات متخصصاً من 35 مستشاراً انطلاقاً من مركز عملياتنا بقرية الأعمال بديرة. وعمل الفريق وفق إجراءات البنك الصارمة، متولياً التنسيق مع الشركات والتحقق البيومتري من الهوية وجمع الملفات.',
    outcome:
      'Generated 1,200+ approved cards monthly with a clean dossier rate exceeding 98.8%. Delivered turnkey market penetration with zero bank CapEx and immediate profitability on new customer acquisition.',
    outcomeAr:
      'تحقيق إصدار أكثر من 1,200 بطاقة معتمدة شهرياً بمعدل ملفات نظيفة تجاوز 98.8%، مما مكن البنك من اختراق السوق بصفر تكلفة رأسمالية مع تحقيق أرباح فورية من العملاء الجدد.',
    cvvbStageHighlight: 'CVVB Full Lifecycle: Sourcing, Pre-Screening, Verification & Courier Dispatch',
    cvvbStageHighlightAr: 'دورة CVVB الكاملة: الاستقطاب، الفحص المسبق، التحقق، والتسليم الآمن',
    timeline: 'Ongoing Long-Term Mandate',
    timelineAr: 'عقد استراتيجي مستمر',
  },
];

interface CaseStudiesSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenConsultation }) => {
  const { t, isRTL, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(CASE_STUDIES[0].id);

  const categories = [
    { key: 'All', labelEn: 'All Case Studies', labelAr: 'جميع دراسات الحالة' },
    { key: 'Workplace Sourcing', labelEn: 'Workplace Sourcing', labelAr: 'استقطاب مقرات العمل' },
    { key: 'Debt Consolidation', labelEn: 'Debt Consolidation', labelAr: 'شراء وتوحيد المديونيات' },
    { key: 'Non-Salary Transfer', labelEn: 'Non-Salary Transfer', labelAr: 'بدون تحويل راتب' },
    { key: 'Bank B2B', labelEn: 'Bank B2B Solutions', labelAr: 'خدمات مؤسسية للبنوك' },
  ];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>{language === 'ar' ? 'سجل نجاحات تمويلية موثقة في الإمارات' : 'Proven UAE Sourcing Track Record'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            {language === 'ar' ? 'تحديات مالية حقيقية ونتائج ملموسة' : 'Client Financial Challenges & Measurable Outcomes'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            {language === 'ar'
              ? 'دراسات حالة واقعية توضح كيف تنجح منظومة CVVB الرباعية لدى أَمَف، ومكاتب الربط المباشر مع البنوك، في تجاوز التحديات الائتمانية المعقدة.'
              : "Real-world case studies detailing how AMAFH's 4-stage CVVB operational framework, dedicated bank liaison desks, and regulatory pre-vetting overcome complex retail financing barriers."}
          </p>
        </div>

        {/* Aggregate Proof Pill */}
        <div className="hidden lg:flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="font-bold text-slate-900">{language === 'ar' ? '99.4% نسبة الملفات الخالية من النواقص' : '99.4% Clean File Ratio'}</div>
            <div className="text-slate-500">{language === 'ar' ? 'صفر ارتدادات وفقاً لشروط المصرف المركزي' : 'Zero Central Bank SLA kickbacks'}</div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-purple-700 text-white shadow-xs shadow-purple-900/20'
                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200/80 hover:bg-slate-50'
            }`}
          >
            {language === 'ar' ? cat.labelAr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Case Studies Cards Grid */}
      <div className="space-y-6">
        {filteredStudies.map((cs, idx) => {
          const isExpanded = expandedId === cs.id;

          return (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl bg-white border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'border-purple-300 shadow-xl shadow-purple-950/5 ring-1 ring-purple-200'
                  : 'border-slate-200/80 shadow-md hover:border-purple-200 hover:shadow-lg'
              }`}
            >
              {/* Card Header Bar */}
              <div
                onClick={() => toggleExpand(cs.id)}
                className="p-6 sm:p-7 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-5 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-100">
                      {language === 'ar' ? cs.categoryAr : cs.category}
                    </span>

                    {/* Official Bank Partner Logo component */}
                    <div className="scale-90 origin-left rtl:origin-right">
                      <PartnerLogo id={cs.bankId} name={cs.bankPartner} />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {language === 'ar' ? cs.timelineAr : cs.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display leading-snug">
                    {language === 'ar' ? cs.titleAr : cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-800">{language === 'ar' ? 'الملف المستهدف:' : 'Target Profile:'}</strong> {language === 'ar' ? cs.clientProfileAr : cs.clientProfile}
                  </p>
                </div>

                {/* Metrics Badges Row */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start lg:self-center">
                  {cs.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center min-w-[90px] sm:min-w-[105px]"
                    >
                      <div className="text-sm sm:text-base font-black text-purple-800 font-display">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-900 leading-tight mt-0.5">
                        {language === 'ar' ? m.labelAr : m.label}
                      </div>
                    </div>
                  ))}

                  <div className="w-9 h-9 rounded-full bg-slate-100 hover:bg-purple-100 text-slate-600 hover:text-purple-700 flex items-center justify-center transition-colors ml-1 rtl:mr-1 rtl:ml-0 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Breakdown Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="border-t border-slate-100 px-6 sm:px-7 py-6 bg-slate-50/50"
                  >
                    {/* 3-Column Challenge - Solution - Outcome Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                      {/* 1. The Challenge */}
                      <div className="p-5 rounded-2xl bg-white border border-amber-200/80 shadow-xs space-y-2">
                        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider font-display">
                          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>{language === 'ar' ? 'التحدي الائتماني' : 'The Challenge'}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {language === 'ar' ? cs.challengeAr : cs.challenge}
                        </p>
                      </div>

                      {/* 2. AMAFH Intervention & CVVB Protocol */}
                      <div className="p-5 rounded-2xl bg-white border border-purple-200 shadow-xs space-y-2">
                        <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wider font-display">
                          <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                          <span>{language === 'ar' ? 'حل أَمَف ومنظومة CVVB' : 'AMAFH CVVB Solution'}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {language === 'ar' ? cs.solutionAr : cs.solution}
                        </p>
                      </div>

                      {/* 3. Quantified Successful Outcome */}
                      <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-2">
                        <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider font-display">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{language === 'ar' ? 'النتيجة المحققة' : 'Successful Outcome'}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {language === 'ar' ? cs.outcomeAr : cs.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Operational Highlights & CTA Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0" />
                        <span className="font-semibold text-slate-800">{language === 'ar' ? cs.cvvbStageHighlightAr : cs.cvvbStageHighlight}</span>
                      </div>

                      <button
                        onClick={() => onOpenConsultation(cs.title)}
                        className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-purple-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs self-start sm:self-auto group cursor-pointer"
                      >
                        <span>{language === 'ar' ? 'طلب هيكلة تمويلية مماثلة' : 'Request Similar Structuring'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Proof Strip Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left rtl:md:text-right">
          <h4 className="text-base sm:text-lg font-bold font-display">
            {language === 'ar' ? 'هل تواجه عائقاً تمويلياً معقداً أو ترغب في توفير التسهيلات لموظفيك؟' : 'Facing a Complex Financial or Workplace Sourcing Bottleneck?'}
          </h4>
          <p className="text-xs text-purple-200 max-w-xl">
            {language === 'ar'
              ? 'يتخصص فريق الاكتتاب المعتمد لدينا في شراء المديونيات المرتفعة، وحلول الشركات غير المدرجة، والتسجيل المؤسسي السريع.'
              : 'Our certified underwriting team specializes in high-liability consolidation, non-listed company solutions, and express corporate onboarding.'}
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation('General Case Study Consultation')}
          className="px-6 py-3 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-[#d8e85e] font-black text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>{language === 'ar' ? 'تحدث مع مستشار أَمَف المتخصص' : 'Speak with an AMAFH Specialist'}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </section>
  );
};
