import {
  Atom,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Coffee,
  Container,
  Database,
  GitBranch,
  GraduationCap,
  Layers,
  Leaf,
  ShipWheel,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  fullName: 'Gummadi Rakesh',
  firstName: 'Rakesh',
  initials: 'GR',
  shortRole: 'Java Backend Developer',
  experienceYears: '3',
  location: 'Hyderabad, Telangana',
  education:
    "B.Tech – Computer Science, Jawaharlal Nehru Technological University, Hyderabad (JNTUH) — Aurora's Scientific Technological Institute",
  summary:
    'Java Developer with 3 years of experience in developing and maintaining Java-based applications using Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs, and MySQL. Experienced in Microservices, Apache Kafka, Spring Security, JUnit, Docker, Git, and Maven. Worked on web and mobile applications using React Native and Expo, including API integration and mobile feature development.',
  about:
    'I work across API design, backend development, service integration, and database-driven applications. My day-to-day covers Spring Boot services, Hibernate/JPA data layers, MySQL, microservices with OpenFeign, Kafka-based event flows, and secure role-based authentication. I also build React Native and Expo mobile features on top of the same APIs.',
  // Drop your resume PDF into public/ with this name for the download button to work.
  resumeUrl: '/resume.pdf',
  social: {
    email: 'gummadi0312@gmail.com',
    phone: '+91 8978053109',
    github: '',
    linkedin: '',
  },
  strengths: [
    'Strong problem-solving and analytical skills',
    'Converting business requirements into technical solutions',
    'Quick learner with a solid foundation in Java',
    'Effective collaboration within development teams',
  ],
} as const;

export type HeroStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const typingPhrases = [
  'secure REST APIs',
  'Spring Boot microservices',
  'Kafka event-driven flows',
  'role-based access control',
  'React Native integrations',
];

export const heroStats: HeroStat[] = [
  { icon: BriefcaseBusiness, value: '3+', label: 'Years Experience' },
  { icon: Layers, value: '10+', label: 'Technologies' },
  { icon: Code2, value: '2', label: 'Key Projects' },
  { icon: GraduationCap, value: 'B.Tech', label: 'Computer Science' },
];

export type TechItem = {
  name: string;
  icon: LucideIcon;
  color: string;
};

export const techStrip: TechItem[] = [
  { name: 'Java', icon: Coffee, color: '#e76f32' },
  { name: 'Spring Boot', icon: Leaf, color: '#48a66c' },
  { name: 'Microservices', icon: Boxes, color: '#4679e9' },
  { name: 'MySQL', icon: Database, color: '#1683b7' },
  { name: 'Kafka', icon: Workflow, color: 'var(--ink)' },
  { name: 'Docker', icon: Container, color: '#1a9ad7' },
  { name: 'Kubernetes', icon: ShipWheel, color: '#326ce5' },
  { name: 'Git', icon: GitBranch, color: '#ee5b4c' },
  { name: 'React', icon: Atom, color: '#15bce2' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;
