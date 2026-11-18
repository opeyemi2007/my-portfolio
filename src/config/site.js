// Site-wide settings. Anything left empty is hidden on the live site.
export const site = {
  name: 'Kingsley Adio',
  monogram: 'KA.',
  role: 'Graphic Designer / Visual Creative',
  location: 'Lagos, Nigeria',
  email: 'kingsleyadio0e@gmail.com',
  cv: '/files/kingsley-adio-graphic-design-cv.pdf',
  url: 'https://kingsley-adio.vercel.app',
  links: {
    linkedin: 'https://www.linkedin.com/in/kingsley-adio-b0a64641b/',
    x: 'https://x.com/yasuk_189',
    github: 'https://github.com/opeyemi2007',
    behance: 'https://www.behance.net/opeyemiadio',
    dribbble: 'https://dribbble.com/king_adio',
    instagram: '',
  },
};

export const mailto = (subject = 'Project enquiry') =>
  site.email ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : '#contact';

export const socialLinks = () =>
  [
    ['LinkedIn', site.links.linkedin],
    ['Behance', site.links.behance],
    ['Dribbble', site.links.dribbble],
    ['X', site.links.x],
    ['GitHub', site.links.github],
    ['Instagram', site.links.instagram],
  ].filter(([, url]) => url);
