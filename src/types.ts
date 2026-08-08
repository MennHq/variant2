export type ConceptVariant = 'master' | 'option1' | 'option2' | 'option3';

export type CategoryFilter = 
  | 'All'
  | 'Living & Lounges'
  | 'Kitchens & Dining'
  | 'Bedrooms & Wardrobes'
  | 'Baths & Spas'
  | 'Commercial & Workspaces'
  | 'Penthouses & Facades';

export interface ShowcaseScene {
  id: string;
  title: string;
  category: CategoryFilter;
  imageSrc: string;
  location: string;
  specs: {
    area: string;
    completionYear: string;
    style: string;
    lighting: string;
    keyMaterials: string[];
  };
  description: string;
  featured?: boolean;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'tall';
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  quote: string;
  year: string;
}

export interface MaterialSwatch {
  id: string;
  name: string;
  category: string;
  finish: string;
  origin: string;
  description: string;
  imageSrc: string;
  colorHex: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  approxAreaSqFt: number;
  budgetRange: string;
  preferredDate: string;
  notes: string;
}
