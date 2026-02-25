import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
    slug: 'courses',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'instructor', 'level', 'price', 'status', 'featured'],
        group: 'ACADEMICS',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General Information',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'instructor',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'image',
                            type: 'text',
                            label: 'Image URL',
                            required: false,
                            admin: {
                                description: 'URL to course image',
                            },
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Course Details',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'price',
                                    type: 'number',
                                    required: true,
                                    min: 0,
                                },
                                {
                                    name: 'duration',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'mode',
                                    type: 'select',
                                    required: true,
                                    defaultValue: 'Physical',
                                    options: [
                                        { label: 'Physical', value: 'Physical' },
                                        { label: 'Online', value: 'Online' },
                                        { label: 'Hybrid', value: 'Hybrid' },
                                    ],
                                },
                                {
                                    name: 'level',
                                    type: 'select',
                                    required: true,
                                    options: [
                                        { label: 'Beginner', value: 'Beginner' },
                                        { label: 'Intermediate', value: 'Intermediate' },
                                        { label: 'Advanced', value: 'Advanced' },
                                    ],
                                },
                                {
                                    name: 'category',
                                    type: 'select',
                                    required: true,
                                    defaultValue: 'Development',
                                    options: [
                                        { label: 'Development', value: 'Development' },
                                        { label: 'Design', value: 'Design' },
                                        { label: 'Marketing', value: 'Marketing' },
                                        { label: 'Data Science', value: 'Data Science' },
                                        { label: 'Cybersecurity', value: 'Cybersecurity' },
                                        { label: 'Mobile', value: 'Mobile' },
                                        { label: 'Management', value: 'Management' },
                                        { label: 'Testing', value: 'Testing' },
                                        { label: 'DevOps', value: 'DevOps' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Academics',
                    fields: [
                        {
                            name: 'curriculum',
                            type: 'array',
                            admin: {
                                description: 'List the progression of the course'
                            },
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'duration',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                        {
                            name: 'features',
                            type: 'array',
                            admin: {
                                description: 'Key highlights/features of the course'
                            },
                            fields: [
                                {
                                    name: 'feature',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Admission & Batches',
                    fields: [
                        {
                            name: 'batches',
                            type: 'array',
                            fields: [
                                {
                                    name: 'startDate',
                                    type: 'date',
                                    required: true,
                                },
                                {
                                    name: 'startTime',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'endTime',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
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
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
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
                            return data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                        }
                        return value;
                    }
                ]
            }
        }
    ],
}
