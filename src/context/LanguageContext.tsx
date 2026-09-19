import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

export interface Translations {
  // Navigation
  nav: {
    overview: string;
    about: string;
    services: string;
    partners: string;
    caseStudies: string;
    calculator: string;
    careers: string;
    contact: string;
    partnerDesk: string;
    profilePdf: string;
    sourcingPages: string;
    locationBrief: string;
    viewPdf: string;
    bookConsultation: string;
    switchLangTooltip: string;
  };

  // Company metadata
  company: {
    name: string;
    type: string;
    tagline: string;
    address: string;
    city: string;
    hubBadge: string;
  };

  // Common UI
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    submit: string;
    applyNow: string;
    exploreServices: string;
    callNow: string;
    emailUs: string;
    scheduleMeeting: string;
    viewCaseStudies: string;
    calculateNow: string;
    allRightsReserved: string;
    licensedBy: string;
    downloadDossier: string;
    backToHome: string;
    verified: string;
    successRate: string;
    activePartners: string;
    workspaceSize: string;
    salesForce: string;
  };

  // Home Page
  home: {
    heroBadge: string;
    heroTitlePart1: string;
    heroTitlePart2: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    heroStatNumber: string;
    heroStatLabel: string;
    compliancePillarTitle: string;
    compliancePillarSubtitle: string;
    cbuaeNotice: string;
    sourcingTitle: string;
    sourcingSubtitle: string;
    exploreCvvb: string;
    cvvbDesc: string;
    bankingPortals: string;
    bankingDesc: string;
    cleanFileRatio: string;
    fastDisbursal: string;
    certifiedAgents: string;
    sqFtHub: string;
    readyToPartner: string;
    viewCorporatePdf: string;
    bookConsultation: string;
  };

  // About Page
  about: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    groupTitle: string;
    groupDesc: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    facilityTitle: string;
    facilityDesc: string;
  };

  // Services Page
  services: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    cvvbTitle: string;
    cvvbSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };

  // Partners Page
  partners: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    tier1Banks: string;
    corporateAlliances: string;
    partnerPerksTitle: string;
    partnerPerksSubtitle: string;
  };

  // Case Studies Page
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    filterAll: string;
    filterCards: string;
    filterFinance: string;
    filterSme: string;
    challengeLabel: string;
    solutionLabel: string;
    outcomeLabel: string;
  };

  // Calculator Page
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    monthlyIncomeLabel: string;
    existingLoanEmiLabel: string;
    creditCardLimitsLabel: string;
    autoFinancingLabel: string;
    otherCommitmentsLabel: string;
    dbrResultTitle: string;
    maxEligibleEmi: string;
    potentialBorrowing: string;
    compliantStatus: string;
    overlimitStatus: string;
    preVetCta: string;
    disclaimer: string;
  };

  // Careers Page
  careers: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    whyJoinTitle: string;
    openPositionsTitle: string;
    commissionTitle: string;
    commissionSubtitle: string;
    applyButton: string;
  };

  // Contact Page
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    heroSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    workEmail: string;
    mobileNumber: string;
    selectService: string;
    monthlySalary: string;
    message: string;
    sendInquiry: string;
    officeHoursTitle: string;
    officeHoursText: string;
  };

  // Footer
  footer: {
    d33Agenda: string;
    economicTarget: string;
    poweringGrowth: string;
    retailSourcing: string;
    facilitiesOriginated: string;
    approvalRate: string;
    newsletterPlaceholder: string;
    newsletterJoin: string;
    newsletterJoined: string;
    linksCol1: string;
    linksCol2: string;
    linksCol3: string;
    scheduleConsultation: string;
    eula: string;
    privacyPolicy: string;
    termsConditions: string;
    cbuaeDbr: string;
    subFooterLicensing: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      overview: 'Overview',
      about: 'About',
      services: 'Services & CVVB',
      partners: 'Partners',
      caseStudies: 'Case Studies',
      calculator: 'DBR Calculator',
      careers: 'Careers',
      contact: 'Contact',
      partnerDesk: 'Partner Desk',
      profilePdf: 'Profile PDF',
      sourcingPages: 'AMAFH SOURCING PAGES',
      locationBrief: 'Business Village, Deira',
      viewPdf: 'View 2025 Corporate Profile PDF',
      bookConsultation: 'Book Priority Sourcing Desk',
      switchLangTooltip: 'Switch to Arabic / التبديل إلى العربية',
    },
    company: {
      name: 'AMAFH',
      type: 'Commercial Brokers LLC',
      tagline: 'Your Trusted Outsourced Financial Sales Partner in the UAE',
      address: 'Offices 405-408, Block B, Business Village, Port Saeed, Deira, Dubai – UAE',
      city: 'Dubai, United Arab Emirates',
      hubBadge: 'BUSINESS VILLAGE • DEIRA',
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      submit: 'Submit Request',
      applyNow: 'Apply Now',
      exploreServices: 'Explore Services',
      callNow: 'Call Direct',
      emailUs: 'Email Desk',
      scheduleMeeting: 'Schedule Consultation',
      viewCaseStudies: 'View Case Studies',
      calculateNow: 'Calculate Eligibility',
      allRightsReserved: 'All rights reserved to AMAFH.ae',
      licensedBy: 'Licensed by UAE Central Bank Partner Banks',
      downloadDossier: 'Download Dossier',
      backToHome: 'Back to Overview',
      verified: 'Verified & Compliant',
      successRate: '99.4% Clean Files',
      activePartners: '4+ Tier-1 Bank Alliances',
      workspaceSize: '9,500 sq.ft Operations Hub',
      salesForce: '250+ Certified Direct Sales Agents',
    },
    home: {
      heroBadge: 'INSTITUTIONAL SOURCING INTELLIGENCE',
      heroTitlePart1: 'Empowering Financial Sourcing',
      heroTitlePart2: '& Underwriting Excellence',
      heroSubtitle: 'Shaping The Future With UAE Banking Alliances, Central Bank DBR Compliance & 99.4% Clean File Documentation.',
      heroCtaPrimary: 'Explore Banking Services',
      heroCtaSecondary: 'Verify 50% DBR Limit',
      heroStatNumber: 'AED 1.2B+',
      heroStatLabel: 'Financial Facilities Sourced',
      compliancePillarTitle: 'Bank-Grade Compliance & Sourcing Architecture',
      compliancePillarSubtitle: 'Every file sourced by AMAFH undergoes stringent 4-tier verification to protect bank partners against credit slippage.',
      cbuaeNotice: 'Strict adherence to UAE Central Bank 50% Debt-Burden Ratio (DBR) Mandate.',
      sourcingTitle: 'High Velocity Retail Banking Portfolios',
      sourcingSubtitle: 'Delivering end-to-end customer onboarding for credit cards, personal loans, and Islamic finance across the UAE.',
      exploreCvvb: 'Explore CVVB 4-Stage Verification',
      cvvbDesc: 'Customer Verification & Vigilance Bureau — ensuring flawless, audit-ready customer onboarding.',
      bankingPortals: 'Direct Bank Core Portal Integration',
      bankingDesc: 'Encrypted document delivery directly into tier-1 UAE partner bank underwriting systems.',
      cleanFileRatio: 'Clean File Approval Ratio',
      fastDisbursal: 'Average Card & Loan Issuance Velocity',
      certifiedAgents: 'Certified Direct Banking Sales Specialists',
      sqFtHub: 'Biometric Operations Hub, Business Village',
      readyToPartner: 'Ready to Accelerate Retail Banking Distribution?',
      viewCorporatePdf: 'View Corporate Profile PDF',
      bookConsultation: 'Schedule Institutional Meeting',
    },
    about: {
      badge: 'ENTERPRISE PROFILE & HERITAGE',
      title: 'Built on Integrity, Compliance, & Scale',
      subtitle: 'Headquartered in Dubai’s prestigious Business Village, AMAFH Commercial Brokers operates as the premier outsourced sales engine for top UAE financial institutions.',
      heroSubtitle: 'Headquartered in Dubai’s prestigious Business Village, AMAFH Commercial Brokers operates as the premier outsourced sales engine for top UAE financial institutions.',
      groupTitle: 'A Proud Part of ALIYAS Group',
      groupDesc: 'Backed by the multi-sector strength of ALIYAS Group, providing institutional stability, rigorous corporate governance, and expansive corporate relationships.',
      visionTitle: 'Our Strategic Vision',
      visionText: 'To be the most trusted, productive, and compliant outsourced channel partner for tier-1 financial institutions across the UAE.',
      missionTitle: 'Our Operating Mission',
      missionText: 'Delivering exceptional retail banking sales through relentless accuracy, customer-centric advisory, and 100% adherence to UAE Central Bank regulations.',
      facilityTitle: 'Banking-Grade Infrastructure',
      facilityDesc: '9,500 square feet of biometric-secured operations in Business Village, Deira, equipped with segregated partner rooms and audit-ready data archives.',
    },
    services: {
      badge: 'CORE FINANCIAL SOLUTIONS',
      title: 'Specialized Retail Banking Sourcing',
      subtitle: 'From prime credit card acquisitions to high-limit personal finance and vigilance verification, our desks deliver bank-ready dossiers.',
      heroSubtitle: 'From prime credit card acquisitions to high-limit personal finance and vigilance verification, our desks deliver bank-ready dossiers.',
      cvvbTitle: 'The Proprietary CVVB Methodology',
      cvvbSubtitle: 'Customer Verification & Vigilance Bureau — Our 4-stage pipeline that guarantees 99.4% clean file approvals.',
      step1Title: 'Contact & Sourcing',
      step1Desc: 'Targeted multi-channel engagement targeting pre-qualified salaried individuals and UAE corporate payroll segments.',
      step2Title: 'Vetting & KYC Collection',
      step2Desc: 'Comprehensive AECB checks, salary certificate authentication, and initial Debt-Burden Ratio (DBR) calculations.',
      step3Title: 'Verification & Vigilance',
      step3Desc: 'Physical and telephonic workplace verification, HR vetting, and bank-grade anti-fraud risk mitigation checks.',
      step4Title: 'Booking & Submission',
      step4Desc: 'Seamless digital injection into partner bank core portals with zero documentation discrepancy.',
    },
    partners: {
      badge: 'INSTITUTIONAL ECOSYSTEM',
      title: 'Trusted by the UAE’s Leading Banks',
      subtitle: 'We act as the specialized frontline bridge connecting UAE financial institutions with creditworthy retail customers.',
      heroSubtitle: 'We act as the specialized frontline bridge connecting UAE financial institutions with creditworthy retail customers.',
      tier1Banks: 'Official Bank Channel Partners',
      corporateAlliances: 'Corporate Payroll & Employer Alliances',
      partnerPerksTitle: 'Why Top Banks Outsource to AMAFH',
      partnerPerksSubtitle: 'Zero acquisition overhead, zero compliance defect rate, and guaranteed booking velocity.',
    },
    caseStudies: {
      badge: 'VERIFIED OUTCOMES',
      title: 'Real Financial Challenges Solved',
      subtitle: 'Explore how AMAFH’s expert structuring turned complex client scenarios into rapid banking approvals while preserving regulatory DBR limits.',
      heroSubtitle: 'Explore how AMAFH’s expert structuring turned complex client scenarios into rapid banking approvals while preserving regulatory DBR limits.',
      filterAll: 'All Scenarios',
      filterCards: 'Credit Card Upgrades',
      filterFinance: 'Debt Consolidation',
      filterSme: 'Executive Financing',
      challengeLabel: 'Client Challenge',
      solutionLabel: 'AMAFH Structuring',
      outcomeLabel: 'Verified Outcome',
    },
    calculator: {
      badge: 'REGULATORY COMPLIANCE TOOL',
      title: 'UAE Central Bank 50% DBR Calculator',
      subtitle: 'Calculate your exact borrowing capacity and monthly Debt-Burden Ratio according to official Central Bank guidelines.',
      heroSubtitle: 'Calculate your exact borrowing capacity and monthly Debt-Burden Ratio according to official Central Bank guidelines.',
      monthlyIncomeLabel: 'Net Monthly Salary (AED)',
      existingLoanEmiLabel: 'Existing Loan EMIs (AED/mo)',
      creditCardLimitsLabel: 'Total Credit Card Limits (AED)',
      autoFinancingLabel: 'Auto & Other Installments (AED/mo)',
      otherCommitmentsLabel: 'Other Financial Commitments (AED/mo)',
      dbrResultTitle: 'Your Calculated DBR Status',
      maxEligibleEmi: 'Maximum Permissible Monthly EMI',
      potentialBorrowing: 'Estimated New Financing Capacity',
      compliantStatus: 'Compliant with Central Bank 50% Cap',
      overlimitStatus: 'Exceeds 50% DBR Threshold',
      preVetCta: 'Pre-Vet My Application with AMAFH Desk',
      disclaimer: 'Calculations adhere to UAE Central Bank Consumer Protection Standards (5% of credit card limits factored as monthly commitment). Final approval is subject to partner bank credit policies.',
    },
    careers: {
      badge: 'CAREER OPPORTUNITIES',
      title: 'Join the UAE’s Highest-Earning Sales Force',
      subtitle: 'Empowering ambitious banking sales professionals with unmatched commissions, high-grade leads, and rapid career progression.',
      heroSubtitle: 'Empowering ambitious banking sales professionals with unmatched commissions, high-grade leads, and rapid career progression.',
      whyJoinTitle: 'The AMAFH Advantage for Sales Agents',
      openPositionsTitle: 'Current Open Opportunities',
      commissionTitle: 'Uncapped Commission & Incentives',
      commissionSubtitle: 'Bi-weekly disbursements, milestone bonuses, and top-tier bank accreditation rewards.',
      applyButton: 'Submit CV & Schedule Interview',
    },
    contact: {
      badge: 'GET IN TOUCH',
      title: 'Visit Our Dubai Headquarters',
      subtitle: 'Conveniently located at Business Village, Deira — right in the heart of Dubai’s commercial banking district.',
      heroSubtitle: 'Conveniently located at Business Village, Deira — right in the heart of Dubai’s commercial banking district.',
      formTitle: 'Direct Priority Consultation Desk',
      formSubtitle: 'Fill in your requirements and a senior sourcing consultant will reach out within 2 business hours.',
      fullName: 'Full Name',
      workEmail: 'Work Email Address',
      mobileNumber: 'UAE Mobile (+971)',
      selectService: 'Required Facility / Product',
      monthlySalary: 'Monthly Salary Band',
      message: 'Brief Requirements / Details',
      sendInquiry: 'Send Priority Inquiry',
      officeHoursTitle: 'Working Hours',
      officeHoursText: 'Monday to Friday: 9:00 AM – 6:30 PM (Saturday by appointment)',
    },
    footer: {
      d33Agenda: 'DUBAI D33 AGENDA',
      economicTarget: 'AED 32T Economic Scale',
      poweringGrowth: 'Powering Dubai’s Rapid Financial Sourcing Growth',
      retailSourcing: 'UAE Retail Sourcing Growth',
      facilitiesOriginated: 'AMAFH Originated Volume',
      approvalRate: 'Clean Bank File Approval',
      newsletterPlaceholder: 'Subscribe to Dubai Bulletins...',
      newsletterJoin: 'Join',
      newsletterJoined: 'Joined!',
      linksCol1: 'Quick Links',
      linksCol2: 'Corporate Links',
      linksCol3: 'Governance & Legal',
      scheduleConsultation: 'Schedule Consultation',
      eula: 'End User License Agreement',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      cbuaeDbr: 'Central Bank DBR 50%',
      subFooterLicensing: 'Licensed by UAE Central Bank Partner Banks. All rights reserved to AMAFH.ae',
    },
  },

  ar: {
    nav: {
      overview: 'نظرة عامة',
      about: 'من نحن',
      services: 'الخدمات وعملية CVVB',
      partners: 'شركاؤنا',
      caseStudies: 'دراسات الحالة',
      calculator: 'حاسبة عبء الدين',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      partnerDesk: 'مكتب الشركاء',
      profilePdf: 'ملف الشركة',
      sourcingPages: 'صفحات استقطاب التمويل AMAFH',
      locationBrief: 'قرية الأعمال، ديرة، دبي',
      viewPdf: 'عرض الملف التعريفي للشركة 2025',
      bookConsultation: 'حجز موعد استشاري مالي',
      switchLangTooltip: 'Switch to English / التبديل إلى الإنجليزية',
    },
    company: {
      name: 'أماف (AMAFH)',
      type: 'للوساطة التجارية ذ.م.م',
      tagline: 'شريكك الموثوق لحلول المبيعات المصرفية الخارجية في دولة الإمارات',
      address: 'مكاتب 405-408، المبنى B، قرية الأعمال، بورسعيد، ديرة، دبي – الإمارات',
      city: 'دبي، الإمارات العربية المتحدة',
      hubBadge: 'قرية الأعمال • ديرة',
    },
    common: {
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      contactUs: 'تواصل معنا',
      submit: 'إرسال الطلب',
      applyNow: 'قدّم الآن',
      exploreServices: 'استكشف خدماتنا',
      callNow: 'اتصال مباشر',
      emailUs: 'مراسلة المكتب',
      scheduleMeeting: 'حجز جلسة استشارية',
      viewCaseStudies: 'عرض دراسات الحالة',
      calculateNow: 'احسب أهليتك المالية',
      allRightsReserved: 'جميع الحقوق محفوظة لموقع AMAFH.ae',
      licensedBy: 'مرخص من البنوك الشريكة المعتمدة لدى مصرف الإمارات المركزي',
      downloadDossier: 'تحميل ملف الشركة',
      backToHome: 'العودة للرئيسية',
      verified: 'موثق ومطابق للمعايير',
      successRate: '99.4% ملفات مكتملة ونظيفة',
      activePartners: '4+ بنوك رئيسية شريكة',
      workspaceSize: 'مركز عمليات بمساحة 9,500 قدم²',
      salesForce: '250+ مستشار مبيعات معتمد',
    },
    home: {
      heroBadge: 'الذكاء المؤسسي في استقطاب المعاملات المصرفية',
      heroTitlePart1: 'تمكين الاستقطاب المالي',
      heroTitlePart2: 'والتميز في الاكتتاب الائتماني',
      heroSubtitle: 'نرسم ملامح المستقبل بشراكات مصرفية رائدة في الإمارات، والالتزام الصارم بنسبة عبء الدين (DBR) 50% وملفات توثيق نظيفة بنسبة 99.4%.',
      heroCtaPrimary: 'استكشف الخدمات المصرفية',
      heroCtaSecondary: 'فحص سقف نسبة عبء الدين (50%)',
      heroStatNumber: '+1.2 مليار د.إ',
      heroStatLabel: 'حجم التسهيلات التمويلية المستقطبة',
      compliancePillarTitle: 'بنية امتثال ومعالجة مطابقة للمعايير المصرفية',
      compliancePillarSubtitle: 'يخضع كل ملف صادر من شركة أماف لفحص وتدقيق رباعي المستويات لحماية البنوك الشريكة من مخاطر التعثر.',
      cbuaeNotice: 'التزام صارم بتعليمات مصرف الإمارات العربية المتحدة المركزي لسقف نسبة عبء الدين 50%.',
      sourcingTitle: 'محافظ مصرفية تجزئة عالية الكفاءة',
      sourcingSubtitle: 'تقديم خدمات متكاملة لإصدار بطاقات الائتمان، التمويل الشخصي، والحلول المصرفية الإسلامية في جميع إمارات الدولة.',
      exploreCvvb: 'استكشف نظام تدقيق CVVB الرباعي',
      cvvbDesc: 'Customer Verification & Vigilance Bureau — ضمان استقطاب استثنائي للعملاء بملفات جاهزة للتدقيق المصرفي.',
      bankingPortals: 'ربط رقمي مباشر ببوابات البنوك',
      bankingDesc: 'تسليم مشفر للمستندات والملفات مباشرة إلى أنظمة الاكتتاب في كبرى بنوك الإمارات.',
      cleanFileRatio: 'نسبة اعتماد الملفات النظيفة',
      fastDisbursal: 'متوسط سرعة إصدار البطاقات والتمويل',
      certifiedAgents: 'مستشارو مبيعات مصرفية معتمدون',
      sqFtHub: 'مركز عمليات بيومتري بقرية الأعمال',
      readyToPartner: 'هل أنت جاهز لتسريع قنوات التوزيع المصرفي؟',
      viewCorporatePdf: 'عرض الملف التعريفي للشركة (PDF)',
      bookConsultation: 'حجز جلسة استشارية مؤسسية',
    },
    about: {
      badge: 'الملف التعريفي والتاريخ المؤسسي',
      title: 'نبني على النزاهة، الامتثال، والتوسع',
      subtitle: 'انطلاقاً من مقرنا في قرية الأعمال المرموقة بدبي، تعمل أماف للوساطة التجارية كمحرك مبيعات خارجي رائد لأكبر المؤسسات المالية في الإمارات.',
      heroSubtitle: 'انطلاقاً من مقرنا في قرية الأعمال المرموقة بدبي، تعمل أماف للوساطة التجارية كمحرك مبيعات خارجي رائد لأكبر المؤسسات المالية في الإمارات.',
      groupTitle: 'جزء فخور من مجموعة إلياس (ALIYAS Group)',
      groupDesc: 'مدعومون بالقوة الاستثمارية المتعددة لمجموعة إلياس، مما يمنحنا استقراراً مؤسسياً، وحوكمة دقيقة، وعلاقات تجارية واسعة النطاق.',
      visionTitle: 'رؤيتنا الاستراتيجية',
      visionText: 'أن نكون الشريك الخارجي الأكثر موثوقية وإنتاجية والتزاماً بالمعايير المصرفية لكبرى البنوك في دولة الإمارات العربية المتحدة.',
      missionTitle: 'رسالتنا التشغيلية',
      missionText: 'تقديم مبيعات مصرفية استثنائية من خلال الدقة المطلقة، المشورة المتمحورة حول العميل، والامتثال التام لقوانين المصرف المركزي.',
      facilityTitle: 'بنية تحتية بمواصفات مصرفية',
      facilityDesc: '9,500 قدم مربع من المساحات المؤمنة بنظام البصمة في قرية الأعمال بديرة، مجهزة بقاعات مستقلة لكل بنك شريك وأرشيف بيانات رقمي آمن.',
    },
    services: {
      badge: 'الحلول التمويلية المتخصصة',
      title: 'استقطاب متخصص لمنتجات التجزئة المصرفية',
      subtitle: 'من استقطاب بطاقات الائتمان النخبوية إلى التمويل الشخصي ذي الأسقف العالية وخدمات التحقق والمطابقة، نوفر ملفات جاهزة للاعتماد الفوري.',
      heroSubtitle: 'من استقطاب بطاقات الائتمان النخبوية إلى التمويل الشخصي ذي الأسقف العالية وخدمات التحقق والمطابقة، نوفر ملفات جاهزة للاعتماد الفوري.',
      cvvbTitle: 'منهجية CVVB الحصرية لتدقيق المعاملات',
      cvvbSubtitle: 'Customer Verification & Vigilance Bureau — خط معالجة رباعي يضمن اعتماد الملفات بنظافة قياسية تصل إلى 99.4%.',
      step1Title: 'التواصل والاستقطاب',
      step1Desc: 'استهداف متعدد القنوات للشرائح المؤهلة من الموظفين وأصحاب الرواتب المحولة عبر كبرى الشركات المعتمدة.',
      step2Title: 'التدقيق وجمع مستندات KYC',
      step2Desc: 'مطابقة تقارير الاتحاد للمعلومات الائتمانية (AECB)، تصديق شهادات الراتب، واحتساب سقف عبء الدين الأولي.',
      step3Title: 'التحقق الميداني واليقظة الرقابية',
      step3Desc: 'زيارات ميدانية وتدقيق هاتفي لمقرات العمل والموارد البشرية لدرء أي شبهات أو محاولات احتيال ائتماني.',
      step4Title: 'الرفع والإدراج المصرفي',
      step4Desc: 'إدخال رقمي مباشر وآمن في البوابات المصرفية للبنوك الشريكة بنسبة مطابقة وتوثيق 100%.',
    },
    partners: {
      badge: 'المنظومة المصرفية المتكاملة',
      title: 'موثوقون من قِبل كبرى بنوك الإمارات',
      subtitle: 'نعمل كجسر اتصال متخصص يربط المؤسسات المالية في الدولة بالعملاء المؤهلين ائتمانياً وفق أعلى معايير الجودة.',
      heroSubtitle: 'نعمل كجسر اتصال متخصص يربط المؤسسات المالية في الدولة بالعملاء المؤهلين ائتمانياً وفق أعلى معايير الجودة.',
      tier1Banks: 'شركاؤنا الرسميون من البنوك',
      corporateAlliances: 'تحالفات الشركات وإدارة الرواتب المؤسسية',
      partnerPerksTitle: 'لماذا تعتمد البنوك الكبرى على أماف؟',
      partnerPerksSubtitle: 'تكلفة استقطاب منعدمة للبنك، نسبة أخطاء تقارب الصفر، وسرعة فائقة في حجز التسهيلات الائتمانية.',
    },
    caseStudies: {
      badge: 'نتائج واقعية موثقة',
      title: 'حلول مبتكرة لتحديات مالية معقدة',
      subtitle: 'تعرف على كيفية قيام خبراء أماف بهيكلة أوضاع العملاء وتحويل الصعوبات الائتمانية إلى موافقات مصرفية سريعة مع الامتثال لنسبة 50% DBR.',
      heroSubtitle: 'تعرف على كيفية قيام خبراء أماف بهيكلة أوضاع العملاء وتحويل الصعوبات الائتمانية إلى موافقات مصرفية سريعة مع الامتثال لنسبة 50% DBR.',
      filterAll: 'جميع الحالات',
      filterCards: 'ترقية البطاقات الائتمانية',
      filterFinance: 'توحيد الالتزامات والديون',
      filterSme: 'تمويل التنفيذيين وكبار الموظفين',
      challengeLabel: 'تحدي العميل',
      solutionLabel: 'هيكلة أماف المالية',
      outcomeLabel: 'النتيجة المعتمدة',
    },
    calculator: {
      badge: 'أداة الامتثال للتعليمات الرقابية',
      title: 'حاسبة عبء الدين (DBR 50%) لمصرف الإمارات المركزي',
      subtitle: 'احسب طاقتك الائتمانية بدقة ونسبة التزاماتك الشهرية استناداً إلى أحدث أنظمة المصرف المركزي الإماراتي.',
      heroSubtitle: 'احسب طاقتك الائتمانية بدقة ونسبة التزاماتك الشهرية استناداً إلى أحدث أنظمة المصرف المركزي الإماراتي.',
      monthlyIncomeLabel: 'صافي الراتب الشهري (درهم)',
      existingLoanEmiLabel: 'الأقساط الشهرية للقروض الحالية (درهم/شهر)',
      creditCardLimitsLabel: 'إجمالي الحدود الائتمانية للبطاقات (درهم)',
      autoFinancingLabel: 'أقساط تمويل السيارات والالتزامات الأخرى (درهم/شهر)',
      otherCommitmentsLabel: 'أي التزامات مالية دورية أخرى (درهم/شهر)',
      dbrResultTitle: 'نتيجة فحص عبء الدين (DBR)',
      maxEligibleEmi: 'الحد الأقصى المسموح للقسط الشهري',
      potentialBorrowing: 'سعة التمويل الإضافي التقديرية',
      compliantStatus: 'مطابق لسقف المصرف المركزي (أقل من 50%)',
      overlimitStatus: 'يتجاوز سقف عبء الدين المحدد بـ 50%',
      preVetCta: 'طلب فحص مسبق لمعاملتي عبر مكتب أماف',
      disclaimer: 'تتبع الحسابات معايير حماية المستهلك المعتمدة لدى المصرف المركزي (يُحتسب 5% من سقف البطاقات كالتزام شهري). الموافقة النهائية تخضع لسياسة البنك المانح.',
    },
    careers: {
      badge: 'فرص عمل وتطوير مهني',
      title: 'انضم إلى فريق المبيعات المصرفية الأعلى دخلاً في الإمارات',
      subtitle: 'نمكن المتخصصين الطموحين في المبيعات المصرفية بعمولات غير محدودة، عملاء مؤهلين، ومسار ترقية مهني سريع.',
      heroSubtitle: 'نمكن المتخصصين الطموحين في المبيعات المصرفية بعمولات غير محدودة، عملاء مؤهلين، ومسار ترقية مهني سريع.',
      whyJoinTitle: 'مزايا العمل لدى شركة أماف',
      openPositionsTitle: 'الوظائف المتاحة حالياً',
      commissionTitle: 'عمولات ومكافآت شهرية مجزية',
      commissionSubtitle: 'صرف مستحقات دوري، مكافآت لتحقيق الأهداف، وتكريم معتمد من كبرى البنوك الشريكة.',
      applyButton: 'إرسال السيرة الذاتية وتحديد موعد للمقابلة',
    },
    contact: {
      badge: 'تواصل مع فريقنا',
      title: 'تفضل بزيارة مقرنا الرئيسي في دبي',
      subtitle: 'موقع استراتيجي في قرية الأعمال بديرة — في قلب المنطقة المصرفية والتجارية الحيوية لمدينة دبي.',
      heroSubtitle: 'موقع استراتيجي في قرية الأعمال بديرة — في قلب المنطقة المصرفية والتجارية الحيوية لمدينة دبي.',
      formTitle: 'مكتب الاستشارات المباشر ذو الأولوية',
      formSubtitle: 'أدخل تفاصيل طلبك وسيقوم أحد كبار مستشاري التمويل بالتواصل معك خلال ساعتي عمل.',
      fullName: 'الاسم الكامل',
      workEmail: 'البريد الإلكتروني للعمل',
      mobileNumber: 'رقم الهاتف المتحرك (+971)',
      selectService: 'المنتج / الخدمة المصرفية المطلوبة',
      monthlySalary: 'شريحة الراتب الشهري',
      message: 'تفاصيل إضافية حول طلبك',
      sendInquiry: 'إرسال طلب الاستشارة الفورية',
      officeHoursTitle: 'ساعات العمل الرسمية',
      officeHoursText: 'من الاثنين إلى الجمعة: 9:00 صباحاً – 6:30 مساءً (السبت بالمواعيد المسبقة)',
    },
    footer: {
      d33Agenda: 'أجندة دبي الاقتصادية D33',
      economicTarget: 'مستهدف اقتصادي 32 تريليون د.إ',
      poweringGrowth: 'دعم النمو المالي السريع واستقطاب التسهيلات في دبي',
      retailSourcing: 'نمو التمويل الاستهلاكي في الإمارات',
      facilitiesOriginated: 'حجم المعاملات المنجزة عبر أماف',
      approvalRate: 'نسبة الملفات المصرفية المكتملة والنظيفة',
      newsletterPlaceholder: 'اشترك في النشرة المصرفية لدبي...',
      newsletterJoin: 'اشتراك',
      newsletterJoined: 'تم بنجاح!',
      linksCol1: 'روابط سريعة',
      linksCol2: 'الشركة والمؤسسة',
      linksCol3: 'الحوكمة والسياسات',
      scheduleConsultation: 'حجز جلسة استشارية',
      eula: 'اتفاقية ترخيص المستخدم النهائي',
      privacyPolicy: 'سياسة الخصوصية وأمن البيانات',
      termsConditions: 'الشروط والأحكام',
      cbuaeDbr: 'معايير المصرف المركزي DBR 50%',
      subFooterLicensing: 'مرخص ومفوض من البنوك الشريكة المعتمدة لدى المصرف المركزي. جميع الحقوق محفوظة لموقع AMAFH.ae',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: Translations;
  localize: (enText: string, arText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('amafh_language');
      if (saved === 'ar' || saved === 'en') return saved;
      return 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('amafh_language', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const isAr = language === 'ar';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (isAr) {
      document.documentElement.classList.add('lang-ar');
    } else {
      document.documentElement.classList.remove('lang-ar');
    }
  }, [language]);

  const localize = (enText: string, arText?: string): string => {
    if (language === 'ar' && arText) {
      return arText;
    }
    return enText;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    isRTL: language === 'ar',
    t: translations[language],
    localize,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
