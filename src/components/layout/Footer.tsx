'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MessageCircle, Sparkles } from 'lucide-react';
import { Logo } from '@/components/admin/Branding';

export default function Footer() {
    return (
        <footer className="bg-muted/30 text-muted-foreground pt-24 pb-12 border-t border-border font-sans transition-colors duration-500 relative overflow-hidden">
            {/* Elite Background Accents */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-none blur-[100px] -mt-32" />

            <div className="container-custom relative z-10 mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col items-start gap-3 group">
                            <Logo />
                        </Link>

                        <div className="space-y-6 text-sm leading-relaxed">
                            <div className="space-y-2">
                                <h3 className="text-foreground font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Sparkles size={14} className="text-primary" />
                                    Infrastructure Hub
                                </h3>
                                <p className="opacity-80">
                                    Pragatinagar Marga, Sankhamul-31, Kathmandu, Nepal
                                </p>
                            </div>

                            <div className="flex flex-col space-y-3 border-l-2 border-primary/20 pl-4">
                                <p className="text-xs uppercase tracking-[0.1em] font-bold">
                                    Uplink: <span className="text-foreground hover:text-primary transition-all cursor-pointer font-black">+977 974-5697694</span>
                                </p>
                                <p className="text-xs uppercase tracking-[0.1em] font-bold">
                                    Signal: <span className="text-foreground hover:text-primary transition-all cursor-pointer font-black">info@tecobit.cloud</span>
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Link href="/terms" className="hover:text-primary transition-colors">Safety Protocols</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Axis</Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-8">
                        <h4 className="text-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Operations</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Full-Stack Sync</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Mobile Architecture</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">SEO Optimization</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">E-commerce Nodes</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">System Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-8">
                        <h4 className="text-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Enterprise</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/about" className="hover:text-primary transition-all hover:translate-x-1 block">Our Origin</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Core Portfolio</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Asset Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-all hover:translate-x-1 block">Contact Node</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="space-y-8">
                        <h4 className="text-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Uplink</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/contact" className="hover:text-primary transition-all hover:translate-x-1 block">Technical Support</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Direct WhatsApp</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">System Docs</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Central FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="space-y-8">
                        <h4 className="text-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Compliance</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/terms" className="hover:text-primary transition-all hover:translate-x-1 block">Service Terms</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-all hover:translate-x-1 block">Data Protection</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-all hover:translate-x-1 block">Cookie Matrix</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p className="opacity-50">
                        © 2024 Tecobit Technology Pvt Ltd · System Integrated
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm">
                            <Facebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm">
                            <MessageCircle size={20} />
                            <span className="sr-only">WhatsApp</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
