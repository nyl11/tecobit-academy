import { getPayload } from 'payload'
import config from '@/payload.config'
import { Course } from '@/payload-types'

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
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
