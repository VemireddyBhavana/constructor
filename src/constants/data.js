export const IMAGES = {
  heroHome: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
  heroHome2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
  heroHome3: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000",
  heroAbout: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
  heroServices: "https://cdn.home-designing.com/wp-content/uploads/2018/12/luxury-modern-kitchen.jpg",
  contact: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=2000",
  passion: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
  aboutIntro: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
  ourStory: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
  heroContactBedroom: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
};

export const SERVICES = [
  {
    id: "01",
    title: "Custom Design",
    description: "Our world-class architects translate your vision into breathtaking 3D designs and precise blueprints. We ensure every square foot reflects your personal style and functional needs.",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    title: "Premium Construction",
    description: "Using only top-tier materials and advanced engineering techniques, we build structures that stand the test of time. Quality is our foundation, and excellence is our standard.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    title: "Worker Management",
    description: "We hand-select and manage a team of expert masons, electricians, and plumbers. Our rigorous quality control ensures every detail of your home is crafted to perfection.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "04",
    title: "Smart Home Integration",
    description: "Future-proof your living space with integrated smart home technology. From automated lighting to advanced security systems, we build homes that are as intelligent as they are beautiful.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000"
  },
];

import { APARTMENTS } from './properties/apartments';
import { VILLAS } from './properties/villas';
import { PENTHOUSES } from './properties/penthouses';
import { HOUSES } from './properties/houses';

export const PROPERTIES = [
  ...APARTMENTS,
  ...VILLAS,
  ...PENTHOUSES,
  ...HOUSES,
];


export const CONTACT_INFO = {
  address: "13 Fifth Avenue, New York, NY 101660",
  email: "contact@info.com",
  phone: "555-1234-678",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM",
};

export const TESTIMONIALS = [
  {
    id: 1,
    author: "JAMES OLIVER",
    text: "Working with this team was a game-changer. They found me the perfect home within a week and handled all the paperwork seamlessly. Highly recommended!",
    stars: 5,
  },
  {
    id: 2,
    author: "SOPHIA MARTINEZ",
    text: "The personalized service I received was exceptional. They really took the time to understand what I was looking for and delivered beyond my expectations.",
    stars: 5,
  },
];

export const CONSTRUCTION_PACKAGES = [
  {
    id: "basic",
    name: "Basic Package",
    price: "₹1,800/sq.ft",
    projectLead: "Arjun Mehta (Senior Builder)",
    tagline: "Quality essentials for budget-conscious homeowners.",
    features: ["Standard Brickwork", "Grade 43 Cement", "TMT Steel Fe500", "Vitrified Tiles (2x2)", "Standard Electricals"]
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "₹2,200/sq.ft",
    projectLead: "Karan Johar (Expert Builder)",
    tagline: "Our most popular choice for premium residential homes.",
    features: ["Fly Ash Bricks", "Grade 53 Cement", "TMT Steel Fe550", "Double Charged Tiles", "Branded CP Fittings", "Modular Switches"]
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: "₹3,500/sq.ft",
    projectLead: "Sanjay Singhania (Master Builder)",
    tagline: "Ultra-luxury materials and concierge-level service.",
    features: ["Wire-cut Bricks", "Acc/Ultratech Cement", "Corrosion Resistant Steel", "Italian Marble Flooring", "Smart Home Automation", "Designer Bathrooms"]
  }
];

export const WORKERS = [
  // DESIGN (3)
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Lead Architect",
    category: "Design",
    rating: 5.0,
    experience: "15 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    specialty: "Sustainable luxury residential designs and urban planning."
  },
  {
    id: 2,
    name: "Neha Sharma",
    role: "Interior Designer",
    category: "Design",
    rating: 4.9,
    experience: "7 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    specialty: "Curated luxury interiors and bespoke furniture selection."
  },
  {
    id: 3,
    name: "Aryan Kapoor",
    role: "3D Visualizer",
    category: "Design",
    rating: 4.8,
    experience: "5 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    specialty: "Photorealistic 3D rendering and virtual walkthroughs."
  },

  // MASONRY (3)
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "Master Mason",
    category: "Masonry",
    rating: 4.9,
    experience: "12 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600",
    specialty: "Precision structural foundations and load-bearing brickwork."
  },
  {
    id: 5,
    name: "Gopal Das",
    role: "Stone Specialist",
    category: "Masonry",
    rating: 4.7,
    experience: "14 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    specialty: "Natural stone cladding and decorative marble installation."
  },
  {
    id: 6,
    name: "Ram Singh",
    role: "Concrete Expert",
    category: "Masonry",
    rating: 4.6,
    experience: "10 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=600",
    specialty: "High-strength RCC works and complex column casting."
  },

  // ELECTRICAL (3)
  {
    id: 7,
    name: "Amit Singh",
    role: "Senior Electrician",
    category: "Electrical",
    rating: 4.8,
    experience: "8 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    specialty: "High-voltage systems and smart home automation integration."
  },
  {
    id: 8,
    name: "Rahul Varma",
    role: "Lighting Designer",
    category: "Electrical",
    rating: 4.9,
    experience: "6 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    specialty: "Ambient lighting control and custom LED installations."
  },
  {
    id: 9,
    name: "Karan Patel",
    role: "Solar Engineer",
    category: "Electrical",
    rating: 4.7,
    experience: "9 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    specialty: "Rooftop solar grid setup and backup power systems."
  },

  // PLUMBING (3)
  {
    id: 10,
    name: "Suresh Prabhu",
    role: "Plumbing Specialist",
    category: "Plumbing",
    rating: 4.7,
    experience: "10 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1521110602882-b4d5b469c82d?auto=format&fit=crop&q=80&w=600",
    specialty: "Advanced hydraulic systems and water treatment solutions."
  },
  {
    id: 11,
    name: "Mohit Bansal",
    role: "Sanitary Engineer",
    category: "Plumbing",
    rating: 4.8,
    experience: "11 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=600",
    specialty: "Luxury bathroom fittings and concealed drainage setup."
  },
  {
    id: 12,
    name: "Dilip Kumar",
    role: "Pipe Consultant",
    category: "Plumbing",
    rating: 4.6,
    experience: "13 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600",
    specialty: "Underground network planning and fire hydrant systems."
  },

  // ENGINEERING (3)
  {
    id: 13,
    name: "Prakash Raj",
    role: "Structural Engineer",
    category: "Engineering",
    rating: 4.8,
    experience: "20 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1556157382-97dee2dcb34e?auto=format&fit=crop&q=80&w=600",
    specialty: "Seismic-resistant structures and deep-foundation engineering."
  },
  {
    id: 14,
    name: "Anita Iyer",
    role: "Project Manager",
    category: "Engineering",
    rating: 4.9,
    experience: "12 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    specialty: "Site coordination, safety audits, and timeline management."
  },
  {
    id: 15,
    name: "Arjun Reddy",
    role: "Site Surveyor",
    category: "Engineering",
    rating: 4.7,
    experience: "8 Years",
    verified: true,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
    specialty: "Topographical surveying and GPS site marking."
  }
];
