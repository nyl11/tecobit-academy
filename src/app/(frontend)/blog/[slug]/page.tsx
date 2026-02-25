import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogBySlug } from '@/lib/queries/getBlogs';
import { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { RichText } from '@/components/RichText';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const blog = await getBlogBySlug(slug)

    if (!blog) {
        return {}
    }

    return {
        title: `${blog.title} | Tecobit Blog`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt || '',
            images: blog.image ? [{ url: blog.image }] : [],
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const blog = await getBlogBySlug(slug)

    if (!blog) {
        notFound();
    }

    // Simple reading time calculation
    const wordsPerMinute = 200;
    const contentText = JSON.stringify(blog.content);
    const wordCount = contentText.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return (
        <main className="min-h-screen relative bg-background text-foreground transition-colors duration-500 overflow-hidden">
            {/* Elite Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-none blur-[120px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-none blur-[100px] -ml-64 pointer-events-none" />

            <article className="pb-24 pt-32 md:pt-40 relative z-10">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Navigation Sync */}
                        <Link href="/blog" className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-[10px] font-bold uppercase tracking-[0.3em] mb-12 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                            Return to Knowledge Hub
                        </Link>

                        {/* Article Header */}
                        <header className="space-y-8 mb-16">
                            <div className="flex flex-wrap items-center gap-6">
                                <Badge className="bg-primary text-white border-0 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20 rounded-none">
                                    {blog.category}
                                </Badge>
                                <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
                                    <Calendar size={14} className="text-primary" />
                                    <span>{blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Sync Pending'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
                                    <Clock size={14} className="text-primary" />
                                    <span>{readingTime} Minute Execution</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight uppercase">
                                {blog.title}
                            </h1>

                            <div className="relative">
                                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed border-l-4 border-primary/20 pl-8 opacity-80">
                                    {blog.excerpt}
                                </p>
                            </div>

                            {/* Author Node */}
                            <div className="flex items-center gap-5 pt-4">
                                <div className="w-14 h-14 rounded-none bg-card border border-border flex items-center justify-center text-primary font-bold shadow-md text-lg">
                                    {blog.author?.charAt(0)}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-2">
                                        Author: {blog.author}
                                        <Sparkles size={10} className="text-primary" />
                                    </span>
                                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Technical Contributor</span>
                                </div>
                            </div>
                        </header>

                        {/* Visual Asset Container */}
                        {blog.image && (
                            <div className="aspect-video relative rounded-none overflow-hidden mb-16 shadow-xl border border-border group">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 contrast-[1.1]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>
                        )}

                        {/* High-Performance Rich Text Content */}
                        <div className="prose dark:prose-invert max-w-none prose-base md:prose-lg prose-primary prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase prose-p:text-muted-foreground prose-p:font-medium prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-8 prose-blockquote:rounded-none prose-blockquote:border-l-4 prose-img:rounded-none prose-img:border prose-img:border-border prose-a:text-primary prose-a:no-underline hover:prose-a:underline transition-colors">
                            <RichText content={blog.content} />
                        </div>

                        {/* Transmission Footer */}
                        <footer className="mt-24 pt-12 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-10">
                            <div className="space-y-3">
                                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground flex items-center gap-2">
                                    <Share2 size={12} className="text-primary" />
                                    Broadcast This Intel
                                </h4>
                                <div className="flex gap-3">
                                    {['FB', 'X', 'LN'].map((platform) => (
                                        <div key={platform} className="w-12 h-12 rounded-none border border-border bg-card flex items-center justify-center text-[10px] font-bold text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-pointer shadow-sm">
                                            {platform}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button asChild className="px-10 py-6 rounded-none bg-primary hover:bg-foreground text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl shadow-primary/20 h-auto">
                                <Link href="/book-consultation" className="flex items-center gap-2">
                                    <MessageCircle size={16} />
                                    Initialize Consultation
                                </Link>
                            </Button>
                        </footer>
                    </div>
                </div>
            </article>
        </main>
    );
}
