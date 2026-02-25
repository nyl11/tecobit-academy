import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['fullName', 'email', 'role', 'phoneNumber', 'createdAt'],
        group: 'CORE',
    },
    auth: true,
    access: {
        read: () => true,
        create: () => true,
        update: ({ req: { user } }) => {
            if (user) return true
            return false
        },
        delete: ({ req: { user } }) => {
            if (user) return true
            return false
        },
    },
    fields: [
        {
            name: 'fullName',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Student', value: 'student' },
                { label: 'User', value: 'user' },
            ],
            defaultValue: 'student',
            required: true,
        },
        {
            name: 'phoneNumber',
            type: 'text',
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'enrolledCourses',
            type: 'relationship',
            relationTo: 'courses',
            hasMany: true,
            admin: {
                description: 'Courses the student is currently enrolled in',
                position: 'sidebar',
            }
        },
    ],
}
