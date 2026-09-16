export const stindicoSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://stindico.com/#organization',
      name: 'Stindico',
      url: 'https://stindico.com/',
      telephone: '+919158616699',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot no -12 Dhairya Akash Residency, Morewadi',
        addressLocality: 'Kolhapur',
        addressRegion: 'Maharashtra',
        postalCode: '416013',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.linkedin.com/in/stindico-trade-with-trust-768baa406',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://stindico.com/#localbusiness',
      name: 'Stindico',
      url: 'https://stindico.com/',
      telephone: '+919158616699',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot no -12 Dhairya Akash Residency, Morewadi',
        addressLocality: 'Kolhapur',
        addressRegion: 'Maharashtra',
        postalCode: '416013',
        addressCountry: 'IN',
      },
    },
  ],
};