'use client'

import React from 'react'
import { Quote, Star, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export type TestimonialCard = {
    id: string
    name: string
    role: string
    company: string
    content: string
    avatar?: string | null
    rating: number
}

type TestimonialsClientProps = {
    title?: string
    testimonials: TestimonialCard[]
}

export default function TestimonialsClient({ title, testimonials }: TestimonialsClientProps) {
    if (!testimonials?.length) return null

    return (
        <section className="py-24 md:py-40 bg-background overflow-hidden relative transition-colors duration-500 border-y border-border">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-none blur-[100px] md:blur-[140px] -mr-32 md:-mr-64 -mt-32 md:-mt-64 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/5 rounded-none blur-[100px] md:blur-[140px] -ml-32 md:-ml-64 -mb-32 md:-mb-64 animate-pulse-slow delay-1000" />
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

            <div className="container-custom relative z-10 px-4">
                <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                    >
                        <UserCheck size={16} className="animate-pulse" />
                        System Validation
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter uppercase">
                        {title || (
                            <>
                                Our Graduates <br /> <span className="text-primary">Synchronized</span>
                            </>
                        )}
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-2xl font-medium leading-relaxed opacity-80 max-w-2xl mx-auto">
                        Peer-reviewed success protocols from individuals who have successfully executed their career transformations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card/50 backdrop-blur-2xl border border-border rounded-none p-10 md:p-14 hover:border-primary/40 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="absolute top-10 right-10 md:top-14 md:right-14 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={64} className="text-primary" />
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-center space-x-1.5 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="md:w-5 md:h-5" fill={i < testimonial.rating ? 'currentColor' : 'none'} strokeWidth={i < testimonial.rating ? 0 : 2} />
                                    ))}
                                </div>

                                <p className="text-foreground text-xl md:text-2xl leading-[1.6] md:leading-[1.7] font-black tracking-tight uppercase">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                <div className="flex items-center pt-10 border-t border-border">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-none mr-6 md:mr-8 overflow-hidden border-2 border-primary/20 p-1 bg-background shrink-0 shadow-xl group-hover:rotate-3 transition-transform">
                                        <div className="relative w-full h-full rounded-none overflow-hidden">
                                            <Image
                                                src={testimonial.avatar || '/images/tecobit-logo.png'}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-foreground text-xl md:text-2xl leading-none uppercase tracking-tighter">{testimonial.name}</h4>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em]">
                                                {testimonial.role}
                                            </p>
                                            <p className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
                                                Stationed @ {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
