import dynamic from 'next/dynamic'
import React from 'react'
import type { Page } from '@/payload-types'

type LayoutBlock = NonNullable<Page['layout']>[number]

const HeroBlock = dynamic(() => import('./Hero').then((mod) => mod.HeroBlock), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const ContentBlock = dynamic(() => import('./Content').then((mod) => mod.ContentBlock), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse" />,
})

const ImpactBlock = dynamic(() => import('../home/Impact'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const FeaturedCoursesBlock = dynamic(() => import('../home/FeaturedCourses'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const TestimonialsBlock = dynamic(() => import('../home/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const FAQBlock = dynamic(() => import('../home/FAQ'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const CTABlock = dynamic(() => import('../home/CTA'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const PartnersBlock = dynamic(() => import('../home/Partners'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: HeroBlock,
  content: ContentBlock,
  impact: ImpactBlock,
  'featured-courses': FeaturedCoursesBlock,
  testimonials: TestimonialsBlock,
  faq: FAQBlock,
  cta: CTABlock,
  partners: PartnersBlock,
}

export const BlockRenderer: React.FC<{ blocks: NonNullable<Page['layout']> }> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null
        return <Component key={index} {...block} />
      })}
    </>
  )
}
