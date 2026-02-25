'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* High-End Background Design */}
            <div className="absolute inset-0 bg-muted/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />

            {/* Floating Aesthetic Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-none blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-none blur-[120px] animate-pulse-slow delay-700" />
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

            <div className="container-custom relative z-10 text-center max-w-5xl mx-auto space-y-12">
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        Initialize System Leap
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 tracking-tighter leading-none"
                    >
                        Ready to <span className="text-primary">Synchronize?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80"
                    >
                        Don&apos;t wait to recalibrate your potential. Contact us today and let&apos;s architect
                        your professional trajectory together. Your evolution is our protocol.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-foreground text-white rounded-none px-12 py-8 h-auto text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all hover:scale-105 group"
                    >
                        <Link href="/contact" className="flex items-center gap-3">
                            Start Protocol
                            <Rocket size={20} className="group-hover:rotate-12 transition-transform" />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-none border-border px-12 py-8 h-auto text-sm font-black uppercase tracking-[0.2em] group"
                    >
                        <Link href="/book-consultation">
                            Get Consultation
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-[0.2em]"
                >
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-none bg-muted border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <HeartHandshake size={18} className="text-primary" />
                        </div>
                        Elite Support
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-none bg-muted border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <ShieldCheck size={18} className="text-primary" />
                        </div>
                        Secure Protocol
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-none bg-muted border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <CheckCircle2 size={18} className="text-primary" />
                        </div>
                        Guaranteed Success
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-border mt-16"
                >
                    {[
                        { value: '98%', label: 'User Satisfaction', desc: 'Sync Rating' },
                        { value: '24/7', label: 'Tech Support', desc: 'Active Uplink' },
                        { value: '3k+', label: 'Elite Alumni', desc: 'System Graduates' },
                        { value: '50+', label: 'Hiring Partners', desc: 'Market Sync' },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <span className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors tracking-tighter">{stat.value}</span>
                            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">{stat.label}</span>
                            <span className="text-muted-foreground text-[9px] font-bold uppercase tracking-widest opacity-60">{stat.desc}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
