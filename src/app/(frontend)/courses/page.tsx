export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { getCourses } from '@/lib/queries/getCourses'
import { getPageBySlug } from '@/lib/queries/getPages'
import CoursesPageClient from './CoursesPageClient'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('courses')

    return {
        title: page?.seo?.title || 'Courses - Tecobit Academy',
        description: page?.seo?.description || 'Explore our IT courses',
    }
}

export default async function CoursesPage() {
    const courses = await getCourses()

    return <CoursesPageClient initialCourses={courses} />
}
