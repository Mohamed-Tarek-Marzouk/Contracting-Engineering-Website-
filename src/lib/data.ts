import { GanttChartSquare, Scaling, Paintbrush, Wrench, Construction, LandPlot, type LucideIcon } from 'lucide-react';

export interface Service {
  title: { en: string, ar: string };
  description: { en: string, ar: string };
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: { 
      en: 'General Contracting',
      ar: 'المقاولات العامة'
    },
    description: {
      en: 'We manage your project from start to finish, ensuring it is completed on time, within budget, and to the highest quality standards. Our team oversees all aspects of construction, including subcontractor management, safety protocols, and quality control.',
      ar: 'ندير مشروعك من البداية إلى النهاية، مع ضمان إكماله في الوقت المحدد، وفي حدود الميزانية، وبأعلى معايير الجودة. يشرف فريقنا على جميع جوانب البناء، بما في ذلك إدارة المقاولين من الباطن، وبروتوكولات السلامة، ومراقبة الجودة.'
    },
    icon: GanttChartSquare,
  },
  {
    title: {
      en: 'Architectural & Structural Design',
      ar: 'التصميم المعماري والإنشائي'
    },
    description: {
      en: 'Our in-house team of architects and engineers creates innovative and functional designs tailored to your vision. We combine aesthetic appeal with structural integrity to deliver spaces that are both beautiful and durable.',
      ar: 'يقوم فريقنا الداخلي من المهندسين المعماريين والمهندسين بإنشاء تصميمات مبتكرة وعملية مصممة خصيصًا لرؤيتك. نحن نجمع بين الجاذبية الجمالية والسلامة الهيكلية لتقديم مساحات جميلة ومتينة.'
    },
    icon: Scaling,
  },
  {
    title: {
      en: 'Finishing & Interior Works',
      ar: 'أعمال التشطيبات والديكور الداخلي'
    },
    description: {
      en: 'We provide high-quality finishing and interior works that transform spaces. Our services include painting, flooring, tiling, plastering, and custom joinery to bring your design concepts to life with meticulous attention to detail.',
      ar: 'نقدم أعمال تشطيبات وديكور داخلي عالية الجودة تحول المساحات. تشمل خدماتنا الدهان، والأرضيات، والبلاط، والجص، والنجارة المخصصة لإضفاء الحيوية على مفاهيم التصميم الخاصة بك مع اهتمام دقيق بالتفاصيل.'
    },
    icon: Paintbrush,
  },
  {
    title: {
      en: 'Renovation & Maintenance',
      ar: 'التجديد والصيانة'
    },
    description: {
      en: 'Breathe new life into existing structures with our renovation services. We also offer comprehensive maintenance plans to ensure your property remains in optimal condition, preserving its value and functionality for years to come.',
      ar: 'أضف حياة جديدة للمباني القائمة من خلال خدمات التجديد لدينا. كما نقدم خطط صيانة شاملة لضمان بقاء الممتلكات الخاصة بك في حالة مثالية، مع الحفاظ على قيمتها ووظائفها لسنوات قادمة.'
    },
    icon: Wrench,
  },
  {
    title: {
      en: 'Infrastructure Works',
      ar: 'أعمال البنية التحتية'
    },
    description: {
      en: 'We undertake large-scale infrastructure projects, including roads, bridges, and utilities. Our expertise in civil engineering ensures robust and reliable infrastructure that supports community growth and development.',
      ar: 'نتعهد بمشاريع البنية التحتية واسعة النطاق، بما في ذلك الطرق والجسور والمرافق. تضمن خبرتنا في الهندسة المدنية بنية تحتية قوية وموثوقة تدعم نمو المجتمع وتطوره.'
    },
    icon: Construction,
  },
  {
    title: {
      en: 'Landscaping & Exterior Works',
      ar: 'أعمال تنسيق الحدائق والخارجية'
    },
    description: {
      en: 'Enhance your property\'s curb appeal with our professional landscaping and exterior services. We design and install beautiful outdoor spaces, including gardens, patios, and walkways, that complement your building\'s architecture.',
      ar: 'عزز جاذبية الممتلكات الخاصة بك من خلال خدمات تنسيق الحدائق والخدمات الخارجية المتخصصة. نقوم بتصميم وتركيب مساحات خارجية جميلة، بما في ذلك الحدائق والباحات والممرات التي تكمل الهندسة المعمارية للمبنى الخاص بك.'
    },
    icon: LandPlot,
  },
];

export type ProjectCategory = 'Residential' | 'Commercial' | 'Government' | 'Infrastructure';
export type ProjectCategoryKey = 'residential' | 'commercial' | 'government' | 'infrastructure' | 'all';


export interface Project {
  slug: string;
  title: { en: string, ar: string };
  category: { en: ProjectCategory, ar: string };
  categoryKey: ProjectCategoryKey;
  imageUrl: string;
  dataAiHint: string;
  description: { en: string, ar: string };
  details: {
    client: { en: string, ar: string };
    duration: { en: string, ar: string };
    services: { en: string, ar: string }[];
  };
  gallery: { url: string; hint: string }[];
}

export const projectCategories: {key: ProjectCategoryKey, en: ProjectCategory, ar: string}[] = [
    { key: 'all', en: 'All', ar: 'الكل'},
    { key: 'residential', en: 'Residential', ar: 'سكني'},
    { key: 'commercial', en: 'Commercial', ar: 'تجاري'},
    { key: 'government', en: 'Government', ar: 'حكومي'},
    { key: 'infrastructure', en: 'Infrastructure', ar: 'بنية تحتية'}
];

export const projects: Project[] = [
  {
    slug: 'modern-residential-villa',
    title: { en: 'Modern Residential Villa', ar: 'فيلا سكنية حديثة' },
    category: { en: 'Residential', ar: 'سكني' },
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern house',
    description: { 
      en: 'A stunning modern villa featuring minimalist design, open-plan living spaces, and state-of-the-art amenities. The project focused on creating a seamless connection between indoor and outdoor living areas.',
      ar: 'فيلا حديثة مذهلة تتميز بتصميم بسيط ومساحات معيشة مفتوحة ووسائل راحة على أحدث طراز. ركز المشروع على خلق اتصال سلس بين مناطق المعيشة الداخلية والخارجية.'
    },
    details: {
      client: { en: 'Private Client', ar: 'عميل خاص' },
      duration: { en: '12 Months', ar: '12 شهرًا' },
      services: [
        { en: 'Architectural & Structural Design', ar: 'التصميم المعماري والإنشائي' },
        { en: 'General Contracting', ar: 'المقاولات العامة' },
        { en: 'Finishing & Interior Works', ar: 'أعمال التشطيبات والديكور الداخلي' }
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
    title: { en: 'Downtown Commercial Tower', ar: 'برج تجاري في وسط المدينة' },
    category: { en: 'Commercial', ar: 'تجاري' },
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'skyscraper city',
    description: {
      en: 'A 30-story commercial tower in the heart of the city, providing premium office space. The project involved advanced engineering solutions to meet seismic and wind load requirements.',
      ar: 'برج تجاري مكون من 30 طابقًا في قلب المدينة، يوفر مساحات مكتبية متميزة. تضمن المشروع حلولًا هندسية متقدمة لتلبية متطلبات الزلازل وأحمال الرياح.'
    },
    details: {
      client: { en: 'Alpha Corp', ar: 'ألفا كورب' },
      duration: { en: '36 Months', ar: '36 شهرًا' },
      services: [
        { en: 'General Contracting', ar: 'المقاولات العامة' },
        { en: 'Infrastructure Works', ar: 'أعمال البنية التحتية' }
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
    title: { en: 'City Public Library', ar: 'مكتبة المدينة العامة' },
    category: { en: 'Government', ar: 'حكومي' },
    categoryKey: 'government',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'library building',
    description: {
      en: 'A renovation and expansion of the city\'s main public library. The project preserved the historic facade while creating a modern, accessible interior with updated facilities for the community.',
      ar: 'تجديد وتوسعة مكتبة المدينة العامة الرئيسية. حافظ المشروع على الواجهة التاريخية مع إنشاء تصميم داخلي حديث ومتاح مع مرافق محدثة للمجتمع.'
    },
    details: {
      client: { en: 'City Municipality', ar: 'بلدية المدينة' },
      duration: { en: '18 Months', ar: '18 شهرًا' },
      services: [
        { en: 'Renovation & Maintenance', ar: 'التجديد والصيانة' },
        { en: 'Finishing & Interior Works', ar: 'أعمال التشطيبات والديكور الداخلي' }
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
    title: { en: 'Highway Interchange Project', ar: 'مشروع تقاطع الطريق السريع' },
    category: { en: 'Infrastructure', ar: 'بنية تحتية' },
    categoryKey: 'infrastructure',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'highway interchange',
    description: {
      en: 'A complex highway interchange designed to improve traffic flow and reduce congestion. The project included the construction of multiple overpasses and a new drainage system.',
      ar: 'تقاطع طريق سريع معقد مصمم لتحسين تدفق حركة المرور وتقليل الازدحام. تضمن المشروع بناء العديد من الجسور العلوية ونظام صرف جديد.'
    },
    details: {
      client: { en: 'National Transport Authority', ar: 'هيئة النقل الوطنية' },
      duration: { en: '24 Months', ar: '24 شهرًا' },
      services: [{ en: 'Infrastructure Works', ar: 'أعمال البنية التحتية' }],
    },
     gallery: [
      { url: 'https://placehold.co/800x600.png', hint: 'highway construction' },
      { url: 'https://placehold.co/800x600.png', hint: 'road overpass' },
      { url: 'https://placehold.co/800x600.png', hint: 'aerial view' },
    ],
  },
  {
    slug: 'coastal-apartment-complex',
    title: { en: 'Coastal Apartment Complex', ar: 'مجمع سكني ساحلي' },
    category: { en: 'Residential', ar: 'سكني' },
    categoryKey: 'residential',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'apartment building',
    description: {
      en: 'A luxury apartment complex with panoramic ocean views. The design incorporates durable, corrosion-resistant materials to withstand the coastal environment.',
      ar: 'مجمع سكني فاخر بإطلالات بانورامية على المحيط. يشتمل التصميم على مواد متينة ومقاومة للتآكل لتحمل البيئة الساحلية.'
    },
    details: {
      client: { en: 'Seaside Developers', ar: 'مطورو الواجهة البحرية' },
      duration: { en: '20 Months', ar: '20 شهرًا' },
      services: [
        { en: 'General Contracting', ar: 'المقاولات العامة' },
        { en: 'Architectural & Structural Design', ar: 'التصميم المعماري والإنشائي' }
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
    title: { en: 'Corporate Headquarters', ar: 'المقر الرئيسي للشركة' },
    category: { en: 'Commercial', ar: 'تجاري' },
    categoryKey: 'commercial',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'office headquarters',
    description: {
      en: 'A modern corporate headquarters featuring sustainable design elements, including a green roof and rainwater harvesting system, to achieve LEED Gold certification.',
      ar: 'مقر شركة حديث يتميز بعناصر تصميم مستدامة، بما في ذلك سقف أخضر ونظام تجميع مياه الأمطار، للحصول على شهادة LEED الذهبية.'
    },
    details: {
      client: { en: 'Innovate Inc.', ar: 'شركة إينوفيت' },
      duration: { en: '22 Months', ar: '22 شهرًا' },
      services: [
        { en: 'General Contracting', ar: 'المقاولات العامة' },
        { en: 'Finishing & Interior Works', ar: 'أعمال التشطيبات والديكور الداخلي' }
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
  name: { en: string, ar: string };
  role: { en: string, ar: string };
  imageUrl: string;
  dataAiHint: string;
}

export const team: TeamMember[] = [
  { name: { en: 'John Doe', ar: 'جون دو' }, role: { en: 'CEO & Founder', ar: 'الرئيس التنفيذي والمؤسس' }, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male portrait' },
  { name: { en: 'Jane Smith', ar: 'جين سميث' }, role: { en: 'Chief Engineer', ar: 'كبير المهندسين' }, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female portrait' },
  { name: { en: 'Peter Jones', ar: 'بيتر جونز' }, role: { en: 'Head of Architecture', ar: 'رئيس قسم الهندسة المعمارية' }, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male portrait professional' },
  { name: { en: 'Emily Williams', ar: 'إميلي ويليامز' }, role: { en: 'Project Manager', ar: 'مدير المشروع' }, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female portrait professional' },
];

export interface Testimonial {
  name: { en: string, ar: string };
  company: { en: string, ar: string };
  quote: { en: string, ar: string };
  imageUrl: string;
  dataAiHint: string;
}

export const testimonials: Testimonial[] = [
  { 
    name: { en: 'Michael Brown', ar: 'مايكل براون' }, 
    company: { en: 'Alpha Corp', ar: 'ألفا كورب' }, 
    quote: { 
      en: 'Tekam\'s professionalism and commitment to quality were evident throughout our project. They delivered an outstanding commercial tower on time and within budget. We couldn\'t be happier with the results.',
      ar: 'كان احتراف والتزام تيكام بالجودة واضحين طوال مشروعنا. لقد سلموا برجًا تجاريًا متميزًا في الوقت المحدد وفي حدود الميزانية. لا يمكننا أن نكون أكثر سعادة بالنتائج.'
    }, 
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'male ceo' 
  },
  { 
    name: { en: 'Sarah Davis', ar: 'سارة ديفيس' }, 
    company: { en: 'Innovate Inc.', ar: 'شركة إينوفيت' }, 
    quote: {
      en: 'Working with Tekam was a seamless experience. Their team is knowledgeable, responsive, and dedicated to client satisfaction. Our new headquarters is everything we dreamed of and more.',
      ar: 'كان العمل مع تيكام تجربة سلسة. فريقهم على دراية واستجابة ومكرس لرضا العملاء. مقرنا الجديد هو كل ما حلمنا به وأكثر.'
    },
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'female ceo'
  },
  { 
    name: { en: 'David Wilson', ar: 'ديفيد ويلسون' }, 
    company: { en: 'Private Homeowner', ar: 'مالك منزل خاص' }, 
    quote: {
      en: 'From the initial design to the final touches, Tekam transformed our vision for a modern villa into a stunning reality. Their attention to detail and craftsmanship are second to none.',
      ar: 'من التصميم الأولي إلى اللمسات النهائية، حولت تيكام رؤيتنا لفيلا حديثة إلى حقيقة مذهلة. اهتمامهم بالتفاصيل وحرفيتهم لا يعلى عليهما.'
    },
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'man smiling'
  },
];
