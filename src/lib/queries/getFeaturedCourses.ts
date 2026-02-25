import { getPayload } from 'payload'
import config from '@/payload.config'
import { Course } from '@/payload-types'

export const getFeaturedCourses = async (): Promise<Course[]> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'courses',
        where: {
            featured: {
                equals: true,
            },
            status: {
                equals: 'published',
            },
        },
        limit: 3,
    })
    return docs as unknown as Course[]
}
