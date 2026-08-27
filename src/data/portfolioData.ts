import { Project, OpenSourcePackage, ExperienceRole, BankingProject, SkillGroup, EducationInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Kunal Eknath Bhande',
  shortName: 'Kunal Bhande',
  title: 'Software Developer | Full-Stack Engineer',
  roleTagline: 'Frontend Architect & Full-Stack Systems Engineer',
  email: 'bhandekunal16@gmail.com',
  phone: '8779143048',
  location: 'Mumbai / Thane, India',
  status: 'Open to High-Impact Engineering Roles',
  githubUrl: 'https://github.com/Bhandekunal16',
  linkedinUrl: 'https://www.linkedin.com/in/kunal-bhande-2a0582271/',
  heroStack: [
    'Angular',
    'React',
    'Node.js',
    'NestJS',
    'AWS',
    'Docker',
    'MongoDB',
    'TypeScript',
    'ClickHouse'
  ],
  bioStatement: 'Building scalable web applications, developer tools, and reliable software systems across frontend, backend, and cloud.',
  aboutDetailed: 'Software Developer with hands-on experience architecting and delivering production full-stack web applications across banking and enterprise domains. Specializes in robust frontend architectures, resilient backend microservices, real-time transaction processing dashboards, and open-source developer tooling.'
};

export const EXPERIENCE_DATA: ExperienceRole = {
  role: 'Software Developer / Frontend Lead',
  company: 'Network People Services Technologies Ltd. (NPST)',
  location: 'Thane, India',
  period: 'Nov 2022 – Present',
  status: 'Current Role',
  highlights: [
    'Led frontend development of the Online Dispute Resolution (ODR) Portal, orchestrating architecture, state pipelines, and high-throughput workflows.',
    'Owned frontend architecture and implementation across high-security financial products, establishing modular component design systems.',
    'Made critical technical decisions around maintainability, client-side caching, bundle optimization, and runtime performance.',
    'Engineered scalable and reliable software systems operating in high-volume enterprise and banking environments.',
    'Spearheaded technical problem-solving initiatives, code governance standards, and inter-service API integrations.'
  ],
  technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'REST APIs', 'Docker', 'GitLab', 'State Management'],
  achievements: [
    'Engineered enterprise ODR system handling dispute lifecycles with granular audit logs and automated SLA tracking.',
    'Standardized reusable UI design tokens and data-grid modules across multiple banking client deployments.',
    'Significantly reduced portal cold-start time and API payload latency with aggressive memoization and state caching.'
  ]
};

export const BANKING_PROJECTS: BankingProject[] = [
  {
    id: 'sbm-merchant-portal',
    title: 'Merchant Portal',
    client: 'State Bank of Mauritius (SBM)',
    type: 'Enterprise Banking & Transaction Management',
    description: 'Centralized merchant platform for transaction monitoring, comprehensive reporting, analytics dashboards, real-time transaction tracking, and secure payment-processing workflows.',
    architectureHighlights: [
      'Real-time transaction tracking and settlement reconciliation',
      'Granular merchant reporting with dynamic export pipelines',
      'Role-based access control (RBAC) with financial audit logs',
      'High-reliability responsive data visualization modules'
    ],
    securityAndScale: [
      'Compliant with banking security standards and tokenized sessions',
      'Optimized data grids capable of rendering tens of thousands of transaction records seamlessly'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'RESTful APIs', 'SQL', 'Chart Systems']
  },
  {
    id: 'cosmos-merchant-portal',
    title: 'Merchant Portal',
    client: 'Cosmos Bank',
    type: 'Merchant Operations & Banking Integration',
    description: 'Merchant operations platform supporting transaction management, reporting, dashboards, real-time transaction tracking, and seamless banking payment-system integration.',
    architectureHighlights: [
      'End-to-end payment lifecycle visibility for merchants and bank admins',
      'Interactive executive dashboards for transaction volume and settlement status',
      'Dispute flagging, chargeback tracking, and automated reconciliation queues',
      'Direct integration with core banking payment-gateway protocols'
    ],
    securityAndScale: [
      'Hardened session management with cryptographic signature validation',
      'Resilient error recovery and telemetry for uninterrupted transaction flow'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'API Gateways', 'Banking Protocols', 'SQL']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'npm-package-analytics',
    title: 'NPM Package Analytics',
    category: 'Platform',
    description: 'A web analytics platform for exploring npm package statistics and download activity, providing package-level insights into adoption and ecosystem trends.',
    longDescription: 'Engineered a specialized developer tool to inspect historical download volumes, registry metadata, maintainer cadence, and dependency graphs. Empowers engineering teams to evaluate open-source package health before adoption.',
    liveUrl: 'https://npm-package-analytics.vercel.app/',
    tags: ['React', 'TypeScript', 'Analytics', 'NPM Registry API', 'Data Visualization', 'Vercel'],
    features: [
      'Interactive download velocity charts with time-range filtering',
      'Real-time registry metadata querying and version diff inspection',
      'Comparative package analytics and adoption benchmarking',
      'Responsive telemetry layout with zero external tracking overhead'
    ],
    featured: true
  },
  {
    id: 'fluxtube',
    title: 'FluxTube',
    category: 'Web App',
    description: 'A YouTube-powered music discovery and playback application supporting search across songs, artists, and music-related queries through a streamlined listening interface.',
    longDescription: 'Designed and built an ad-free, clutter-free music discovery client. Features audio stream extraction, playlist queueing, search indexing, and a persistent media player UI.',
    liveUrl: 'https://flux--tube.vercel.app/',
    tags: ['React', 'JavaScript', 'Audio Engine', 'Search Indexing', 'Tailwind CSS', 'Vercel'],
    features: [
      'Streamlined music search across artists, tracks, and genre queries',
      'Custom playback bar with queue reordering and continuous playback',
      'Keyboard media shortcuts and persistent mini-player overlay',
      'Lightweight bundle footprint optimized for mobile bandwidth'
    ],
    featured: true
  },
  {
    id: 'cdnbyte',
    title: 'CDNByte',
    category: 'Service',
    description: 'A lightweight image CDN service for hosting and serving images through CDN-backed URLs, focused on simple integration and fast delivery.',
    longDescription: 'A developer-first media asset delivery service. Allows developers to store, transform, and deliver images globally via edge URLs with caching headers configured for optimal browser performance.',
    liveUrl: 'https://cdnbyte.vercel.app/',
    tags: ['Node.js', 'Cloud CDN', 'Edge Delivery', 'TypeScript', 'Storage APIs', 'Vercel'],
    features: [
      'Direct instant image upload with edge URL generation',
      'Optimized caching headers and low-latency asset resolution',
      'Developer API reference and 1-click embed code snippets',
      'Clean developer dashboard for inspecting asset usage'
    ],
    featured: true
  },
  {
    id: 'word-encoder-platform',
    title: 'Word Encoder',
    category: 'Developer Tool',
    description: 'A web-based encoding and decoding platform for transforming text into numeric-index representations, with API guidance for programmatic integration.',
    longDescription: 'An interactive encoding utility implementing custom character mapping and indexed cryptography principles. Includes an interactive live sandbox and clear REST API documentation.',
    liveUrl: 'https://encoder-umber.vercel.app/',
    tags: ['TypeScript', 'React', 'Encoding Algorithms', 'Developer Utility', 'REST API', 'Vercel'],
    features: [
      'Bidirectional encoding and decoding pipeline in real time',
      'Character index frequency analysis and mapping customization',
      'Interactive API endpoint documentation and cURL generator',
      '1-click clipboard integration and sample payloads'
    ],
    featured: false
  }
];

export const OPEN_SOURCE_PACKAGES: OpenSourcePackage[] = [
  {
    id: 'robotic-creater',
    name: 'robotic-creater',
    npmCommand: 'npm i robotic-creater',
    version: 'v1.0.x',
    description: 'JavaScript package for transforming standard text into customizable, stylish ASCII-art patterns and terminal banners.',
    features: [
      'Multiple ASCII font styles & custom glyph mapping',
      'Zero external runtime dependencies for maximum compatibility',
      'Supports both Node.js CLI environments and browser bundles',
      'Configurable spacing, borders, and character padding'
    ],
    tags: ['JavaScript', 'ASCII Art', 'CLI Tool', 'Text Generator', 'npm'],
    interactiveDemoType: 'ascii',
    npmUrl: 'https://www.npmjs.com/package/robotic-creater'
  },
  {
    id: 'word-encoder',
    name: 'word-encoder',
    npmCommand: 'npm i word-encoder',
    version: 'v1.1.x',
    description: 'Text transformation library for encoding and decoding using a custom character-index mapping algorithm.',
    features: [
      'Deterministic numeric-index character encryption and transformation',
      'Custom alphabet and punctuation mapping configurations',
      'Lightweight string processing with O(N) linear performance',
      'Fully typed with TypeScript definitions out-of-the-box'
    ],
    tags: ['TypeScript', 'Encoder', 'Algorithms', 'Cryptography', 'npm'],
    interactiveDemoType: 'encoder',
    npmUrl: 'https://www.npmjs.com/package/word-encoder'
  },
  {
    id: 'roboticdb',
    name: 'roboticdb',
    npmCommand: 'npm i roboticdb',
    version: 'v1.0.x',
    description: 'Modular data-management library supporting collection handling, CRUD operations, CSV import/export, and object storage/manipulation/transformation.',
    features: [
      'Embedded schema-flexible document store for Node.js workflows',
      'Full CRUD operation suite with chaining filter predicates',
      'Built-in bidirectional CSV import and export serializers',
      'Object transformation, indexing, and persistent write options'
    ],
    tags: ['Node.js', 'Database Library', 'CRUD Engine', 'CSV Parser', 'npm'],
    interactiveDemoType: 'db',
    npmUrl: 'https://www.npmjs.com/package/roboticdb'
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming and query languages used in production architectures',
    skills: [
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'CSS' },
      { name: 'JSON' },
      { name: 'Cypher' }
    ]
  },
  {
    category: 'Frontend',
    description: 'Modern client-side frameworks, mobile apps, and architectural systems',
    skills: [
      { name: 'Angular', highlight: true },
      { name: 'ReactJS', highlight: true },
      { name: 'React Native', highlight: true }
    ]
  },
  {
    category: 'Backend',
    description: 'Server environments, microservices, and API application frameworks',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'NestJS', highlight: true },
      { name: 'Flask', highlight: true }
    ]
  },
  {
    category: 'Databases',
    description: 'Document, graph, relational, and analytical columnar data stores',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'Neo4j', highlight: true },
      { name: 'ClickHouse', highlight: true }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Cloud hosting, containerization, and server provisioning',
    skills: [
      { name: 'AWS', highlight: true },
      { name: 'EC2', highlight: true },
      { name: 'S3', highlight: true },
      { name: 'Docker', highlight: true }
    ]
  },
  {
    category: 'Tools & Platforms',
    description: 'Ecosystem tools, version control, CI/CD, and deployment platforms',
    skills: [
      { name: 'npm', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'GitLab', highlight: true },
      { name: 'Vercel', highlight: true }
    ]
  },
  {
    category: 'Other',
    description: 'Data analysis and computational libraries',
    skills: [
      { name: 'Pandas', highlight: true }
    ]
  }
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
  field: 'Information Technology & Computer Science',
  institution: 'University of Mumbai',
  period: 'Jun 2017 – Apr 2020',
  grade: 'CGPA: 7.43 / 10.0',
  highlights: [
    'Strong foundational coursework in Data Structures, Relational Databases, Operating Systems, and Network Architecture.',
    'Specialized projects in web applications, software engineering principles, and distributed systems.'
  ]
};

export const CORE_PILLARS = [
  {
    title: 'Frontend Architecture',
    description: 'Designing modular component hierarchies, resilient client-side state, and performance-optimized UI systems.'
  },
  {
    title: 'Enterprise Banking Systems',
    description: 'Building secure merchant portals, real-time transaction feeds, and dispute management workflows for major banks.'
  },
  {
    title: 'Backend Engineering',
    description: 'Developing high-throughput REST APIs, microservices, and database schemas with Node.js, NestJS, and Python.'
  },
  {
    title: 'Developer Tooling & OSS',
    description: 'Publishing reusable npm packages, analytics utilities, and CLI tools for developer productivity.'
  },
  {
    title: 'Cloud & Containerization',
    description: 'Deploying reproducible environments using Docker, AWS (EC2, S3), and continuous delivery pipelines.'
  },
  {
    title: 'Technical Decision-Making',
    description: 'Leading engineering discussions around code maintainability, bundle optimization, and API contract designs.'
  }
];
