import { Store, UsersRound, type LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  accent: 'purple' | 'orange';
  flow: string[];
  role: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: 'dosha-nivaran',
    title: 'Dosha Nivaran (Vendor Partner Network - VPN)',
    category: 'Vendor Platform · Backend',
    icon: Store,
    accent: 'purple',
    flow: ['Register', 'Verify documents', 'Manage services', 'Go live'],
    role: 'Java Developer',
    description:
      'Dosha Nivaran (Vendor Partner Network - VPN) is an internal platform used to onboard, verify, and manage vendors for the Dosha Nivaan application. It supports vendor registration, document verification, role-based access for Individual and Corporate users, and service management before vendors go live.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'REST APIs',
      'MySQL',
      'Maven',
      'Git',
      'React.js',
      'Cursor AI',
    ],
    responsibilities: [
      'Developed backend services using Java, Spring Boot, Spring Data JPA, and Hibernate',
      'Designed and implemented REST APIs for vendor registration, profile management, authentication, and verification workflows',
      'Developed role-based access control (RBAC) for Individual and Corporate vendor accounts',
      'Implemented Controller, Service, Repository, DTO, and Entity layers following a layered architecture',
      'Designed and managed MySQL database operations using Hibernate and Spring Data JPA',
      'Implemented input validation, exception handling, and secure authentication',
      'Performed API testing using Postman and resolved backend issues through debugging',
      'Used Maven for dependency management and Git for source code version control',
      'Collaborated with cross-functional teams in an Agile development environment',
      'Developed and enhanced the frontend using React.js with AI-assisted tools such as Cursor AI',
    ],
    highlights: [
      'Vendor onboarding & verification',
      'RBAC for Individual & Corporate users',
      'Layered Spring Boot architecture',
      'Secure authentication workflows',
    ],
  },
  {
    id: 'crm',
    title: 'Customer Relationship Management (CRM)',
    category: 'Microservices · Web & Mobile',
    icon: UsersRound,
    accent: 'orange',
    flow: ['Web & mobile', 'Spring Boot services', 'Kafka', 'Audit Service'],
    role: 'Java Developer',
    description:
      'CRM is an enterprise web-based application designed to manage customers, users, and business operations. The application provides secure authentication, role-based access, customer management, and an Audit Service that records user activities to improve system monitoring, security, and compliance.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'REST APIs',
      'Microservices',
      'Kafka',
      'OpenFeign',
      'MySQL',
      'JUnit',
      'Maven',
      'Git',
      'Docker',
      'React Native',
      'Expo',
    ],
    responsibilities: [
      'Developed REST APIs using Java and Spring Boot',
      'Implemented Audit Service to track user activities and application events',
      'Built Controller, Service, Repository, DTO, and Entity layers',
      'Used Hibernate, Spring Data JPA, and MySQL for database operations',
      'Implemented input validation and exception handling',
      'Tested REST APIs using Postman and performed backend debugging',
      'Worked with Microservices, OpenFeign, and Apache Kafka for service communication and event-driven processing',
      'Used Git and Maven for version control and project build management',
      'Worked in an Agile/Scrum development environment',
      'Worked on the CRM mobile application using React Native and Expo',
      'Integrated mobile screens with existing REST APIs',
      'Worked on login, dashboard, modules, forms, validation, API integration, and mobile navigation',
      'Used Cursor AI and AI-assisted/Vibe Coding to accelerate mobile application development',
      'Maintained consistent functionality between the web and mobile applications',
    ],
    highlights: [
      'Microservices & OpenFeign',
      'Kafka event-driven processing',
      'Audit Service for compliance',
      'React Native + Expo mobile app',
    ],
  },
];
