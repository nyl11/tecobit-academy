'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Zap, Sparkles } from 'lucide-react';

export default function Impact() {
    const beliefs = [
        {
            number: '01',
            title: 'Job Oriented Curriculum',
            desc: 'Our modules are synchronized with current industry requirements to ensure systemic readiness.',
            icon: Target,
        },
        {
            number: '02',
            title: 'Architect Mentorship',
            desc: 'Learn from high-performance engineers with over 10+ years of professional architecture experience.',
            icon: Zap,
        },
        {
            number: '03',
            title: 'Practical Internship',
            desc: 'Direct execution of projects through our partner networks to build an elite professional portfolio.',
            icon: TrendingUp,
        },
        {
            number: '04',
            title: 'Industry Recognized',
            desc: 'Our certification protocols are valued by top technology organizations globally.',
            icon: Award,
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden border-y border-border transition-colors duration-500">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 grid grid-cols-2 gap-6 lg:gap-8"
                        >
                            <div className="space-y-6 lg:space-y-8 pt-12">
                                <div className="aspect-square rounded-none bg-card p-10 flex flex-col justify-between text-foreground shadow-2xl border border-border relative overflow-hidden group">
                                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/10 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                    <span className="text-5xl md:text-7xl font-black opacity-10 leading-none">3k+</span>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] leading-tight text-primary">System Graduates</p>
                                </div>
                                <div className="aspect-[3/4] rounded-none bg-primary p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                    <div className="w-14 h-14 bg-white/20 rounded-none flex items-center justify-center backdrop-blur-md">
                                        <TrendingUp size={28} />
                                    </div>
                                    <span className="text-2xl font-black tracking-tighter leading-tight uppercase">High Impact Performance</span>
                                </div>
                            </div>
                            <div className="space-y-6 lg:space-y-8">
                                <div className="aspect-[3/4] rounded-none bg-muted/80 p-10 flex flex-col justify-between text-foreground shadow-2xl border border-border relative overflow-hidden group">
                                    <div className="absolute -left-6 -top-6 w-32 h-32 bg-primary/5 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                    <span className="text-5xl md:text-7xl font-black opacity-20">50+</span>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] leading-tight text-primary">Hiring Partners</p>
                                </div>
                                <div className="aspect-square rounded-none bg-card p-10 flex flex-col justify-between text-foreground shadow-2xl relative overflow-hidden group border border-border">
                                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-500/5 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                    <div className="w-14 h-14 bg-muted border border-border rounded-none flex items-center justify-center text-primary shadow-sm">
                                        <Award size={28} />
                                    </div>
                                    <span className="text-xl font-black leading-tight uppercase tracking-tighter">Nepal&apos;s Elite Infrastructure</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Blobs */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-none blur-[120px] animate-pulse-slow" />
                        <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-blue-500/[0.03] rounded-none blur-[140px]" />
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2 space-y-16 order-1 lg:order-2">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                            >
                                <Sparkles size={14} className="animate-pulse" />
                                Elite Value Proposition
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-foreground leading-none tracking-tighter uppercase"
                            >
                                Architecting Careers <br /> with <span className="text-primary">Systemic Impact</span>
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            {beliefs.map((belief, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="space-y-6 group"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-4xl font-black text-primary/10 group-hover:text-primary/30 transition-colors leading-none">{belief.number}</span>
                                        <div className="h-px bg-border flex-grow" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black text-foreground tracking-tight leading-none group-hover:text-primary transition-colors uppercase">{belief.title}</h3>
                                        <p className="text-muted-foreground font-medium text-base leading-relaxed opacity-80">
                                            {belief.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
