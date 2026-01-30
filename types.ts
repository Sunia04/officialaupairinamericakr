export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  category: string;
  author: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  primaryColor: string; // Stored as Tailwind class suffix e.g., 'teal'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export type ViewState = 'HOME' | 'PROGRAMS' | 'APPLY' | 'ADMIN' | 'POST_DETAIL';