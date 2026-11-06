// Site-wide settings. Anything left empty is hidden on the live site.
export const site = {
  name: 'Kingsley Adio',
  monogram: 'KA.',
  role: 'Graphic Designer / Visual Creative',
  location: 'Lagos, Nigeria',
  email: 'kingsleyadio0e@gmail.com',
  cv: '/Kingsley_Adio_Modern_CV.pdf',
  url: 'https://kingsley-adio.vercel.app',
  links: {
    linkedin: 'https://www.linkedin.com/in/kingsley-adio-b0a64641b',
    x: 'https://x.com/yasuk_189',
    behance: '', // add your Behance URL if you have one
    instagram: '', // add your Instagram URL if you have one
  },
};

export const mailto = (subject = 'Project enquiry') =>
  site.email ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : '#contact';

export const socialLinks = () =>
  [
    ['LinkedIn', site.links.linkedin],
    ['X', site.links.x],
    ['Behance', site.links.behance],
    ['Instagram', site.links.instagram],
  ].filter(([, url]) => url);
