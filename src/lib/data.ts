import { GanttChartSquare, Scaling, Paintbrush, Wrench, Construction, LandPlot, type LucideIcon } from 'lucide-react';
import type { DocumentData } from 'firebase/firestore';


export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'General Contracting',
    description: 'We manage your project from start to finish, ensuring it is completed on time, within budget, and to the highest quality standards. Our team oversees all aspects of construction, including subcontractor management, safety protocols, and quality control.',
    icon: GanttChartSquare,
  },
  {
    title: 'Architectural & Structural Design',
    description: 'Our in-house team of architects and engineers creates innovative and functional designs tailored to your vision. We combine aesthetic appeal with structural integrity to deliver spaces that are both beautiful and durable.',
    icon: Scaling,
  },
  {
    title: 'Finishing & Interior Works',
    description: 'We provide high-quality finishing and interior works that transform spaces. Our services include painting, flooring, tiling, plastering, and custom joinery to bring your design concepts to life with meticulous attention to detail.',
    icon: Paintbrush,
  },
  {
    title: 'Renovation & Maintenance',
    description: 'Breathe new life into existing structures with our renovation services. We also offer comprehensive maintenance plans to ensure your property remains in optimal condition, preserving its value and functionality for years to come.',
    icon: Wrench,
  },
  {
    title: 'Infrastructure Works',
    description: 'We undertake large-scale infrastructure projects, including roads, bridges, and utilities. Our expertise in civil engineering ensures robust and reliable infrastructure that supports community growth and development.',
    icon: Construction,
  },
  {
    title: 'Landscaping & Exterior Works',
    description: 'Enhance your property\'s curb appeal with our professional landscaping and exterior services. We design and install beautiful outdoor spaces, including gardens, patios, and walkways, that complement your building\'s architecture.',
    icon: LandPlot,
  },
];

export type ProjectCategory = 'Residential' | 'Commercial' | 'Government' | 'Infrastructure';
export type ProjectCategoryKey = 'residential' | 'commercial' | 'government' | 'infrastructure' | 'all';

export interface ProjectCategoryDetails {
    key: ProjectCategoryKey;
    name: ProjectCategory | 'All';
}

export interface Project extends DocumentData {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryKey: ProjectCategoryKey;
  imageUrl: string;
  dataAiHint: string;
  description: string;
  details: {
    client: string;
    duration: string;
    services: string[];
  };
  gallery: { url: string; hint: string }[];
}

export const projectCategories: ProjectCategoryDetails[] = [
    { key: 'all', name: 'All'},
    { key: 'residential', name: 'Residential'},
    { key: 'commercial', name: 'Commercial'},
    { key: 'government', name: 'Government'},
    { key: 'infrastructure', name: 'Infrastructure'}
];

// This data is now fetched from Firestore, but we keep the array for type safety and reference.
export const projects: Project[] = [];

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
}

export const team: TeamMember[] = [
  { name: 'John Doe', role: 'CEO & Founder', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male portrait' },
  { name: 'Jane Smith', role: 'Chief Engineer', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female portrait' },
  { name: 'Peter Jones', role: 'Head of Architecture', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male portrait professional' },
  { name: 'Emily Williams', role: 'Project Manager', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female portrait professional' },
];

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  imageUrl: string;
  dataAiHint: string;
}

export const testimonials: Testimonial[] = [
  { 
    name: 'Michael Brown', 
    company: 'Alpha Corp', 
    quote: 'Tekam\'s professionalism and commitment to quality were evident throughout our project. They delivered an outstanding commercial tower on time and within budget. We couldn\'t be happier with the results.',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'male ceo' 
  },
  { 
    name: 'Sarah Davis', 
    company: 'Innovate Inc.', 
    quote: 'Working with Tekam was a seamless experience. Their team is knowledgeable, responsive, and dedicated to client satisfaction. Our new headquarters is everything we dreamed of and more.',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'female ceo'
  },
  { 
    name: 'David Wilson', 
    company: 'Private Homeowner', 
    quote: 'From the initial design to the final touches, Tekam transformed our vision for a modern villa into a stunning reality. Their attention to detail and craftsmanship are second to none.',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'man smiling'
  },
];
