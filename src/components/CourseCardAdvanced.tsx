'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, Star, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface Course {
    id: string
    title: string
    slug: string
    duration: string
    level: string
    enrollmentCount: number
    rating: number
    thumbnail: string
    progress?: number
}

export function CourseCardAdvanced({ course }: { course: Course }) {
    return (
        <motion.div
            className="group bg-card rounded-none shadow-sm border border-border p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 cursor-pointer h-full flex flex-col relative overflow-hidden"
            whileHover={{ y: -10 }}
        >
            {/* Elite Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-none blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Thumbnail with overlay */}
            <div className="relative h-64 rounded-none overflow-hidden mb-8 border border-border shadow-inner">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />

                {/* Floating badges */}
                <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-primary text-white border-0 px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] rounded-none shadow-2xl shadow-primary/40">
                        {course.level}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        
                        
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-black text-[10px] bg-primary/10 px-4 py-1.5 rounded-none border border-primary/20 tracking-widest uppercase">
                        <Star size={12} className="fill-current" />
                        Rating {course.rating}
                    </div>
                </div>

                <Link href={`/courses/${course.slug}`}>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-all line-clamp-2 leading-tight tracking-tighter uppercase">
                        {course.title}
                    </h3>
                </Link>

                <div className="flex-grow" />

                {/* Meta information */}
                <div className="flex items-center justify-between pt-8 border-t border-border">
                    <div className="flex items-center gap-8 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2.5 group/meta">
                            <Clock className="w-4 h-4 text-primary group-hover/meta:rotate-12 transition-transform" />
                            <span>{course.duration}</span>
                        </div>

                        <div className="flex items-center gap-2.5 group/meta">
                            <Users className="w-4 h-4 text-primary group-hover/meta:scale-110 transition-transform" />
                            <span>{course.enrollmentCount} Enrollments</span>
                        </div>
                    </div>

                    <Link href={`/courses/${course.slug}`}>
                        <div className="w-14 h-14 bg-muted border border-border text-foreground rounded-none flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all transform group-hover:scale-110 shadow-lg group-hover:shadow-primary/20">
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
