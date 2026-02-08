export interface Talent {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  specialties: string[];
  rate: number;
  bio: string;
  isOnline: boolean;
  badges: string[];
  imageGradient: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  token: string;
  result: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  missingFeatures?: string[];
  isPopular?: boolean;
  isPremium?: boolean;
}