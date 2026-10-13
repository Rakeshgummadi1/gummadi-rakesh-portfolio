import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type CountUpProps = {
  value: string;
  duration?: number;
};

export function CountUp({ value, duration = 1400 }: CountUpProps) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';

  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(target === null || reduceMotion ? target : 0);

  useEffect(() => {
    const node = ref.current;
    if (target === null || reduceMotion || !node) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, reduceMotion, duration]);

  if (target === null) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
