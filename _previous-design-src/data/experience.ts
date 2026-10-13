export const experience = {
  title: 'Software Engineer',
  company: 'AJA Consultant Services LLP',
  location: 'Hyderabad, Telangana',
  duration: '3 Years',
  responsibilities: [
    'Designed, developed, and maintained Java-based applications following best coding practices',
    'Implemented OOP principles to create modular, reusable, and maintainable code',
    'Developed server-side components using Servlets and JSP to handle requests and build dynamic content',
    'Worked extensively with Hibernate ORM for entity mapping, table relationships, HQL queries, and transaction handling',
    'Developed and optimized database interactions using JDBC and MySQL',
    'Used Maven for project build and dependency management, and Git for version control',
    'Deployed and tested applications on the Apache Tomcat server',
  ],
  technologies: ['Java', 'Servlets', 'JSP', 'Hibernate', 'JDBC', 'MySQL', 'Maven', 'Git', 'Apache Tomcat'],
} as const;

export const approachItems = [
  {
    title: 'Build',
    description:
      'Design and develop scalable Java and Spring Boot backend services.',
  },
  {
    title: 'Integrate',
    description:
      'Connect services through REST APIs, OpenFeign, and event-driven flows.',
  },
  {
    title: 'Secure',
    description:
      'Implement authentication, authorization, and role-based access control.',
  },
  {
    title: 'Observe',
    description:
      'Implement audit logging and meaningful application monitoring.',
  },
  {
    title: 'Improve',
    description:
      'Use debugging, code reviews, Agile practices, and AI-assisted development to improve delivery.',
  },
] as const;

export const aiAssistedPoints = [
  'Accelerate development',
  'Explore solutions',
  'Debug errors',
  'Improve UI implementation',
  'Generate boilerplate',
  'Refactor code',
  'Support Vibe Coding workflows with Cursor AI',
] as const;
