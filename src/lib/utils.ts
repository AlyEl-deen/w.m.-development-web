import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  category: 'Website' | 'Mobile App' | 'System';
  features: string[];
  techStack: string[];
  galleryImages: string[];
  priceRange: string;
  liveUrl?: string;
}

export interface Partner {
  id: string;
  companyName: string;
  logoUrl?: string;
  websiteUrl?: string;
  status: 'reserved' | 'active';
}

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: any;
  sessionId: string;
}
