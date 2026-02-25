export interface Career {
    id: string;
    title: string;
    slug: string;
    department: 'Teaching' | 'Marketing' | 'Operations' | 'Development';
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    description: string;
    requirements: string[];
    responsibilities: string[];
    salary_range?: string;
    postedDate: string;
    isOpen: boolean;
}

export const careers: Career[] = [
    {
        id: '1',
        title: 'Senior MERN Stack Instructor',
        slug: 'senior-mern-stack-instructor',
        department: 'Teaching',
        location: 'Gairidhara, Kathmandu (On-site)',
        type: 'Full-time',
        description: 'We are looking for an experienced MERN Stack Developer who serves as an instructor to guide our students through their journey to becoming full-stack developers. You will be responsible for delivering high-quality training, mentoring students, and updating the curriculum.',
        requirements: [
            '3+ years of professional experience with MongoDB, Express, React, and Node.js',
            'Strong understanding of JavaScript/TypeScript concepts',
            'Experience with state management (Redux, Context API)',
            'Previous teaching or mentorship experience is a huge plus',
            'Excellent communication and presentation skills'
        ],
        responsibilities: [
            'Conduct daily classes for the MERN stack course',
            'Mentor students during practical lab sessions',
            'Review code and provide constructive feedback',
            'Assist in curriculum development and updates',
            'Conduct mock interviews and help with student placement'
        ],
        salary_range: 'NPR 60,000 - 100,000',
        postedDate: '2024-10-15',
        isOpen: true
    },
    {
        id: '2',
        title: 'Digital Marketing Specialist',
        slug: 'digital-marketing-specialist',
        department: 'Marketing',
        location: 'Gairidhara, Kathmandu',
        type: 'Full-time',
        description: 'Join our marketing team to help Training Point reach more aspiring tech professionals. You will manage our social media presence, run ad campaigns, and create engaging content.',
        requirements: [
            '2+ years of experience in digital marketing',
            'Proficiency with Facebook Ads Manager and Google Ads',
            'Strong content writing and copywriting skills',
            'Basic graphic design skills (Canva/Photoshop) is preferred',
            'Analytical mindset to track and optimize campaign performance'
        ],
        responsibilities: [
            'Manage social media accounts (Facebook, Instagram, LinkedIn)',
            'Plan and execute lead generation campaigns',
            'Create engaging content for social media and blog',
            'Analyze marketing metrics and report to management',
            'Collaborate with the design team for visual assets'
        ],
        salary_range: 'NPR 35,000 - 60,000',
        postedDate: '2024-10-20',
        isOpen: true
    },
    {
        id: '3',
        title: 'Academic Counselor',
        slug: 'academic-counselor',
        department: 'Operations',
        location: 'Gairidhara, Kathmandu',
        type: 'Full-time',
        description: 'We need a friendly and knowledgeable counselor to guide prospective students in choosing the right career path and course. You will be the first point of contact for our students.',
        requirements: [
            'Bachelor’s degree in Management or related field',
            'Excellent verbal and written communication skills',
            'Basic understanding of IT career paths (Web, Graphic, QA, etc.)',
            'Empathetic and student-centric approach',
            'Proficiency with MS Office and CRM tools'
        ],
        responsibilities: [
            'Handle student inquiries via phone, email, and walk-ins',
            'Provide career counseling and course recommendations',
            'Manage student enrollment process',
            'Follow up with prospective leads',
            'Maintain student records and database'
        ],
        salary_range: 'NPR 25,000 - 40,000',
        postedDate: '2024-10-25',
        isOpen: true
    },
    {
        id: '4',
        title: 'Python/Django Instructor',
        slug: 'python-django-instructor',
        department: 'Teaching',
        location: 'Gairidhara, Kathmandu (Part-time / Morning)',
        type: 'Part-time',
        description: 'Seeking a Python expert to lead our morning classes. Perfect for professionals working in the industry who want to share their knowledge.',
        requirements: [
            '2+ years of experience with Python and Django',
            'Knowledge of REST APIs and Database design',
            'Passion for teaching and sharing knowledge',
            'Availability in morning shift (7:00 AM - 9:00 AM)'
        ],
        responsibilities: [
            'Deliver lectures and practical demos',
            'Assign and review student projects',
            'Provide guidance on best practices and industry standards'
        ],
        postedDate: '2024-11-01',
        isOpen: true
    }
];
