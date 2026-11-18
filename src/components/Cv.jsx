import useReveal from '../hooks/useReveal.js';
import { site } from '../config/site.js';
import styles from './Cv.module.css';

export default function Cv() {
  const ref = useReveal();
  return (
    <section id="cv" className={`section ${styles.cv}`} aria-labelledby="cv-title">
      <div ref={ref} className={`container reveal ${styles.wrap}`}>
        <p className={styles.big} aria-hidden="true">CV</p>
        <div className={styles.text}>
          <p className="eyebrow">07 / Curriculum vitae</p>
          <h2 id="cv-title" className={`display ${styles.title}`}>Everything<br />on one page.</h2>
          <p className={styles.copy}>Profile, experience, tools and selected projects as a PDF you can save or forward.</p>
          <a href={site.cv} download="Kingsley-Adio-CV.pdf" className="btn btn-blue">Download CV (PDF)</a>
        </div>
      </div>
    </section>
  );
}
