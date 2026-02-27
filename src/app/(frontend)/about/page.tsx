import { Metadata } from 'next'
import Image from 'next/image'
import { getPageBySlug } from '@/lib/queries/getPages'
import { getTeamMembers } from '@/lib/queries/getTeamMembers'
import { Sparkles, Target, Zap, Award, Globe, Linkedin, Twitter, Mail } from 'lucide-react'
import { getImageUrl, getImageAlt } from '@/lib/getImageUrl'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('about')

    if (!page) {
        return {}
    }

    return {
        title: page.seo?.title || page.title,
        description: page.seo?.description,
    }
}

export default async function AboutPage() {
    const teamMembers = await getTeamMembers()

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/30">
            {/* Elite Hero Section */}
            <section className="bg-muted/20 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-b border-border">
                {/* High-End Background - Mesh Gradients */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[100px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow"></div>

                <div className="space-y-6 relative z-10 max-w-5xl">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
        <Sparkles size={12} className="animate-pulse" />
        Our Story
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight leading-[1.1] uppercase">
        Shaping Digital Futures <span className="text-primary">Together</span>
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold opacity-80 uppercase tracking-tight">
        Making tech education inspiring, accessible, and community-driven. <br className="hidden md:block" />
        Guiding you from your first line of code to real-world confidence.
    </p>
</div>
            </section>

            {/* Mission Sync Section */}
            <section className="py-24 md:py-32 px-4 relative overflow-hidden">
                {/* Side Accents */}
                <div className="absolute top-1/2 left-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                <div className="container-custom mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                    Our mission
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight uppercase">
                                   Join the <span className="text-primary">Elite</span> Stream 
                                 of <span className="text-primary">IT</span> Talent
                                </h2>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-8 opacity-80 font-medium">
                                At Tecobit, we believe quality education is the fundamental infrastructure for career acceleration. Our network provides world-class systemic training that is practical and platform-synced.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-1">
                                    <div className="text-4xl font-bold text-primary tracking-tight leading-none">3k+</div>
                                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-60">System Graduates</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-4xl font-bold text-primary tracking-tight leading-none">50+</div>
                                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-60">Hiring Partners</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            {/* Elite Card Mesh */}
                            <div className="aspect-[4/5] rounded-none bg-card border border-border shadow-2xl relative overflow-hidden group-hover:border-primary/40 transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
                                <div className="absolute inset-0 pattern-grid-lg opacity-5" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                                        <Globe size={128} className="text-primary animate-spin-slow" />
                                    </div>
                                </div>
                                <div className="absolute bottom-12 left-12 right-12 space-y-3">
                                    <div className="h-1 w-10 bg-primary animate-pulse" />
                                    <p className="text-xl font-bold uppercase tracking-tight text-foreground leading-none">Tecobit Intelligence EcosystemV4.0</p>
                                </div>
                            </div>

                            {/* Floating Counter Accent */}
                            <div className="absolute -bottom-8 -left-8 bg-background border border-border p-8 rounded-none shadow-2xl max-w-xs transform group-hover:scale-110 transition-transform duration-700 z-20">
                                <div className="text-5xl font-bold text-primary mb-1 tracking-tight leading-none uppercase">5+</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] leading-tight opacity-60">Years of Systemic Evolution</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Synchronization Values */}
            <section className="py-24 md:py-32 bg-muted/20 border-y border-border">
                <div className="container-custom mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                Logic Protocols
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-none uppercase">Core <span className="text-primary">Principle</span></h2>
                            <p className="text-base md:text-lg text-muted-foreground font-medium opacity-80 uppercase tracking-wide">Guiding principles that define our systemic approach to excellence.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Architectural Excellence', desc: 'We strive for systemic perfection in every curriculum node we design and every operational session we facilitate.', icon: Target },
                            { title: 'Rapid Innovation', desc: 'We constantly synchronize our training streams with the industrial standard requirements and global market shifts.', icon: Zap },
                            { title: 'Elite Community', desc: 'We coordinate an ultra-high performance network of learners, architects, and industry leaders globally.', icon: Award }
                        ].map((value, i) => (
                            <div key={i} className="bg-card p-10 md:p-12 rounded-none shadow-sm border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-700 group flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-none bg-muted border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <value.icon size={28} />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight uppercase leading-none">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed opacity-80 uppercase tracking-tight">{value.desc}</p>
                                    </div>
                                </div>
                                <div className="h-px bg-border group-hover:bg-primary/30 transition-colors mt-8" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Mesh Section */}
            <section className="py-24 md:py-32 px-4 bg-background relative overflow-hidden">
                <div className="container-custom mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                            The Network Mentors
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1] uppercase">The Minds Behind <br /><span className="text-primary">Tecobit Academy</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="group relative overflow-hidden rounded-none bg-card border border-border aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-1000">
                                {member.image && typeof member.image !== 'string' && member.image.url && (
                                    <Image
                                        src={member.image.url}
                                        alt={getImageAlt(member.image, member.name)}
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />

                                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none bg-primary text-white flex items-center justify-center hover:bg-foreground hover:text-background transition-all cursor-pointer shadow-xl">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none bg-card border border-border text-muted-foreground flex items-center justify-center hover:text-primary transition-all cursor-pointer shadow-xl">
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-none bg-card border border-border text-muted-foreground flex items-center justify-center hover:text-primary transition-all cursor-pointer shadow-xl">
                                            <Mail size={18} />
                                        </a>
                                    )}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-700 group-hover:-translate-y-2">
                                    <div className="space-y-1 mb-4">
                                        <h3 className="text-2xl font-bold text-foreground tracking-tight leading-none uppercase">{member.name}</h3>
                                        <p className="text-primary font-bold text-[9px] uppercase tracking-[0.3em] leading-none">{member.position}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 font-medium">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
