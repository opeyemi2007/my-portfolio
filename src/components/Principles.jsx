import useReveal from '../hooks/useReveal.js';
import styles from './Principles.module.css';

// Shown instead of testimonials. Add a Testimonials section only when you have real, approved quotes.
const items = [
  ['Clarity first', 'A design should be understood in a glance, then rewarded on a second look.'],
  ['Type does the talking', 'Strong typography carries a message further than decoration does.'],
  ['Details decide quality', 'Spacing, alignment, and consistency are what make work feel finished.'],
];

export default function Principles() {
  const ref = useReveal();
  return (
    <section id="principles" className="section" aria-labelledby="principles-title">
      <div ref={ref} className="container reveal">
        <h2 id="principles-title" className={styles.title}>Creative principles</h2>
        <ul className={styles.list}>
          {items.map(([t, p]) => (
            <li key={t} className={styles.item}>
              <h3 className={styles.h3}>{t}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
