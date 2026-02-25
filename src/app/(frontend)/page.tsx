import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/queries/getPages'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { notFound } from 'next/navigation'
import MapSection from '@/components/home/MapSection'
import { EliteHero } from '@/components/EliteHero'
import CTA from '@/components/home/CTA'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('home')

  if (!page) {
    return {}
  }

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
  }
}

export default async function Home() {
  const page = await getPageBySlug('home')

  if (!page) {
    // Fallback to static content if no CMS data is found
    return (
      <main className="min-h-screen">
        <EliteHero />
        <CTA />
        <MapSection />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <BlockRenderer blocks={page.layout as any[]} />
      <MapSection />
    </main>
  )
}
