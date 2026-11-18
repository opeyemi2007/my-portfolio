import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import { services } from '../data/content.js';
import styles from './Services.module.css';

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" className={`section ${styles.services}`} aria-labelledby="services-title">
      <div ref={ref} className="container reveal">
        <p className={`eyebrow ${styles.eye}`}>05 / Services</p>
        <h2 id="services-title" className={`display ${styles.title}`}><SplitText lines={['WHAT I', 'MAKE']} /></h2>
        <ol className={styles.list}>
          {services.map((s, i) => (
            <li key={s.name} className={styles.row}>
              <span className={styles.n}>0{i + 1}</span>
              <h3 className={`display ${styles.name}`}>{s.name}</h3>
              <p className={styles.note}>{s.note}</p>
              <img className={styles.thumb} src={s.img} alt="" width="1600" height="1200" loading="lazy" decoding="async" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
