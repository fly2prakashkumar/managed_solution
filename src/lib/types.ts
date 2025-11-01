

import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface FooterNavLink {
    title: string;
    href: string;
}

export interface FooterNav {
    title: string;
    links: FooterNavLink[];
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
  title:string;
  clientName?: string;
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

export interface Testimonial {
    name: string;
    comment: string;
    date: string;
    company?: string;
}

export interface Award {
    title: string;
    imageId: string;
}

export interface Webinar {
    slug: string;
    title: string;
    date: string;
    imageUrl: string;
    imageHint: string;
}

export interface LiveEvent {
    slug: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    imageHint: string;
}

export interface OnDemandVideo {
    slug: string;
    title: string;
    series: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    isNew?: boolean;
}

export interface Faq {
    question: string;
    answer: string;
}

export interface Solution {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    href: string;
}

export interface SolutionDetails {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    href: string;
}

export interface ProductDetails {
    slug: string;
    title: string;
    description: string;
}

export interface IndustryDetails {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface AiResource {
    title: string;
    href: string;
    imageId: string;
    type: 'article' | 'ebook';
}

export interface ComplianceRegulation {
    name: string;
    acronym: string;
    description: string;
}

export interface CareersData {
    employeePerks: {
        title: string;
        description: string;
        link?: string;
    }[];
    benefits: string[];
    openPositions: string[];
    testimonials: string[];
}
