import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { carouselTechs, techLogos, type CarouselTech } from '../data/technologies';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const COUNT = carouselTechs.length;
const MAX_DEPTH = 4;
const AUTOPLAY_MS = 3000;
/** Horizontal finger travel that rotates the carousel by one bubble */
const SWIPE_STEP_PX = 56;

function wrap(index: number) {
  return ((index % COUNT) + COUNT) % COUNT;
}

function signedOffset(index: number, active: number) {
  let offset = (index - active) % COUNT;
  if (offset > COUNT / 2) offset -= COUNT;
  if (offset < -COUNT / 2) offset += COUNT;
  return offset;
}

type TechCarouselProps = {
  /** Receives the centred tech while its usage details should be shown, otherwise `null`. */
  onDetailChange?: (tech: CarouselTech | null) => void;
};

export function TechCarousel({ onDetailChange }: TechCarouselProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState<number>(carouselTechs.indexOf('Java'));
  const [mouseInside, setMouseInside] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [pinned, setPinned] = useState(false);
  const pauseUntil = useRef(0);
  const lastPointer = useRef('mouse');
  const swipe = useRef<{ id: number; startX: number; steps: number } | null>(null);
  const swiped = useRef(false);

  const showDetail = hoverIndex === active || focusIndex === active || pinned;
  const detailTech = showDetail ? carouselTechs[active] : null;
  const paused = mouseInside || focusIndex !== null || pinned;

  useEffect(() => {
    onDetailChange?.(detailTech);
  }, [detailTech, onDetailChange]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      setActive((current) => wrap(current + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, paused]);

  const holdAutoplay = () => {
    pauseUntil.current = Date.now() + 4000;
  };

  const select = (index: number) => {
    holdAutoplay();
    setActive(wrap(index));
  };

  const onStagePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    lastPointer.current = event.pointerType;
    swiped.current = false;
    if (event.pointerType === 'mouse') return;
    swipe.current = { id: event.pointerId, startX: event.clientX, steps: 0 };
  };

  const onStagePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const gesture = swipe.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    const steps = Math.trunc((gesture.startX - event.clientX) / SWIPE_STEP_PX);
    if (steps === gesture.steps) return;
    const delta = steps - gesture.steps;
    gesture.steps = steps;
    swiped.current = true;
    holdAutoplay();
    setActive((current) => wrap(current + delta));
  };

  const endSwipe = (event: PointerEvent<HTMLDivElement>) => {
    if (swipe.current?.id === event.pointerId) swipe.current = null;
  };

  const onBubbleClick = (index: number, isActive: boolean) => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    if (!isActive) {
      select(index);
    } else if (lastPointer.current !== 'mouse') {
      setPinned((value) => !value);
    }
  };

  const opposite = (active + Math.floor(COUNT / 2)) % COUNT;

  return (
    <div
      className="tech-carousel"
      onPointerEnter={(event) => event.pointerType === 'mouse' && setMouseInside(true)}
      onPointerLeave={(event) => event.pointerType === 'mouse' && setMouseInside(false)}
    >
      <div className="tech-carousel__viewport">
        <div
          className="tech-carousel__stage"
          onPointerDown={onStagePointerDown}
          onPointerMove={onStagePointerMove}
          onPointerUp={endSwipe}
          onPointerCancel={endSwipe}
        >
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
                onClick={() => onBubbleClick(index, offset === 0)}
                onPointerEnter={(event) => event.pointerType === 'mouse' && setHoverIndex(index)}
                onPointerLeave={() => setHoverIndex((current) => (current === index ? null : current))}
                onFocus={(event) => event.target.matches(':focus-visible') && setFocusIndex(index)}
                onBlur={() => setFocusIndex(null)}
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
