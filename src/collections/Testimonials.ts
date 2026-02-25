import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'company', 'rating', 'order', 'published'],
        group: 'CONTENT',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
            required: true,
        },
        {
            name: 'company',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            type: 'textarea',
            required: true,
        },
        {
            name: 'avatar',
            type: 'text',
            required: false,
            admin: {
                description: 'Public image URL (e.g. Unsplash)',
            },
        },
        {
            name: 'rating',
            type: 'number',
            required: true,
            defaultValue: 5,
            min: 1,
            max: 5,
        },
        {
            name: 'course',
            type: 'text',
            required: false,
        },
        {
            name: 'order',
            type: 'number',
            required: false,
            admin: {
                description: 'Lower numbers appear first',
            },
        },
        {
            name: 'published',
            type: 'checkbox',
            defaultValue: true,
        },
    ],
}
