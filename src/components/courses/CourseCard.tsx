'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, Monitor, MapPin, Zap, Sparkles } from 'lucide-react';
import { Course } from '@/data/courses';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-card border border-border rounded-none overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badges on Image */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <Badge className="bg-primary text-white border-0 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-none shadow-xl">
                        {course.level}
                    </Badge>
                    <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-none">
                        {course.category}
                    </Badge>
                </div>

                <div className="absolute bottom-6 right-6">
                    <div className="flex flex-col items-end gap-1.5">
                        <div className="bg-primary/20 backdrop-blur-xl px-4 py-2 rounded-none border border-primary/30 shadow-2xl">
                            <span className="text-primary text-base font-black">
                                NPR {course.price.toLocaleString()}
                            </span>
                        </div>
                        <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-none border border-white/10">
                            <span className="text-foreground text-[10px] font-black uppercase tracking-widest opacity-80">
                                {course.duration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
                <Link href={`/courses/${course.slug}`}>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-all line-clamp-2 leading-tight tracking-tight">
                        {course.title}
                    </h3>
                </Link>

                <p className="text-muted-foreground text-lg line-clamp-2 flex-grow leading-relaxed opacity-80">
                    {course.description}
                </p>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                        <div className="w-8 h-8 rounded-none bg-primary/10 flex items-center justify-center">
                            {course.mode === 'Online' ? <Monitor size={14} /> : (course.mode === 'Hybrid' ? <Zap size={14} /> : <MapPin size={14} />)}
                        </div>
                        {course.mode || 'In-Person Sync'}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href={`/courses/${course.slug}/enroll`}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white hover:bg-primary px-4 py-2 border border-primary/30 hover:border-primary transition-all"
                        >
                            Enroll
                        </Link>
                        <Link
                            href={`/courses/${course.slug}`}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all group/link"
                        >
                            Details
                            <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
