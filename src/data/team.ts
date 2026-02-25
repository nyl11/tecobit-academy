export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    specialization: string[];
    linkedin?: string;
    email?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Aashish Thapa',
        role: 'Co-Founder & Lead Instructor',
        bio: 'Full-stack developer with 8+ years of experience in web development and software engineering.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
        specialization: ['Web Development', 'React', 'Node.js'],
        linkedin: 'https://linkedin.com/in/aashish-thapa'
    },
    {
        id: '2',
        name: 'Bibek Shrestha',
        role: 'Mobile Development Instructor',
        bio: 'Expert mobile developer specializing in React Native and Flutter with published apps on both stores.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        specialization: ['React Native', 'Flutter', 'Mobile Development'],
        linkedin: 'https://linkedin.com/in/bibek-shrestha'
    },
    {
        id: '3',
        name: 'Kritika Rajbhandari',
        role: 'UI/UX Design Instructor',
        bio: 'Creative designer with a passion for user-centered design and 5+ years of experience.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        specialization: ['UI/UX Design', 'Figma', 'User Research'],
        linkedin: 'https://linkedin.com/in/kritika-rajbhandari'
    },
    {
        id: '4',
        name: 'Suresh Dhakal',
        role: 'QA & Testing Instructor',
        bio: 'Quality assurance specialist with expertise in manual and automated testing frameworks.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        specialization: ['QA', 'Selenium', 'Test Automation'],
        linkedin: 'https://linkedin.com/in/suresh-dhakal'
    },
    {
        id: '5',
        name: 'Rajan Maharjan',
        role: 'DevOps Instructor',
        bio: 'DevOps engineer with extensive experience in cloud infrastructure and CI/CD pipelines.',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80',
        specialization: ['DevOps', 'AWS', 'Kubernetes'],
        linkedin: 'https://linkedin.com/in/rajan-maharjan'
    },
    {
        id: '6',
        name: 'Nabin Thapa',
        role: 'Project Management Instructor',
        bio: 'Certified PMP and Scrum Master with 10+ years of IT project management experience.',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80',
        specialization: ['Project Management', 'Agile', 'Scrum'],
        linkedin: 'https://linkedin.com/in/nabin-thapa'
    }
];
