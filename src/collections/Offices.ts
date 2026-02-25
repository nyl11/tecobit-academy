import type { CollectionConfig } from 'payload'

export const Offices: CollectionConfig = {
    slug: 'offices',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'city', 'country', 'isPrimary'],
        group: 'BUSINESS',
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
            name: 'address',
            type: 'text',
            required: true,
        },
        {
            name: 'city',
            type: 'text',
            required: true,
        },
        {
            name: 'state',
            type: 'text',
            required: false,
        },
        {
            name: 'country',
            type: 'text',
            required: true,
        },
        {
            name: 'postalCode',
            type: 'text',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'image',
            type: 'text',
            required: false,
            admin: {
                description: 'URL to office image',
            },
        },
        {
            name: 'latitude',
            type: 'number',
            required: false,
        },
        {
            name: 'longitude',
            type: 'number',
            required: false,
        },
        {
            name: 'hoursOfOperation',
            type: 'text',
            required: false,
        },
        {
            name: 'isPrimary',
            type: 'checkbox',
            defaultValue: false,
        },
    ],
}
