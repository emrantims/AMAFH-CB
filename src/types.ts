export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  metrics: string;
  tag: string;
  imageUrl: string;
  badgeColor?: string;
}

export interface ProcessStage {
  step: string;
  letter: string;
  title: string;
  actor: string;
  description: string;
  details: string[];
  duration: string;
  color: string;
  accent: string;
}

export interface CoreStrength {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface BankPartner {
  id: string;
  name: string;
  shortName: string;
  type: 'bank' | 'corporate';
  products: string[];
  focus: string;
  logoText: string;
  badgeColor: string;
  arabicName?: string;
  logoUrl?: string;
  brandColor?: string;
  shariaCompliant?: boolean;
  minSalary?: string;
  maxLimit?: string;
  turnaroundTime?: string;
  approvalRate?: string;
  features?: string[];
}

export interface CorporatePartner {
  id: string;
  name: string;
  sector: string;
  shortCode: string;
  brandColor: string;
  logoUrl?: string;
  description: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  status: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  organization: string;
  orgType: 'bank' | 'corporate';
  avatarUrl: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  metricLabel: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  category: 'Process & CVVB' | 'Credit Cards' | 'Personal Finance' | 'Compliance & KYC';
  question: string;
  answer: string;
  keyPoints?: string[];
}

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'partners'
  | 'case-studies'
  | 'calculator'
  | 'careers'
  | 'contact';

export type GlossaryCategory =
  | 'all'
  | 'regulatory'
  | 'rates'
  | 'islamic'
  | 'loans'
  | 'cards'
  | 'mortgage';

export interface GlossaryTerm {
  id: string;
  term: string;
  arabicTerm?: string;
  fullNameEn: string;
  fullNameAr: string;
  category: 'regulatory' | 'rates' | 'islamic' | 'loans' | 'cards' | 'mortgage';
  categoryLabelEn: string;
  categoryLabelAr: string;
  shortDefinitionEn: string;
  shortDefinitionAr: string;
  fullExplanationEn: string;
  fullExplanationAr: string;
  ruleOfThumbEn?: string;
  ruleOfThumbAr?: string;
  formulaOrCalculationEn?: string;
  formulaOrCalculationAr?: string;
  exampleScenarioEn?: string;
  exampleScenarioAr?: string;
  relatedTermIds?: string[];
}


