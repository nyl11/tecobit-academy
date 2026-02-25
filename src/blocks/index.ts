import type { Block } from 'payload'

export const Hero: Block = {
    slug: 'hero',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'textarea',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'cta',
            type: 'group',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                },
                {
                    name: 'link',
                    type: 'text',
                },
            ],
        },
    ],
}

export const Content: Block = {
    slug: 'content',
    fields: [
        {
            name: 'content',
            type: 'richText',
        },
    ],
}

export const Impact: Block = {
    slug: 'impact',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'stats',
            type: 'array',
            fields: [
                { name: 'label', type: 'text' },
                { name: 'value', type: 'text' },
            ],
        },
    ],
}

export const FeaturedCourses: Block = {
    slug: 'featured-courses',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
}

export const Testimonials: Block = {
    slug: 'testimonials',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
}

export const FAQ: Block = {
    slug: 'faq',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
}

export const CTA: Block = {
    slug: 'cta',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
}

export const Partners: Block = {
    slug: 'partners',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
    ],
}
