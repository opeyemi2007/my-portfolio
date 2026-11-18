import { projects, findProject, typeLabels, typeShort } from '../data/projects.js';
import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import CarouselViewer from './CarouselViewer.jsx';
import styles from './ProjectDetail.module.css';

const FIELDS = [
  ['overview', 'Overview'], ['brief', 'Brief / problem'], ['role', 'My role'], ['direction', 'Creative direction'],
  ['process', 'Design process'], ['typography', 'Typography'], ['colour', 'Colour'],
];

function titleLines(title) {
  const t = title.toUpperCase();
  if (t.length <= 10 || !t.includes(' ')) return [t];
  const words = t.split(' '); const out = []; let cur = '';
  words.forEach((w) => { if ((cur + ' ' + w).trim().length > 11 && cur) { out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); });
  out.push(cur); return out;
}

function GalleryImage({ img, kind, col, mt }) {
  const ref = useReveal();
  return (
    <figure ref={ref} className={`reveal ${styles.fig} ${styles[kind]}`} style={{ '--c': col, '--mt': mt }}>
      <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" decoding="async" />
    </figure>
  );
}

function Gallery({ images }) {
  const big = images.length <= 12;
  let wide = 0, por = 0;
  const pat = [4, 4, 4, 3, 3, 3, 3];
  return (
    <section aria-label="Design images" className={`container ${styles.gallery}`}>
      {images.map((img, k) => {
        const r = img.w / img.h;
        let kind = 'por', col, mt = '0rem';
        if (r > 1.3) { kind = 'wide'; const n = wide++ % 3; col = n === 0 ? '1 / -1' : n === 1 ? '4 / -1' : '1 / 11'; mt = '2rem'; }
        else if (r > 0.85) { kind = 'sq'; col = 'span 6'; mt = k % 2 ? '4rem' : '0rem'; }
        else if (big) { col = 'span 6'; mt = por++ % 2 ? '6rem' : '0rem'; }
        else { const s = pat[por % pat.length]; col = `span ${s}`; mt = `${[0, 3, 1.5][por % 3]}rem`; por++; }
        return <GalleryImage key={img.src} img={img} kind={big && kind === 'por' ? 'porBig' : kind} col={col} mt={mt} />;
      })}
    </section>
  );
}

export default function ProjectDetail({ slug }) {
  const project = findProject(slug);
  const hero = useReveal();
  if (!project) {
    return (
      <main id="main" className={`container ${styles.missing}`}>
        <h1 className={`display ${styles.missingTitle}`}>Project not found</h1>
        <p>That project doesn&rsquo;t exist or has been removed.</p>
        <a href="#work" className="btn btn-blue">Back to all work</a>
      </main>
    );
  }
  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];
  const related = [...projects.filter((p) => p !== project && p.category === project.category), ...projects.filter((p) => p !== project && p.category !== project.category)].slice(0, 3);
  const isCarousel = project.kind === 'carousel';
  const slideCount = isCarousel ? project.slides.length : 0;
  const lines = titleLines(project.title);
  const longest = Math.max(...lines.map((l) => l.length));
  const tfs = `clamp(2.2rem, ${Math.min(9, 60 / longest).toFixed(1)}vw, 8rem)`;
  const fields = FIELDS.filter(([k]) => project[k]);
  const lead = project.overview;
  const rest = fields.filter(([k]) => k !== 'overview');
  return (
    <main id="main" className={styles.page}>
      <section ref={hero} className={styles.hero} aria-labelledby="case-title">
        <div className="container">
          <a href="#work" className={styles.back}><span aria-hidden="true">←</span> All projects</a>
          <p className={styles.meta}>
            {isCarousel && <span className={styles.type}>Carousel design</span>}
            {isCarousel && <span>{String(slideCount).padStart(2, '0')} slides</span>}
            <span>{project.category}</span>{project.year ? <span>{project.year}</span> : null}
            <span className={`${styles.type} ${project.type === 'concept' ? styles.concept : ''}`}>{typeLabels[project.type]}</span>
          </p>
          <h1 id="case-title" className={`display ${styles.title}`} style={{ '--tfs': tfs }}>
            <SplitText lines={lines} />
          </h1>
        </div>
        {isCarousel ? (
          <div className={`container ${styles.viewerWrap}`}><CarouselViewer slides={project.slides} title={project.title} /></div>
        ) : (
          <figure className={`container ${styles.cover}`}>
            <img src={project.cover} alt={`${project.title} cover artwork`} width="1600" height="1200" decoding="async" fetchpriority="high" />
          </figure>
        )}
      </section>

      <section className={`container ${styles.info}`} aria-label="Project information">
        {lead && <p className={styles.lead}>{lead}</p>}
        {(rest.length > 0 || project.deliverables.length > 0) && (
          <div className={styles.fields}>
            {rest.map(([k, label]) => (
              <div key={k} className={styles.field}><h2 className="eyebrow">{label}</h2><p>{project[k]}</p></div>
            ))}
            {project.deliverables.length > 0 && (
              <div className={styles.field}>
                <h2 className="eyebrow">Deliverables</h2>
                <ul className={styles.deliv}>{project.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            )}
            <div className={styles.field}><h2 className="eyebrow">Type</h2><p>{typeLabels[project.type]}</p></div>
          </div>
        )}
      </section>

      {!isCarousel && <Gallery images={project.images} />}

      <section className={`container ${styles.related}`} aria-labelledby="related-title">
        <h2 id="related-title" className={`display ${styles.relTitle}`}>More work</h2>
        <ul className={styles.relGrid}>
          {related.map((p) => (
            <li key={p.slug}>
              <a href={`#/work/${p.slug}`} className={styles.relCard}>
                <span className={styles.relMedia}><img src={p.cover} alt="" width="1600" height="1200" loading="lazy" decoding="async" /></span>
                <span className={`display ${styles.relName}`}>{p.title}</span>
                <span className={styles.relInfo}>{p.category} · {typeShort[p.type]}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={`#/work/${next.slug}`} className={styles.next}>
          <span>Next project</span>
          <b className="display">{next.title}</b>
          <i aria-hidden="true">→</i>
        </a>
      </section>
    </main>
  );
}
