import { useEffect, useState } from 'react';
import {
  Boxes,
  Database,
  Lock,
  MonitorSmartphone,
  MousePointerClick,
  Route,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type Layer = {
  id: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  description: string;
  tech: string[];
};

const layers: Layer[] = [
  {
    id: 'client',
    label: 'Client',
    detail: 'Web / Mobile',
    icon: MonitorSmartphone,
    description:
      'Web (React.js) and mobile (React Native + Expo) apps call the backend over REST, so both stay consistent on the same APIs.',
    tech: ['React.js', 'React Native', 'Expo'],
  },
  {
    id: 'gateway',
    label: 'API Gateway',
    detail: 'Routing & entry point',
    icon: Route,
    description:
      'A single entry point that routes each request to the right service and keeps clients decoupled from the internal service layout.',
    tech: ['REST', 'JSON'],
  },
  {
    id: 'auth',
    label: 'Authentication / Authorization',
    detail: 'Spring Security · RBAC',
    icon: Lock,
    description:
      'Spring Security handles login and role-based access control, for example separate permissions for Individual and Corporate vendor accounts.',
    tech: ['Spring Security', 'RBAC'],
  },
  {
    id: 'services',
    label: 'Microservices',
    detail: 'Spring Boot · OpenFeign',
    icon: Boxes,
    description:
      'Spring Boot services built with Controller, Service, Repository, DTO and Entity layers, talking to each other through OpenFeign.',
    tech: ['Spring Boot', 'OpenFeign', 'Docker'],
  },
  {
    id: 'database',
    label: 'Database',
    detail: 'MySQL · Hibernate / JPA',
    icon: Database,
    description:
      'MySQL accessed through Hibernate and Spring Data JPA, with entity mapping, relationships and transaction handling.',
    tech: ['MySQL', 'Hibernate', 'Spring Data JPA'],
  },
  {
    id: 'events',
    label: 'Kafka → Audit Service',
    detail: 'Event-driven',
    icon: Workflow,
    description:
      'Services publish domain events to Kafka. The Audit Service consumes them and records user activity and application events for monitoring, security and compliance.',
    tech: ['Apache Kafka', 'Audit Logging'],
  },
];

const flowLayers = layers.slice(0, 5);
const eventLayer = layers[5]!;

export function ArchitectureDiagram() {
  const reduceMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState(layers[0]!.id);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay || reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveId((current) => {
        const next = (layers.findIndex((l) => l.id === current) + 1) % layers.length;
        return layers[next]!.id;
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [autoplay, reduceMotion]);

  const select = (id: string) => {
    setAutoplay(false);
    setActiveId(id);
  };

  const active = layers.find((l) => l.id === activeId) ?? layers[0]!;
  const ActiveIcon = active.icon;

  const renderNode = (layer: Layer, extraClass = '') => {
    const Icon = layer.icon;
    const isActive = layer.id === activeId;
    return (
      <button
        type="button"
        className={`architecture__node ${extraClass} ${isActive ? 'is-active' : ''}`.trim()}
        aria-pressed={isActive}
        onClick={() => select(layer.id)}
        onMouseEnter={() => select(layer.id)}
      >
        <Icon size={18} aria-hidden="true" />
        <span>
          <strong>{layer.label}</strong>
          <small>{layer.detail}</small>
        </span>
      </button>
    );
  };

  return (
    <div className="architecture">
      <div>
        <ol className="architecture__flow" aria-label="Request flow">
          {flowLayers.map((layer, index) => (
            <li key={layer.id}>
              {renderNode(layer)}
              {index < flowLayers.length - 1 ? (
                <span className="architecture__connector" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="architecture__branch">
          <span className="architecture__branch-line" aria-hidden="true" />
          {renderNode(eventLayer, 'architecture__node--event')}
        </div>
      </div>

      <aside className="card architecture__side" aria-live="polite">
        <p className="architecture__hint">
          <MousePointerClick size={14} aria-hidden="true" />
          Hover or tap a layer to explore
        </p>
        <div className="architecture__panel" key={active.id}>
          <span className="icon-tile">
            <ActiveIcon size={22} aria-hidden="true" />
          </span>
          <p className="kicker">{active.detail}</p>
          <h3>{active.label}</h3>
          <p className="architecture__description">{active.description}</p>
          <ul className="tag-row">
            {active.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="architecture__dots" aria-hidden="true">
          {layers.map((layer) => (
            <span key={layer.id} className={layer.id === activeId ? 'is-active' : ''} />
          ))}
        </div>
      </aside>
    </div>
  );
}
