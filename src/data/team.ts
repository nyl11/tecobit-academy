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
        role: 'Co-Founder & Academic Lead',
        bio: 'Senior Software Engineer and Pedagogical Expert with 8+ years of experience in system architecture and technical education.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
        specialization: ['Web Architecture', 'Enterprise React', 'Cloud Ecosystems'],
        linkedin: 'https://linkedin.com/in/aashish-thapa'
    },
    {
        id: '2',
        name: 'Bibek Shrestha',
        role: 'Senior Mobility Faculty',
        bio: 'Mobile systems engineer specializing in cross-platform architecture and native bridge implementation for enterprise mobility.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        specialization: ['Systems Mobility', 'DART Theory', 'Reactive Infrastructure'],
        linkedin: 'https://linkedin.com/in/bibek-shrestha'
    },
    {
        id: '3',
        name: 'Kritika Rajbhandari',
        role: 'Design Systems & UX Faculty',
        bio: 'Strategic design lead focusing on user-centered research methodologies and cognitive design systems.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        specialization: ['Cognitive Design', 'Research Methodologies', 'Design Systems'],
        linkedin: 'https://linkedin.com/in/kritika-rajbhandari'
    },
    {
        id: '4',
        name: 'Suresh Dhakal',
        role: 'Systems Integrity & QA Faculty',
        bio: 'Expert in software verification and validation frameworks with a focus on automated governance and integrity.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        specialization: ['Verification Engineering', 'Validation Protocols', 'Integrity Systems'],
        linkedin: 'https://linkedin.com/in/suresh-dhakal'
    },
    {
        id: '5',
        name: 'Rajan Maharjan',
        role: 'DevOps & SRE Faculty',
        bio: 'Systems architect specializing in cloud orchestration, platform reliability, and continuous delivery governance.',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80',
        specialization: ['Cloud Orchestration', 'Platform Governance', 'Systems Reliability'],
        linkedin: 'https://linkedin.com/in/rajan-maharjan'
    },
    {
        id: '6',
        name: 'Nabin Thapa',
        role: 'Strategic Management Faculty',
        bio: 'Academic lead for project governance and agile methodologies with extensive experience in technical delivery leadership.',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80',
        specialization: ['Agile Governance', 'Strategic Lifecycle Management', 'Technical Leadership'],
        linkedin: 'https://linkedin.com/in/nabin-thapa'
    }
];
