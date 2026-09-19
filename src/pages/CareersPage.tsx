import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  ChevronLeft,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { JoinTeamSection } from '../components/JoinTeamSection';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  CompanySolutionsStack,
  TechInfrastructureQuad,
  MomentOfScaleBanner
} from '../components/PitchDeckSections';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs currentPage="careers" onNavigate={onNavigate} className="mb-6" />

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E8F86E] text-xs font-bold font-mono">
            {language === 'ar' ? 'وظائف شاغرة في دبي' : 'WE ARE HIRING IN DUBAI'}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold">
            {language === 'ar' ? 'أكثر من 30 وظيفة مبيعات مباشرة' : '30+ Open Direct Sales Roles'}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            {language === 'ar' ? 'تأشيرة عمل معتمدة من وزارة الموارد البشرية' : 'MOHRE Employment Visa Provided'}
          </span>
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight uppercase">
            {language === 'ar' ? (
              <>انضم إلى وكالة المبيعات المالية <br />
              <span className="text-purple-700">الأعلى دخلاً في الإمارات</span></>
            ) : (
              <>Join the UAE's Highest-Earning <br />
              <span className="text-purple-700">Financial Sales Agency</span></>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.careers.heroSubtitle}
          </p>
        </div>
      </div>

      {/* REFERENCE SLIDE 3: Agent Career Progression Solutions */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <CompanySolutionsStack
          superHeadline={language === 'ar' ? 'المسار المهني وعوائد المبيعات' : 'CAREER PATHWAY & SALES REWARDS'}
          mainHeadline={language === 'ar' ? 'منظومة التطور المهني لوكلائنا ↘' : 'Your Growth Framework ↘'}
          items={[
            {
              num: '01',
              title: language === 'ar' ? 'توزيع مباشر لمنتجات بنوك الفئة الأولى' : 'Tier-1 Direct Bank Allocations',
              desc: language === 'ar' ? 'بيع منتجات معتمدة لبنك دبي الإسلامي والشارقة الإسلامي والإمارات الإسلامي بدون وسطاء.' : 'Sell authorized retail products for Dubai Islamic Bank, Sharjah Islamic Bank, and Emirates Islamic without sub-agents.',
              isLime: true
            },
            {
              num: '02',
              title: language === 'ar' ? 'هيكل عمولات شهرية غير محدد السقف' : 'Uncapped Monthly Commission Structure',
              desc: language === 'ar' ? 'شرائح عمولات مجزية مع صرف شهري دقيق ومكافآت تحفيزية للأداء المتميز.' : 'Earn lucrative commission slabs with on-time monthly disbursement and performance bonus incentives.',
              isLime: false
            },
            {
              num: '03',
              title: language === 'ar' ? 'فريق دعم ومكتب تدقيق مخصص' : 'Dedicated Operations & Verification Desk',
              desc: language === 'ar' ? 'فريق الاكتتاب الداخلي يتولى جمع الوثائق ومطابقتها وتقديمها للبنوك لتتفرغ أنت للمبيعات.' : 'Our in-house 9,500 sq.ft underwriting team collects, verifies, and submits files so you can focus on selling.',
              isLime: false
            }
          ]}
        />
      </section>

      {/* Main Join Team Portal Component */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <JoinTeamSection />
      </div>

      {/* REFERENCE SLIDE 6: Sales Agent Technology Quad */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <TechInfrastructureQuad
          headline={language === 'ar' ? 'التقنيات الحديثة لمندوبي المبيعات ↘' : 'Frontline Agent Sales Technology ↘'}
          tag={language === 'ar' ? 'أدوات العمل الميداني والتحقق البيومتري' : 'FIELD TOOLS & BIOMETRIC VERIFICATION'}
        />
      </section>

      {/* REFERENCE SLIDE 7: Moment of Scale */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <MomentOfScaleBanner
          headline={language === 'ar' ? 'تمكين أكثر من 100 مستشار مبيعات عالي الدخل ↘' : 'Empowering 100+ High-Earning Sales Agents ↘'}
          yearNumber="10+"
          totalProjects="15,000+"
        />
      </section>
    </div>
  );
};
