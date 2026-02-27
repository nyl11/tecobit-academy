import { Suspense } from 'react'
import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/queries/getPages'
import ContactForm from '@/components/forms/ContactForm'
import { Code2, Users, Globe, Sparkles, Zap } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('book-consultation')
    return {
        title: page?.seo?.title || 'Systemic Consultation - Tecobit',
        description: page?.seo?.description,
    }
}

export default async function ConsultationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/30">
            {/* Consultation Hero Protocol */}
            <section className="bg-muted/20 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-b border-border">
                {/* mesh gradients */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[100px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow"></div>

                <div className="space-y-6 relative z-10 max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                        <Sparkles size={12} className="animate-pulse" />
                        Execution Layer Initialization
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] mb-6 tracking-tighter uppercase">
                        Book <span className="text-primary">Consultation</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium opacity-80 uppercase tracking-tight">
                        Synchronize with industry-leading architects. <br className="hidden md:block" />
                        Schedule a professional protocol session today.
                    </p>
                </div>
            </section>

            <div className="container-custom mx-auto px-4 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
                    {/* Why Initialize Column */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                Optimization Stream
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-none uppercase">Architectural <br /><span className="text-primary">Audit & Insight</span></h2>
                            <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-8 opacity-80 font-medium">
                                Whether you are an engineer aiming for high-impact growth or a tech hub seeking systemic infrastructure, our team provides the logic nodes needed for optimization.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {[
                                {
                                    icon: <Zap className="text-primary" size={24} />,
                                    title: 'Career Acceleration',
                                    description: 'Systemic synchronization of your engineering skills with current high-end global market standards.'
                                },
                                {
                                    icon: <Code2 className="text-primary" size={24} />,
                                    title: 'Infrastructure Sync',
                                    description: 'Verify your project architecture and optimize with the ideal technology matrix for elite performance.'
                                },
                                {
                                    icon: <Users className="text-primary" size={24} />,
                                    title: 'Elite Training',
                                    description: 'Customized training streams to synchronize your workforce with next-gen technical capabilities.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-none bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>
                                    <div className="space-y-2 pt-1">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight uppercase leading-none">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80 uppercase tracking-tight">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-10 rounded-none bg-muted/30 border border-border relative overflow-hidden group shadow-inner">
                            <div className="absolute -bottom-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
                                <Globe size={200} className="text-foreground animate-spin-slow" />
                            </div>
                            <div className="space-y-4 relative z-10">
                                <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">Manual Link?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                                    Initialize a direct manual uplink at: <br />
                                    <a href="mailto:info@tecobit.cloud" className="text-primary font-bold hover:text-foreground transition-all">info@tecobit.cloud</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Protocol Interface */}
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-none blur-[100px] pointer-events-none" />
                        <div className="bg-card/50 backdrop-blur-3xl p-10 md:p-14 rounded-none shadow-2xl border border-border relative overflow-hidden group">
                            {/* Frame Accents */}
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-none bg-primary animate-ping" />
                                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Session Ready</div>
                            </div>

                            <div className="space-y-4 mb-12 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-foreground tracking-tight uppercase leading-none">Initialize <span className="text-primary">Session</span></h3>
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide opacity-80">Finalize the registry protocol below to reserve console time.</p>
                            </div>

                            <Suspense fallback={<div className="text-center p-24 space-y-6">
                                <div className="w-12 h-12 border-r-2 border-primary rounded-none animate-spin mx-auto" />
                                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Syncing Internal Logic State...</p>
                            </div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
