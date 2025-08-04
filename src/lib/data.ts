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

export interface Project {
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

export const projects: Project[] = [
  {
    id: '1',
    slug: 'modern-villa-oasis',
    title: 'Modern Villa Oasis',
    category: 'Residential',
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern villa exterior',
    description: 'A stunning modern villa featuring minimalist design, expansive glass walls, and a seamless indoor-outdoor flow. The project focused on creating a tranquil oasis with luxurious amenities and sustainable features.',
    details: {
      client: 'Private Client',
      duration: '12 Months',
      services: ['Architectural Design', 'General Contracting', 'Interior Finishing'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'villa living room' },
      { url: 'https://placehold.co/1280x720.png', hint: 'villa swimming pool' },
      { url: 'https://placehold.co/1280x720.png', hint: 'villa bedroom' },
    ],
  },
  {
    id: '2',
    slug: 'downtown-corporate-center',
    title: 'Downtown Corporate Center',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern office building',
    description: 'A state-of-the-art corporate headquarters in the heart of the city. This project involved the construction of a 20-story office building with advanced facilities, collaborative workspaces, and a focus on energy efficiency.',
    details: {
      client: 'Global Tech Inc.',
      duration: '24 Months',
      services: ['General Contracting', 'Structural Design', 'Infrastructure Works'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'office building lobby' },
      { url: 'https://placehold.co/1280x720.png', hint: 'modern office interior' },
      { url: 'https://placehold.co/1280x720.png', hint: 'building exterior night' },
    ],
  },
  {
    id: '3',
    slug: 'city-main-bridge-rehabilitation',
    title: 'City Main Bridge Rehabilitation',
    category: 'Infrastructure',
    categoryKey: 'infrastructure',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'large bridge construction',
    description: 'A comprehensive rehabilitation of the city\'s main arterial bridge. The project included structural repairs, seismic retrofitting, and modernization to ensure its safety and longevity for decades to come.',
    details: {
      client: 'City Transportation Authority',
      duration: '18 Months',
      services: ['Infrastructure Works', 'Structural Design', 'Maintenance'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'bridge construction work' },
      { url: 'https://placehold.co/1280x720.png', hint: 'bridge aerial view' },
      { url: 'https://placehold.co/1280x720.png', hint: 'finished bridge traffic' },
    ],
  },
    {
    id: '4',
    slug: 'national-library-archives',
    title: 'National Library & Archives',
    category: 'Government',
    categoryKey: 'government',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'grand library building',
    description: 'Construction of a new National Library and Archives building, designed to be a landmark of cultural heritage. The facility features climate-controlled storage, public reading rooms, and exhibition spaces.',
    details: {
      client: 'Ministry of Culture',
      duration: '36 Months',
      services: ['Architectural Design', 'General Contracting', 'Finishing Works'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'library interior reading' },
      { url: 'https://placehold.co/1280x720.png', hint: 'library facade detail' },
      { url: 'https://placehold.co/1280x720.png', hint: 'archive storage room' },
    ],
  },
  {
    id: '5',
    slug: 'luxury-waterfront-apartments',
    title: 'Luxury Waterfront Apartments',
    category: 'Residential',
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'apartment building exterior',
    description: 'A high-end residential complex offering panoramic waterfront views. The project includes 150 luxury apartments, a private marina, and exclusive resident amenities.',
    details: {
      client: 'Prestige Living Developments',
      duration: '30 Months',
      services: ['General Contracting', 'Landscaping', 'Interior Finishing'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'apartment living area' },
      { url: 'https://placehold.co/1280x720.png', hint: 'waterfront view balcony' },
      { url: 'https://placehold.co/1280x720.png', hint: 'apartment complex pool' },
    ],
  },
   {
    id: '6',
    slug: 'heritage-building-restoration',
    title: 'Heritage Building Restoration',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic building facade',
    description: 'Meticulous restoration of a 19th-century heritage building, converting it into a boutique hotel. The project preserved historical architectural elements while integrating modern comforts and technologies.',
    details: {
      client: 'The Heritage Group',
      duration: '22 Months',
      services: ['Renovation & Maintenance', 'Architectural Design', 'Finishing & Interior Works'],
    },
    gallery: [
      { url: 'https://placehold.co/1280x720.png', hint: 'restored hotel lobby' },
      { url: 'https://placehold.co/1280x720.png', hint: 'ornate ceiling detail' },
      { url: 'https://placehold.co/1280x720.png', hint: 'boutique hotel room' },
    ],
  },
];

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
