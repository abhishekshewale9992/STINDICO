import ogImageSrc from '@images/social.png';
import ogImageSrc from '../public/logo1.jpeg';

export const SITE = {
  title: 'Stindico',
  tagline: 'Top-quality Hardware Tools',
  description:
    'ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.',
  description_short:
    'ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.',
  url: 'https://screwfast.uk',
  author: 'Emil Gulamov',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const SITE = {
  title: 'STINDICO',
  tagline: 'Trade with Trust',
  description:
    'STINDICO supplies Biomass Briquettes, Silica Sand, Quartz Products, Industrial Machines and Bulk Industrial Raw Materials across India.',
  description_short:
    'Industrial Raw Material Supplier Across India.',
  url: 'https://stindico.vercel.app',
  author: 'STINDICO',
};

export const partnersData = [
  {
    name: "Core Team",
    img: "/logo-coreteam.jpg",
    href: "#"
  },
  {
    name: "Client 2",
    img: "/unnamed.png",
    href: "#"
  },
  {
    name: "Cipla",
    img: "/cipla.png",
    href: "#"
  },
  {
  name: "Aditya Birla",
  img: "/aditya-birla.png",  // 👈 extension change important
  href: "#"
}
];