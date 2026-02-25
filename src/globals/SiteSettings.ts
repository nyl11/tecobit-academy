import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    admin: {
        group: 'GLOBALS',
    },
    access: {
        read: () => true,
        update: ({ req: { user } }) => !!user,
    },
    fields: [
        {
            name: 'siteName',
            type: 'text',
            required: true,
            defaultValue: 'Training Point',
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        }
    ],
}
