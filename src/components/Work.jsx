import { useMemo, useState } from 'react';
import { categories, projects } from '../data/projects.js';
import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import ProjectCard from './ProjectCard.jsx';
import styles from './Work.module.css';

export default function Work() {
  const [cat, setCat] = useState('All');
  const head = useReveal();
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);
  return (
    <section id="work" className={`section ${styles.work}`} aria-labelledby="work-title">
      <div className="container">
        <header ref={head} className={`reveal ${styles.head}`}>
          <p className="eyebrow">02 / Selected work</p>
          <h2 id="work-title" className={`display ${styles.title}`}>
            <SplitText lines={['SELECTED', 'WORK']} />
          </h2>
          <p className={styles.count} aria-live="polite">{String(list.length).padStart(2, '0')} projects</p>
        </header>
        <div role="group" aria-label="Filter projects by category" className={styles.filters}>
          {categories.map((c) => (
            <button key={c} type="button" className={styles.chip} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className={styles.empty}>No projects in this category yet.</p>
        ) : (
          <ul className={styles.grid}>
            {list.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </ul>
        )}
      </div>
    </section>
  );
}
