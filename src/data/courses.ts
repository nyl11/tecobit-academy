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
        title: 'Full-Stack Web Development Specialization',
        slug: 'web-development',
        description: 'A comprehensive academic track mastering modern web architecture with React, Node.js, and cloud ecosystems. Designed for aspiring software engineers.',
        duration: '6 months',
        level: 'Beginner',
        price: 45000,
        discount: 10,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        category: 'Development',
        features: [
            'HTML5, CSS3, JavaScript ES6+',
            'React.js & Next.js Architecture',
            'Node.js & Scalable Backends',
            'Advanced Data Modeling',
            'Architectural Patterns',
            'Professional Version Control',
            'Cloud Deployment Strategies',
            'Capping Projects & Dissertation',
            'Post-Graduate Internship Programs'
        ],
        syllabus: [
            {
                module: 'Phase I: Frontend Architecture',
                topics: ['Semantic Web Engineering', 'Advanced Responsive Layouts', 'Computational Thinking', 'State Management Principles']
            },
            {
                module: 'Phase II: Dynamic Systems',
                topics: ['Asynchronous Operations', 'Functional Programming', 'API Design & Integration', 'Client-Side Rendering']
            },
            {
                module: 'Phase III: Enterprise React',
                topics: ['Component Design Patterns', 'Advanced Hooks & Context', 'Performance Optimization', 'Systems Scalability']
            },
            {
                module: 'Phase IV: Server-Side Engineering',
                topics: ['Node.js Runtime Architecture', 'Security Protocols', 'Distributed Databases', 'Microservices Overview']
            }
        ],
        instructor: 'Aashish Thapa',
        enrollmentCount: 250,
        rating: 4.8
    },
    {
        id: '2',
        title: 'User Experience (UX) Research & Design Certification',
        slug: 'ui-ux-design',
        description: 'Advanced pedagogical approach to user-centered design systems, cognitive psychology, and industry-standard prototyping methodologies.',
        duration: '4 months',
        level: 'Beginner',
        price: 35000,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        category: 'Design',
        features: [
            'Cognitive Design & Research',
            'Interactive Prototyping Systems',
            'Enterprise Design Standards',
            'Behavioral Analysis Methods',
            'Information Hierarchy',
            'Visual Communication Principles',
            'Systems Usability Assessment',
            'Professional Portfolio Curation',
            'Collaborative Case Studies'
        ],
        syllabus: [
            {
                module: 'Theories of Visual Design',
                topics: ['Color Psychology', 'Typographic Systems', 'Grid & Layout Theory', 'Design Language Systems']
            },
            {
                module: 'Research Methodologies',
                topics: ['User Persona Development', 'Ethnographic Research', 'Competitive Matrix Analysis', 'Quantitative Surveys']
            },
            {
                module: 'Systems Prototyping',
                topics: ['Architectural Wireframing', 'High-Fidelity Modeling', 'Interaction Design', 'Technical Handoff Protocols']
            }
        ],
        instructor: 'Kritika Rajbhandari',
        enrollmentCount: 180,
        rating: 4.7
    },
    {
        id: '3',
        title: 'Professional Quality Assurance & Systems Testing',
        slug: 'quality-assurance',
        description: 'A rigorous curriculum focused on software integrity, automated validation frameworks, and enterprise-grade testing methodologies.',
        duration: '3 months',
        level: 'Beginner',
        price: 30000,
        thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
        category: 'Testing',
        features: [
            'Validation Fundamentals',
            'Systematic Case Design',
            'Automation Engineering',
            'Advanced API Validation',
            'Performance & Stress Analysis',
            'Agile Governance Standards',
            'Lifecycle Management Tools',
            'CI/CD Pipeline Integration',
            'Practicum Assessments'
        ],
        syllabus: [
            {
                module: 'Theoretical Foundations',
                topics: ['SDLC & STLC Frameworks', 'Testing Taxonomy', 'Hierarchical Test Levels', 'System Deficiency Lifecycle']
            },
            {
                module: 'Manual Validation Protocols',
                topics: ['Strategic Test Planning', 'Formal Case Documentation', 'Execution Governance', 'Defect Reporting Systems']
            },
            {
                module: 'Automation Engineering Phase',
                topics: ['Selenium WebDriver Architecture', 'Framework Design Patterns', 'Declarative Scripting', 'Continuous Integration']
            }
        ],
        instructor: 'Suresh Dhakal',
        enrollmentCount: 150,
        rating: 4.6
    },
    {
        id: '4',
        title: 'Advanced DevOps & Site Reliability Engineering',
        slug: 'devops-engineering',
        description: 'Elite technical track mastering platform orchestration, automated infrastructure, and continuous delivery systems for modern enterprises.',
        duration: '5 months',
        level: 'Intermediate',
        price: 50000,
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        category: 'DevOps',
        features: [
            'Linux Systems Governance',
            'Advanced Orchestration',
            'Automated Integration Pipelines',
            'Cloud Architecture Frameworks',
            'Infrastructure as Code (IaC)',
            'SRE Observability Standards',
            'Configuration Management Systems',
            'Enterprise Security Protocols',
            'Complex Systems Simulation'
        ],
        syllabus: [
            {
                module: 'Systems Infrastructure',
                topics: ['Unix Architecture', 'Automated Shell Scripting', 'Permission Hierarchies', 'System Hardening']
            },
            {
                module: 'Containerization Science',
                topics: ['Docker Engine Internals', 'Composition Strategies', 'Network Virtualization', 'Registry Management']
            },
            {
                module: 'Orchestration & Governance',
                topics: ['Kubernetes Control Plane', 'Scalable Deployments', 'Ingress Control Systems', 'Resource Optimization']
            }
        ],
        instructor: 'Rajan Maharjan',
        enrollmentCount: 120,
        rating: 4.9
    },
    {
        id: '5',
        title: 'Mobile Systems Engineering Specialization',
        slug: 'mobile-app-development',
        description: 'Professional curriculum for multi-platform mobility solutions, focusing on cross-platform frameworks and native interaction patterns.',
        duration: '6 months',
        level: 'Intermediate',
        price: 48000,
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'Development',
        features: [
            'Cross-Platform Architecture',
            'Mobile Behavioral Patterns',
            'Advanced State Persistence',
            'Institutional API Integration',
            'Notification Ecosystems',
            'Global Distribution Protocols',
            'Native Bridge Architecture',
            'Captsone Mobility Projects'
        ],
        syllabus: [
            {
                module: 'Mobility Foundations',
                topics: ['Systemic Mobile Architecture', 'Interaction Paradigms', 'Context-Aware Design', 'Cross-Platform Strategies']
            },
            {
                module: 'Reactive Mobility (React Native)',
                topics: ['Component Systems', 'Persistent Navigation', 'Resource Managed Storage', 'Native Module Bridges']
            },
            {
                module: 'Declarative UI (Flutter)',
                topics: ['Dart Language Theory', 'Widget Implementation', 'Reactive State Patterns', 'Enterprise Backend Services']
            }
        ],
        instructor: 'Bibek Shrestha',
        enrollmentCount: 140,
        rating: 4.7
    },
    {
        id: '6',
        title: 'Strategic Project Management & Agile Governance',
        slug: 'project-management',
        description: 'Leadership track designed for technical project managers, focusing on governance frameworks, risk mitigation, and systemic delivery.',
        duration: '3 months',
        level: 'Beginner',
        price: 32000,
        thumbnail: 'https://images.unsplash.com/photo-145416520573eb-e7054ae5367b?auto=format&fit=crop&w=800&q=80',
        category: 'Management',
        features: [
            'Agile Governance Frameworks',
            'Strategic Collaboration Tools',
            'Lifecycle Planning Systems',
            'Organizational Risk Mitigation',
            'Technical Stakeholder Alignment',
            'Outcome-Based Metrics',
            'Certification Board Prep',
            'Corporate Case Analysis'
        ],
        syllabus: [
            {
                module: 'Governance Fundamentals',
                topics: ['Institutional Project Lifecycles', 'Hierarchical Requirements', 'Capital & Resource Planning', 'Quality Management Standards']
            },
            {
                module: 'Methodological Frameworks',
                topics: ['Agile Theory & Practice', 'Empirical Process Control', 'Sprint Governance', 'Adaptive Flow Management']
            },
            {
                module: 'Operational Control Systems',
                topics: ['Information Radiators', 'Collaborative Intelligence', 'Predictive Modeling', 'Performance Analytics']
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
