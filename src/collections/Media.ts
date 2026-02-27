import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access'

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        group: 'CONTENT',
    },
    upload: true,
    access: {
        read: () => true,
        create: adminOnly,
        update: adminOnly,
        delete: adminOnly,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
