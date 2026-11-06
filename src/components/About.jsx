import { site } from '../config/site.js';
import useReveal from '../hooks/useReveal.js';
import styles from './About.module.css';

const skills = ['Brand identity and visual design', 'Social media design', 'Advertising and promotional graphics', 'Creative campaign design'];
const tools = ['CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'];
const experience = ['Independent designer, SIMP.DESIGNS (2020 to present)', 'Graphic designer, Classic Makeup', 'Volunteer brand designer, UTAC', 'Self-initiated concept work'];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div ref={ref} className={`container reveal ${styles.wrap}`}>
        <div className={styles.lead}>
          <p className={styles.num}>03</p>
          <h2 id="about-title" className={styles.title}>Designing with intention.</h2>
          <figure className={styles.photo}>
            <img src="/images/kingsley.webp" alt="Portrait of Kingsley Adio" width="1000" height="1000" loading="lazy" decoding="async" />
          </figure>
        </div>
        <div className={styles.body}>
          <p className={styles.bio}>
            I&rsquo;m Kingsley Adio, a graphic designer who enjoys translating ideas into thoughtful visual communication. I create graphics for brands, organizations, and creative projects, from identities to campaign visuals. I have 5+ years of experience and work from {site.location}.
          </p>
          {site.cv && <a href={site.cv} download className={styles.cv}>Download CV (PDF)</a>}
          <div className={styles.cols}>
            <div>
              <h3 className={styles.h3}>Philosophy</h3>
              <p>Good design is clear before it is clever. Every choice of type, colour, and layout should help the message land.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Approach</h3>
              <p>I start with the brief and the audience, explore a few directions, then refine the strongest one until the details hold up.</p>
            </div>
          </div>
          <div className={styles.lists}>
            <div>
              <h3 className={styles.h3}>Skills</h3>
              <ul>{skills.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className={styles.h3}>Tools</h3>
              <ul>{tools.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className={styles.h3}>Experience</h3>
              <ul>{experience.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
