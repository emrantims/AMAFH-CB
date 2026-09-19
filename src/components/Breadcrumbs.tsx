import React from 'react';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';

export interface BreadcrumbsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  className?: string;
}

interface HierarchyConfig {
  parentCategory: {
    en: string;
    ar: string;
    targetPage?: PageId;
  };
  pageTitle: {
    en: string;
    ar: string;
  };
  shortTitle?: {
    en: string;
    ar: string;
  };
}

const PAGE_HIERARCHY: Partial<Record<PageId, HierarchyConfig>> = {
  about: {
    parentCategory: {
      en: 'Corporate Group',
      ar: 'المجموعة المؤسسية',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'About AMAFH',
      ar: 'عن شركة أماف',
    },
    shortTitle: {
      en: 'About',
      ar: 'عن الشركة',
    },
  },
  services: {
    parentCategory: {
      en: 'Financial Solutions',
      ar: 'الحلول التمويلية',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'Services & CVVB Desk',
      ar: 'الخدمات ومنهجية CVVB',
    },
    shortTitle: {
      en: 'Services',
      ar: 'الخدمات',
    },
  },
  partners: {
    parentCategory: {
      en: 'Banking Ecosystem',
      ar: 'المنظومة المصرفية',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'Institutional Alliances',
      ar: 'البنوك والشركاء المؤسسيون',
    },
    shortTitle: {
      en: 'Partners',
      ar: 'الشركاء',
    },
  },
  'case-studies': {
    parentCategory: {
      en: 'Track Record',
      ar: 'سجل الإنجازات',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'Verified Case Studies',
      ar: 'دراسات الحالة المعتمدة',
    },
    shortTitle: {
      en: 'Case Studies',
      ar: 'دراسات الحالة',
    },
  },
  calculator: {
    parentCategory: {
      en: 'Regulatory Tools',
      ar: 'الأدوات الرقابية',
      targetPage: 'home',
    },
    pageTitle: {
      en: '50% DBR Calculator',
      ar: 'حاسبة سقف عبء الدين (50% DBR)',
    },
    shortTitle: {
      en: 'DBR Calculator',
      ar: 'حاسبة DBR',
    },
  },
  careers: {
    parentCategory: {
      en: 'Talent & Culture',
      ar: 'الكفاءات والتوظيف',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'Careers & Sales Force',
      ar: 'الوظائف والمبيعات المباشرة',
    },
    shortTitle: {
      en: 'Careers',
      ar: 'الوظائف',
    },
  },
  contact: {
    parentCategory: {
      en: 'Client Services',
      ar: 'خدمة العملاء',
      targetPage: 'home',
    },
    pageTitle: {
      en: 'Dubai HQ & Inquiries',
      ar: 'مقر دبي وقنوات الاتصال',
    },
    shortTitle: {
      en: 'Contact',
      ar: 'تواصل معنا',
    },
  },
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentPage,
  onNavigate,
  className = '',
}) => {
  const { language, isRTL } = useLanguage();

  // Do not render breadcrumbs on Home page
  if (currentPage === 'home') {
    return null;
  }

  const hierarchy = PAGE_HIERARCHY[currentPage];
  if (!hierarchy) {
    return null;
  }

  const homeLabel = language === 'ar' ? 'الرئيسية' : 'Home';
  const parentLabel = hierarchy.parentCategory[language];
  const currentLabel = hierarchy.pageTitle[language];
  const shortCurrentLabel = hierarchy.shortTitle?.[language] || currentLabel;

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb navigation trail'}
      className={`w-full ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Breadcrumb Trail List */}
        <ol className="inline-flex items-center flex-wrap gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs text-xs font-medium text-slate-600">
          
          {/* Level 1: Home Link */}
          <li className="inline-flex items-center">
            <button
              onClick={() => handleNavigate('home')}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-purple-700 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
              title={language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Navigate back to Overview / Home'}
            >
              <Home className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-700 transition-colors" />
              <span className="font-semibold">{homeLabel}</span>
            </button>
          </li>

          {/* Separator 1 */}
          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </li>

          {/* Level 2: Parent Category */}
          <li className="inline-flex items-center">
            {hierarchy.parentCategory.targetPage ? (
              <button
                onClick={() => handleNavigate(hierarchy.parentCategory.targetPage!)}
                className="text-slate-500 hover:text-purple-700 transition-colors cursor-pointer hidden xs:inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
              >
                {parentLabel}
              </button>
            ) : (
              <span className="text-slate-500 hidden xs:inline-block">
                {parentLabel}
              </span>
            )}
          </li>

          {/* Separator 2 (hidden on smallest screens if parent is hidden) */}
          <li aria-hidden="true" className="text-slate-300 hidden xs:inline-flex items-center">
            <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </li>

          {/* Level 3: Active Current Page */}
          <li aria-current="page" className="inline-flex items-center">
            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 font-bold tracking-tight text-[11px] sm:text-xs">
              <span className="hidden sm:inline">{currentLabel}</span>
              <span className="sm:hidden">{shortCurrentLabel}</span>
            </span>
          </li>
        </ol>

        {/* Quick Return to Overview Action Pill */}
        <button
          onClick={() => handleNavigate('home')}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 hover:bg-white bg-slate-100/80 border border-slate-200/80 transition-all cursor-pointer group active:scale-95"
          title={language === 'ar' ? 'الرجوع إلى الصفحة الرئيسية' : 'Return to Overview'}
        >
          <ArrowLeft className={`w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 ${isRTL ? 'rotate-180 group-hover:translate-x-0.5' : ''}`} />
          <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Overview'}</span>
        </button>
      </div>
    </nav>
  );
};
