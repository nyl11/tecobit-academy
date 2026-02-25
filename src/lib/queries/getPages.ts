import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Page } from '@/payload-types'

export async function getPages(): Promise<Page[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'pages',
        depth: 1,
        limit: 100,
    })
    return docs as unknown as Page[]
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    })
    return (docs[0] as unknown as Page) || null
}
