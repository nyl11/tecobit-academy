import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getNewsEventById } from '@/lib/queries/getNewsEventById'
import { getImageUrl } from '@/lib/getImageUrl'

import { Calendar, MapPin, Clock, ArrowLeft, Share2, Ticket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { newsAndEvents } from '@/data/news'

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    const item = await getNewsEventById(id)

    if (!item) {
        // Fallback for dummy data
        const dummyItem = newsAndEvents.find(n => n.id === id)
        if (dummyItem) {
            return {
                title: `${dummyItem.title} - Tecobit Academy`,
                description: dummyItem.summary.substring(0, 160),
            }
        }
        return {
            title: 'News & Events - Tecobit Academy'
        }
    }

    return {
        title: `${item.title} - Tecobit Academy`,
        description: item.description.substring(0, 160),
    }
}

export default async function NewsEventDetailPage({ params }: PageProps) {
    const { id } = await params
    let item: any = await getNewsEventById(id)

    // Fallback if not found in CMS (for handling the dummy links)
    if (!item) {
        const dummyItem = newsAndEvents.find(n => n.id === id)
        if (dummyItem) {
            item = {
                title: dummyItem.title,
                type: dummyItem.category === 'Event' ? 'event' : 'news',
                description: dummyItem.summary, // In real app, dummy data might not have full content, reusing summary
                image: dummyItem.image, // dummy data uses plain string URLs
                location: dummyItem.location,
                eventDate: dummyItem.date, // Note: dummy date is string, CMS date is date string
                createdAt: new Date().toISOString()
            }
        } else {
            notFound()
        }
    }

    const isEvent = item.type === 'event'
    const date = new Date(isEvent ? item.eventDate : item.createdAt).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    // Formatting time if it's an event
    const time = isEvent && item.eventDate ? new Date(item.eventDate).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    }) : null

    return (
        <main className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-slate-50 dark:bg-[#0A0D18] pt-32 pb-20 relative overflow-hidden">
                {/* Aesthetic Background - Pure CSS */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-none blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-none blur-[120px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-10 dark:opacity-20 pattern-grid-lg animate-pulse-slow"></div>

                <div className="container-custom mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/news-events" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 group font-medium">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to News & Events
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-4 py-1.5 rounded-none text-xs font-black uppercase tracking-widest ${isEvent ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-600'}`}>
                                {isEvent ? 'Event' : 'News'}
                            </span>
                            <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                                <Calendar size={14} className="mr-2" />
                                {date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy dark:text-white mb-8 leading-tight">
                            {item.title}
                        </h1>

                        {isEvent && (
                            <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                                {item.location && (
                                    <div className="flex items-center bg-white dark:bg-white/5 px-4 py-2 rounded-none border border-gray-100 dark:border-white/10">
                                        <MapPin size={16} className="mr-2 text-primary" />
                                        {item.location}
                                    </div>
                                )}
                                {time && (
                                    <div className="flex items-center bg-white dark:bg-white/5 px-4 py-2 rounded-none border border-gray-100 dark:border-white/10">
                                        <Clock size={16} className="mr-2 text-primary" />
                                        {time}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container-custom mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    {(() => {
                        const imgUrl = typeof item.image === 'string' ? item.image : item.image?.url
                        return imgUrl ? (
                            <div className="relative aspect-video w-full rounded-none overflow-hidden mb-12 shadow-2xl">
                                <Image
                                    src={imgUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        ) : null
                    })()}

                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-8">
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                                {/* If we had rich text, we would render it here. For now, simple text */}
                                <p className="whitespace-pre-line">{item.description}</p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-4 space-y-8">
                            {isEvent && item.registrationUrl && (
                                <div className="bg-slate-50 dark:bg-[#0A0D18] p-8 rounded-none border border-gray-100 dark:border-white/5 sticky top-24">
                                    <h3 className="text-xl font-black text-navy dark:text-white mb-4">Registration</h3>
                                    <p className="text-sm text-gray-500 mb-6">Secure your spot for this event. Limited seats available.</p>
                                    <Button asChild size="lg" className="w-full font-bold">
                                        <a href={item.registrationUrl} target="_blank" rel="noopener noreferrer">
                                            <Ticket className="mr-2 h-4 w-4" />
                                            Register Now
                                        </a>
                                    </Button>
                                </div>
                            )}

                            <div className="bg-slate-50 dark:bg-[#0A0D18] p-8 rounded-none border border-gray-100 dark:border-white/5">
                                <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Share this</h3>
                                <div className="flex gap-4">
                                    {/* Social Share Buttons (Mock) */}
                                    <button className="p-3 bg-white dark:bg-white/5 rounded-none hover:text-primary transition-colors border border-gray-200 dark:border-white/10">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
