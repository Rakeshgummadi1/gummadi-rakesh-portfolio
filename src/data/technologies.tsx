import type { ReactNode } from 'react';
import { Boxes, Braces, Container, Settings, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import {
  SiApachekafka,
  SiDocker,
  SiExpo,
  SiGit,
  SiHibernate,
  SiMysql,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
} from 'react-icons/si';

export const techLogos: Record<string, ReactNode> = {
  Java: <FaJava color="#e76f00" />,
  'Spring Boot': <SiSpringboot color="#6db33f" />,
  'Spring Security': <SiSpringsecurity color="#6db33f" />,
  Kafka: <SiApachekafka color="#231f20" />,
  'Apache Kafka': <SiApachekafka color="#231f20" />,
  Hibernate: <SiHibernate color="#59666c" />,
  Microservices: <Boxes color="#2b5ce6" strokeWidth={1.8} />,
  MySQL: <SiMysql color="#00758f" />,
  Docker: <SiDocker color="#2496ed" />,
  RabbitMQ: <SiRabbitmq color="#ff6600" />,
  Git: <SiGit color="#f05032" />,
  React: <SiReact color="#13b5d8" />,
  'React.js': <SiReact color="#13b5d8" />,
  'React Native': <SiReact color="#13b5d8" />,
  Expo: <SiExpo color="#000020" />,
  'REST APIs': <Braces color="#1a56f0" strokeWidth={2} />,
};

export const carouselTechs = [
  'Docker',
  'MySQL',
  'Spring Boot',
  'Kafka',
  'Java',
  'Hibernate',
  'Microservices',
  'Git',
  'RabbitMQ',
  'React',
  'Spring Security',
] as const;

export type SkillHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'purple' | 'cyan';
};

export const skillHighlights: SkillHighlight[] = [
  {
    title: 'Modern Stack',
    description: 'Keep learning and exploring new technologies',
    icon: Zap,
    tone: 'blue',
  },
  {
    title: 'Scalable Systems',
    description: 'Build secure and high-performance applications',
    icon: ShieldCheck,
    tone: 'green',
  },
  {
    title: 'Clean Architecture',
    description: 'Follow best practices and maintainable code',
    icon: Settings,
    tone: 'purple',
  },
  {
    title: 'Container Ready',
    description: 'Experience with Docker and RabbitMQ',
    icon: Container,
    tone: 'cyan',
  },
];
