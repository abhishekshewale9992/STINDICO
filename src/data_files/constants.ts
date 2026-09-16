import { stindicoSchema } from './seoSchema';

export const SITE = {
  title: 'STINDICO',
  tagline: 'Trade with Trust',
  description:
    'STINDICO supplies Biomass Briquettes, Silica Sand, Quartz Products, Industrial Machines and Bulk Industrial Raw Materials across India.',
  description_short:
    'Industrial Raw Material Supplier Across India.',
  url: 'https://stindico.com/',
  author: 'STINDICO',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: stindicoSchema,
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: 'STINDICO | Trade with Trust',
  description:
    'Leading supplier of Biomass Briquettes, Silica Sand, Quartz Products, Industrial Machines and Bulk Industrial Materials.',
  image: '/logo1.jpeg',
};

export const partnersData = [
  {
    name: 'Warana',
    img: '/warana.png',
    href: '#',
  },
  {
    name: 'Cipla',
    img: '/cipla.png',
    href: '#',
  },
  {
    name: 'Aditya Birla',
    img: '/aditya-birla.png',
    href: '#',
  },
];