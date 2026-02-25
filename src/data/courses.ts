export interface Course {
    id: string;
    title: string;
    slug: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    discount?: number;
    thumbnail: string;
    category: string;
    features: string[];
    syllabus: {
        module: string;
        topics: string[];
    }[];
    instructor: string;
    enrollmentCount: number;
    rating: number;
    mode?: 'Physical' | 'Online' | 'Hybrid';
    createdAt?: string;
}

export const courses: Course[] = [
    {
        id: '1',
        title: 'Web Development',
        slug: 'web-development',
        description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and deploy applications.',
        duration: '6 months',
        level: 'Beginner',
        price: 45000,
        discount: 10,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        category: 'Development',
        features: [
            'HTML5, CSS3, JavaScript ES6+',
            'React.js & Next.js',
            'Node.js & Express',
            'MongoDB & PostgreSQL',
            'RESTful APIs & GraphQL',
            'Git & GitHub',
            'Deployment & DevOps basics',
            'Real-world projects',
            'Internship opportunity'
        ],
        syllabus: [
            {
                module: 'Frontend Fundamentals',
                topics: ['HTML5 & Semantic Web', 'CSS3 & Flexbox/Grid', 'JavaScript Basics', 'DOM Manipulation']
            },
            {
                module: 'Modern JavaScript',
                topics: ['ES6+ Features', 'Async/Await', 'Promises', 'Fetch API']
            },
            {
                module: 'React Development',
                topics: ['Components & Props', 'State & Hooks', 'React Router', 'Context API']
            },
            {
                module: 'Backend Development',
                topics: ['Node.js Basics', 'Express Framework', 'Database Integration', 'Authentication']
            }
        ],
        instructor: 'Aashish Thapa',
        enrollmentCount: 250,
        rating: 4.8
    },
    {
        id: '2',
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Learn user-centered design principles, wireframing, prototyping, and create stunning user interfaces with Figma and Adobe XD.',
        duration: '4 months',
        level: 'Beginner',
        price: 35000,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        category: 'Design',
        features: [
            'Design thinking & research',
            'Wireframing & prototyping',
            'Figma & Adobe XD',
            'User research methods',
            'Information architecture',
            'Visual design principles',
            'Usability testing',
            'Portfolio development',
            'Industry projects'
        ],
        syllabus: [
            {
                module: 'Design Fundamentals',
                topics: ['Color Theory', 'Typography', 'Layout Principles', 'Design Systems']
            },
            {
                module: 'User Research',
                topics: ['User Personas', 'User Journey Maps', 'Competitive Analysis', 'Surveys & Interviews']
            },
            {
                module: 'Prototyping',
                topics: ['Low-fidelity Wireframes', 'High-fidelity Mockups', 'Interactive Prototypes', 'Design Handoff']
            }
        ],
        instructor: 'Kritika Rajbhandari',
        enrollmentCount: 180,
        rating: 4.7
    },
    {
        id: '3',
        title: 'Quality Assurance (QA)',
        slug: 'quality-assurance',
        description: 'Become a skilled QA engineer with manual and automated testing expertise. Learn test planning, execution, and bug tracking.',
        duration: '3 months',
        level: 'Beginner',
        price: 30000,
        thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
        category: 'Testing',
        features: [
            'Manual testing fundamentals',
            'Test case design',
            'Selenium & automation',
            'API testing with Postman',
            'Performance testing',
            'Agile & Scrum methodology',
            'JIRA & bug tracking',
            'CI/CD pipelines',
            'Hands-on projects'
        ],
        syllabus: [
            {
                module: 'Testing Fundamentals',
                topics: ['SDLC & STLC', 'Test Levels', 'Test Types', 'Defect Life Cycle']
            },
            {
                module: 'Manual Testing',
                topics: ['Test Planning', 'Test Case Writing', 'Test Execution', 'Bug Reporting']
            },
            {
                module: 'Automation Testing',
                topics: ['Selenium WebDriver', 'Test Frameworks', 'Page Object Model', 'CI/CD Integration']
            }
        ],
        instructor: 'Suresh Dhakal',
        enrollmentCount: 150,
        rating: 4.6
    },
    {
        id: '4',
        title: 'DevOps Engineering',
        slug: 'devops-engineering',
        description: 'Master DevOps practices with Docker, Kubernetes, CI/CD pipelines, and cloud platforms. Automate infrastructure and deployments.',
        duration: '5 months',
        level: 'Intermediate',
        price: 50000,
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        category: 'DevOps',
        features: [
            'Linux administration',
            'Docker & Kubernetes',
            'Jenkins & GitLab CI/CD',
            'AWS/Azure fundamentals',
            'Infrastructure as Code',
            'Monitoring & logging',
            'Ansible & Terraform',
            'Security best practices',
            'Real-world scenarios'
        ],
        syllabus: [
            {
                module: 'Linux & Shell Scripting',
                topics: ['Linux Commands', 'Shell Scripting', 'File Permissions', 'System Administration']
            },
            {
                module: 'Containerization',
                topics: ['Docker Basics', 'Docker Compose', 'Container Networking', 'Docker Registry']
            },
            {
                module: 'Orchestration',
                topics: ['Kubernetes Architecture', 'Pods & Deployments', 'Services & Ingress', 'Helm Charts']
            }
        ],
        instructor: 'Rajan Maharjan',
        enrollmentCount: 120,
        rating: 4.9
    },
    {
        id: '5',
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        description: 'Build native and cross-platform mobile applications using React Native and Flutter. Deploy to iOS and Android app stores.',
        duration: '6 months',
        level: 'Intermediate',
        price: 48000,
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'Development',
        features: [
            'React Native fundamentals',
            'Flutter & Dart',
            'Mobile UI/UX patterns',
            'State management',
            'API integration',
            'Push notifications',
            'App store deployment',
            'Native modules',
            'Live projects'
        ],
        syllabus: [
            {
                module: 'Mobile Development Basics',
                topics: ['Mobile Architecture', 'Navigation Patterns', 'Responsive Design', 'Platform Differences']
            },
            {
                module: 'React Native',
                topics: ['Components & Styling', 'Navigation', 'AsyncStorage', 'Third-party Libraries']
            },
            {
                module: 'Flutter Development',
                topics: ['Dart Language', 'Widgets & Layouts', 'State Management', 'Firebase Integration']
            }
        ],
        instructor: 'Bibek Shrestha',
        enrollmentCount: 140,
        rating: 4.7
    },
    {
        id: '6',
        title: 'Project Management',
        slug: 'project-management',
        description: 'Learn agile project management methodologies, Scrum framework, and tools like JIRA. Prepare for PMP and Scrum Master certifications.',
        duration: '3 months',
        level: 'Beginner',
        price: 32000,
        thumbnail: 'https://images.unsplash.com/photo-145416520573eb-e7054ae5367b?auto=format&fit=crop&w=800&q=80',
        category: 'Management',
        features: [
            'Agile & Scrum methodology',
            'JIRA & Confluence',
            'Sprint planning',
            'Team collaboration',
            'Risk management',
            'Stakeholder communication',
            'Metrics & reporting',
            'Certification prep',
            'Case studies'
        ],
        syllabus: [
            {
                module: 'Project Management Fundamentals',
                topics: ['Project Life Cycle', 'Scope & Requirements', 'Time & Cost Management', 'Quality Assurance']
            },
            {
                module: 'Agile Methodologies',
                topics: ['Scrum Framework', 'Kanban', 'Sprint Planning', 'Daily Standups']
            },
            {
                module: 'Tools & Techniques',
                topics: ['JIRA Administration', 'Confluence Documentation', 'Gantt Charts', 'Burndown Charts']
            }
        ],
        instructor: 'Nabin Thapa',
        enrollmentCount: 110,
        rating: 4.5
    }
];

export const courseCategories = [
    'All',
    'Development',
    'Design',
    'Testing',
    'DevOps',
    'Management'
];
