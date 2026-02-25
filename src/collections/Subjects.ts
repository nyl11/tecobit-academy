import type { CollectionConfig } from 'payload'

export const Subjects: CollectionConfig = {
    slug: 'subjects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug'],
        group: 'ACADEMICS',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            admin: {
                description: 'Subject name (e.g. "JavaScript", "React", "Data Structures")',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            admin: {
                description: 'Brief overview of what this subject covers',
            },
        },
        {
            name: 'syllabus',
            type: 'array',
            admin: {
                description: 'Topics covered in this subject. Drag to reorder.',
            },
            fields: [
                {
                    name: 'topic',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'Topic title (e.g. "ES6+ Features", "Flexbox & Grid")',
                    },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    admin: {
                        description: 'What students will learn in this topic',
                    },
                },
                {
                    name: 'hours',
                    type: 'number',
                    min: 0,
                    admin: {
                        description: 'Estimated hours for this topic',
                    },
                },
            ],
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }: any) => {
                        if (!value && data?.title) {
                            return data.title
                                .toLowerCase()
                                .replace(/ /g, '-')
                                .replace(/[^\w-]+/g, '')
                        }
                        return value
                    },
                ],
            },
        },
    ],
}
