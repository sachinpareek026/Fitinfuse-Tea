export interface Botanical {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  aromaProfile: string;
  image: string;
  accentColor: string;
}

export interface CinematicStep {
  id: number;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface BrewingStep {
  number: string;
  title: string;
  instruction: string;
  detail: string;
  iconImage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  date: string;
  tag: string;
}
