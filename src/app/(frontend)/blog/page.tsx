import { Metadata } from 'next'
import { getBlogs } from '@/lib/queries/getBlogs'
import { getPageBySlug } from '@/lib/queries/getPages'
import BlogPageClient from './BlogPageClient'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('blog')

    return {
        title: page?.seo?.title || 'Blog - Training Point',
        description: page?.seo?.description || 'Latest IT news and trends',
    }
}

export default async function BlogPage() {
    const blogs = await getBlogs()

    return <BlogPageClient initialBlogs={blogs as any[]} />
}
