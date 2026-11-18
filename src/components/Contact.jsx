import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import { site, socialLinks } from '../config/site.js';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div ref={ref} className="container reveal">
        <p className="eyebrow">08 / Contact</p>
        <h2 id="contact-title" className={`display ${styles.title}`}>
          <SplitText lines={['HAVE AN IDEA?', "LET'S MAKE IT", 'STAND OUT.']} />
        </h2>
        <a href={`mailto:${site.email}?subject=Project%20enquiry`} className={styles.email}>{site.email}<span aria-hidden="true">↗</span></a>
        <ul className={styles.links}>
          {socialLinks().map(([label, url]) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true">↗</span><span className="sr"> (opens in a new tab)</span></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
