export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export const faqs: FAQ[] = [
    {
        id: '1',
        question: 'What are the course fees for IT courses?',
        answer: 'Our course fees range from NPR 30,000 to NPR 50,000 depending on the program duration and complexity. We offer flexible payment plans and early bird discounts.',
        category: 'General'
    },
    {
        id: '2',
        question: 'Is there a project/assignment after each class in Nepal?',
        answer: 'Yes, we believe in practical learning. After each module, students receive assignments and projects that mirror real-world scenarios to reinforce learning.',
        category: 'Learning'
    },
    {
        id: '3',
        question: 'Do I get an IT course certificate after completing your course?',
        answer: 'Absolutely! Upon successful completion of your course, you will receive a certification from Training Point that is recognized by industry partners.',
        category: 'Certification'
    },
    {
        id: '4',
        question: 'Will IT courses give me a good enough foundation in Nepal?',
        answer: 'Yes! Our curriculum is designed by industry experts and covers both fundamentals and advanced topics, ensuring you have a strong foundation to build your IT career.',
        category: 'Career'
    },
    {
        id: '5',
        question: 'What is an IT training center?',
        answer: 'An IT training center provides specialized education in various technology domains including software development, design, testing, and more, with practical, job-oriented training.',
        category: 'General'
    },
    {
        id: '6',
        question: 'How long is a complete IT course in Nepal?',
        answer: 'Our IT courses typically range from 3 to 6 months depending on the program. We offer both intensive and flexible schedules to accommodate different learning paces.',
        category: 'Duration'
    },
    {
        id: '7',
        question: 'What are the pros and cons of choosing IT as a career?',
        answer: 'Pros: High demand, good salaries, remote work opportunities, continuous learning, creative problem-solving. Cons: Requires continuous upskilling, can be competitive, sometimes requires long hours during project deadlines.',
        category: 'Career'
    },
    {
        id: '8',
        question: 'Where to pursue IT courses in Nepal?',
        answer: 'Training Point, located in Gairidhara, Kathmandu, offers comprehensive IT courses with experienced instructors, modern facilities, and strong industry connections.',
        category: 'Location'
    }
];
