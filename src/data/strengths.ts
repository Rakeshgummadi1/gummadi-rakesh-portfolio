import {
  BadgeCheck,
  Braces,
  Coffee,
  Database,
  Layers,
  Lightbulb,
  MessagesSquare,
  RefreshCw,
  Share2,
  ShieldCheck,
  Smile,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

export type Strength = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Keys of `techLogos`, shown as small logo badges on technical cards */
  logos?: string[];
};

export const technicalStrengths: Strength[] = [
  {
    title: 'Core Java & OOP',
    description:
      'OOP principles, Collections Framework, Streams, Lambda expressions, Generics, exception handling, and multithreading.',
    icon: Coffee,
    logos: ['Java'],
  },
  {
    title: 'Spring Boot & Microservices',
    description: 'Developing modular and maintainable backend applications.',
    icon: Layers,
    logos: ['Spring Boot', 'Microservices'],
  },
  {
    title: 'REST API Development',
    description: 'Designing, implementing, testing, and integrating RESTful APIs.',
    icon: Braces,
    logos: ['REST APIs'],
  },
  {
    title: 'Database Integration',
    description: 'SQL, Hibernate, JPA, and relational database operations.',
    icon: Database,
    logos: ['MySQL', 'Hibernate'],
  },
  {
    title: 'Security & Messaging',
    description: 'Spring Security, JWT, Apache Kafka, and service-to-service communication.',
    icon: ShieldCheck,
    logos: ['Spring Security', 'Kafka'],
  },
];

export const interpersonalStrengths: Strength[] = [
  {
    title: 'Team Collaboration',
    description: 'Work effectively with developers, testers, and other team members to achieve common goals.',
    icon: UsersRound,
  },
  {
    title: 'Friendly & Approachable',
    description: 'Maintain positive professional relationships and encourage open communication.',
    icon: Smile,
  },
  {
    title: 'Communication',
    description:
      'Share updates clearly, ask questions when requirements are unclear, and discuss technical problems constructively.',
    icon: MessagesSquare,
  },
  {
    title: 'Problem-Solving',
    description: 'Analyze issues, identify root causes, and develop practical solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Adaptability',
    description: 'Adjust to changing requirements and learn new tools and technologies.',
    icon: RefreshCw,
  },
  {
    title: 'Continuous Learning',
    description: 'Welcome feedback and consistently improve technical and professional skills.',
    icon: TrendingUp,
  },
  {
    title: 'Responsibility & Ownership',
    description: 'Take responsibility for assigned tasks, meet commitments, and communicate blockers early.',
    icon: BadgeCheck,
  },
  {
    title: 'Knowledge Sharing',
    description: 'Share useful technical knowledge and help teammates when possible.',
    icon: Share2,
  },
];
