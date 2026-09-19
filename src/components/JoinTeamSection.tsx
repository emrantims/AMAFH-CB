import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Briefcase,
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  DollarSign,
  Award,
  Building,
  ShieldCheck,
  Phone,
  Mail,
  User,
  X,
  Clock,
  Send,
  HelpCircle,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface RoleOption {
  id: string;
  title: string;
  titleAr: string;
  type: string;
  typeAr: string;
  spots: string;
  spotsAr: string;
  badge: string;
  badgeAr: string;
  focus: string;
  focusAr: string;
}

const OPEN_ROLES: RoleOption[] = [
  {
    id: 'dsa-cards',
    title: 'Credit Card Direct Sales Agent (DSA)',
    titleAr: 'مستشار مبيعات مباشرة لبطاقات الائتمان',
    type: 'Full-Time / Commission + Salary',
    typeAr: 'دوام كامل / عمولة + راتب',
    spots: '12 Openings',
    spotsAr: '12 وظيفة شاغرة',
    badge: 'High Commission',
    badgeAr: 'عمولات مجزية',
    focus: 'Direct workplace & kiosk sourcing across Dubai & Northern Emirates for DIB, SIB, and Emirates Islamic cards.',
    focusAr: 'استقطاب المبيعات في مقرات الشركات وأكشاك المراكز بدبي والإمارات الشمالية لبطاقات بنك دبي الإسلامي والشارقة والإمارات الإسلامي.',
  },
  {
    id: 'dsa-finance',
    title: 'Personal Finance Consultant',
    titleAr: 'مستشار تمويل شخصي وتمويل مؤسسي',
    type: 'Full-Time / Performance Bonus',
    typeAr: 'دوام كامل / حوافز أداء',
    spots: '8 Openings',
    spotsAr: '8 وظائف شاغرة',
    badge: 'Tier-1 Banks',
    badgeAr: 'بنوك كبرى',
    focus: 'Structuring salary transfer loans and non-salary transfer (NST) facilities for corporate employees.',
    focusAr: 'هيكلة قروض تحويل الراتب والتمويل بدون تحويل راتب لموظفي الشركات المعتمدة.',
  },
  {
    id: 'telesales-exec',
    title: 'Outbound Telesales & Pre-Screening Officer',
    titleAr: 'مسؤول مبيعات هاتفية وتدقيق ائتماني مسبق',
    type: 'Office-Based (Business Village)',
    typeAr: 'مكتبي (قرية الأعمال - ديرة)',
    spots: '6 Openings',
    spotsAr: '6 وظائف شاغرة',
    badge: 'Fixed + Target',
    badgeAr: 'ثابت + أهداف',
    focus: 'Managing incoming qualified applicant leads, DBR pre-qualification, and documentation scheduling.',
    focusAr: 'التواصل مع العملاء المؤهلين، وفحص نسبة عبء الدين، وتنسيق استلام المستندات.',
  },
  {
    id: 'vigilance-officer',
    title: 'Field Vigilance & Verification Officer (FVV)',
    titleAr: 'مسؤول تحقق وتدقيق ميداني (FVV)',
    type: 'Field Operations',
    typeAr: 'عمليات ميدانية',
    spots: '4 Openings',
    spotsAr: '4 وظائف شاغرة',
    badge: 'Fleet Supported',
    badgeAr: 'دعم لوجستي',
    focus: 'Conducting in-person physical workplace and residential verifications according to bank CVVB mandates.',
    focusAr: 'إجراء التحقق الميداني من مقرات العمل والمساكن طبقاً لمتطلبات منظومة CVVB المصرفية.',
  },
  {
    id: 'team-leader',
    title: 'Sales Team Leader / Agency Supervisor',
    titleAr: 'قائد فريق مبيعات / مشرف وكالة',
    type: 'Leadership',
    typeAr: 'إدارة وإشراف',
    spots: '2 Openings',
    spotsAr: 'وظيفتان شاغرتان',
    badge: 'Management Overrides',
    badgeAr: 'حوافز إشرافية',
    focus: 'Leading a pod of 10-15 direct sales agents with target management and bank liaison responsibilities.',
    focusAr: 'قيادة فريق من 10 إلى 15 مستشار مبيعات، وإدارة المستهدفات، والتنسيق المباشر مع البنوك.',
  },
];

export const JoinTeamSection: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [selectedRoleId, setSelectedRoleId] = useState<string>(OPEN_ROLES[0].id);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    experienceYears: '1-2 years',
    visaStatus: 'Employment Visa (Transferable)',
    notes: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  // File Upload State
  const [file, setFile] = useState<{ name: string; size: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const selectedRoleObj = OPEN_ROLES.find(r => r.id === selectedRoleId) || OPEN_ROLES[0];
  const activeRoleTitle = language === 'ar' ? selectedRoleObj.titleAr : selectedRoleObj.title;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (uploadedFile: File) => {
    const sizeInMB = (uploadedFile.size / (1024 * 1024)).toFixed(2);
    setUploadProgress(20);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);
          setFile({
            name: uploadedFile.name,
            size: `${sizeInMB} MB`,
          });
          return null;
        }
        return prev + 30;
      });
    }, 120);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setFormError(language === 'ar' ? 'يرجى إكمال الاسم ورقم الهاتف والبريد الإلكتروني.' : 'Please fill in your name, contact phone, and email address.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `AMAFH-HR-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#7E22CE', '#E8F86E', '#F59E0B', '#10B981'],
        });
      } catch (err) {
        console.log('Confetti error:', err);
      }
    }, 1000);
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setFile(null);
    setFormError(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      experienceYears: '1-2 years',
      visaStatus: 'Employment Visa (Transferable)',
      notes: '',
    });
  };

  return (
    <section id="careers" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F86E]/40 text-slate-900 border border-[#E8F86E] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>{language === 'ar' ? 'وظائف أَمَف للوساطة التجارية' : 'Careers at AMAFH Commercial Brokers'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            {language === 'ar' ? 'انضم إلى فريق النخبة في المبيعات والتدقيق الميداني' : 'Join Our Elite Sales & Vigilance Team'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
            {language === 'ar'
              ? 'هل أنت محترف مبيعات مالية طموح في الإمارات؟ اعمل مع محافظ بنكية رائدة (دبي الإسلامي، الشارقة الإسلامي، الإمارات الإسلامي) من مقرنا بمساحة 9,500 قدم مربعة بقرية الأعمال في ديرة، دبي.'
              : 'Are you an ambitious financial sales professional in the UAE? Work with top-tier banking portfolios (DIB, SIB, Emirates Islamic) out of our 9,500 sq.ft Business Village headquarters in Deira, Dubai.'}
          </p>
        </div>

        {/* Quick Highlights Badge */}
        <div className="hidden lg:flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="font-bold text-slate-900">{language === 'ar' ? 'أعلى شرائح عمولة بالسوق' : 'Highest Commission Slabs'}</div>
            <div className="text-slate-500">{language === 'ar' ? 'حوافز شهرية بدون سقف + دفعات سريعة' : 'Uncapped monthly incentives + fast payouts'}</div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Sales Career at AMAFH */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 font-display mb-1">{language === 'ar' ? 'عمولات بلا سقف' : 'Uncapped Commission'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'أعلى نسب عائد على حجوزات بطاقات الائتمان والتمويل الشخصي تُصرف شهرياً وبانتظام.'
              : 'Industry-leading percentage payouts for credit cards and personal finance bookings directly credited monthly.'}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 font-display mb-1">{language === 'ar' ? 'مقر 9,500 قدم مربعة' : '9,500 sq.ft Facility'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'مكاتب مبيعات واكتتاب حديثة في قرية الأعمال، مجمع B، بور سعيد، بالقرب من محطة مترو ديرة سيتي سنتر.'
              : 'Operate from modern underwriting pods in Business Village, Block B, Port Saeed, next to Deira City Centre Metro.'}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 font-display mb-1">{language === 'ar' ? 'ربط بنكي رسمي ومباشر' : 'Direct Bank Access'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'رموز استقطاب وصلاحيات إدخال أنظمة معتمدة لبنوك دبي الإسلامي والشارقة الإسلامي والإمارات الإسلامي.'
              : 'Official sourcing codes and system access for Dubai Islamic Bank, Sharjah Islamic Bank & Emirates Islamic.'}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 font-display mb-1">{language === 'ar' ? 'إقامة رسمية وتأمين صحي' : 'MOHRE Sponsorship'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'تأشيرة عمل رسمية معتمدة من وزارة الموارد البشرية والتوطين وتغطية تأمين صحي شاملة للمتميزين.'
              : 'Official UAE employment visa, medical insurance coverage, and labor benefits provided for qualified performers.'}
          </p>
        </div>
      </div>

      {/* Main Career Layout: Open Positions (Left) & Application Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Select Open Roles */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
              {language === 'ar' ? 'الوظائف الشاغرة (اختر المسمى)' : 'Open Positions (Select Role)'}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {language === 'ar' ? 'التقديم مفتوح الآن' : 'Actively Hiring'}
            </span>
          </div>

          <div className="space-y-2.5">
            {OPEN_ROLES.map((role) => {
              const isSelected = selectedRoleId === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-900 text-white border-purple-800 shadow-md shadow-purple-950/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-extrabold text-xs sm:text-sm font-display leading-tight">
                      {language === 'ar' ? role.titleAr : role.title}
                    </h4>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isSelected
                          ? 'bg-[#E8F86E] text-slate-950'
                          : 'bg-purple-50 text-purple-700 border border-purple-100'
                      }`}
                    >
                      {language === 'ar' ? role.badgeAr : role.badge}
                    </span>
                  </div>

                  <p
                    className={`text-[11px] leading-relaxed mb-2 line-clamp-2 ${
                      isSelected ? 'text-purple-200' : 'text-slate-600'
                    }`}
                  >
                    {language === 'ar' ? role.focusAr : role.focus}
                  </p>

                  <div className="flex items-center justify-between text-[10px] pt-2 border-t border-white/10">
                    <span className={isSelected ? 'text-purple-200' : 'text-slate-500'}>
                      {language === 'ar' ? role.typeAr : role.type}
                    </span>
                    <span className={`font-bold ${isSelected ? 'text-amber-300' : 'text-purple-700'}`}>
                      {language === 'ar' ? role.spotsAr : role.spots}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick FAQ note */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>{language === 'ar' ? 'المقابلات المباشرة:' : 'Walk-in Interviews:'}</strong>{' '}
              {language === 'ar'
                ? 'المرشحون من ذوي الخبرة السابقة في بنوك الإمارات (بنك الإمارات دبي الوطني، المشرق، دبي الإسلامي، بنك أبوظبي الأول، مصرف الشارقة الإسلامي) لهم الأولوية في التعيين الفوري وإجراءات الإقامة.'
                : 'Candidates with prior UAE banking experience (Emirates NBD, Mashreq, DIB, FAB, SIB) are prioritized for immediate onboarding and visa processing.'}
            </p>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl relative overflow-hidden">
            {submittedRef ? (
              /* Success Confirmation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    {language === 'ar' ? 'تم استلام طلبك بنجاح' : 'Application Received'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                    {language === 'ar' ? 'مرحباً بك في شبكة كفاءات أَمَف' : 'Welcome to the AMAFH Talent Pipeline!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    {language === 'ar' ? (
                      <>تم تحويل بيانات ترشحك لوظيفة <strong className="text-purple-900">{activeRoleTitle}</strong> إلى قسم الموارد البشرية بمقرنا في قرية الأعمال بديرة.</>
                    ) : (
                      <>Your credentials for <strong className="text-purple-900">{activeRoleTitle}</strong> have been routed to our recruitment desk at Business Village, Deira.</>
                    )}
                  </p>
                </div>

                {/* Application Reference Card */}
                <div className="max-w-sm mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left rtl:text-right space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">{language === 'ar' ? 'رقم مرجع الطلب:' : 'Application Reference:'}</span>
                    <span className="font-mono font-bold text-purple-700">{submittedRef}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">{language === 'ar' ? 'الوظيفة المستهدفة:' : 'Target Role:'}</span>
                    <span className="font-bold text-slate-900 truncate max-w-[180px]">{activeRoleTitle}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">{language === 'ar' ? 'مدة التدقيق:' : 'Review SLA:'}</span>
                    <span className="font-bold text-emerald-700">{language === 'ar' ? 'خلال 24-48 ساعة' : 'Within 24-48 Hours'}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="https://wa.me/971500000000?text=Hello%20AMAFH%20HR,%20I%20have%20submitted%20my%20application%20for%20a%20sales%20position."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'واتساب الموارد البشرية' : 'WhatsApp HR Desk'}</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'ar' ? 'تقديم طلب آخر' : 'Submit Another Application'}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Application Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display">
                      {language === 'ar' ? 'قدّم سيرتك الذاتية وبياناتك' : 'Submit Your Profile'}
                    </h3>
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      {language === 'ar' ? 'خطوة 1 من 2' : 'Step 1 of 2'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {language === 'ar' ? 'التقديم لوظيفة:' : 'Applying for:'} <strong className="text-slate-900">{activeRoleTitle}</strong>
                  </p>
                </div>

                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3.5' : 'left-3.5'}`} />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === 'ar' ? 'مثال: محمد زيد' : 'e.g. Muhammad Zaid'}
                        className={`w-full py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all ${
                          isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'ar' ? 'رقم الهاتف / واتساب الإمارات' : 'UAE Mobile / WhatsApp'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3.5' : 'left-3.5'}`} />
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className={`w-full py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all ${
                          isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3.5' : 'left-3.5'}`} />
                      <input
                        type="email"
                        required
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="zaid@example.com"
                        className={`w-full py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all ${
                          isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'ar' ? 'الخبرة المصرفية / المبيعات في الإمارات' : 'UAE Banking / Sales Experience'}
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all bg-white"
                    >
                      <option value="Fresher / Entry Level">{language === 'ar' ? 'خريج جديد / انتقال مهني' : 'Fresher / Career Switch'}</option>
                      <option value="1-2 years">{language === 'ar' ? '1-2 سنة في سوق الإمارات' : '1-2 Years in UAE Market'}</option>
                      <option value="3-5 years">{language === 'ar' ? '3-5 سنوات (مبيعات مباشرة / بطاقات ائتمان)' : '3-5 Years (Direct Sales / Credit Cards)'}</option>
                      <option value="5+ years">{language === 'ar' ? 'أكثر من 5 سنوات (مستوى إشرافي / قيادي)' : '5+ Years (Senior / Leadership)'}</option>
                    </select>
                  </div>
                </div>

                {/* Visa Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ar' ? 'وضع التأشيرة والإقامة الحالية' : 'Current UAE Visa Status'}
                  </label>
                  <select
                    value={formData.visaStatus}
                    onChange={(e) => setFormData({ ...formData, visaStatus: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all bg-white"
                  >
                    <option value="Employment Visa (Transferable)">{language === 'ar' ? 'إقامة عمل (قابلة للتحويل مع شهادة عدم ممانعة)' : 'Employment Visa (Transferable with NOC)'}</option>
                    <option value="Visit / Tourist Visa">{language === 'ar' ? 'تأشيرة زيارة / سياحة (جاهز للبدء الفوري)' : 'Visit / Tourist Visa (Ready to Join Immediately)'}</option>
                    <option value="Golden Visa">{language === 'ar' ? 'حامل الإقامة الذهبية في الإمارات' : 'UAE Golden Visa Holder'}</option>
                    <option value="Freelance / Green Visa">{language === 'ar' ? 'تأشيرة عمل حر / إقامة خضراء' : 'Freelance / Green Visa'}</option>
                    <option value="Spouse / Dependent Visa">{language === 'ar' ? 'كفالة عائلية (زوج/زوجة/والدين)' : 'Spouse / Dependent Sponsorship'}</option>
                  </select>
                </div>

                {/* Resume / Credentials Upload Area (Supports Drag-and-Drop AND Click) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ar' ? 'إرفاق السيرة الذاتية / شهادات المبيعات' : 'Upload Resume / CV / Sourcing Credentials'}
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="hidden"
                    id="resume-file-input"
                  />

                  {file ? (
                    /* Uploaded File Pill Card */
                    <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {file.size} • {language === 'ar' ? 'جاهز للمراجعة الفورية' : 'Ready for HR Review'}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="w-7 h-7 rounded-full bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 flex items-center justify-center border border-slate-200 transition-colors shrink-0 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : uploadProgress !== null ? (
                    /* Progress State */
                    <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/50 space-y-2 text-center">
                      <div className="text-xs font-bold text-purple-900">{language === 'ar' ? 'جارٍ تحميل المستند...' : 'Uploading credentials...'}</div>
                      <div className="w-full h-2 rounded-full bg-purple-200 overflow-hidden">
                        <div
                          className="h-full bg-purple-700 transition-all duration-150"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Drag & Drop Zone */
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`p-5 sm:p-6 rounded-2xl border-2 border-dashed text-center transition-all cursor-pointer ${
                        isDragging
                          ? 'border-purple-700 bg-purple-50 scale-[0.99]'
                          : 'border-slate-200 hover:border-purple-400 bg-slate-50/60 hover:bg-purple-50/30'
                      }`}
                    >
                      <UploadCloud className="w-8 h-8 text-purple-700 mx-auto mb-2" />
                      <p className="text-xs font-bold text-slate-800">
                        {language === 'ar' ? (
                          <>اسحب وأفلت سيرتك الذاتية هنا، أو <span className="text-purple-700 underline">تصفح من جهازك</span></>
                        ) : (
                          <>Drag &amp; drop your CV here, or <span className="text-purple-700 underline">browse files</span></>
                        )}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        {language === 'ar' ? 'يقبل ملفات PDF, DOC, DOCX حتى 10 ميجابايت' : 'Supports PDF, DOC, DOCX up to 10MB (Optional but recommended)'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Short Note / Past Performance */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ar' ? 'ملاحظة أو ملخص إنجازات المبيعات السابقة (اختياري)' : 'Monthly Sales Track Record / Note (Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'ar' ? 'مثال: حققت معدل إصدار 25+ بطاقة ائتمان شهرياً لبنك دبي الإسلامي / المشرق خلال 2024. متاح للمقابلة فوراً.' : 'e.g. Averaged 25+ approved credit cards monthly for DIB/Mashreq in 2024. Available for interview immediately.'}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{language === 'ar' ? 'جارٍ إرسال طلب التقديم...' : 'Transmitting Application...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{language === 'ar' ? `إرسال طلب الترشح لوظيفة: ${activeRoleTitle}` : `Submit Application for ${activeRoleTitle}`}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  {language === 'ar'
                    ? 'بإرسال الطلب، أنت توافق على تواصل مسؤولي الموارد البشرية بشركة أَمَف معك بشأن فرص المبيعات المباشرة في دبي. بياناتك محمية بسرية تامة.'
                    : 'By submitting, you consent to AMAFH HR contacting you regarding direct sales openings in Dubai. Strictly confidential.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
