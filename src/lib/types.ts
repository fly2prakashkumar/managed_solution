import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
}

export interface Resource {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}
