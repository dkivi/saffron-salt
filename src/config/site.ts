export const SITE = {
  name: 'Saffron & Salt',
  title: 'Saffron & Salt | Elevated Rustic Dining',
  description: 'Born from a love of seasonal harvests and open-fire cooking, Saffron & Salt brings farm-to-table dining back to its roots.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  twitterHandle: '@saffronsalt',
  socials: {
    twitter: 'https://twitter.com/example',
    instagram: 'https://instagram.com/example',
    linkedin: 'https://www.linkedin.com/company/example',
    dribbble: 'https://dribbble.com/example',
  },
  image: {
    src: '/favicon.svg',
    alt: 'Saffron & Salt logo',
  },
} as const;

export type SiteConfig = typeof SITE;
