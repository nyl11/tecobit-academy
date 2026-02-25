import { Suspense } from 'react'
import { Metadata } from 'next'
import { getPageBySlug } from '@/lib/queries/getPages'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare, Sparkles, Navigation, ShieldCheck } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('contact')
    return {
        title: page?.seo?.title || 'Contact Architecture - Tecobit',
        description: page?.seo?.description,
    }
}

export default async function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary/30">
            {/* Direct Communication Hero */}
            <section className="bg-muted/20 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-b border-border">
                {/* mesh gradients */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[100px] animate-pulse-slow font-black" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[100px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow"></div>

                <div className="space-y-6 relative z-10 max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                        <Sparkles size={12} className="animate-pulse" />
                        Infrastructure Hub Access
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] mb-6 tracking-tighter uppercase">
                        Establish <span className="text-primary">Uplink</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold opacity-80 uppercase tracking-tight">
                        Establish a secure line with our team architectures. <br className="hidden md:block" />
                        We are ready to synchronize your project goals.
                    </p>
                </div>
            </section>

            <div className="container-custom mx-auto px-4 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">
                    {/* Contact Info Matrix */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                Infrastructure Node
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-none uppercase">Physical Hub & <br /><span className="text-primary">Digital Link</span></h2>
                            <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-8 opacity-80 font-medium">
                                Reach out through our official channels or visit our innovation nodes in person for a direct system sync.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    icon: <Mail className="text-primary" size={20} />,
                                    label: 'Email Identity',
                                    value: 'info@tecobit.cloud',
                                    href: 'mailto:info@tecobit.cloud'
                                },
                                {
                                    icon: <Phone className="text-primary" size={20} />,
                                    label: 'Direct Frequency',
                                    value: '+977 974-5697694',
                                    href: 'tel:+9779745697694'
                                },
                                {
                                    icon: <MapPin className="text-primary" size={20} />,
                                    label: 'Stationed Location',
                                    value: 'Sankhamul-31, Kathmandu',
                                    href: '#'
                                }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="flex gap-6 group bg-card p-8 rounded-none border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-none bg-muted flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>
                                    <div className="space-y-1 my-auto">
                                        <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">{item.label}</h3>
                                        <p className="text-xl font-bold text-foreground tracking-tight uppercase leading-none">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="bg-primary/5 border border-primary/10 p-10 rounded-none relative overflow-hidden group shadow-inner">
                            <div className="absolute -bottom-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                                <Navigation size={180} className="text-primary" />
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3 text-primary">
                                    <ShieldCheck size={24} />
                                    <h3 className="text-xl font-bold uppercase tracking-tight">Response Protocol</h3>
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                                    Our operational architecture typically responds within <span className="text-primary font-bold">24 Deployment Hours</span> to ensure zero-latency communication.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Protocol Form */}
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-none blur-[100px] pointer-events-none" />
                        <div className="bg-card/50 backdrop-blur-3xl p-10 md:p-14 rounded-none shadow-2xl border border-border relative overflow-hidden group">
                            {/* Form Frame Accents */}
                            <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-primary to-transparent" />
                            <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-primary to-transparent" />

                            <div className="space-y-3 mb-12 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-foreground tracking-tight uppercase leading-none">Initialize <span className="text-primary">Uplink</span></h3>
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide opacity-80">Transmit your query below to begin synchronization.</p>
                            </div>

                            <Suspense fallback={<div className="text-center p-24 space-y-6 text-muted-foreground">
                                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-none animate-spin mx-auto mb-4" />
                                <p className="text-[9px] font-bold uppercase">Calibrating Input Fields...</p>
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
