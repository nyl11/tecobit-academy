
import { CollectionConfig } from 'payload'

export const Enrollments: CollectionConfig = {
    slug: 'enrollments',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'phone', 'course', 'education', 'status', 'createdAt'],
        group: 'BUSINESS',
        components: {
            views: {
                list: {
                    actions: [] // Removes the "Create New" button from the list view
                }
            }
        },
    },
    access: {
        read: ({ req: { user } }) => Boolean(user), // Only admin/authenticated users can read
        create: () => true, // Still true for the public facing API form submissions
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'Full name of the student',
                    },
                },
                {
                    name: 'email',
                    type: 'email',
                    required: true,
                },
            ],
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'phone',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'Contact phone number',
                    },
                },
                {
                    name: 'address',
                    type: 'text',
                    admin: {
                        description: 'Student\'s current address/location',
                    },
                },
            ],
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'education',
                    type: 'select',
                    options: [
                        { label: 'SEE / SLC', value: 'see' },
                        { label: '+2 / Intermediate', value: 'plus-two' },
                        { label: "Bachelor's Degree", value: 'bachelors' },
                        { label: "Master's Degree", value: 'masters' },
                        { label: 'Other', value: 'other' },
                    ],
                    admin: {
                        description: 'Highest education level of the student',
                    },
                },
                {
                    name: 'preferredBatch',
                    type: 'text',
                    admin: {
                        description: 'Preferred batch timing (if applicable)',
                    },
                },
            ],
        },
        {
            name: 'course',
            type: 'relationship',
            relationTo: 'courses',
            required: true,
            admin: {
                description: 'The course the student wants to enroll in',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Contacted', value: 'contacted' },
                { label: 'Enrolled', value: 'enrolled' },
                { label: 'Closed', value: 'closed' },
            ],
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'message',
            type: 'textarea',
            admin: {
                description: 'Additional message or notes from the student',
            },
        },
    ],
}
