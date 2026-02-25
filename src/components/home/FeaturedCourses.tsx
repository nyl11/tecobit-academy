import { getFeaturedCourses } from '@/lib/queries/getFeaturedCourses';
import type { Course } from '@/payload-types';
import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { CourseCardAdvanced } from '@/components/CourseCardAdvanced';
import { Button } from '@/components/ui/button';

export default async function FeaturedCourses() {
    const featuredCourses = await getFeaturedCourses();

    return (
        <section className="py-24 md:py-40 bg-background transition-colors duration-500 overflow-hidden relative border-y border-border">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-none blur-[140px] animate-pulse-slow font-black" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-24 gap-12">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                            <GraduationCap size={16} className="animate-pulse" />
                            Elite Training Registry
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
                            High-Impact <span className="text-primary">Programs</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-2xl font-medium leading-relaxed opacity-80 max-w-2xl">
                            Courses that fit your need and markets demand
                        </p>
                    </div>

                    <Button asChild className="hidden lg:flex bg-primary hover:bg-foreground text-primary-foreground rounded-none px-12 h-20 text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl shadow-primary/20 hover:-translate-y-2 group">
                        <Link href="/courses" className="flex items-center gap-3">
                            Explore Our Courses
                            <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-4 px-4 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 md:px-0 md:mx-0 no-scrollbar group/grid">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="snap-center shrink-0 w-[85vw] md:w-auto h-full">
                            <CourseCardAdvanced course={course} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center lg:hidden px-4">
                    <Button asChild className="w-full bg-primary hover:bg-foreground text-primary-foreground rounded-none h-20 text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl shadow-primary/20 group">
                        <Link href="/courses" className="flex items-center justify-center gap-3">
                            Full Registry
                            <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
