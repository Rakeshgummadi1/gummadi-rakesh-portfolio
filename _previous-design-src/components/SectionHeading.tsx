import type { ReactNode } from 'react';

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  aside?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, highlight, aside }: SectionHeadingProps) {
  return (
    <header className={`section-heading ${aside ? 'section-heading--row' : ''}`.trim()}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>
          {title}
          <br />
          <span className="gradient-text">{highlight}</span>
        </h2>
      </div>
      {aside ? <p className="section-heading__aside">{aside}</p> : null}
    </header>
  );
}
