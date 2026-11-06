import { site, socialLinks } from '../config/site.js';
import styles from './Footer.module.css';

const nav = [['Home', '#home'], ['Work', '#work'], ['About', '#about'], ['Contact', '#contact']];

export default function Footer() {
  const socials = socialLinks();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.role}>{site.role}</p>
        </div>
        <nav aria-label="Footer" className={styles.nav}>
          {nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          {socials.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer">{l}<span className="sr"> (opens in a new tab)</span></a>)}
        </nav>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
