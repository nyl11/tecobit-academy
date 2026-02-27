import type { CollectionConfig } from 'payload'
import { seoFields } from '../fields/seo'
import { Hero, Content, Impact, FeaturedCourses, Testimonials, FAQ, CTA, Partners } from '../blocks'
import { adminOnly } from '../access'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        group: 'CONTENT',
    },
    access: {
        read: ({ req: { user } }) => {
            if (user) return true
            return {
                _status: {
                    equals: 'published',
                },
            }
        },
        create: adminOnly,
        update: adminOnly,
        delete: adminOnly,
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            // admin: {
            //   position: 'sidebar',
            // },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                        }
                        return value
                    },
                ],
            },
            index: true,
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            }
        },
        seoFields,
        {
            name: 'layout',
            type: 'blocks',
            blocks: [Hero, Content, Impact, FeaturedCourses, Testimonials, FAQ, CTA, Partners],
        }
    ],
}
