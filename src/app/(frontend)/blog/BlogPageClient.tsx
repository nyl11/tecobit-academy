'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, User, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogPageClient({ initialBlogs }: { initialBlogs: any[] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => {
        const cats = new Set(initialBlogs.map(blog => blog.category).filter(Boolean));
        return ['All', ...Array.from(cats).sort()];
    }, [initialBlogs]);

    const filteredBlogs = useMemo(() => {
        return initialBlogs.filter(blog => {
            const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery, initialBlogs]);

    const featuredBlogs = filteredBlogs.slice(0, 2);
    const regularBlogs = filteredBlogs.slice(2);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-muted/20">
                {/* Aesthetic Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-none blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[120px] animate-pulse-slow delay-700" />
                </div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Latest Updates & Insights
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tighter">
                            The <span className="text-primary">Knowledge</span> Console
                        </h1>
                        <p className="text-muted-foreground font-medium max-w-2xl mx-auto text-lg leading-relaxed px-4 opacity-80">
                            Synchronize your identity with the latest industry intelligence, technical deep-dives, and success-driven protocols.
                        </p>
                    </div>

                    {/* Search Component */}
                    <div className="relative max-w-2xl mx-auto px-4 group">
                        <Search className="absolute left-10 md:left-10 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Initialize Search Protocol..."
                            className="w-full h-16 md:h-20 pl-16 md:pl-20 pr-8 rounded-none border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-card/50 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/50 text-base md:text-lg font-medium shadow-2xl shadow-primary/5"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4 px-4">
                        {categories.map((cat: any) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-none text-[11px] font-black transition-all border uppercase tracking-[0.1em] select-none ${activeCategory === cat
                                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105'
                                    : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-foreground'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-24 md:py-32">
                <div className="container-custom">
                    <div className="mb-12 md:mb-16 flex items-center gap-8">
                        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
                            <span className="text-primary">Featured</span> Intelligence
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent hidden md:block" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {featuredBlogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <Link href={`/blog/${blog.slug}`} className="block relative aspect-video md:aspect-[16/9] rounded-none overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 transform group-hover:scale-[1.02]">
                                    <Image
                                        src={blog.image || `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=1200&q=80`}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="absolute top-8 left-8">
                                        <Badge className="bg-primary text-white border-0 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 rounded-none">
                                            {blog.category}
                                        </Badge>
                                    </div>
                                </Link>
                                <div className="mt-8 space-y-5 px-4">
                                    <div className="flex items-center gap-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-primary" />
                                            <span>{blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Pending Sync'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-primary" />
                                            <span className="text-foreground">{blog.author}</span>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-all leading-[1.1] tracking-tighter">
                                            {blog.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground line-clamp-2 text-base md:text-lg leading-relaxed opacity-80">
                                        {blog.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all duration-300"
                                    >
                                        Execute Read Protocol
                                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Grid Section */}
            <section className="py-24 md:py-32 bg-muted/30">
                <div className="container-custom">
                    <div className="mb-16 md:mb-20 flex items-center justify-between">
                        <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tighter uppercase">Recent <span className="text-primary">Transmissions</span></h2>
                        <div className="h-px flex-1 bg-border/50 ml-8 hidden md:block" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                        {regularBlogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col h-full bg-card rounded-none border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <Link href={`/blog/${blog.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={blog.image || `https://images.unsplash.com/photo-1542831371-29b0f74f9713?fit=crop&w=600&q=80`}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors" />
                                    <div className="absolute top-6 left-6">
                                        <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-none">
                                            {blog.category}
                                        </Badge>
                                    </div>
                                </Link>
                                <div className="p-10 flex flex-col flex-1 space-y-6">
                                    <div className="flex items-center justify-between text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={12} className="text-primary" />
                                            {blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString() : 'Sync Pending'}
                                        </div>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-all line-clamp-2 leading-tight tracking-tight">
                                            {blog.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground text-base line-clamp-3 leading-relaxed flex-1 opacity-80">
                                        {blog.excerpt}
                                    </p>
                                    <div className="pt-6 border-t border-border flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">By {blog.author}</span>
                                        <div className="text-primary group-hover:translate-x-1 transition-transform">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="py-32 text-center space-y-8">
                            <div className="w-24 h-24 rounded-none bg-muted mx-auto flex items-center justify-center border border-border text-muted-foreground/30 rotate-12">
                                <Search size={48} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black text-foreground tracking-tighter">Zero Correlation Found</h3>
                                <p className="text-muted-foreground text-lg">Adjust your search parameters to re-initialize the results.</p>
                            </div>
                            <Button variant="outline" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="rounded-none px-10 h-16 border-primary/20 text-primary font-black uppercase tracking-widest text-[11px] hover:bg-primary hover:text-white">
                                Reset Protocols
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
