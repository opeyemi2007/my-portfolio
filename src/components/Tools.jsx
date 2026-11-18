import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import { tools, skills } from '../data/content.js';
import styles from './Tools.module.css';

export default function Tools() {
  const ref = useReveal();
  return (
    <section id="tools" className={`section ${styles.tools}`} aria-labelledby="tools-title">
      <div ref={ref} className="container reveal">
        <p className="eyebrow">06 / Tools &amp; skills</p>
        <h2 id="tools-title" className={`display ${styles.title}`}><SplitText lines={['TOOLS OF', 'THE TRADE']} /></h2>
        <ul className={styles.icons}>
          {tools.map((t, i) => (
            <li key={t.file} className={styles.tool} style={{ '--i': i }}>
              <img src={`/images/tools/${t.file}.webp`} alt="" width="380" height="380" loading="lazy" decoding="async" />
              <b>{t.name}</b>
              {t.level ? <em>{t.level}</em> : null}
            </li>
          ))}
        </ul>
        <ul className={styles.skills} aria-label="Skills">
          {skills.map((s) => <li key={s} className="display">{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
