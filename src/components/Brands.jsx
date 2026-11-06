import useReveal from '../hooks/useReveal.js';
import styles from './Brands.module.css';

const brands = [
  ['Cheepfud', 'cheepfud'],
  ['Sunburst', 'sunburst'],
  ['KAVO', 'kavo'],
  ['UTAC', 'utac'],
  ['ZAZU', 'zazu'],
  ['eoluwaiye', 'logo-mark'],
];

export default function Brands() {
  const ref = useReveal();
  return (
    <section className={styles.section} aria-labelledby="brands-title">
      <div ref={ref} className="container reveal">
        <h2 id="brands-title" className={styles.title}>Brands I&rsquo;ve worked with</h2>
        <ul className={styles.grid}>
          {brands.map(([name, file]) => (
            <li key={file} className={styles.tile}>
              <img src={`/images/brands/${file}.webp`} alt={`${name} logo`} width="640" height="420" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
