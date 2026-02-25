'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    Monitor,
    Zap,
    Calendar,
    CheckCircle,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Clock3
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Course } from '@/payload-types'
import { useRouter } from 'next/navigation'
import PathNav from '@/components/courses/PathNav'

export default function CourseDetailClient({ course }: { course: Course }) {
    const router = useRouter()

    const imageUrl =
        typeof course.image === 'string'
            ? course.image
            : (course.image as any)?.url || '/images/logo.png'

    const handleEnroll = () => {
        router.push(`/courses/${course.slug}/enroll`)
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white pb-24 lg:pb-0 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-muted/20 border-b border-border">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover opacity-20 dark:opacity-10 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-sm"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Program Architecture: {course.level === 'Beginner' ? 'Fundamental to Mastery' : course.level}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] mb-6 tracking-tighter uppercase"
                        >
                            {course.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed opacity-80"
                        >
                            Execute a high-performance deep dive into {course.title} with our industry-synced curriculum and senior-level mentorship.
                        </motion.p>

                        <div className="flex flex-wrap gap-8 pt-8">
                            {[
                                { icon: Clock3, label: 'Duration', value: course.duration },
                                { icon: Monitor, label: 'Mode', value: course.mode || 'Sync' },
                                { icon: ShieldCheck, label: 'Tier', value: course.level }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-primary shadow-sm">
                                        <stat.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">{stat.label}</p>
                                        <p className="text-sm font-black uppercase tracking-tight text-foreground">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-none blur-[140px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-none blur-[120px] -ml-40 -mb-40" />
            </section>

            {/* Learning Path Navigation */}
            {course.pathSteps && course.pathSteps.length > 0 && (
                <div className="container-custom border-b border-border">
                    <PathNav
                        courseSlug={course.slug}
                        pathSteps={course.pathSteps}
                    />
                </div>
            )}

            {/* MainContent */}
            <div className="container-custom py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column - 8 Cols */}
                    <div className="lg:col-span-8 space-y-20">

                        {/* Overview */}
                        <section className="space-y-10">
                            <div className="flex items-center gap-6">
                                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase">Program Architecture</h2>
                                <div className="h-px flex-1 bg-border/50 hidden md:block" />
                            </div>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg md:text-xl leading-relaxed opacity-80 border-l-4 border-primary/20 pl-10">
                                {course.description}
                            </div>
                        </section>

                        {/* Features */}
                        {(course as any).features && (course as any).features.length > 0 && (
                            <section className="space-y-12">
                                <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tighter uppercase">Execution Modules</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(course as any).features.map((item: any, i: number) => (
                                        <div key={i} className="flex items-start gap-5 bg-card p-8 rounded-none border border-border group hover:border-primary/40 transition-all duration-500 shadow-sm">
                                            <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span className="text-foreground font-black uppercase tracking-tight text-base pt-2 opacity-80 group-hover:opacity-100 transition-opacity">{item.feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Curriculum / Learning Path Syllabus */}
                        <section className="space-y-12">
                            <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tighter uppercase">Operational Path</h2>
                            <Accordion type="single" collapsible className="w-full space-y-6">
                                {/* Prefer pathSteps with linked subjects */}
                                {course.pathSteps && course.pathSteps.length > 0 ? (
                                    course.pathSteps.map((step: any, i: number) => {
                                        const subject = typeof step.subject === 'object' ? step.subject : null
                                        const syllabus = subject?.syllabus || []

                                        return (
                                            <AccordionItem
                                                key={step.id || i}
                                                value={`step-${i}`}
                                                className="border border-border bg-card rounded-none overflow-hidden px-8 shadow-sm hover:border-primary/40 transition-all duration-500"
                                            >
                                                <AccordionTrigger className="hover:no-underline py-8 md:py-10 px-4 group">
                                                    <div className="flex items-center gap-6 text-left">
                                                        <div className="w-12 h-12 rounded-none bg-muted border border-border flex items-center justify-center text-primary text-lg font-black shrink-0 shadow-sm group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all">
                                                            {String(i + 1).padStart(2, '0')}
                                                        </div>
                                                        <div>
                                                            <span className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight group-data-[state=open]:text-primary transition-colors block">
                                                                {step.stepName}
                                                            </span>
                                                            {subject?.description && (
                                                                <span className="text-sm text-muted-foreground font-medium mt-1 block normal-case tracking-normal">
                                                                    {subject.description}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-10 pt-0">
                                                    <div className="pl-20 border-t border-border pt-8 space-y-4">
                                                        {syllabus.length > 0 ? (
                                                            syllabus.map((item: any, j: number) => (
                                                                <div key={j} className="flex items-start gap-4 group/topic">
                                                                    <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                                                                    <div className="flex-1">
                                                                        <p className="text-foreground font-bold text-base">
                                                                            {item.topic}
                                                                            {item.hours && (
                                                                                <span className="ml-3 text-xs text-muted-foreground font-medium">
                                                                                    {item.hours}h
                                                                                </span>
                                                                            )}
                                                                        </p>
                                                                        {item.description && (
                                                                            <p className="text-muted-foreground text-sm mt-1 leading-relaxed opacity-80">
                                                                                {item.description}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p className="text-muted-foreground text-lg opacity-80 leading-relaxed max-w-2xl">
                                                                In-depth technical synchronization covering architecture, implementation protocols, and project-based validation for {step.stepName}.
                                                            </p>
                                                        )}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    })
                                ) : (
                                    /* Fallback to legacy curriculum array */
                                    course.curriculum && course.curriculum.map((module: any, i: number) => (
                                        <AccordionItem
                                            key={i}
                                            value={`item-${i}`}
                                            className="border border-border bg-card rounded-none overflow-hidden px-8 shadow-sm hover:border-primary/40 transition-all duration-500"
                                        >
                                            <AccordionTrigger className="hover:no-underline py-8 md:py-10 px-4 group">
                                                <div className="flex items-center gap-6 text-left">
                                                    <div className="w-12 h-12 rounded-none bg-muted border border-border flex items-center justify-center text-primary text-lg font-black shrink-0 shadow-sm group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all">
                                                        {String(i + 1).padStart(2, '0')}
                                                    </div>
                                                    <span className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight group-data-[state=open]:text-primary transition-colors">
                                                        {module.title}
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-10 pt-0">
                                                <div className="pl-20 text-muted-foreground text-lg opacity-80 leading-relaxed max-w-2xl border-t border-border pt-8">
                                                    <p>In-depth technical synchronization covering architecture, implementation protocols, and project-based validation for {module.title}.</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))
                                )}
                            </Accordion>
                        </section>

                    </div>

                    {/* Right Column - 4 Cols - Sidebar */}
                    <div className="hidden lg:block lg:col-span-4 space-y-8">
                        {/* Course Details Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-card/50 backdrop-blur-2xl border border-border rounded-none p-10 space-y-10 sticky top-32 shadow-2xl shadow-primary/5"
                        >
                            <h3 className="text-2xl font-black text-foreground border-b border-border pb-6 uppercase tracking-tighter">
                                Registry Sync
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                        <Clock3 size={16} className="text-primary" />
                                        <span>Course Sync</span>
                                    </div>
                                    <span className="font-black text-foreground uppercase tracking-tight">{course.duration}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                        <Monitor size={16} className="text-primary" />
                                        <span>Deployment</span>
                                    </div>
                                    <span className="font-black text-foreground uppercase tracking-tight">{course.mode || 'Physical Hub'}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                        <Zap size={16} className="text-primary" />
                                        <span>Tier Level</span>
                                    </div>
                                    <span className="font-black text-foreground uppercase tracking-tight">{course.level}</span>
                                </div>

                                <div className="flex items-center justify-between pt-8 border-t border-border">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Resource Fee</span>
                                    <span className="text-3xl font-black text-primary tracking-tighter leading-none">NPR {course.price.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Batches Node */}
                            <div className="space-y-6 pt-6 border-t border-border">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Active Deployments</h4>

                                {course.batches && course.batches.length > 0 ? (
                                    course.batches.map((batch: any, index: number) => (
                                        <div key={index} className="bg-muted border border-border rounded-none p-5 space-y-2 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
                                            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px]">
                                                <Calendar size={14} />
                                                <span>Initialize: {new Date(batch.startDate).toLocaleDateString()}</span>
                                            </div>
                                            <div className="text-sm font-bold text-foreground opacity-80 group-hover:opacity-100 tracking-tight">
                                                {batch.startTime} - {batch.endTime} (Station Time)
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-muted border border-border rounded-none p-6 space-y-2">
                                        <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px]">
                                            <Calendar size={16} />
                                            <span>Batch Initializing Soon</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium">Re-sync later for exact timeline.</p>
                                    </div>
                                )}
                            </div>

                            <Button
                                onClick={handleEnroll}
                                className="w-full bg-primary text-white hover:bg-foreground font-black py-8 rounded-none text-[11px] uppercase tracking-[0.3em] group shadow-2xl shadow-primary/20 transition-all hover:scale-105 h-auto"
                            >
                                Initialize Enrollment
                                <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Mobile Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-card/80 backdrop-blur-3xl border-t border-border z-50 lg:hidden pb-safe">
                <Button
                    onClick={handleEnroll}
                    className="w-full bg-primary text-white hover:bg-foreground font-black py-6 rounded-none text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-primary/30 group h-auto"
                >
                    Enroll Now / Sync Account
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    )
}
