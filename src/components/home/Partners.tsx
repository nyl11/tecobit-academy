'use client'

import React from 'react';
import Image from 'next/image';
import { partners } from '@/data/partners';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Partners() {
    return (
        <section className="py-24 md:py-32 bg-background border-t border-border overflow-hidden transition-colors duration-500 relative">
            {/* Subtle Elite Accents */}
            <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-20 px-4 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        Network Synchronization
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-foreground leading-none tracking-tighter uppercase"
                    >
                        Where Our Graduates <span className="text-primary">Synchronize</span>
                    </motion.h2>
                    <p className="text-muted-foreground font-medium text-base md:text-lg opacity-80 max-w-2xl mx-auto uppercase tracking-wide">
                        Connected with global technology nodes and market leaders.
                    </p>
                </div>

                {/* Animated Marquee */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap py-12 md:py-16 items-center gap-20 md:gap-32">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="relative h-12 md:h-20 w-44 md:w-64 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 flex-shrink-0 flex items-center justify-center filter dark:invert dark:brightness-[5] contrast-[1.2]"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Edge Fading Masks */}
                    <div className="absolute top-0 right-0 bottom-0 w-48 bg-gradient-to-l from-background to-transparent z-10" />
                    <div className="absolute top-0 left-0 bottom-0 w-48 bg-gradient-to-r from-background to-transparent z-10" />
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
                @media (min-width: 1024px) {
                    .animate-marquee {
                        animation: marquee 50s linear infinite;
                    }
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
