import ogImageSrc from '@images/social.png';
import coreLogo from '@images/logo-coreteam.jpg';

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

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
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