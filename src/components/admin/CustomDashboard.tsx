'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
    Users,
    FileText,
    Image as ImageIcon,
    UserCircle,
    Calendar,
    MapPin,
    Settings,
    PenTool,
    BookOpen,
    MessageSquare,
    GraduationCap,
    Plus,
    Search,
    Bell,
    Sun
} from 'lucide-react'
import Link from 'next/link'

const CustomDashboard = () => {
    // counts and loading removed per linting rules if not used in render
    /*
    useEffect(() => {
        ...
    }, [])
    */

    const categories = [
        {
            title: 'CORE',
            items: [
                { name: 'Users', icon: Users, href: '/admin/collections/users', slug: 'users' },
                { name: 'Team Members', icon: UserCircle, href: '/admin/collections/team-members', slug: 'team-members' },
            ]
        },
        {
            title: 'GLOBALS',
            items: [
                { name: 'Site Settings', icon: Settings, href: '/admin/globals/site-settings', slug: 'site-settings' },
            ]
        },
        {
            title: 'CONTENT',
            items: [
                { name: 'Pages', icon: FileText, href: '/admin/collections/pages', slug: 'pages', canAdd: true },
                { name: 'Media', icon: ImageIcon, href: '/admin/collections/media', slug: 'media', canAdd: true },
                { name: 'News Events', icon: Calendar, href: '/admin/collections/news-events', slug: 'news-events', canAdd: true },
            ]
        },
        {
            title: 'ACADEMICS',
            items: [
                { name: 'Courses', icon: BookOpen, href: '/admin/collections/courses', slug: 'courses', canAdd: true },
            ]
        },
        {
            title: 'BUSINESS',
            items: [
                { name: 'Offices', icon: MapPin, href: '/admin/collections/offices', slug: 'offices', canAdd: true },
                { name: 'Contact Messages', icon: MessageSquare, href: '/admin/collections/contact-messages', slug: 'contact-messages' },
                { name: 'Enrollments', icon: GraduationCap, href: '/admin/collections/enrollments', slug: 'enrollments' },
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white text-[#333] font-sans flex flex-col">
            {/* Header / Top Nav */}
            <header className="h-[80px] bg-white border-b border-[#f2f2f2] flex items-center justify-between px-10 lg:px-16 sticky top-0 z-40">
                <div className="flex-1 max-w-xl">
                    <div className="flex items-center bg-[#f9f9f9] rounded-3xl px-6 h-14 border border-[#f0f0f0] group focus-within:border-[#7da6c1]/30 focus-within:bg-white transition-all duration-300">
                        <Search size={18} className="text-[#bbb] group-focus-within:text-[#7da6c1] transition-colors" />
                        <input
                            type="text"
                            placeholder="Jump to structure..."
                            className="bg-transparent border-none outline-none px-4 text-[14px] w-full text-[#333] placeholder:text-[#bbb] font-medium tracking-tight"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 pr-6 border-r border-[#f2f2f2]">
                        <button className="p-3 rounded-xl bg-white border border-[#f0f0f0] text-[#aaa] hover:text-[#7da6c1] hover:border-[#7da6c1]/20 transition-all shadow-sm">
                            <Sun size={18} />
                        </button>
                        <button className="relative p-3 rounded-xl bg-white border border-[#f0f0f0] text-[#aaa] hover:text-[#7da6c1] hover:border-[#7da6c1]/20 transition-all shadow-sm">
                            <Bell size={18} />
                            <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#ff6b00] rounded-full ring-[2px] ring-white" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="flex flex-col items-end leading-tight">
                            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]">Elite Admin</span>
                            <span className="text-[10px] font-bold text-[#7da6c1]">System Core</span>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7da6c1] to-[#6b8da5] flex items-center justify-center text-[15px] font-black text-white shadow-lg shadow-[#7da6c1]/20 shrink-0 transform group-hover:scale-105 transition-transform">
                            C
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 p-10 lg:p-20 overflow-y-auto no-scrollbar space-y-24 bg-[#ffffff]">
                {categories.map((cat, i) => (
                    <section key={i} className="space-y-16">
                        <div className="flex items-center gap-8">
                            <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/20" />
                            <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight uppercase">{cat.title}</h2>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#eee] to-transparent" />
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8`}>
                            {cat.items.map((item: any, j) => (
                                <motion.div
                                    key={j}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                                    className={`group relative bg-white border border-[#f2f2f2] rounded-[3.5rem] p-10 flex items-center justify-between min-h-[160px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-700`}
                                >
                                    <Link href={item.href} className="flex-1 flex flex-col gap-1">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-3xl bg-[#fcfcfc] border border-[#f8f8f8] flex items-center justify-center text-[#ddd] group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/10 transition-all duration-700">
                                                <item.icon size={26} strokeWidth={1.5} />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className={`text-xl font-bold text-[#1a1a1a] group-hover:text-primary transition-colors tracking-tight`}>{item.name}</span>
                                                <span className="text-[10px] font-black text-[#bbb] uppercase tracking-[0.3em]">Data Structure Layer</span>
                                            </div>
                                        </div>
                                    </Link>
                                    {item.canAdd && (
                                        <Link href={`${item.href}/create`} className="w-12 h-12 rounded-full border border-[#f0f0f0] flex items-center justify-center text-[#ddd] hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm">
                                            <Plus size={22} />
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}

                <footer className="pt-32 border-t border-[#f2f2f2] flex flex-col items-center gap-14 pb-20">
                    <div className="flex flex-wrap justify-center gap-20 text-[10px] font-black uppercase tracking-[0.6em] text-[#bbb]">
                        {['Documentation', 'Operational Status', 'API Gateway'].map((f) => (
                            <span key={f} className="hover:text-primary cursor-pointer transition-colors relative group">
                                {f}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                            </span>
                        ))}
                    </div>
                    <div className="text-center space-y-3 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        <p className="text-[11px] font-black uppercase tracking-[2em] text-[#1a1a1a]">TEC O BIT CORE INFRASTRUCTURE</p>
                        <p className="text-[9px] font-black text-[#aaa] tracking-widest">VERSION 4.2.0_ELITE_STABLE</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CustomDashboard
