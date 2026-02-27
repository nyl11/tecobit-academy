import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const TeamMembers: CollectionConfig = {
    slug: 'team-members',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'position', 'order'],
        group: 'CORE',
    },
    access: {
        read: () => true,
        create: adminOnly,
        update: adminOnly,
        delete: adminOnly,
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
            type: 'upload',
            relationTo: 'media',
            required: false,
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
