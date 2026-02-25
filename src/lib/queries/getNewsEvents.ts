import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getNewsEvents = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })

        const { docs } = await payload.find({
            collection: 'news-events',
            where: {
                status: {
                    equals: 'published',
                },
            },
            sort: '-createdAt',
        })

        return docs
    },
    ['news-events'],
    {
        tags: ['news-events'],
        revalidate: 60,
    }
)
