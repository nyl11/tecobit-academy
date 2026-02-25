import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/queries/getPages'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const page = await getPageBySlug(slug)

    if (!page) {
        return {}
    }

    return {
        title: page.seo?.title || page.title,
        description: page.seo?.description,
        openGraph: {
            title: page.seo?.title || page.title,
            description: page.seo?.description || '',
            images: page.seo?.image && typeof page.seo.image !== 'string' ? [{ url: page.seo.image.url || '' }] : [],
        },
    }
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params
    const page = await getPageBySlug(slug)

    if (!page) {
        notFound()
    }

    return (
        <main>
            <BlockRenderer blocks={page.layout as any[]} />
        </main>
    )
}
