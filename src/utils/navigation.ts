// Navigation links
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Services', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

// Social links
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://www.instagram.com/stindico.in?igsh=ZzdsNHpzdG82Mmpj',
  github: 'https://github.com/abhishekshewale9992/STINDICO',
  google: 'https://www.linkedin.com/in/stindico-trade-with-trust-768baa406',
  slack: 'https://www.stindico.com',
};

// Footer links
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Tools & Equipment', url: '/products' },
      { name: 'Construction Services', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};