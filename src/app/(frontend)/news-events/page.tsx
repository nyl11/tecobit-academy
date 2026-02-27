import { Metadata } from 'next'
import Image from 'next/image'
import { getPageBySlug } from '@/lib/queries/getPages'
import { Calendar, MapPin, ArrowRight, Bell, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { getNewsEvents } from '@/lib/queries/getNewsEvents'
import { newsAndEvents } from '@/data/news'
import { Badge } from '@/components/ui/badge'
import { getImageUrl } from '@/lib/getImageUrl'

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug('news-events')

    return {
        title: page?.seo?.title || 'News & Events - Tecobit Academy',
        description: page?.seo?.description || 'Stay updated with the latest news, workshops, and events at Tecobit Academy.',
    }
}

// Helper to format date
const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export default async function NewsEventsPage() {
    const cmsNews = await getNewsEvents()

    // Map CMS data to UI format
    const displayItems = cmsNews.length > 0 ? cmsNews.map((item: any) => ({
        id: item.id,
        title: item.title,
        category: item.type === 'event' ? 'Technical Event' : 'System Update',
        date: formatDate(item.type === 'event' ? item.eventDate : item.createdAt),
        summary: item.description,
        image: getImageUrl(item.image, '/images/logo.png'), // Fallback image
        location: item.location
    })) : newsAndEvents // Fallback to dummy data if no CMS data

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            {/* Hero Section */}
            <div className="bg-muted lg:py-32 py-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
                {/* Aesthetic Background - Pure CSS */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-none blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[120px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow"></div>


                <h1 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter relative z-10">
                    News & <span className="text-primary">Broadcasts</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">
                    Establish synchronization with our latest happenings, technical workshops, and community evolution.
                </p>
            </div>

            {/* Content Section */}
            <div className="container-custom mx-auto px-4 py-32">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {displayItems.map((item) => (
                        <div key={item.id} className="group bg-card rounded-none overflow-hidden border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 flex flex-col shadow-sm">
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-none shadow-xl">
                                        {item.category}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow space-y-6">
                                <div className="flex items-center gap-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                                    <div className="flex items-center gap-2.5">
                                        <Calendar size={14} className="text-primary" />
                                        {item.date}
                                    </div>
                                    {item.location && (
                                        <div className="flex items-center gap-2.5">
                                            <MapPin size={14} className="text-primary" />
                                            {item.location}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-all tracking-tighter leading-none">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground text-lg leading-relaxed opacity-80 flex-1 line-clamp-3">
                                    {item.summary}
                                </p>

                                <div className="pt-8 border-t border-border">
                                    <Link href={`/news-events/${item.id}`} className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-[11px] group-hover:text-foreground transition-all duration-300">
                                        Execute Read Protocol <ArrowRight className="group-hover:translate-x-3 transition-transform h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 p-16 md:p-24 rounded-none bg-muted/30 border border-border relative overflow-hidden text-center space-y-12">
                    {/* Floating Decoration */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-none blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-none blur-3xl animate-pulse delay-1000" />

                    <div className="space-y-4 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                            <Bell size={14} className="animate-bounce" />
                            Transmission Alerts
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
                            Synchronize your <span className="text-primary">Inbox</span>.
                        </h2>
                        <p className="text-muted-foreground text-lg font-medium opacity-80">
                            Initialize a subscription to receive future broadcasts and system updates.
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto">
                        <form className="flex flex-col sm:flex-row gap-4 p-2 bg-card border border-border rounded-none shadow-2xl focus-within:border-primary/50 transition-all">
                            <input
                                type="email"
                                required
                                placeholder="name@tecobit.cloud"
                                className="bg-transparent px-8 py-4 outline-none text-foreground flex-1 placeholder:text-muted-foreground/50 font-medium"
                            />
                            <button type="submit" className="bg-primary hover:bg-foreground text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-none transition-all shadow-xl shadow-primary/20 text-[11px] group">
                                <span className="flex items-center justify-center gap-2">
                                    Initialize
                                    <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
