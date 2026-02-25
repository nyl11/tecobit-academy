import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getNewsEventById = unstable_cache(
    async (id: string) => {
        const payload = await getPayload({ config: configPromise })

        try {
            const doc = await payload.findByID({
                collection: 'news-events',
                id,
            })
            return doc
        } catch (error) {
            return null
        }
    },
    ['news-events-by-id'],
    {
        tags: ['news-events'],
        revalidate: 60,
    }
)
