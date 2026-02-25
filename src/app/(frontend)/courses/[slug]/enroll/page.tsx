import React from 'react'
import { notFound } from 'next/navigation'
import { getCourseBySlug } from '@/lib/queries/getCourseBySlug'
import EnrollmentForm from '@/components/forms/EnrollmentForm'
import { Metadata } from 'next'
import { Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
        title: `Enroll in ${course.title} | Tecobit Academy`,
        description: `Enroll in our ${course.title} course. Fill out the form below and our team will contact you with further details.`,
    }
}

export default async function EnrollPage({ params }: PageProps) {
    const { slug } = await params
    const course = await getCourseBySlug(slug)

    if (!course) {
        notFound()
    }

    const courseInfo = {
        id: course.id,
        title: course.title,
        slug: course.slug,
        batches: course.batches || [],
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/30">
            {/* Hero Section */}
            <section className="bg-muted/20 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-b border-border">
                {/* Mesh gradients */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[100px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

                <div className="space-y-6 relative z-10 max-w-4xl flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 mb-4">
                        <Link
                            href={`/courses/${course.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-card border border-border text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:border-primary/50 hover:text-primary transition-all"
                        >
                            <ArrowLeft size={14} />
                            Back to {course.title}
                        </Link>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                            <Sparkles size={12} className="animate-pulse" />
                            Enrollment Protocol
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tighter uppercase mb-6">
                        Enroll in <span className="text-primary">{course.title}</span>
                    </h1>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium opacity-80 mt-4">
                        Fill out the form below and our team will get in touch with you to finalize your enrollment.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <div className="container-custom mx-auto px-4 py-16 md:py-24">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-card/50 backdrop-blur-3xl p-8 md:p-12 rounded-none shadow-2xl border border-border relative overflow-hidden">
                        {/* Frame Accents */}
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-none bg-primary animate-ping" />
                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Form Active</div>
                        </div>

                        <div className="space-y-2 mb-10 mt-6">
                            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight uppercase leading-none">
                                Student <span className="text-primary">Information</span>
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium opacity-80 mt-2">
                                Fields marked with <span className="text-primary">*</span> are required.
                            </p>
                        </div>

                        <EnrollmentForm course={courseInfo} />
                    </div>
                </div>
            </div>
        </main>
    )
}

