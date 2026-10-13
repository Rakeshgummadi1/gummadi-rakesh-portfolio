import {
  Code2,
  Container,
  Database,
  FlaskConical,
  Layers,
  Server,
  Smartphone,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const skillCategories = ['All', 'Backend', 'Data', 'DevOps & Tools', 'Frontend', 'Practices'] as const;

export type SkillCategory = Exclude<(typeof skillCategories)[number], 'All'>;

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  category: SkillCategory;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Java & Core Java',
    icon: Code2,
    category: 'Backend',
    skills: [
      'Java',
      'OOP',
      'Collections',
      'Exception Handling',
      'Multithreading',
      'Lambda Expressions',
      'Stream API',
    ],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    category: 'Backend',
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Security'],
  },
  {
    title: 'Backend',
    icon: Server,
    category: 'Backend',
    skills: ['REST APIs', 'JSON', 'JDBC', 'Microservices', 'OpenFeign'],
  },
  {
    title: 'Database',
    icon: Database,
    category: 'Data',
    skills: ['MySQL', 'SQL', 'Joins', 'CRUD Operations'],
  },
  {
    title: 'Messaging',
    icon: Workflow,
    category: 'Data',
    skills: ['Apache Kafka', 'Event-Driven Architecture'],
  },
  {
    title: 'Testing & Version Control',
    icon: FlaskConical,
    category: 'DevOps & Tools',
    skills: ['JUnit', 'Postman', 'Git', 'GitHub', 'Maven'],
  },
  {
    title: 'DevOps & Servers',
    icon: Container,
    category: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Apache Tomcat'],
  },
  {
    title: 'Mobile & Frontend',
    icon: Smartphone,
    category: 'Frontend',
    skills: ['React Native', 'Expo', 'React.js'],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    category: 'DevOps & Tools',
    skills: ['IntelliJ IDEA', 'Eclipse', 'Spring Tool Suite', 'VS Code', 'Cursor AI'],
  },
  {
    title: 'Practices',
    icon: Users,
    category: 'Practices',
    skills: [
      'Agile',
      'Scrum',
      'Clean Code',
      'SOLID Principles',
      'Design Patterns',
      'Code Reviews',
      'Debugging',
    ],
  },
];
