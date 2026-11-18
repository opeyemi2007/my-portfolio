import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import { site } from '../config/site.js';
import { experience, interests } from '../data/content.js';
import styles from './About.module.css';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div ref={ref} className={`container reveal ${styles.wrap}`}>
        <div className={styles.visual}>
          <span className={styles.vert} aria-hidden="true">About</span>
          <div className={styles.plate} />
          <img className={styles.photo} src="/images/about/portrait.webp" alt="Portrait of Kingsley Adio, arms crossed" width="700" height="752" loading="lazy" decoding="async" />
          <p className={styles.sticker} aria-hidden="true">Lagos<br />Nigeria</p>
        </div>
        <div className={styles.text}>
          <p className="eyebrow">04 / About</p>
          <h2 id="about-title" className={`display ${styles.title}`}><SplitText lines={['DESIGN WITH', 'INTENTION.']} /></h2>
          <p className={styles.lead}>
            I&rsquo;m {site.name}, a graphic designer based in {site.location} with 5+ years of experience in visual communication, marketing graphics and brand-focused design. I turn briefs into logos, identities and campaign visuals, and I follow them through to final artwork.
          </p>
          <div className={styles.cols}>
            <div><h3 className="eyebrow">Approach</h3><p>I start with the brief and the audience, explore a few directions, then refine the strongest one until the details hold up.</p></div>
            <div><h3 className="eyebrow">Philosophy</h3><p>Good design is clear before it is clever. Type, colour and layout should help the message land.</p></div>
          </div>
          <h3 className={`eyebrow ${styles.h3}`}>Experience</h3>
          <ul className={styles.exp}>
            {experience.map((e) => (
              <li key={e.role + e.where}><span>{e.when}</span><b>{e.role}</b><em>{e.where}</em></li>
            ))}
          </ul>
          <h3 className={`eyebrow ${styles.h3}`}>Areas of interest</h3>
          <ul className={styles.tags}>{interests.map((t) => <li key={t}>{t}</li>)}</ul>
          <a href={site.cv} download className={`btn btn-blue ${styles.btn}`}>Download CV</a>
        </div>
      </div>
    </section>
  );
}
