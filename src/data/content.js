// Copy and small data sets for the main portfolio sections. Everything here comes from your CV
// and project folders; add or edit freely.

import logos from './logos.json';

// Verified logo files only. `surface` is the display panel each logo reads best on (the logo itself
// is never recoloured, cropped or filtered). `rel` is a factual relationship note, shown only where
// your CV or folders support it; entries without one need your confirmation before one is added.
const rawBrands = [
  { name: 'Classic Makeup', file: 'classic-makeup', slug: 'classic-makeup', surface: 'light', rel: 'Graphic designer' },
  { name: 'Classic Skincare', file: 'classic-skincare', slug: 'classic-skincare', surface: 'light' },
  { name: 'UTAC', file: 'utac', slug: null, surface: 'dark', rel: 'Volunteer brand designer', href: '#/work/utac' },
  { name: 'Voicely', file: 'voicely', slug: 'voicely', surface: 'light' },
  { name: 'KAVO', file: 'kavo', slug: 'kavo', surface: 'dark' },
  { name: 'Monster Autosz', file: 'monster-autosz', slug: 'monster-autosz', surface: 'light' },
  { name: 'Cheepfud', file: 'cheepfud', slug: 'cheepfud', surface: 'light' },
  { name: 'Day to Day', file: 'day-to-day', slug: null, surface: 'light' },
  { name: 'Sunburst', file: 'sunburst', slug: 'sunburst', surface: 'dark', rel: 'Self-initiated concept' },
  { name: 'ZAZU', file: 'zazu', slug: 'zazu', surface: 'light', rel: 'Self-initiated concept' },
  { name: 'eoluwaiye', file: 'eoluwaiye', slug: 'eoluwaiye', surface: 'dark' },
];
export const brands = rawBrands.map((b) => ({ ...b, ...logos[b.file], href: b.href || (b.slug ? `#/work/${b.slug}` : null) }));

export const services = [
  { name: 'Brand identity design', note: 'Logo, colour, type and the system that holds them together.', img: '/images/projects/kavo/01.webp' },
  { name: 'Logo design', note: 'Marks and wordmarks built to work at every size.', img: '/images/projects/eoluwaiye/cover.webp' },
  { name: 'Social media design', note: 'Posts, carousels and campaign sets that look like one brand.', img: '/images/projects/utac/cover.webp' },
  { name: 'Campaign graphics', note: 'Posters, ads and launch visuals built around one idea.', img: '/images/projects/classic-makeup/cover.webp' },
  { name: 'Marketing & promotional materials', note: 'Flyers, ads and print-ready promotional pieces.', img: '/images/projects/monster-autosz/cover.webp' },
  { name: 'Visual direction', note: 'A clear look and feel to guide everything that follows.', img: '/images/projects/mount/cover.webp' },
  { name: 'Brand collateral', note: 'Cards, packaging, signage and merchandise.', img: '/images/projects/sunburst/cover.webp' },
];

export const tools = [
  { name: 'Adobe Photoshop', file: 'photoshop' },
  { name: 'CorelDRAW', file: 'coreldraw' },
  { name: 'Adobe Illustrator', file: 'illustrator', level: 'Intermediate' },
  { name: 'Figma', file: 'figma' },
  { name: 'Canva', file: 'canva' },
];

export const skills = [
  'Brand identity', 'Logo design', 'Visual communication', 'Brand concepts', 'Marketing & advertising design',
  'Social media design', 'Typography', 'Colour theory', 'Campaign design', 'Creative concept development',
];

export const interests = ['Brand strategy', 'Visual identity systems', 'Creative direction', 'Logo development', 'Visual storytelling', 'Digital design'];

export const experience = [
  { when: '2020 to present', role: 'Independent graphic designer', where: 'SIMP.DESIGNS' },
  { when: 'Previous', role: 'Graphic designer', where: 'Classic Makeup' },
  { when: 'Volunteer', role: 'Brand designer', where: 'Umbrella for the African Child (UTAC)' },
];

export const marquee = ['Brand identity', 'Logo design', 'Social media design', 'Campaign graphics', 'Promotional materials', 'Visual direction', 'Brand collateral'];
