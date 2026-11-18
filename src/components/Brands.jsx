import useReveal from '../hooks/useReveal.js';
import SplitText from './SplitText.jsx';
import LogoCard from './LogoCard.jsx';
import { brands } from '../data/content.js';
import styles from './Brands.module.css';

export default function Brands() {
  const ref = useReveal();
  return (
    <section id="brands" className={`section ${styles.brands}`} aria-labelledby="brands-title">
      <div ref={ref} className="container reveal">
        <p className="eyebrow">03 / Collaborations</p>
        <h2 id="brands-title" className={`display ${styles.title}`}><SplitText lines={['SELECTED', 'COLLABORATIONS']} /></h2>
        <p className={styles.note}>The brands and organisations behind the work above, shown with their own logos. Relationships are labelled only where they are confirmed.</p>
        <ul className={styles.grid}>
          {brands.map((b) => <li key={b.file}><LogoCard brand={b} /></li>)}
          <li className={styles.more}>
            <a href="#work" className={styles.moreLink}><span>See the work</span><b className="display">All projects</b><i aria-hidden="true">→</i></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
