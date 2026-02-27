import { getFeaturedCourses } from '@/lib/queries/getFeaturedCourses';
import type { Course } from '@/payload-types';
import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { CourseCardAdvanced } from '@/components/CourseCardAdvanced';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/getImageUrl';

export default async function FeaturedCourses() {
    const featuredCourses = await getFeaturedCourses();

    return (
        <section className="min-h-screen py-10 md:py-16 flex flex-col justify-center bg-background transition-colors duration-500 overflow-hidden relative border-y border-border">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-none blur-[140px] animate-pulse-slow font-black" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col justify-between items-start mb-8 md:mb-12 gap-6 w-full">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                            <GraduationCap size={16} className="animate-pulse" />
                            Academic Program 
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tighter uppercase">
                            Professional <span className="text-primary">Certifications</span>
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed opacity-80 max-w-2xl">
                            Advanced curriculam developed in alignment with global industry standards.
                        </p>
                    </div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-6 -mx-4 px-4 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 no-scrollbar group/grid w-full">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="snap-center shrink-0 w-[85vw] md:w-auto h-full">
                            <CourseCardAdvanced course={{
                                id: course.id,
                                title: course.title,
                                slug: course.slug,
                                duration: course.duration,
                                level: course.level,
                                enrollmentCount: 250, // Default for academy feel
                                rating: 4.8, // Default for academy feel
                                thumbnail: getImageUrl(course.image, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'),
                            }} />
                        </div>
                    ))}
                </div>  


            </div>
        </section>
    );
}
