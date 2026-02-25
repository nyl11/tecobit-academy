export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
    course: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sanjana Pradhan',
        role: 'Junior Developer',
        company: 'Tech Company Nepal',
        content: 'Training Point transformed my career! The hands-on approach and real-world projects helped me land my dream job as a web developer within 3 months of completing the course.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        course: 'Web Development'
    },
    {
        id: '2',
        name: 'Roshan Shrestha',
        role: 'UI/UX Designer',
        company: 'Digital Agency',
        content: 'The UI/UX course was incredibly comprehensive. The instructors are industry professionals who really care about student success. I now work on exciting projects every day!',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        course: 'UI/UX Design'
    }
];
