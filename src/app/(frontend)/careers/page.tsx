import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/queries/getPages'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { notFound } from 'next/navigation'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('careers')

    if (!page) {
        return {}
    }

    return {
        title: page.seo?.title || page.title,
        description: page.seo?.description,
    }
}

export default async function CareersPage() {
    const page = await getPageBySlug('careers')

    if (!page) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            <BlockRenderer blocks={page.layout as any[]} />
        </main>
    )
}
