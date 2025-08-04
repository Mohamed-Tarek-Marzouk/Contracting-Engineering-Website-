import { GanttChartSquare, Scaling, Paintbrush, Wrench, Construction, LandPlot, type LucideIcon } from 'lucide-react';

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
    slug: 'modern-residential-villa',
    title: 'Modern Residential Villa',
    category: 'Residential',
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern house',
    description: 'A stunning modern villa featuring minimalist design, open-plan living spaces, and state-of-the-art amenities. The project focused on creating a seamless connection between indoor and outdoor living areas.',
    details: {
      client: 'Private Client',
      duration: '12 Months',
      services: [
        'Architectural & Structural Design',
        'General Contracting',
        'Finishing & Interior Works'
      ],
    },
    gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'living room' },
      { url: 'https://placehold.co/800x600.png', hint: 'villa exterior' },
      { url: 'https://placehold.co/800x600.png', hint: 'swimming pool' },
    ],
  },
  {
    slug: 'downtown-commercial-tower',
    title: 'Downtown Commercial Tower',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'skyscraper city',
    description: 'A 30-story commercial tower in the heart of the city, providing premium office space. The project involved advanced engineering solutions to meet seismic and wind load requirements.',
    details: {
      client: 'Alpha Corp',
      duration: '36 Months',
      services: [
        'General Contracting',
        'Infrastructure Works'
      ],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'office building' },
      { url: 'https://placehold.co/800x600.png', hint: 'building lobby' },
      { url: 'https://placehold.co/800x600.png', hint: 'city skyline' },
    ],
  },
  {
    slug: 'city-public-library',
    title: 'City Public Library',
    category: 'Government',
    categoryKey: 'government',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'library building',
    description: 'A renovation and expansion of the city\'s main public library. The project preserved the historic facade while creating a modern, accessible interior with updated facilities for the community.',
    details: {
      client: 'City Municipality',
      duration: '18 Months',
      services: [
        'Renovation & Maintenance',
        'Finishing & Interior Works'
      ],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'library interior' },
      { url: 'https://placehold.co/800x600.png', hint: 'building facade' },
      { url: 'https://placehold.co/800x600.png', hint: 'reading area' },
    ],
  },
  {
    slug: 'highway-interchange-project',
    title: 'Highway Interchange Project',
    category: 'Infrastructure',
    categoryKey: 'infrastructure',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'highway interchange',
    description: 'A complex highway interchange designed to improve traffic flow and reduce congestion. The project included the construction of multiple overpasses and a new drainage system.',
    details: {
      client: 'National Transport Authority',
      duration: '24 Months',
      services: ['Infrastructure Works'],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'highway construction' },
      { url: 'https://placehold.co/800x600.png', hint: 'road overpass' },
      { url: 'https://placehold.co/800x600.png', hint: 'aerial view' },
    ],
  },
  {
    slug: 'coastal-apartment-complex',
    title: 'Coastal Apartment Complex',
    category: 'Residential',
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'apartment building',
    description: 'A luxury apartment complex with panoramic ocean views. The design incorporates durable, corrosion-resistant materials to withstand the coastal environment.',
    details: {
      client: 'Seaside Developers',
      duration: '20 Months',
      services: [
        'General Contracting',
        'Architectural & Structural Design'
      ],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'apartment exterior' },
      { url: 'https://placehold.co/800x600.png', hint: 'balcony view' },
      { url: 'https://placehold.co/800x600.png', hint: 'modern kitchen' },
    ],
  },
    {
    slug: 'corporate-headquarters',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'office headquarters',
    description: 'A modern corporate headquarters featuring sustainable design elements, including a green roof and rainwater harvesting system, to achieve LEED Gold certification.',
    details: {
      client: 'Innovate Inc.',
      duration: '22 Months',
      services: [
        'General Contracting',
        'Finishing & Interior Works'
      ],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'building entrance' },
      { url: 'https://placehold.co/800x600.png', hint: 'meeting room' },
      { url: 'https://placehold.co/800x600.png', hint: 'open office' },
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
