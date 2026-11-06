import { projects, findProject } from '../data/projects.js';
import PlaceholderArt from './PlaceholderArt.jsx';
import styles from './ProjectDetail.module.css';

function Field({ label, value }) {
  if (!value) return null;
  return (
    <div className={styles.field}>
      <h2 className={styles.label}>{label}</h2>
      <p>{value}</p>
    </div>
  );
}

export default function ProjectDetail({ slug }) {
  const project = findProject(slug);

  if (!project) {
    return (
      <main id="main" className={`container ${styles.missing}`}>
        <h1 className={styles.title}>Project not found</h1>
        <p>That project doesn&rsquo;t exist or has been removed.</p>
        <a href="#work" className={styles.back}>Back to all work</a>
      </main>
    );
  }

  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const real = !project.placeholder;
  const gallery = real ? project.images : [];

  return (
    <main id="main" className={styles.page}>
      <div className="container">
        <a href="#work" className={styles.back}>Back to all work</a>
        <header className={styles.head}>
          <p className={styles.cat}>
            {project.category}
            {project.year ? `, ${project.year}` : ''}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.type}>
            {project.type === 'client' ? 'Client or organization work' : 'Self-initiated concept project'}
          </p>
        </header>

        <div className={styles.cover}>
          {real && project.cover ? (
            <img src={project.cover} alt={`${project.title} cover artwork`} decoding="async" />
          ) : (
            <PlaceholderArt hue={project.hue} variant={i} label={`${project.title} placeholder artwork`} />
          )}
        </div>

        <div className={styles.info}>
          <Field label="Overview" value={project.overview} />
          <Field label="Objective / design brief" value={project.brief} />
          <Field label="My role and contribution" value={project.role} />
          <Field label="Creative direction" value={project.direction} />
          {project.deliverables.length > 0 && (
            <div className={styles.field}>
              <h2 className={styles.label}>Final deliverables</h2>
              <ul className={styles.deliv}>{project.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          )}
        </div>

        <section aria-label="Selected design images" className={styles.gallery}>
          {gallery.length
            ? gallery.map((img) => <img key={img.src} src={img.src} alt={img.alt} loading="lazy" decoding="async" />)
            : [1, 2].map((n) => (
                <div key={n} className={styles.ph}><PlaceholderArt hue={project.hue + n * 12} variant={i + n} label={`Placeholder design image ${n}`} /></div>
              ))}
        </section>

        <nav className={styles.pager} aria-label="More projects">
          <a href={`#/work/${prev.slug}`}><span>Previous</span>{prev.title}</a>
          <a href={`#/work/${next.slug}`} className={styles.nextLink}><span>Next</span>{next.title}</a>
        </nav>
      </div>
    </main>
  );
}
