import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Testimonial } from '@/payload-types'

export const getTestimonials = async (): Promise<Testimonial[]> => {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'testimonials',
        where: {
            published: {
                equals: true,
            },
        },
        sort: 'order',
        limit: 12,
    })

    return docs as Testimonial[]
}
