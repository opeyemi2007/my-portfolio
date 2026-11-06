import useReveal from '../hooks/useReveal.js';
import styles from './Process.module.css';

const steps = [
  ['Discover', 'Understand the brief, audience, goals, and requirements.'],
  ['Explore', 'Research, develop concepts, and explore visual directions.'],
  ['Design', 'Refine the selected direction into effective visual assets.'],
  ['Deliver', 'Prepare final files and organize the deliverables for use.'],
];

export default function Process() {
  const ref = useReveal();
  return (
    <section id="process" className={`section ${styles.section}`} aria-labelledby="process-title">
      <div ref={ref} className="container reveal">
        <p className={styles.num}>05</p>
        <h2 id="process-title" className={styles.title}>Creative process</h2>
        <ol className={styles.steps}>
          {steps.map(([name, text], i) => (
            <li key={name} className={styles.step}>
              <span className={styles.big} aria-hidden="true">0{i + 1}</span>
              <h3 className={styles.name}><span className="sr">Step {i + 1}: </span>{name}</h3>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
