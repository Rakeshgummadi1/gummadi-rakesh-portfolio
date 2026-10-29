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

export type CarouselTech = (typeof carouselTechs)[number];

export type TechUsage = {
  summary: string;
  usedIn: { place: string; detail: string }[];
};

const VPN = 'Dosha Nivaran — Project';
const CRM = 'Anvaya24by7 — CRM Project';

/** "Where I used it" details shown when the centred carousel tech is hovered or tapped */
export const techUsage: Record<CarouselTech, TechUsage> = {
  Java: {
    summary: 'My core language: OOP, Collections, Streams, Lambdas and multithreading.',
    usedIn: [{ place: VPN, detail: 'Used Java to implement backend logic and process application requests.' }],
  },
  'Spring Boot': {
    summary: 'My main framework for backend services and REST APIs.',
    usedIn: [
      {
        place: VPN,
        detail: 'Developed backend REST APIs to handle frontend requests and perform business operations.',
      },
      { place: CRM, detail: 'Developed backend REST APIs and implemented business logic for the CRM application.' },
    ],
  },
  'Spring Security': {
    summary: 'Authentication and authorization for secure APIs.',
    usedIn: [
      {
        place: CRM,
        detail: 'Used Spring Security and JWT for authentication and authorization to protect backend APIs.',
      },
    ],
  },
  Kafka: {
    summary: 'Event-driven messaging between services.',
    usedIn: [
      {
        place: CRM,
        detail: 'Implemented audit logging by publishing events to Kafka topics and consuming them in the Audit Service.',
      },
    ],
  },
  Hibernate: {
    summary: 'ORM for entity mapping, relationships and transactions.',
    usedIn: [
      {
        place: VPN,
        detail: 'Used internally by Spring Boot through Spring Data JPA to map entities and handle MySQL operations.',
      },
      {
        place: CRM,
        detail: 'Used internally by Spring Boot through Spring Data JPA to map entities and handle MySQL operations.',
      },
    ],
  },
  Microservices: {
    summary: 'Independent services, each owning its own business operations.',
    usedIn: [
      {
        place: CRM,
        detail:
          'Developed backend functionality across separate services for CRM, Admin, Audit, and Telephony. Each service handles specific business operations.',
      },
    ],
  },
  MySQL: {
    summary: 'Relational database for application data.',
    usedIn: [
      { place: VPN, detail: 'Used MySQL to store, retrieve, and manage application data.' },
      {
        place: CRM,
        detail: 'Used to store and retrieve application data, including CRM records and other business information.',
      },
    ],
  },
  Git: {
    summary: 'Version control for all my projects, with GitHub.',
    usedIn: [
      { place: VPN, detail: 'Used Git to commit and push backend code to the remote repository.' },
      {
        place: CRM,
        detail: 'Used Git to commit changes, manage source code, and push code to remote repositories for version control.',
      },
    ],
  },
  Docker: {
    summary: 'Containers for running services consistently.',
    usedIn: [
      {
        place: 'Currently exploring',
        detail: 'Learning Docker while working alongside the DevOps team that deploys our applications.',
      },
    ],
  },
  RabbitMQ: {
    summary: 'Message broker for asynchronous communication between microservices.',
    usedIn: [
      {
        place: 'BookYourGlam — Project',
        detail:
          'Implemented asynchronous communication between services such as CRM, Telephony, and Audit using message queues. It handled events like lead assignment, call completion, follow-up creation, and notifications, so services process messages independently without waiting for each other.',
      },
    ],
  },
  React: {
    summary: 'React for web interfaces, built with AI-assisted development.',
    usedIn: [
      {
        place: VPN,
        detail:
          'The frontend was developed with AI assistance using React, while my primary contribution was backend development.',
      },
      {
        place: CRM,
        detail: 'Used for the web frontend, including dashboards, forms, and CRM screens. AI tools assisted with frontend development.',
      },
    ],
  },
};

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
