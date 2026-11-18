import { site, socialLinks } from '../config/site.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrap}`}>
        <p className={styles.name}>{site.name}<span>{site.role}</span></p>
        <nav aria-label="Social" className={styles.nav}>
          {socialLinks().map(([l, u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer">{l}<span className="sr"> (opens in a new tab)</span></a>)}
        </nav>
        <a href="#home" className={styles.top}>Back to top <span aria-hidden="true">↑</span></a>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
      <p className={styles.mark} aria-hidden="true">KA.</p>
    </footer>
  );
}
