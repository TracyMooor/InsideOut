export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  rating: number;
  reviewCount: number;
  priceUSD: number;
  image: string;
  category: 'classicos' | 'aventura' | 'cultural';
  isFeatured?: boolean;
  highlights: string[];
  difficulty: 'Fácil' | 'Moderado' | 'Desafiante';
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  tripType: string;
}

export interface PlannerState {
  step: number;
  companion: string;
  style: string;
  duration: number;
  interests: string[];
  name: string;
  email: string;
  whatsapp: string;
  specialRequests: string;
}
