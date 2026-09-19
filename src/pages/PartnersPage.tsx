import React from 'react';
import { motion } from 'motion/react';
import {
  Landmark,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Award
} from 'lucide-react';
import { PartnersSection } from '../components/PartnersSection';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  PitchHeroVault,
  SteppedPillarBreakdown,
  EvolutionTechSplit,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Header (Inspired by Reference 3: Strategic Partnerships) */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="partners" onNavigate={onNavigate} className="mb-6" />
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'التحالفات المصرفية والمؤسسية' : 'INSTITUTIONAL ALLIANCES & CLIENTS'}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold">
            {language === 'ar' ? 'بنوك فئة أولى في الإمارات • أكثر من 15 مجموعة شركات' : 'Tier-1 UAE Banks • 15+ Corporate Conglomerates'}
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>شراكات تصنع <br />
              <span className="text-purple-700">القيمة والنمو</span> المستدام</>
            ) : (
              <>Partnerships That <br />
              <span className="text-purple-700">Deliver Value</span> &amp; Scale</>
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {t.partners.heroSubtitle}
          </p>
        </div>

        {/* 3 Value Delivery Metric Pills (Reference 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-black text-purple-700 font-display">
              {language === 'ar' ? '100% استقطاب مباشر' : '100% Sourced Direct'}
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              {language === 'ar' ? 'بدون وسطاء فرعيين أو جهات غير مرخصة.' : 'No secondary sub-brokers or unregulated intermediaries.'}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-[#E8F86E] text-slate-950 shadow-xs">
            <div className="text-2xl font-black font-display">
              {language === 'ar' ? '96.4% نسبة الموافقة' : '96.4% Approval Ratio'}
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">
              {language === 'ar' ? 'أعلى معدل لتوثيق الملفات الخالية من النواقص في الإمارات.' : 'Highest first-time clean documentation score in Northern Emirates.'}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-950 text-white shadow-xs">
            <div className="text-2xl font-black font-display text-[#E8F86E]">
              {language === 'ar' ? 'صفر تكلفة رأسمالية' : 'Zero Capital Cost'}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">
              {language === 'ar' ? 'توسع البنوك في محافظها بدون مصاريف فتح فروع.' : 'Banks scale portfolio originations with zero physical branch CapEx.'}
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE SLIDE 1 ARCHETYPE: Pitch Hero Vault */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <PitchHeroVault
          badge={language === 'ar' ? 'تحالفات مصرفية استراتيجية' : 'STRATEGIC BANKING ALLIANCE'}
          title={language === 'ar' ? 'خط اكتتاب مباشر مع بنوك الفئة الأولى' : 'Direct Underwriting Pipeline with Tier-1 Banks'}
          subtitle={language === 'ar' ? 'تعاون وثيق مع بنك دبي الإسلامي، وبنك الشارقة الإسلامي، ومصرف الإمارات الإسلامي، وريم للتمويل لتقديم حجم معاملات معتمد للأفراد.' : 'Collaborating closely with Dubai Islamic Bank, Sharjah Islamic Bank, Emirates Islamic, and Reem Finance to deliver accredited retail origination volume.'}
          statNumber="4+"
          statLabel={language === 'ar' ? 'عقود بنكية مباشرة ونشطة' : 'Active Bank Contracts'}
          onCtaClick={onOpenConsultation}
        />
      </section>

      {/* 1. Banking Partners & Corporate Conglomerate Ecosystem */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <PartnersSection onOpenConsultation={onOpenConsultation} />
      </section>

      {/* REFERENCE SLIDE 4 ARCHETYPE: Stepped Pillar Breakdown */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <SteppedPillarBreakdown
          tag={language === 'ar' ? 'التمويلات السنوية للبنوك' : 'ANNUAL BANK ORIGINATIONS'}
          headline={language === 'ar' ? 'توزيع التسهيلات حسب البنك الشريك ↘' : 'Origination Allocation by Partner Bank ↘'}
          marketShareText={language === 'ar' ? 'ربط مباشر عبر البوابات المصرفية' : 'Direct Portal Integration'}
        />
      </section>

      {/* REFERENCE SLIDE 5 ARCHETYPE: Evolution With Technology */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <EvolutionTechSplit
          headline={language === 'ar' ? 'التكامل البنكي وأمان الأنظمة' : 'Bank Integration & System Security'}
          tag={language === 'ar' ? 'بروتوكولات ربط مصرفي مباشرة وآمنة' : 'HOST-TO-HOST UNDERWRITING PROTOCOLS'}
          leftCardText={{
            title: language === 'ar' ? 'فرق امتثال وتدقيق مخصصة' : 'Dedicated Compliance Pods',
            desc: language === 'ar' ? 'مسؤولو اكتتاب متخصصون وفقاً لمعايير الائتمان الدقيقة لكل بنك شريك.' : "Underwriting executives assigned specifically to each bank partner's credit criteria."
          }}
          rightCardText={{
            title: language === 'ar' ? 'إرسال فوري للملفات عبر البوابة' : 'Instant Portal Dispatch',
            desc: language === 'ar' ? 'تقديم آلي ومباشر يقلص زمن الإنجاز من 7 أيام إلى أقل من 48 ساعة.' : 'Automated direct submissions reducing turnaround from 7 days to under 48 hours.'
          }}
        />
      </section>

      {/* 2. Client & Institutional Testimonials */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ClientTestimonials />
      </section>

      {/* REFERENCE SLIDE 7: Moment of Scale */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <MomentOfScaleBanner
          headline={language === 'ar' ? 'الأثر المؤسسي وحجم التحالفات المصرفية ↘' : 'Enterprise Scale & Bank Alliance Impact ↘'}
          yearNumber="10+"
          totalProjects="15,000+"
        />
      </section>

      {/* Corporate Partner Induction Banner */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left rtl:md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'حملات التوعية المالية في الشركات' : 'Corporate Employer Roadshows'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              {language === 'ar' ? 'استضف مكتب توعية وتسهيلات ائتمانية مجاناً في شركتك' : 'Host a Free Financial Wellness & Credit Desk at Your Office'}
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
              {language === 'ar'
                ? 'وفّر لموظفيك مزايا بطاقات حصرية، ونسب فائدة مخفضة، وأولوية في معالجة المعاملات البنكية بدون أي التزام مالي على شركتك.'
                : 'Provide your workforce with exclusive card perks, reduced debt burden rates, and priority bank onboarding without any company liability.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-full bg-[#E8F86E] text-slate-950 hover:bg-white text-xs sm:text-sm font-black transition-all shadow-lg shrink-0 cursor-pointer"
          >
            {language === 'ar' ? 'كن شريكاً مع أَمَف ↗' : 'Partner With AMAFH ↗'}
          </button>
        </div>
      </section>
    </div>
  );
};
