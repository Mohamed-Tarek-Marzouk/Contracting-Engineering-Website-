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
    imageUrl: 'https://i.postimg.cc/MT1Xwc4L/600-400.png',
    dataAiHint: 'modern villa exterior',
    description: 'A stunning modern villa featuring minimalist design, expansive glass walls, and a seamless indoor-outdoor flow. The project focused on creating a tranquil oasis with luxurious amenities and sustainable features.',
    details: {
      client: 'Private Client',
      duration: '12 Months',
      services: ['Architectural Design', 'General Contracting', 'Interior Finishing'],
    },
    gallery: [
      { 
        url: 'https://i.postimg.cc/Y0QHjZw2/Leonardo-Phoenix-10-A-stunning-modern-villa-oasis-in-a-residen-0.jpg', 
        hint: 'villa living room' 
      },
      { 
        url: 'https://i.postimg.cc/59z1PYFc/Leonardo-Phoenix-10-A-stunning-modern-villa-oasis-in-a-residen-1.jpg', 
        hint: 'villa swimming pool' 
      },
      { 
        url: 'https://i.postimg.cc/RFkmS9yb/Leonardo-Phoenix-10-A-stunning-modern-villa-oasis-in-a-residen-2.jpg', 
        hint: 'villa bedroom' 
      },
      { 
        url: 'https://i.postimg.cc/FsQvwrjY/Leonardo-Phoenix-10-A-stunning-modern-villa-oasis-in-a-residen-3.jpg', 
        hint: 'villa exterior view' 
      },
    ],
    
  },
  {
    id: '2',
    slug: 'downtown-corporate-center',
    title: 'Downtown Corporate Center',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://i.postimg.cc/dVn2MfdC/600-400-5.jpg',
    dataAiHint: 'modern office building',
    description: 'A state-of-the-art corporate headquarters in the heart of the city. This project involved the construction of a 20-story office building with advanced facilities, collaborative workspaces, and a focus on energy efficiency.',
    details: {
      client: 'Global Tech Inc.',
      duration: '24 Months',
      services: ['General Contracting', 'Structural Design', 'Infrastructure Works'],
    },
    gallery: [
      { 
        url: 'https://i.postimg.cc/50RcP1f2/Leonardo-Phoenix-10-A-stateoftheart-20story-corporate-headquar-0.jpg', 
        hint: 'office building lobby' 
      },
      { 
        url: 'https://i.postimg.cc/tgDGxWfP/Leonardo-Phoenix-10-A-stateoftheart-20story-corporate-headquar-1.jpg', 
        hint: 'modern office interior' 
      },
      { 
        url: 'https://i.postimg.cc/sXXd91dL/Leonardo-Phoenix-10-A-stateoftheart-20story-corporate-headquar-2.jpg', 
        hint: 'corporate headquarters exterior' 
      },
      { 
        url: 'https://i.postimg.cc/nrjyg5LY/Leonardo-Phoenix-10-A-stateoftheart-20story-corporate-headquar-3.jpg', 
        hint: 'building exterior night view' 
      },
    ],
    
  },
  {
    id: '3',
    slug: 'city-main-bridge-rehabilitation',
    title: 'City Main Bridge Rehabilitation',
    category: 'Infrastructure',
    categoryKey: 'infrastructure',
    imageUrl: 'https://i.postimg.cc/zfh0mrwf/Leonardo-Phoenix-10-A-large-modern-city-bridge-undergoing-comp-0-1.jpg',
    dataAiHint: 'large bridge construction',
    description: 'A comprehensive rehabilitation of the city\'s main arterial bridge. The project included structural repairs, seismic retrofitting, and modernization to ensure its safety and longevity for decades to come.',
    details: {
      client: 'City Transportation Authority',
      duration: '18 Months',
      services: ['Infrastructure Works', 'Structural Design', 'Maintenance'],
    },
    gallery: [
      { 
        url: 'https://i.postimg.cc/Hs7mhJcD/Leonardo-Phoenix-10-A-large-modern-city-bridge-undergoing-comp-0.jpg', 
        hint: 'bridge construction work' 
      },
      { 
        url: 'https://i.postimg.cc/8kYD4dCm/Leonardo-Phoenix-10-A-large-modern-city-bridge-undergoing-comp-1.jpg', 
        hint: 'bridge aerial view' 
      },
      { 
        url: 'https://i.postimg.cc/Mp2w2WVc/Leonardo-Phoenix-10-A-large-modern-city-bridge-undergoing-comp-2.jpg', 
        hint: 'bridge structural reinforcement' 
      },
      { 
        url: 'https://i.postimg.cc/Fzw4Kv6B/Leonardo-Phoenix-10-A-large-modern-city-bridge-undergoing-comp-3.jpg', 
        hint: 'finished bridge traffic flow' 
      },
    ],
    
  },
    {
    id: '4',
    slug: 'national-library-archives',
    title: 'National Library & Archives',
    category: 'Government',
    categoryKey: 'government',
    imageUrl: 'https://i.postimg.cc/0y9YBv6x/600-400-3.jpg',
    dataAiHint: 'grand library building',
    description: 'Construction of a new National Library and Archives building, designed to be a landmark of cultural heritage. The facility features climate-controlled storage, public reading rooms, and exhibition spaces.',
    details: {
      client: 'Ministry of Culture',
      duration: '36 Months',
      services: ['Architectural Design', 'General Contracting', 'Finishing Works'],
    },
    gallery: [
      { 
        url: 'https://i.postimg.cc/sfT1rZgM/Leonardo-Phoenix-10-A-grand-National-Library-and-Archives-buil-0.jpg', 
        hint: 'library grand exterior' 
      },
      { 
        url: 'https://i.postimg.cc/sD1xDDMw/Leonardo-Phoenix-10-A-grand-National-Library-and-Archives-buil-1.jpg', 
        hint: 'library facade detail' 
      },
      { 
        url: 'https://i.postimg.cc/MpQGVPbB/Leonardo-Phoenix-10-A-grand-National-Library-and-Archives-buil-2.jpg', 
        hint: 'library reading hall' 
      },
      { 
        url: 'https://i.postimg.cc/sD8XBdSy/Leonardo-Phoenix-10-A-grand-National-Library-and-Archives-buil-3.jpg', 
        hint: 'archive storage area' 
      },
    ],
    
  },
  {
    id: '5',
    slug: 'luxury-waterfront-apartments',
    title: 'Luxury Waterfront Apartments',
    category: 'Residential',
    categoryKey: 'residential',
    imageUrl: 'https://i.postimg.cc/cJHQdcMb/600-400-2.jpg',
    dataAiHint: 'apartment building exterior',
    description: 'A high-end residential complex offering panoramic waterfront views. The project includes 150 luxury apartments, a private marina, and exclusive resident amenities.',
    details: {
      client: 'Prestige Living Developments',
      duration: '30 Months',
      services: ['General Contracting', 'Landscaping', 'Interior Finishing'],
    },
    gallery: [
      { 
        url: 'https://i.postimg.cc/HkVyK90W/Leonardo-Phoenix-10-A-luxury-waterfront-residential-complex-wi-0.jpg', 
        hint: 'apartment living area' 
      },
      { 
        url: 'https://i.postimg.cc/7YBzmW2Q/Leonardo-Phoenix-10-A-luxury-waterfront-residential-complex-wi-1.jpg', 
        hint: 'waterfront view balcony' 
      },
      { 
        url: 'https://i.postimg.cc/kXM8NmBb/Leonardo-Phoenix-10-A-luxury-waterfront-residential-complex-wi-2.jpg', 
        hint: 'apartment complex pool' 
      },
      { 
        url: 'https://i.postimg.cc/8z96VfwR/Leonardo-Phoenix-10-A-luxury-waterfront-residential-complex-wi-3.jpg', 
        hint: 'apartment complex exterior' 
      },
    ],
    
  },
   {
    id: '6',
    slug: 'heritage-building-restoration',
    title: 'Heritage Building Restoration',
    category: 'Commercial',
    categoryKey: 'commercial',
    imageUrl: 'https://i.postimg.cc/MT1Xwc4L/600-400.png',
    dataAiHint: 'historic building facade',
    description: 'Meticulous restoration of a 19th-century heritage building, converting it into a boutique hotel. The project preserved historical architectural elements while integrating modern comforts and technologies.',
    details: {
      client: 'The Heritage Group',
      duration: '22 Months',
      services: ['Renovation & Maintenance', 'Architectural Design', 'Finishing & Interior Works'],
    },
    gallery: [
      { url: 'https://i.postimg.cc/s2N0zxS5/Leonardo-Phoenix-10-Heritage-Building-Restoration-Commercial-Met-0.jpg', hint: 'apartment living area' },
      { url: 'https://i.postimg.cc/k54hLKVn/Leonardo-Phoenix-10-Heritage-Building-Restoration-Commercial-Met-1.jpg', hint: 'waterfront view balcony' },
      { url: 'https://i.postimg.cc/T3Q4kC37/Leonardo-Phoenix-10-Heritage-Building-Restoration-Commercial-Met-2.jpg', hint: 'apartment complex pool' },
      { url: 'https://i.postimg.cc/ZRvs5mF2/Leonardo-Phoenix-10-Heritage-Building-Restoration-Commercial-Met-3.jpg', hint: 'apartment complex pool' },
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
  { name: 'John Doe', role: 'CEO & Founder', imageUrl: 'https://i.postimg.cc/13sJkTC0/pixlr-image-generator-689068bceb67ca035b165678.png', dataAiHint: 'male portrait' },
  { name: 'Jane Smith', role: 'Chief Engineer', imageUrl: 'https://i.postimg.cc/5ttp0zM6/download.png', dataAiHint: 'female portrait' },
  { name: 'Peter Jones', role: 'Head of Architecture', imageUrl: 'https://i.postimg.cc/fRCBDKpG/pixlr-image-generator-689068bceb67ca035b165679.png', dataAiHint: 'male portrait professional' },
  { name: 'Emily Williams', role: 'Project Manager', imageUrl: 'https://i.postimg.cc/J46s8HKT/text-to-image-5.png', dataAiHint: 'female portrait professional' },
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
    imageUrl: 'https://i.postimg.cc/Sj0tYxfH/pixlr-imagr-68906aa97436b12a4052750b-1.png',
    dataAiHint: 'male ceo' 
  },
  { 
    name: 'Sarah Davis', 
    company: 'Innovate Inc.', 
    quote: 'Working with Tekam was a seamless experience. Their team is knowledgeable, responsive, and dedicated to client satisfaction. Our new headquarters is everything we dreamed of and more.',
    imageUrl: 'https://i.postimg.cc/Vv0VNCnj/pixlr-image-generator-68906aa97436b12a4052750b.png',
    dataAiHint: 'female ceo'
  },
  { 
    name: 'David Wilson', 
    company: 'Private Homeowner', 
    quote: 'From the initial design to the final touches, Tekam transformed our vision for a modern villa into a stunning reality. Their attention to detail and craftsmanship are second to none.',
    imageUrl: 'https://i.postimg.cc/FRB6mZdr/pixlr-image-generator-68906aa97436b12a4052750b-1.png',
    dataAiHint: 'man smiling'
  },
];

export interface HeroSlide {
  title: string;
  subtitle: string;
  imageUrl: string;
  dataAiHint: string;
  link: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'Building a Better Future',
    subtitle: 'Excellence in Construction and Engineering',
    imageUrl: 'https://i.postimg.cc/3J5kxHHG/pixlr-image-generator-68906d1d8366e18f480d4a19-1.png',
    dataAiHint: 'construction site',
    link: '/contact',
  },
  {
    title: 'Innovation in Every Detail',
    subtitle: 'From Concept to Completion',
    imageUrl: 'https://i.postimg.cc/X7fpZDVz/pixlr-image-generator-68906d94208321f4907855db.png',
    dataAiHint: 'architectural design blueprint',
    link: '/services',
  },
  {
    title: 'Your Vision, Our Expertise',
    subtitle: 'Let\'s Build Together',
    imageUrl: 'https://i.postimg.cc/BbDtBm2t/pixlr-image-generator-68906d1d8366e18f480d4a18-1.png',
    dataAiHint: 'team meeting construction',
    link: '/projects',
  },
  {
    title: 'Your Vision, Our Expertise',
    subtitle: 'Let\'s Build Together',
    imageUrl: 'https://i.postimg.cc/13y4DcX5/pixlr-image-generator-68906d08208321f490784ad9-1.png',
    dataAiHint: 'team meeting construction',
    link: '/projects',
  },
];
