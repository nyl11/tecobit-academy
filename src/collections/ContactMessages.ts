import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const ContactMessages: CollectionConfig = {
    slug: 'contact-messages',
    admin: {
        useAsTitle: 'subject',
        defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
        group: 'BUSINESS',
    },
    access: {
        read: adminOnly,
        create: () => true,
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
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'phoneNumber',
            type: 'text',
            required: false,
        },
        {
            name: 'subject',
            type: 'text',
            required: true,
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Read', value: 'read' },
                { label: 'Replied', value: 'replied' },
            ],
        },
    ],
}
