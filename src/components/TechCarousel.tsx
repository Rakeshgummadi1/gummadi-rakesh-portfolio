import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { carouselTechs, techLogos } from '../data/technologies';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const COUNT = carouselTechs.length;
const MAX_DEPTH = 4;
const AUTOPLAY_MS = 3000;

function signedOffset(index: number, active: number) {
  let offset = (index - active) % COUNT;
  if (offset > COUNT / 2) offset -= COUNT;
  if (offset < -COUNT / 2) offset += COUNT;
  return offset;
}

export function TechCarousel() {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(carouselTechs.indexOf('Java'));
  const [paused, setPaused] = useState(false);
  const pauseUntil = useRef(0);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      setActive((current) => (current + 1) % COUNT);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, paused]);

  const select = (index: number) => {
    pauseUntil.current = Date.now() + 4000;
    setActive(((index % COUNT) + COUNT) % COUNT);
  };

  const opposite = (active + Math.floor(COUNT / 2)) % COUNT;

  return (
    <div
      className="tech-carousel"
      onFocus={(event) => setPaused(event.target.matches(':focus-visible'))}
      onBlur={() => setPaused(false)}
    >
      <div className="tech-carousel__viewport">
        <div className="tech-carousel__stage">
          <div className="tech-carousel__ghosts" aria-hidden="true">
            {carouselTechs.map((name, index) => {
              const back = signedOffset(index, opposite);
              return (
                <span
                  key={name}
                  className="tech-ghost"
                  style={
                    {
                      '--gx': `${-back * 10.5}%`,
                      '--go': Math.abs(back) <= 4 ? 0.5 - Math.abs(back) * 0.08 : 0,
                    } as CSSProperties
                  }
                >
                  {techLogos[name]}
                </span>
              );
            })}
          </div>

          <span className="tech-carousel__pedestal" aria-hidden="true" />

          {carouselTechs.map((name, index) => {
            const offset = signedOffset(index, active);
            const depth = Math.min(Math.abs(offset), MAX_DEPTH + 1);
            return (
              <button
                key={name}
                type="button"
                className={`tech-bubble ${offset === 0 ? 'is-active' : ''}`.trim()}
                data-depth={depth}
                style={{ '--dir': Math.sign(offset) } as CSSProperties}
                onClick={() => select(index)}
                aria-label={`Show ${name}`}
                aria-pressed={offset === 0}
                tabIndex={depth <= 2 ? 0 : -1}
              >
                <span className="tech-bubble__logo" aria-hidden="true">
                  {techLogos[name]}
                </span>
                <span className="tech-bubble__name">{name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {carouselTechs[active]}
      </p>
    </div>
  );
}
