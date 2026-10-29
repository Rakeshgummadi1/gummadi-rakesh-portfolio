import {
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Infinity as InfinityIcon,
  MapPin,
  Server,
  Settings,
  Smartphone,
  Sprout,
  Target,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  displayName: 'Rakesh Gummadi',
  initials: 'RG',
  role: 'Java Full Stack Developer',
  experienceYears: '2+',
  location: 'Hyderabad, Telangana',
  company: 'AJA Consultant Services LLP',
  intro:
    'Java Full Stack Developer building scalable and reliable applications using Java, Spring Boot, Microservices, Kafka, RabbitMQ, and React.',
  photo: {
    src: '/images/rakesh-gummadi-cutout.webp',
    width: 766,
    height: 1024,
  },
  about:
    "I'm a Java Full Stack Developer with 2+ years of experience in designing, developing and maintaining enterprise applications. I enjoy solving real-world problems using clean architecture, modern technologies and best practices.",
  aboutMore: [
    'My day-to-day covers Spring Boot services, Hibernate/JPA data layers, MySQL, microservices with OpenFeign, Kafka-based event flows, and secure role-based authentication with Spring Security.',
    'I also build React Native and Expo mobile features on top of the same APIs, and use Cursor AI to speed up development while keeping full ownership of architecture and quality.',
  ],
  education: {
    degree: 'B.Tech – Computer Science',
    university: 'Jawaharlal Nehru Technological University, Hyderabad (JNTUH)',
    college: "Aurora's Scientific Technological Institute",
  },
  // Drop your resume PDF into public/ with this name for the download button to work.
  resumeUrl: '/resume.pdf',
  social: {
    email: 'gummadi0312@gmail.com',
    phone: '+91 8978053109',
    github: '',
    linkedin: 'https://www.linkedin.com/in/rakesh-gummadi-32b636250/',
  },
} as const;

export type HeroStat = { value?: string; label: string; icon: LucideIcon };

export const heroStats: HeroStat[] = [
  { value: '2+', label: 'Years Experience', icon: BriefcaseBusiness },
  { value: '2', label: 'Key Projects', icon: FileText },
  { value: '10+', label: 'Technologies', icon: Settings },
  { label: 'Passion for\nBuilding Solutions', icon: InfinityIcon },
];

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: 'purple' | 'orange' | 'blue';
  badge?: string;
  current?: boolean;
  points: string[];
};

/* Oldest first: rendered as a left-to-right roadmap */
export const timeline: TimelineItem[] = [
  {
    period: 'Education',
    title: profile.education.degree,
    subtitle: profile.education.university,
    icon: GraduationCap,
    tone: 'purple',
    badge: 'Graduated',
    points: [profile.education.college, 'Built a strong base in Java, DBMS and data structures.'],
  },
  {
    period: '3 Months  ·  After B.Tech',
    title: 'Software Engineer Intern',
    subtitle: profile.company,
    icon: Sprout,
    tone: 'orange',
    badge: 'Converted to Full-time',
    points: [
      'Joined for training right after completing B.Tech.',
      'Learned Java, Spring Boot and enterprise practices on real projects.',
      'Internship performance led to a full-time offer.',
    ],
  },
  {
    period: '2+ Years  ·  Full-time',
    title: 'Software Engineer',
    subtitle: `${profile.company}  ·  ${profile.location}`,
    icon: BriefcaseBusiness,
    tone: 'blue',
    badge: 'Current',
    current: true,
    points: [
      'Building Java Spring Boot microservices with Kafka and MySQL.',
      'Implemented a Kafka-based Audit Service and secure REST APIs.',
      'Built the CRM mobile app with React Native and Expo using AI.',
    ],
  },
];

export type AboutFact = { label: string; value: string; icon: LucideIcon };

export const aboutFacts: AboutFact[] = [
  { label: 'Experience', value: `${profile.experienceYears} Years`, icon: BriefcaseBusiness },
  { label: 'Location', value: 'Hyderabad, India', icon: MapPin },
  { label: 'Education', value: 'B.Tech – CSE', icon: GraduationCap },
  { label: 'Focus', value: 'Backend & Microservices', icon: Target },
];

export type AboutFocus = { title: string; description: string; icon: LucideIcon; tone: 'blue' | 'purple' | 'green' };

export const aboutFocus: AboutFocus[] = [
  {
    title: 'Backend APIs',
    description: 'Secure, well-structured REST APIs with Spring Boot and JPA.',
    icon: Server,
    tone: 'blue',
  },
  {
    title: 'Event-driven Systems',
    description: 'Microservices that talk through Kafka and OpenFeign.',
    icon: Workflow,
    tone: 'purple',
  },
  {
    title: 'Mobile with AI',
    description: 'React Native and Expo apps built faster with AI tools.',
    icon: Smartphone,
    tone: 'green',
  },
];

export const aboutStack = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'MySQL', 'REST APIs'] as const;

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;
