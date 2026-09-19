import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/amafhData';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  preVetData?: { product: string; salary: number; eligibleAmount: number } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
  preVetData
}) => {
  const { t, isRTL, language } = useLanguage();
  const [institution, setInstitution] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+971 ');
  const [service, setService] = useState(initialService || 'Credit Card Sales Outsourcing');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7C3AED', '#F59E0B', '#10B981']
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer`}
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
              {language === 'ar' ? 'تم استلام طلب الشراكة بنجاح' : 'Partnership Request Received'}
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-4">
              {language === 'ar'
                ? 'شكراً لتواصلك مع أَمَف للوساطة التجارية. سيتواصل معك مدير الشراكات المصرفية خلال ساعتين.'
                : 'Thank you for connecting with AMAFH Commercial Brokers. Our senior banking partnerships director will reach out within 2 hours.'}
            </p>
            <div className="p-3 rounded-2xl bg-purple-50 text-xs text-purple-800 font-medium">
              {language === 'ar' ? 'أولوية المعالجة: عالية • مركز العمليات بقرية الأعمال، ديرة' : 'SLA Priority: High • Deira Business Village Operations Hub'}
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'مكتب المبيعات المصرفية والمؤسسية' : 'Banking & Institutional Sales Desk'}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-950 font-display mb-2">
              {language === 'ar' ? 'كن شريكاً مع أَمَف للوساطة' : 'Partner With AMAFH Brokers'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {language === 'ar'
                ? 'تواصل مباشرة مع قيادتنا التنفيذية لنشر فرق مبيعات متخصصة أو الحصول على وساطة مصرفية معتمدة.'
                : 'Connect directly with our leadership team for dedicated financial sales team deployment or compliant sourcing.'}
            </p>

            {preVetData && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 mb-5 text-xs text-amber-900">
                <span className="font-bold block">{language === 'ar' ? 'بيانات التقييم المبدئي المرفقة:' : 'Pre-Vetting Sourcing Data Attached:'}</span>
                <span>{preVetData.product} • {language === 'ar' ? 'الراتب:' : 'Salary:'} {preVetData.salary.toLocaleString()} {language === 'ar' ? 'درهم' : 'AED'} • {language === 'ar' ? 'القدرة:' : 'Capacity:'} {preVetData.eligibleAmount.toLocaleString()} {language === 'ar' ? 'درهم' : 'AED'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {language === 'ar' ? 'البنك / المؤسسة المالية / الشركة' : 'Bank / Financial Institution / Company'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'ar' ? 'مثال: بنك دبي الإسلامي، بنك الشارقة الإسلامي...' : 'e.g. Dubai Islamic Bank, Sharjah Islamic Bank...'}
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {language === 'ar' ? 'اسم المسؤول' : 'Contact Person'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {language === 'ar' ? 'رقم الهاتف (الإمارات)' : 'Phone (UAE)'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {language === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@bank.ae or company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {language === 'ar' ? 'الخدمة المطلوبة' : 'Service Requirement'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700 bg-white"
                >
                  <option>{language === 'ar' ? 'إسناد مبيعات بطاقات الائتمان' : 'Credit Card Sales Outsourcing'}</option>
                  <option>{language === 'ar' ? 'مبيعات التمويل الشخصي (بتحويل راتب)' : 'Personal Finance Sales (Salary Transfer)'}</option>
                  <option>{language === 'ar' ? 'مبيعات التمويل الشخصي (بدون تحويل راتب)' : 'Personal Finance Sales (Non-Salary Transfer)'}</option>
                  <option>{language === 'ar' ? 'التحقق من بيانات العملاء والتدقيق الميداني' : 'Customer Verification & Vigilance Checks'}</option>
                  <option>{language === 'ar' ? 'نشر فرق مبيعات متكاملة (Turnkey Pods)' : 'Sales Team Pod Deployment (Turnkey)'}</option>
                  <option>{language === 'ar' ? 'تدقيق الجودة والامتثال الرقابي' : 'Compliance & Quality Auditing'}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>{language === 'ar' ? 'إرسال طلب الاستشارة والشراكة' : 'Submit Sourcing Inquiry'}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-700" /> {language === 'ar' ? 'متوافق مع أمن المعلومات ISO' : 'ISO InfoSec Compliant'}
                </span>
                <span>•</span>
                <span>{language === 'ar' ? 'مركز قرية الأعمال، ديرة' : 'Deira Business Village Hub'}</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
