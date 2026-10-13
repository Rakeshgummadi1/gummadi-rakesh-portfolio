import {
  Database,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: 'Backend API Development',
    icon: ServerCog,
    description:
      'REST APIs in Java and Spring Boot with clean Controller, Service and Repository layers, input validation and consistent error handling.',
    tags: ['Spring Boot', 'REST APIs', 'Spring Data JPA'],
  },
  {
    title: 'Microservices & Integration',
    icon: Network,
    description:
      'Splitting features into focused services and connecting them with OpenFeign so each module can evolve independently.',
    tags: ['Microservices', 'OpenFeign', 'Docker'],
  },
  {
    title: 'Event-Driven Systems',
    icon: Workflow,
    description:
      'Kafka-based event flows, such as an Audit Service that records user activity for monitoring, security and compliance.',
    tags: ['Apache Kafka', 'Audit Logging'],
  },
  {
    title: 'Security & Access Control',
    icon: ShieldCheck,
    description:
      'Authentication and role-based access with Spring Security, including separate permissions for different account types.',
    tags: ['Spring Security', 'RBAC'],
  },
  {
    title: 'Database Design',
    icon: Database,
    description:
      'MySQL schemas, Hibernate entity mapping and relationships, and efficient queries through JPA and JDBC.',
    tags: ['MySQL', 'Hibernate', 'JDBC'],
  },
  {
    title: 'Mobile & Web Integration',
    icon: Smartphone,
    description:
      'React Native, Expo and React.js screens wired to existing REST APIs, keeping web and mobile behaviour consistent.',
    tags: ['React Native', 'Expo', 'React.js'],
  },
];
