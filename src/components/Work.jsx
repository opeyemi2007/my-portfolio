import { useState } from 'react';
import { projects, categories } from '../data/projects.js';
import useReveal from '../hooks/useReveal.js';
import ProjectCard from './ProjectCard.jsx';
import styles from './Work.module.css';

export default function Work() {
  const [filter, setFilter] = useState('All');
  const ref = useReveal();
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <div ref={ref} className={`reveal ${styles.head}`}>
          <p className={styles.num}>02</p>
          <h2 id="work-title" className={styles.title}>Selected work</h2>
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button key={c} type="button" className={styles.chip} aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="sr" aria-live="polite">{shown.length} project{shown.length === 1 ? '' : 's'} shown</p>

        {shown.length ? (
          <ul className={styles.grid} key={filter}>
            {shown.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </ul>
        ) : (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
