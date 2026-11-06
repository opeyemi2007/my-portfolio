import { mailto } from '../config/site.js';
import styles from './Hero.module.css';

const tools = ['CorelDRAW', 'Adobe Photoshop', 'Figma', 'Canva'];

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Graphic designer / Visual creative</p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.line}><span>I turn ideas</span></span>
            <span className={styles.line}><span>into visual</span></span>
            <span className={styles.line}><span>experiences.</span></span>
          </h1>
          <p className={styles.lead}>
            Creating distinctive brand identities, digital visuals, and campaigns that help ideas stand out.
          </p>
          <div className={styles.actions}>
            <a href="#work" className={styles.primary}>Explore my work</a>
            <a href={mailto()} className={styles.secondary}>Let&rsquo;s work together</a>
          </div>
        </div>

        <figure className={styles.specimen} aria-label="Typographic specimen of the letters Ag with design guide lines">
          <div className={styles.guides} aria-hidden="true">
            <span style={{ top: '18%' }}>ascender</span>
            <span style={{ top: '38%' }}>x-height</span>
            <span style={{ top: '72%' }}>baseline</span>
            <span style={{ top: '90%' }}>descender</span>
          </div>
          <div className={styles.glyph} aria-hidden="true">Ag</div>
          <figcaption className={styles.tools}>
            <span className={styles.toolsLabel}>Tools</span>
            <ul>{tools.map((t) => <li key={t}>{t}</li>)}</ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
