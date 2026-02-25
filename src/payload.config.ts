import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Courses } from './collections/Courses'
import { TeamMembers } from './collections/TeamMembers'
import { NewsEvents } from './collections/NewsEvents'
import { Offices } from './collections/Offices'
import { ContactMessages } from './collections/ContactMessages'
import { Enrollments } from './collections/Enrollments'
import { Testimonials } from './collections/Testimonials'
import { Subjects } from './collections/Subjects'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: '@/components/admin/Branding#AdminLogo',
        Icon: '@/components/admin/Branding#Icon',
      },
      beforeNavLinks: ['@/components/admin/Branding#AdminLogo'],
      actions: ['@/components/admin/ThemeSwitcher#ThemeSwitcher'],
    },
    meta: {
      titleSuffix: '- Tecobit Academy',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/images/tecobit-logo.png', // Using the logo as favicon
        },
      ],
    },
  },
  collections: [
    Users,
    Pages,
    Media,
    Courses,
    Subjects,
    TeamMembers,
    NewsEvents,
    Offices,
    Testimonials,
    ContactMessages,
    Enrollments
  ],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-123456789',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || process.env.DATABASE_URI || 'mongodb://127.0.0.1/trainingpoint',
  }),
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || 'trainingpoint-media',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'us-east-1',
        endpoint: process.env.S3_ENDPOINT, // Optional
        forcePathStyle: true,
      },
    }),
  ],
  sharp,
})
