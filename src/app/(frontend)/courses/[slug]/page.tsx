import React from 'react'
import { notFound } from 'next/navigation'
import { getCourseBySlug } from '@/lib/queries/getCourseBySlug'
import CourseDetailClient from './CourseDetailClient'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    return {}
  }

  return {
    title: `${course.title} | Tecobit Academy`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description || '',
      images: course.image && typeof course.image !== 'string' ? [{ url: (course.image as any).url || '' }] : [],
    },
  }
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug, { depth: 2 })

  if (!course) {
    notFound()
  }

  return <CourseDetailClient course={course} />
}
