import { site, socialLinks } from '../config/site.js';
import useReveal from '../hooks/useReveal.js';
import styles from './Contact.module.css';

const hint = import.meta.env.DEV;

export default function Contact() {
  const ref = useReveal();
  const socials = socialLinks();
  const missing = [!site.email && 'email', !site.links.linkedin && 'LinkedIn'].filter(Boolean);
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div ref={ref} className="container reveal">
        <p className={styles.num}>06</p>
        <h2 id="contact-title" className={styles.title}>Have an idea? Let&rsquo;s make it stand out.</h2>
        <div className={styles.links}>
          {site.email && (
            <a href={`mailto:${site.email}?subject=Project%20enquiry`} className={styles.email}>{site.email}</a>
          )}
          {site.cv && (
            <a href={site.cv} download className={styles.social}>Download CV<span className="sr"> (PDF)</span></a>
          )}
          {socials.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={styles.social}>
              {label}<span className="sr"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        {hint && missing.length > 0 && (
          <p className={styles.hint}>Dev note: add your {missing.join(', ')} in src/config/site.js. This note is hidden in production.</p>
        )}
      </div>
    </section>
  );
}
