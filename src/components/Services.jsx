import useReveal from '../hooks/useReveal.js';
import styles from './Services.module.css';

const services = [
  ['Brand Identity Design', 'Logos, colour, typography, and guidelines that give a business a recognisable, consistent look.'],
  ['Social Media Design', 'Posts, carousels, and templates that keep a brand coherent and easy to spot in the feed.'],
  ['Advertising and Promotional Graphics', 'Flyers, banners, and ad creatives built to communicate an offer quickly and clearly.'],
  ['Creative Campaign Design', 'A single idea carried across formats so a launch or promotion feels unified.'],
];

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div ref={ref} className="container reveal">
        <p className={styles.num}>04</p>
        <h2 id="services-title" className={styles.title}>Services</h2>
        <ol className={styles.list}>
          {services.map(([name, text], i) => (
            <li key={name} className={styles.row}>
              <span className={styles.idx}>0{i + 1}</span>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
