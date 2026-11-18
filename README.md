# KA. portfolio (Electric Editorial)

React 19 + Vite + CSS Modules. Framer Motion (LazyMotion) for menu, carousel and scroll parallax.

    npm install
    npm run dev        # local preview
    npm run build      # production build in dist/ (deploy dist/ to Vercel)

## Where things live
- `src/data/projects.js`   all projects. Carousels use `kind: 'carousel'` and `slides: []` (ordered 1..n).
- `src/data/content.js`    collaborations (logos), services, tools, skills, experience.
- `src/config/site.js`     email, social links, CV path.
- `public/images/projects/<slug>/` optimised artwork. `public/files/` CV PDF.

## Needs your review (nothing below was guessed)
- Marked `CONFIRM` in projects.js: MOUNT, Guinea-Bissau posters, ALPHAFIT, Burger Box, eoluwaiye (client or concept?).
- Folders held back from the site:
  - CLASSIC SKINCARE / carousel 3: slide 2 is a 25000x30000 px file that could not be decoded. Export it at about 1080x1350 and replace it.
  - UTAC / carousels: slides are named "UTAC CONNECT 5.1" and "5.2", not plain numbers. Rename to 1.png, 2.png (and say whether "UTAC CONNECT 5.png" is slide 1).
- Voicely carousel 3: "2 (2).png" was excluded as a duplicate slide number, and there is no slide 5.
- Folders are named "carousel 1", "carousels" etc., not exactly "carousel"; they were treated as carousels.
- Emmy Classic: no logo file supplied, so it is not shown.
- Classic Skincare is not assumed to be the same organisation as Classic Makeup; only Classic Makeup carries the "Graphic designer" label.
- Relationship labels are shown only where your CV supports them (Classic Makeup, UTAC volunteer, Sunburst/ZAZU concepts).
- The blue "P" glossy icon was not used (it is not the Photoshop icon); the supplied Photoshop icon is used.
