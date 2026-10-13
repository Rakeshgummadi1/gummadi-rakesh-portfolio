import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type TypingTextProps = {
  phrases: readonly string[];
};

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

export function TypingText({ phrases }: TypingTextProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases[index % phrases.length] ?? '';

  useEffect(() => {
    if (reduceMotion) {
      const id = window.setTimeout(() => setIndex((i) => i + 1), HOLD_MS * 2);
      return () => window.clearTimeout(id);
    }

    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === phrase.length) delay = HOLD_MS;

    const id = window.setTimeout(() => {
      if (!deleting && length === phrase.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [deleting, index, length, phrase, reduceMotion]);

  const visible = reduceMotion ? phrase : phrase.slice(0, length);

  return (
    <span className="typing">
      <span className="sr-only">{phrases.join(', ')}</span>
      <span className="typing__text" aria-hidden="true">
        {visible}
      </span>
      <span className="typing__caret" aria-hidden="true" />
    </span>
  );
}
