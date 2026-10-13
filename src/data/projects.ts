import { Store, UsersRound, type LucideIcon } from 'lucide-react';
import anvayaLogo from '../assets/projects/anvaya.webp';
import doshaNivaranLogo from '../assets/projects/dosha-nivaran.webp';

export type ProjectExtension = {
  title: string;
  badge: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: 'web' | 'playstore' | 'appstore';
};

export type Project = {
  id: string;
  product: string;
  /** Trailing part of the product name shown in the brand's second colour, e.g. "24by7". */
  productSuffix?: string;
  logo: string;
  logoShape: 'square' | 'circle';
  coverSubtitle: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  accent: 'blue' | 'cyan';
  role: string;
  category: string;
  platforms: string[];
  highlights: string[];
  links: ProjectLink[];
  tags: string[];
  technologies: string[];
  responsibilities: string[];
  mobileApp?: ProjectExtension;
  /** Project I'm actively working on right now */
  current?: boolean;
};

export const productName = (project: Project) => project.product + (project.productSuffix ?? '');

export const projects: Project[] = [
  {
    id: 'dosha-nivaran',
    product: 'Dosha Nivaran',
    logo: doshaNivaranLogo,
    logoShape: 'circle',
    coverSubtitle: 'Vendor Onboarding, Verification and Management',
    title: 'Dosha Nivaran – VPN Module',
    summary:
      'Worked on the Vendor Partner Network (VPN) module: vendor onboarding, document verification and role-based access.',
    description:
      'Dosha Nivaran is a platform whose Vendor Partner Network (VPN) module is used to onboard, verify, and manage vendors. I worked on the VPN module, which supports vendor registration, document verification, role-based access for Individual and Corporate users, and service management before vendors go live.',
    icon: Store,
    accent: 'cyan',
    role: 'Java Full Stack Developer · VPN Module',
    category: 'Vendor Platform',
    platforms: ['Web', 'Mobile'],
    highlights: ['Vendor Onboarding', 'Role-based Access', 'Document Verification'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ajacs.doshanivaran&hl=en_IN',
        kind: 'playstore',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/doshnivaran-vpn/id6804601103',
        kind: 'appstore',
      },
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Spring Security'],
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
      'Developed backend services for the VPN module using Java, Spring Boot, Spring Data JPA, and Hibernate',
      'Designed and implemented REST APIs for vendor registration, profile management, authentication, and verification workflows',
      'Developed role-based access control (RBAC) for Individual and Corporate vendor accounts',
      'Implemented Controller, Service, Repository, DTO, and Entity layers following a layered architecture',
      'Designed and managed MySQL database operations using Hibernate and Spring Data JPA',
      'Implemented input validation, exception handling, and secure authentication',
      'Performed API testing using Postman and resolved backend issues through debugging',
      'Collaborated with cross-functional teams in an Agile development environment',
      'Developed and enhanced the frontend using React.js with AI-assisted tools such as Cursor AI',
    ],
  },
  {
    id: 'crm',
    current: true,
    product: 'Anvaya',
    productSuffix: '24by7',
    logo: anvayaLogo,
    logoShape: 'square',
    coverSubtitle: 'Customer Relationship Management',
    title: 'Customer Relationship Management (CRM)',
    summary:
      'Enterprise CRM built on Java Spring Boot microservices with Kafka, plus an AI-built React Native mobile app.',
    description:
      'CRM is an enterprise web-based application designed to manage customers, users, and business operations. The backend is a Java Spring Boot microservices project with Apache Kafka for event-driven communication and MySQL for persistence. It provides secure authentication, role-based access, customer management, and a Kafka-based Audit Service that records user activities to improve system monitoring, security, and compliance.',
    icon: UsersRound,
    accent: 'blue',
    role: 'Java Full Stack Developer · Web & Mobile',
    category: 'Enterprise CRM',
    platforms: ['Web', 'Mobile'],
    highlights: ['Microservices', 'Kafka Events', 'AI-built Mobile App'],
    links: [
      { label: 'Website', href: 'https://anvaya24by7.com/', kind: 'web' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ajacs.anvaya&hl=en',
        kind: 'playstore',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/anvaya24by7/id6805039975',
        kind: 'appstore',
      },
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'MySQL', 'React Native'],
    technologies: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Apache Kafka',
      'MySQL',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'REST APIs',
      'OpenFeign',
      'JUnit',
      'Maven',
      'Git',
      'Docker',
    ],
    responsibilities: [
      'Developed REST APIs using Java and Spring Boot in a microservices architecture',
      'Implemented Apache Kafka for event-driven communication between microservices',
      'Built a Kafka-based Audit Service to track user activities and application events',
      'Built Controller, Service, Repository, DTO, and Entity layers',
      'Used Hibernate, Spring Data JPA, and MySQL for database operations',
      'Used OpenFeign for synchronous service-to-service communication',
      'Implemented input validation and exception handling',
      'Tested REST APIs using Postman and performed backend debugging',
      'Used Git and Maven for version control and project build management',
      'Worked in an Agile/Scrum development environment',
    ],
    mobileApp: {
      title: 'CRM Mobile Application',
      badge: 'Built with AI',
      description:
        'The mobile version of the CRM, built with AI-assisted development using React Native and Expo. It connects to the same Spring Boot microservices, so web and mobile users get the same data, validation and business rules.',
      technologies: ['React Native', 'Expo', 'Cursor AI', 'REST APIs', 'Spring Boot'],
      responsibilities: [
        'Built the CRM mobile application with AI-assisted development (Cursor AI / Vibe Coding)',
        'Developed screens using React Native and Expo',
        'Integrated the mobile app with the existing CRM microservice REST APIs',
        'Worked on login, dashboard, modules, forms, validation, and mobile navigation',
        'Maintained consistent functionality between the web and mobile applications',
      ],
    },
  },
];
