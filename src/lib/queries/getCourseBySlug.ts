import { getPayload } from 'payload'
import config from '@/payload.config'
import { Course } from '@/payload-types'

interface GetCourseOptions {
    depth?: number
}

export const getCourseBySlug = async (slug: string, options?: GetCourseOptions): Promise<Course | null> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'courses',
        where: {
            slug: {
                equals: slug,
            },
        },
        depth: options?.depth ?? 1,
        limit: 1,
    })
    return (docs[0] as unknown as Course) || null
}
