export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  imageUrl: string;
  isSharkTank: boolean;
  extraDetails?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  content: string;
}

export interface ClientLogo {
  id: string;
  name: string;
}
