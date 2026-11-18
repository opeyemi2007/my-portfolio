// Splits text into masked lines/characters for staggered reveal. Triggered by an ancestor
// carrying the "on", "in" or "sp-on" class (see index.css). Screen readers get the plain string.
export default function SplitText({ lines, as: Tag = 'span', className = '', start = 0 }) {
  const arr = Array.isArray(lines) ? lines : [lines];
  let n = start;
  return (
    <Tag className={className} aria-label={arr.join(' ')}>
      {arr.map((line) => (
        <span className="sp-line" key={line} aria-hidden="true">
          {[...line].map((c, i) => (
            <span className="sp-char" style={{ '--i': n++ }} key={i}>{c === ' ' ? '\u00A0' : c}</span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
