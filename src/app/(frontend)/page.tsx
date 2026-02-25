import { Metadata } from 'next'
import type { Page } from '@/payload-types'
import { getPageBySlug } from '@/lib/queries/getPages'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import FeaturedCourses from '@/components/home/FeaturedCourses'
import Testimonials from '@/components/home/Testimonials'
import MapSection from '@/components/home/MapSection'
import { EliteHero } from '@/components/EliteHero'

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
  const hasFeaturedCoursesBlock = page?.layout?.some((block) => block?.blockType === 'featured-courses')

  if (!page) {
    // Fallback to static content if no CMS data is found
    return (
      <main className="min-h-screen">
        <EliteHero />
        <FeaturedCourses />
        <Testimonials />
        <MapSection />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <BlockRenderer blocks={page.layout as NonNullable<Page['layout']>} />
      {!hasFeaturedCoursesBlock && <FeaturedCourses />}
      <MapSection />
    </main>
  )
}
