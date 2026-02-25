import React from 'react'
import Image from 'next/image'
import { Sparkles, ArrowRight } from 'lucide-react'

export const HeroBlock: React.FC<any> = ({ title, subtitle, image, cta }) => {
    return (
        <section className="relative py-32 lg:py-48 bg-background overflow-hidden border-b border-border transition-colors duration-500">
            {/* Elite Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[120px] animate-pulse-slow delay-700" />
            </div>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={typeof image === 'string' ? image : image.url}
                        alt={title}
                        fill
                        className="object-cover opacity-20 dark:opacity-10 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                </div>
            )}

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                    <Sparkles size={14} className="animate-pulse" />
                    System Component: Hero Module
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-4 tracking-tighter leading-none uppercase">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-2xl text-muted-foreground font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}

                {cta?.label && cta?.link && (
                    <div className="pt-8">
                        <a
                            href={cta.link}
                            className="inline-flex items-center gap-4 bg-primary hover:bg-foreground text-white px-12 py-5 rounded-none font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-2xl shadow-primary/20 hover:-translate-y-2 group"
                        >
                            {cta.label}
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
