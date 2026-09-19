import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/amafhData';
import { FaqAccordion } from '../components/FaqAccordion';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  ClosingPresentationDesk,
  TriColorComplianceSection
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Credit Cards',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7E22CE', '#E8F86E', '#10B981'],
        });
      } catch (e) {
        // ignore
      }
    }, 800);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="contact" onNavigate={onNavigate} className="mb-6" />

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'المقر الرئيسي ومكتب العمليات' : 'HEADQUARTERS & OPERATIONS DESK'}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-purple-700" />
            {language === 'ar' ? 'بورسعيد، ديرة، دبي' : 'Port Saeed, Deira, Dubai'}
          </span>
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>تواصل مع شركة أَمَف <br />
              <span className="text-purple-700">للوساطة التجارية ذ.م.م</span></>
            ) : (
              <>Connect with AMAFH <br />
              <span className="text-purple-700">Commercial Brokers LLC</span></>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Main 2-Column Contact Section (Reference 1 & 3) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Office Details & Bright Lime Visual Card (Reference 1) */}
          <div className="lg:col-span-5 space-y-6">
            {/* The Lime "Have Questions? Contact Us" Card from Reference 1 */}
            <div className="p-8 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-lg relative overflow-hidden">
              <div className="text-xs font-black uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>{language === 'ar' ? 'مكتب العمليات المباشر' : 'Direct Operations Desk'}</span>
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display leading-tight mb-3">
                {language === 'ar' ? 'تحدث مباشرة مع كبار مسؤولي الاكتتاب اليوم' : 'Reach Our Senior Underwriters Today'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium mb-6">
                {language === 'ar'
                  ? 'خطوط هاتفية مباشرة، مكتب استفسارات واتساب مشفر، واستقبال تنفيذي بمقرنا في قرية الأعمال بديرة.'
                  : 'Direct phone lines, encrypted WhatsApp desk, and physically manned corporate reception in Business Village Deira.'}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-950/20 text-xs font-bold text-slate-900">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>{language === 'ar' ? 'الهاتف:' : 'Call:'} {COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-950" />
                  <span>{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'} {COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-950" />
                  <span>{language === 'ar' ? 'ساعات العمل: الإثنين – السبت (9:00 ص – 7:00 م بتوقيت الإمارات)' : 'Hours: Mon – Sat (9:00 AM – 7:00 PM GST)'}</span>
                </div>
              </div>
            </div>

            {/* Location & Directions Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                <MapPin className="w-4 h-4" />
                <span>{language === 'ar' ? 'الموقع الفعلي للمكتب' : 'Physical Office Location'}</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                {language === 'ar' ? 'قرية الأعمال، بورسعيد، ديرة، دبي' : 'Business Village, Port Saeed, Deira, Dubai'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'المكاتب 405-408، المبنى B. مقابل محطة مترو ديرة سيتي سنتر مباشرة (الخط الأحمر، مخرج 2). تتوفر مواقف زوار مجانية داخل مجمع قرية الأعمال.'
                  : 'Offices 405-408, Block B. Located directly opposite Deira City Centre Metro Station (Red Line, Exit 2). Visitor parking is available inside the Business Village complex.'}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Business+Village+Deira+Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
                >
                  <span>{language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'بوابة الاستفسار المباشر' : 'Online Inquiry Portal'}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-950 font-display">
                  {language === 'ar' ? 'أرسل استفسارك التمويلي' : 'Submit Your Financing Inquiry'}
                </h2>
                <p className="text-xs text-slate-500">
                  {language === 'ar'
                    ? 'سيقوم فريق التدقيق والتقييم الائتماني بمراجعة بياناتك والتواصل معك خلال ساعتي عمل.'
                    : 'Our credit evaluation team will review your parameters and respond within 2 business hours.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 font-display">
                    {language === 'ar' ? 'تم استلام استفسارك بنجاح!' : 'Inquiry Received Successfully!'}
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    {language === 'ar'
                      ? `شكراً لك يا ${formData.name}. تم تعيين مستشار تمويلي من شركة أَمَف لمتابعة طلبك وسيقوم بالتواصل معك هاتفياً أو عبر الواتساب قريباً.`
                      : `Thank you, ${formData.name}. A senior loan advisor from AMAFH Commercial Brokers has been assigned to your file and will contact you via WhatsApp or phone shortly.`}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    {language === 'ar' ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'ar' ? 'مثال: طارق المنصوري' : 'e.g. Tariq Al Mansoori'}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'ar' ? 'رقم الهاتف / واتساب الإمارات' : 'UAE Mobile / WhatsApp'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 5X XXX XXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'ar' ? 'موضوع الاستفسار' : 'Inquiry Topic'}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 bg-white"
                      >
                        <option value="Credit Cards">{language === 'ar' ? 'بطاقات ائتمان الأفراد' : 'Retail Credit Cards'}</option>
                        <option value="Personal Finance">{language === 'ar' ? 'تمويل شخصي (بتحويل راتب)' : 'Personal Finance (Salary Transfer)'}</option>
                        <option value="Non-Salary Transfer">{language === 'ar' ? 'بدون تحويل راتب (NST)' : 'Non-Salary Transfer (NST)'}</option>
                        <option value="Debt Consolidation">{language === 'ar' ? 'شراء وتوحيد المديونيات' : 'Debt Consolidation & Buyout'}</option>
                        <option value="Corporate Partnership">{language === 'ar' ? 'شراكة خدمات شركات وموظفين' : 'Corporate Employer Desk'}</option>
                        <option value="Institutional Bank Sourcing">{language === 'ar' ? 'عقود استقطاب بنكية' : 'Bank Sourcing Contract'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'ar' ? 'تفاصيل الاستفسار / الوضع التمويلي' : 'Message / Financing Details'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'ar' ? 'يرجى ذكر الراتب الشهري، وجهة العمل، أو متطلباتك المصرفية بالتحديد...' : 'Please mention your monthly salary, employer name, or specific banking requirements...'}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-950/20 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{language === 'ar' ? 'إرسال الاستفسار المباشر' : 'Submit Direct Inquiry'}</span>
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {language === 'ar' ? 'إرسال مشفر عبر SSL' : 'Encrypted SSL Transmission'}
                    </span>
                    <span>{language === 'ar' ? 'بدون أي التزام أو تأثير على التقييم الائتماني' : 'No Obligation or Credit Score Impact'}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE SLIDE 8: Closing Presentation Desk Archetype */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ClosingPresentationDesk onOpenConsultation={onOpenConsultation} />
      </section>

      {/* REFERENCE SLIDE 2: Tri-Color Client Protection & Privacy Governance */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TriColorComplianceSection
          tag={language === 'ar' ? 'خصوصية البيانات والموافقة التنظيمية' : 'DATA PRIVACY & REGULATORY CLEARANCE'}
          headline={language === 'ar' ? 'أمان بيانات العملاء والامتثال المؤسسي ↘' : 'Client Data Security & Compliance ↘'}
          cards={[
            {
              num: '01',
              title: language === 'ar' ? 'تشفير بيانات العملاء بمعيار AES-256' : 'AES-256 Client Data Encryption',
              desc: language === 'ar'
                ? 'يتم نقل نسخ بطاقة الهوية الإماراتية وشهادات الراتب عبر قنوات مشفرة 256-بت مباشرة إلى خوادم البنوك الشريكة.'
                : 'All Emirates ID scans and salary slips are transferred over 256-bit encrypted channels directly to bank servers.',
              variant: 'grey'
            },
            {
              num: '02',
              title: language === 'ar' ? 'حظر إعادة بيع أو مشاركة البيانات' : 'No Secondary Data Reselling',
              desc: language === 'ar'
                ? 'تُستخدم بياناتك حصرياً للتسهيل التمويلي الذي طلبته ولا يتم تداولها مطلقاً مع أي جهات تسويق خارجية.'
                : 'Your information is used strictly for your requested financial facility and never shared with third-party telemarketers.',
              variant: 'lime'
            },
            {
              num: '03',
              title: language === 'ar' ? 'صفر رسوم وساطة مسبقة' : 'Zero Brokerage Upfront Fees',
              desc: language === 'ar'
                ? 'تحصل شركة أَمَف على أتعابها مباشرة من البنوك الشريكة. نحن لا نتقاضى أي مبالغ أو عمولات مسبقة من العملاء.'
                : 'AMAFH is compensated directly by our institutional banking partners. We never charge clients upfront processing fees.',
              variant: 'dark'
            }
          ]}
        />
      </section>

      {/* Frequently Asked Questions */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <FaqAccordion onOpenConsultation={onOpenConsultation} />
      </section>
    </div>
  );
};
