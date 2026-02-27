import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const NewsEvents: CollectionConfig = {
    slug: 'news-events',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'type', 'eventDate', 'isFeatured', 'status'],
        group: 'CONTENT',
    },
    access: {
        read: () => true,
        create: adminOnly,
        update: adminOnly,
        delete: adminOnly,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            type: 'select',
            required: true,
            options: [
                { label: 'News', value: 'news' },
                { label: 'Event', value: 'event' },
            ],
        },
        {
            name: 'description',
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
            name: 'location',
            type: 'text',
            required: false,
            admin: {
                condition: (data) => data.type === 'event',
            },
        },
        {
            name: 'address',
            type: 'text',
            required: false,
            admin: {
                condition: (data) => data.type === 'event',
            },
        },
        {
            name: 'eventDate',
            type: 'date',
            required: false,
            admin: {
                condition: (data) => data.type === 'event',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'endDate',
            type: 'date',
            required: false,
            admin: {
                condition: (data) => data.type === 'event',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'registrationUrl',
            type: 'text',
            required: false,
            admin: {
                condition: (data) => data.type === 'event',
            },
        },
        {
            name: 'isFeatured',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
        },
    ],
}
