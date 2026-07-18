export type PageId =
  | "home"
  | "services"
  | "references"
  | "contact"
  | "service"
  | "kvkk"
  | "terms"
  | "privacy"
  | "notfound";

export interface LegalDoc {
  id: "kvkk" | "terms" | "privacy";
  title: string;
  updatedAt: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export interface LocalTrend {
  city: string;
  popularHours: string;
  reelsGrowth: string;
  topSector: string;
  localSlang: string[];
  localHotspots: string[];
  audiencePreference: string;
}

export interface StrategyInput {
  brandName: string;
  sector: string;
  location: string;
  targetAudience: string;
  primaryPlatform: string;
  budgetLevel: string;
}

export interface ContentDay {
  day: string;
  topic: string;
  hook: string;
  visuals: string;
  caption: string;
  hashtags: string;
}

export interface GeneratedStrategy {
  strategicDiagnosis: string;
  vibeAndTone: string;
  geoHook: string;
  contentCalendar: ContentDay[];
  projectedGrowth: string;
  recommendedAction: string;
}

export type ServiceCategory = "performance" | "creative" | "technical";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  badge: string;
  metric: string;
  iconName: string;
  category: ServiceCategory;
  detailedContent?: string;
  benefits?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  text: string;
  avatarUrl: string;
  statGrew: string;
}
