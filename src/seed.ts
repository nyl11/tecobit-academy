import { Payload } from 'payload';

export const seed = async (payload: Payload): Promise<void> => {
    try {
        console.log('Starting database seeding...');

        // Clear existing data (optional)
        await payload.delete({
            collection: 'courses',
            where: {},
        });
        await payload.delete({
            collection: 'team-members',
            where: {},
        });
        await payload.delete({
            collection: 'news-events',
            where: {},
        });
        await payload.delete({
            collection: 'offices',
            where: {},
        });
        await payload.delete({
            collection: 'contact-messages',
            where: {},
        });

        // Seed Courses
        console.log('Seeding courses...');
        const courses = await Promise.all([
            payload.create({
                collection: 'courses',
                draft: false,
                data: {
                    title: 'Web Development Bootcamp',
                    slug: 'web-development-bootcamp',
                    description: 'Complete web development course covering HTML, CSS, JavaScript, and modern frameworks like React and Next.js',
                    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
                    price: 499.99,
                    duration: '12 weeks',
                    level: 'Beginner',
                    instructor: 'John Smith',
                    status: 'published',
                    category: 'Development',
                    featured: true,
                    mode: 'Physical',
                    batches: [
                        { startDate: new Date('2025-11-30').toISOString(), startTime: '07:00 AM', endTime: '08:30 AM' },
                        { startDate: new Date('2025-12-05').toISOString(), startTime: '05:30 PM', endTime: '07:00 PM' },
                    ],
                    curriculum: [
                        { title: 'HTML & CSS Fundamentals', duration: '2 weeks' },
                        { title: 'JavaScript Essentials', duration: '3 weeks' },
                        { title: 'React & Next.js', duration: '4 weeks' },
                        { title: 'Backend & Deployment', duration: '3 weeks' },
                    ],
                },
            }),
            payload.create({
                collection: 'courses',
                draft: false,
                data: {
                    title: 'Data Science Fundamentals',
                    slug: 'data-science-fundamentals',
                    description: 'Learn Python, statistics, machine learning, and data visualization to become a data scientist',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                    price: 599.99,
                    duration: '16 weeks',
                    level: 'Intermediate',
                    instructor: 'Sarah Johnson',
                    status: 'published',
                    category: 'Data Science',
                    featured: true,
                    mode: 'Online',
                    batches: [
                        { startDate: new Date('2025-12-10').toISOString(), startTime: '11:00 AM', endTime: '12:30 PM' },
                    ],
                    curriculum: [
                        { title: 'Python Programming', duration: '4 weeks' },
                        { title: 'Statistics & Probability', duration: '3 weeks' },
                        { title: 'Machine Learning', duration: '5 weeks' },
                        { title: 'Data Visualization', duration: '4 weeks' },
                    ],
                },
            }),
            payload.create({
                collection: 'courses',
                draft: false,
                data: {
                    title: 'Mobile App Development',
                    slug: 'mobile-app-development',
                    description: 'Build iOS and Android apps using React Native and Flutter with hands-on projects',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
                    price: 549.99,
                    duration: '14 weeks',
                    level: 'Intermediate',
                    instructor: 'Michael Chen',
                    status: 'published',
                    category: 'Mobile',
                    featured: false,
                    mode: 'Hybrid',
                    batches: [],
                    curriculum: [
                        { title: 'Mobile Development Basics', duration: '2 weeks' },
                        { title: 'React Native', duration: '6 weeks' },
                        { title: 'Flutter', duration: '4 weeks' },
                        { title: 'App Deployment', duration: '2 weeks' },
                    ],
                },
            }),
            payload.create({
                collection: 'courses',
                draft: false,
                data: {
                    title: 'Digital Marketing Mastery',
                    slug: 'digital-marketing-mastery',
                    description: 'Master SEO, social media marketing, content strategy, and analytics to grow your business',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                    price: 399.99,
                    duration: '10 weeks',
                    level: 'Beginner',
                    instructor: 'Emily Rodriguez',
                    status: 'published',
                    category: 'Marketing',
                    featured: false,
                    mode: 'Online',
                    batches: [],
                    curriculum: [
                        { title: 'Digital Marketing Fundamentals', duration: '2 weeks' },
                        { title: 'SEO & Content Marketing', duration: '3 weeks' },
                        { title: 'Social Media Strategy', duration: '3 weeks' },
                        { title: 'Analytics & Optimization', duration: '2 weeks' },
                    ],
                },
            }),
            payload.create({
                collection: 'courses',
                draft: false,
                data: {
                    title: 'Cybersecurity Essentials',
                    slug: 'cybersecurity-essentials',
                    description: 'Learn network security, ethical hacking, and security best practices to protect systems',
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
                    price: 649.99,
                    duration: '18 weeks',
                    level: 'Advanced',
                    instructor: 'David Lee',
                    status: 'published',
                    category: 'Cybersecurity',
                    featured: true,
                    mode: 'Physical',
                    batches: [],
                    curriculum: [
                        { title: 'Security Fundamentals', duration: '3 weeks' },
                        { title: 'Network Security', duration: '5 weeks' },
                        { title: 'Ethical Hacking', duration: '6 weeks' },
                        { title: 'Security Operations', duration: '4 weeks' },
                    ],
                },
            }),
        ]);
        console.log(`✓ Created ${courses.length} courses`);

        // Seed Team Members
        console.log('Seeding team members...');
        const teamMembers = await Promise.all([
            payload.create({
                collection: 'team-members',
                data: {
                    name: 'Dr. James Anderson',
                    position: 'CEO & Founder',
                    bio: 'With 20+ years in education technology, James leads our vision of accessible, quality education for all. Former Harvard professor and EdTech entrepreneur.',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
                    email: 'james@example.com',
                    linkedin: 'https://linkedin.com/in/jamesanderson',
                    twitter: '@jamesanderson',
                    order: 1,
                },
            }),
            payload.create({
                collection: 'team-members',
                data: {
                    name: 'Maria Garcia',
                    position: 'Chief Technology Officer',
                    bio: 'Former Google engineer passionate about building scalable learning platforms. Expert in cloud architecture and AI-powered education.',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
                    email: 'maria@example.com',
                    linkedin: 'https://linkedin.com/in/mariagarcia',
                    twitter: '@mariatech',
                    order: 2,
                },
            }),
            payload.create({
                collection: 'team-members',
                data: {
                    name: 'Robert Williams',
                    position: 'Head of Curriculum',
                    bio: 'Educational psychologist dedicated to creating engaging, effective learning experiences. PhD in Learning Sciences from MIT.',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                    email: 'robert@example.com',
                    linkedin: 'https://linkedin.com/in/robertwilliams',
                    twitter: '@robedu',
                    order: 3,
                },
            }),
            payload.create({
                collection: 'team-members',
                data: {
                    name: 'Linda Park',
                    position: 'Head of Student Success',
                    bio: 'Passionate about student outcomes and career development. 15 years experience in higher education and career coaching.',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                    email: 'linda@example.com',
                    linkedin: 'https://linkedin.com/in/lindapark',
                    twitter: '@lindapark',
                    order: 4,
                },
            }),
        ]);
        console.log(`✓ Created ${teamMembers.length} team members`);

        // Seed News & Events
        console.log('Seeding news and events...');
        const newsEvents = await Promise.all([
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'Annual Tech Summit 2025',
                    type: 'event',
                    description: 'Join us for our biggest event of the year featuring industry leaders, hands-on workshops, and networking opportunities with fellow learners and professionals.',
                    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
                    location: 'San Francisco Convention Center',
                    address: '747 Howard St, San Francisco, CA 94103',
                    eventDate: new Date('2025-03-15T09:00:00').toISOString(),
                    endDate: new Date('2025-03-17T18:00:00').toISOString(),
                    registrationUrl: 'https://example.com/register/tech-summit-2025',
                    isFeatured: true,
                    status: 'published',
                },
            }),
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'New Partnership with Major Tech Companies',
                    type: 'news',
                    description: 'We\'re excited to announce strategic partnerships with Google, Microsoft, and Amazon to provide exclusive learning resources, certifications, and career opportunities for our students.',
                    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
                    location: null,
                    address: null,
                    eventDate: null,
                    endDate: null,
                    registrationUrl: null,
                    isFeatured: true,
                    status: 'published',
                },
            }),
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'Free Coding Workshop for Beginners',
                    type: 'event',
                    description: 'A 3-day intensive workshop covering HTML, CSS, and JavaScript fundamentals. Perfect for absolute beginners looking to start their coding journey.',
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=800&fit=crop',
                    location: 'Online via Zoom',
                    address: null,
                    eventDate: new Date('2025-02-20T10:00:00').toISOString(),
                    endDate: new Date('2025-02-22T15:00:00').toISOString(),
                    registrationUrl: 'https://example.com/register/coding-workshop',
                    isFeatured: false,
                    status: 'published',
                },
            }),
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'Platform Reaches 100,000 Students Milestone',
                    type: 'news',
                    description: 'We\'re proud to announce that over 100,000 students have enrolled in our courses worldwide, representing 150+ countries and diverse backgrounds.',
                    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop',
                    location: null,
                    address: null,
                    eventDate: null,
                    endDate: null,
                    registrationUrl: null,
                    isFeatured: true,
                    status: 'published',
                },
            }),
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'Women in Tech Conference 2025',
                    type: 'event',
                    description: 'Celebrating and empowering women in technology with inspiring talks, panel discussions, and networking opportunities with industry leaders.',
                    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
                    location: 'New York City',
                    address: 'Jacob K. Javits Convention Center, 429 11th Ave, New York, NY 10001',
                    eventDate: new Date('2025-04-10T08:30:00').toISOString(),
                    endDate: new Date('2025-04-12T17:00:00').toISOString(),
                    registrationUrl: 'https://example.com/register/women-in-tech',
                    isFeatured: false,
                    status: 'published',
                },
            }),
            payload.create({
                collection: 'news-events',
                data: {
                    title: 'New AI-Powered Learning Assistant Launched',
                    type: 'news',
                    description: 'Introducing our AI-powered learning assistant that provides 24/7 support, personalized study recommendations, and instant answers to your questions.',
                    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop',
                    location: null,
                    address: null,
                    eventDate: null,
                    endDate: null,
                    registrationUrl: null,
                    isFeatured: true,
                    status: 'published',
                },
            }),
        ]);
        console.log(`✓ Created ${newsEvents.length} news and events`);

        // Seed Offices
        console.log('Seeding offices...');
        const offices = await Promise.all([
            payload.create({
                collection: 'offices',
                data: {
                    name: 'Headquarters - San Francisco',
                    address: '123 Tech Street, Suite 500',
                    city: 'San Francisco',
                    state: 'CA',
                    country: 'USA',
                    postalCode: '94102',
                    phone: '+1 (415) 555-0123',
                    email: 'sf@example.com',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
                    latitude: 37.7749,
                    longitude: -122.4194,
                    hoursOfOperation: 'Monday - Friday: 9:00 AM - 6:00 PM',
                    isPrimary: true,
                },
            }),
            payload.create({
                collection: 'offices',
                data: {
                    name: 'New York Office',
                    address: '456 Innovation Ave, Floor 12',
                    city: 'New York',
                    state: 'NY',
                    country: 'USA',
                    postalCode: '10001',
                    phone: '+1 (212) 555-0456',
                    email: 'ny@example.com',
                    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
                    latitude: 40.7128,
                    longitude: -74.0060,
                    hoursOfOperation: 'Monday - Friday: 9:00 AM - 6:00 PM',
                    isPrimary: false,
                },
            }),
            payload.create({
                collection: 'offices',
                data: {
                    name: 'London Office',
                    address: '789 Learning Lane',
                    city: 'London',
                    state: null,
                    country: 'UK',
                    postalCode: 'EC1A 1BB',
                    phone: '+44 20 7123 4567',
                    email: 'london@example.com',
                    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
                    latitude: 51.5074,
                    longitude: -0.1278,
                    hoursOfOperation: 'Monday - Friday: 9:00 AM - 5:00 PM GMT',
                    isPrimary: false,
                },
            }),
            payload.create({
                collection: 'offices',
                data: {
                    name: 'Singapore Office',
                    address: '101 Tech Park Drive, #15-03',
                    city: 'Singapore',
                    state: null,
                    country: 'Singapore',
                    postalCode: '117588',
                    phone: '+65 6789 0123',
                    email: 'singapore@example.com',
                    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop',
                    latitude: 1.3521,
                    longitude: 103.8198,
                    hoursOfOperation: 'Monday - Friday: 9:00 AM - 6:00 PM SGT',
                    isPrimary: false,
                },
            }),
        ]);
        console.log(`✓ Created ${offices.length} offices`);

        // Seed Contact Messages (sample)
        console.log('Seeding contact messages...');
        const contactMessages = await Promise.all([
            payload.create({
                collection: 'contact-messages',
                data: {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    subject: 'Course Inquiry',
                    message: 'I\'m interested in learning more about your web development bootcamp. What are the prerequisites and start dates?',
                    status: 'new',
                    phoneNumber: '+1 (555) 123-4567',
                },
            }),
            payload.create({
                collection: 'contact-messages',
                data: {
                    name: 'Jane Smith',
                    email: 'jane.smith@example.com',
                    subject: 'Partnership Opportunity',
                    message: 'We\'d like to discuss a potential partnership for corporate training programs. Please contact me at your earliest convenience.',
                    status: 'read',
                    phoneNumber: '+1 (555) 987-6543',
                },
            }),
        ]);
        console.log(`✓ Created ${contactMessages.length} contact messages`);

        console.log('✅ Database seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
};
