import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
    slug: 'team-members',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'position', 'order'],
        group: 'CORE',
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
            name: 'position',
            type: 'text',
            required: true,
        },
        {
            name: 'bio',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            type: 'text',
            required: false,
            admin: {
                description: 'URL to profile image',
            },
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'linkedin',
            type: 'text',
            required: false,
        },
        {
            name: 'twitter',
            type: 'text',
            required: false,
        },
        {
            name: 'order',
            type: 'number',
            required: false,
            admin: {
                description: 'Display order (lower numbers appear first)',
            },
        },
    ],
}
