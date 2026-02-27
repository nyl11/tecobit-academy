import type { GlobalConfig } from 'payload'
import { adminOnly } from '../access'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    admin: {
        group: 'GLOBALS',
    },
    access: {
        read: () => true,
        update: adminOnly,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General',
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
                },
                {
                    label: 'Footer',
                    fields: [
                        {
                            name: 'footer',
                            type: 'group',
                            fields: [
                                {
                                    type: 'tabs',
                                    tabs: [
                                        {
                                            label: 'Contact Info',
                                            fields: [
                                                { name: 'address', type: 'text' },
                                                { name: 'phone', type: 'text' },
                                                { name: 'email', type: 'text' },
                                            ],
                                        },
                                        {
                                            label: 'Link Columns',
                                            fields: [
                                                {
                                                    name: 'columns',
                                                    type: 'array',
                                                    fields: [
                                                        { name: 'heading', type: 'text', required: true },
                                                        {
                                                            name: 'links',
                                                            type: 'array',
                                                            fields: [
                                                                { name: 'label', type: 'text', required: true },
                                                                { name: 'url', type: 'text', required: true },
                                                                { name: 'newTab', type: 'checkbox', defaultValue: false },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: 'Social Links',
                                            fields: [
                                                {
                                                    name: 'socialLinks',
                                                    type: 'array',
                                                    fields: [
                                                        {
                                                            name: 'platform',
                                                            type: 'select',
                                                            options: [
                                                                { label: 'Facebook', value: 'facebook' },
                                                                { label: 'Instagram', value: 'instagram' },
                                                                { label: 'LinkedIn', value: 'linkedin' },
                                                                { label: 'WhatsApp', value: 'whatsapp' },
                                                                { label: 'X (Twitter)', value: 'x' },
                                                                { label: 'YouTube', value: 'youtube' },
                                                                { label: 'TikTok', value: 'tiktok' },
                                                            ],
                                                            required: true,
                                                        },
                                                        { name: 'url', type: 'text', required: true },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: 'Legal',
                                            fields: [
                                                { name: 'copyrightText', type: 'text' },
                                            ],
                                        },
                                    ],
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}
