import { Sparkles } from 'lucide-react';
import { aiAssistedPoints } from '../data/experience';
import { ScrollReveal } from '../components/ScrollReveal';

export function AIAssisted() {
  return (
    <section className="content-section section-wrap" aria-labelledby="ai-title">
      <ScrollReveal>
        <div className="callout">
          <div className="callout__body">
            <p className="eyebrow">ALWAYS LEARNING</p>
            <h2 id="ai-title">
              Modern development
              <br />
              with AI.
            </h2>
            <p>
              I use Cursor AI and AI-assisted coding as a productivity layer, not a
              replacement for engineering judgment. I still own the architecture,
              correctness, and delivery quality.
            </p>
            <ul className="callout__chips">
              {aiAssistedPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <span className="callout__symbol" aria-hidden="true">
            <Sparkles size={52} />
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
