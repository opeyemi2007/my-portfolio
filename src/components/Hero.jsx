import SplitText from './SplitText.jsx';
import Marquee from './Marquee.jsx';
import { site } from '../config/site.js';
import { marquee } from '../data/content.js';
import styles from './Hero.module.css';

export default function Hero({ active }) {
  return (
    <section id="home" className={`${styles.hero} ${active ? 'on' : ''}`} aria-labelledby="hero-title">
      <div className={styles.top}>
        <span>KA. / Beyond the ordinary</span>
        <span>{site.location}</span>
      </div>
      <div className={styles.body}>
        <h1 id="hero-title" className={`display ${styles.title}`} aria-label="Beyond the ordinary.">
          <SplitText lines={['BEYOND']} />
          <SplitText lines={['THE ORDINARY.']} className={styles.line2} start={6} />
        </h1>
        <div className={styles.row}>
          <p className={styles.lead}>
            I&rsquo;m {site.name}, a graphic designer in Lagos. I make brand identities, social campaigns and promotional graphics, and I take each one through to final artwork.
          </p>
          <div className={styles.cta}>
            <a href="#work" className="btn btn-line">View selected work</a>
            <a href={site.cv} download className="btn btn-line">Download CV</a>
          </div>
        </div>
        <a href="#work" className={styles.badge} aria-label="Scroll to selected work">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
            <text><textPath href="#c">SELECTED WORK • SELECTED WORK • </textPath></text>
          </svg>
          <b aria-hidden="true">↓</b>
        </a>
      </div>
      <Marquee items={marquee} className={styles.marq} />
    </section>
  );
}
