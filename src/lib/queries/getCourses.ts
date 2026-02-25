import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Course } from '@/payload-types'

export async function getCourses(): Promise<Course[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'courses',
        depth: 1,
        limit: 100,
        sort: '-createdAt',
    })
    return docs as unknown as Course[]
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'courses',
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    })
    return (docs[0] as unknown as Course) || null
}
