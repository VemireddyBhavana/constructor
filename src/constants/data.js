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
    title: "Property Sales",
    description: "Looking to buy or sell a property? Look no further. Real Estate offers a wide range of properties for sale, matching you with your dream home or investment. Trust our experienced team to guide you through the entire process.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    title: "Property Rentals",
    description: "Finding the perfect rental property can be a challenge. Real Estate makes it easy. Choose from our extensive selection of rental properties, whether you're looking for a cozy apartment or a spacious house. Let us help you find your ideal rental.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    title: "Property Management",
    description: "Finding the perfect property to buy is a significant decision. Real Estate understands this and offers a comprehensive list of properties for sale. Rely on our expertise and personalized service to discover your dream property and make a sound investment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "04",
    title: "Lucrative Investments",
    description: "In search of a rental property? Real Estate has you covered. Our vast portfolio of properties for rent caters to all your needs and preferences. With our assistance, you can find the perfect rental space in no time. Let's get started.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000"
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
