export interface NewsItem {
    id: string;
    title: string;
    category: 'News' | 'Event' | 'Workshop';
    date: string;
    summary: string;
    image: string;
    location?: string;
}

export const newsAndEvents: NewsItem[] = [
    {
        id: '1',
        title: 'Grand Opening of New IT Lab',
        category: 'News',
        date: 'February 15, 2024',
        summary: 'We are thrilled to announce the opening of our state-of-the-art computer lab featuring the latest MacBooks and high-performance workstations for our students.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '2',
        title: 'Free Workshop: Intro to AI',
        category: 'Workshop',
        date: 'March 01, 2024',
        location: 'Tecobit Hall A',
        summary: 'Join us for a free 3-hour workshop on the basics of Artificial Intelligence and how to get started with machine learning using Python.',
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '3',
        title: 'Tech Career Fair 2024',
        category: 'Event',
        date: 'March 20, 2024',
        location: 'Kathmandu Banquet',
        summary: 'Meet top tech companies in Nepal and explore internship and job opportunities. Open for all Training Point graduates and students.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '4',
        title: 'Partnership with TechGiant Inc.',
        category: 'News',
        date: 'January 28, 2024',
        summary: 'We have officially partnered with TechGiant Inc. to provide curriculum guidance and placement assistance for our DevOps students.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    }
];
