'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter, Youtube, Hash, Sparkles } from 'lucide-react';
import { Logo } from '@/components/admin/Branding';
import type { SiteSetting } from '@/payload-types';

interface FooterProps {
    footerData: NonNullable<SiteSetting['footer']> | null | undefined;
}

const getSocialIcon = (platform: string) => {
    switch (platform) {
        case 'facebook': return <Facebook size={20} />;
        case 'instagram': return <Instagram size={20} />;
        case 'linkedin': return <Linkedin size={20} />;
        case 'whatsapp': return <MessageCircle size={20} />;
        case 'x': return <Twitter size={20} />;
        case 'youtube': return <Youtube size={20} />;
        case 'tiktok': return <Hash size={20} />;
        default: return <Hash size={20} />;
    }
};

export default function Footer({ footerData }: FooterProps) {
    // Default fallbacks in case CMS data is missing
    const address = footerData?.address || 'Pragatinagar Marga, Sankhamul-31, Kathmandu, Nepal';
    const phone = footerData?.phone || '+977 974-5697694';
    const email = footerData?.email || 'info@tecobit.cloud';
    
    // Default columns if none exist
    const defaultColumns = [
        {
            id: '1',
            heading: 'Operations',
            links: [
                { id: '1', label: 'Full-Stack Sync', url: '#', newTab: false },
                { id: '2', label: 'Mobile Architecture', url: '#', newTab: false },
                { id: '3', label: 'SEO Optimization', url: '#', newTab: false },
            ]
        },
        {
            id: '2',
            heading: 'Enterprise',
            links: [
                { id: '1', label: 'Our Origin', url: '/about', newTab: false },
                { id: '2', label: 'Contact Node', url: '/contact', newTab: false },
            ]
        }
    ];
    
    const columns = (footerData?.columns && footerData.columns.length > 0) ? footerData.columns : defaultColumns;
    
    const defaultSocials = [
        { id: '1', platform: 'facebook', url: '#' },
        { id: '2', platform: 'instagram', url: '#' },
        { id: '3', platform: 'linkedin', url: '#' },
        { id: '4', platform: 'whatsapp', url: '#' },
    ];
    
    const socialLinks = (footerData?.socialLinks && footerData.socialLinks.length > 0) ? footerData.socialLinks : defaultSocials;
    
    const copyrightText = footerData?.copyrightText || '© 2024 Tecobit Technology Pvt Ltd · System Integrated';

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
                                    
                                    Tecobit Technology Pvt Ltd
                                </h3>
                                <p className="opacity-80">
                                    {address}
                                </p>
                            </div>

                            <div className="flex flex-col space-y-3 border-l-2 border-primary/20 pl-4">
                                <p className="text-xs uppercase tracking-[0.1em] font-bold">
                                    Phone no: <span className="text-foreground hover:text-primary transition-all cursor-pointer font-black">{phone}</span>
                                </p>
                                <p className="text-xs uppercase tracking-[0.1em] font-bold">
                                    Email: <span className="text-foreground hover:text-primary transition-all cursor-pointer font-black">{email}</span>
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Link href="/terms" className="hover:text-primary transition-colors">Safety Protocols</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Axis</Link>
                        </div>
                    </div>

                    {/* Dynamic Link Columns */}
                    {columns.map((col, idx) => (
                        <div key={col.id || idx} className="space-y-8">
                            <h4 className="text-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
                                {col.heading}
                            </h4>
                            <ul className="space-y-4 text-sm font-bold">
                                {col.links?.map((link, linkIdx) => (
                                    <li key={link.id || linkIdx}>
                                        <Link 
                                            href={link.url} 
                                            target={link.newTab ? "_blank" : "_self"}
                                            rel={link.newTab ? "noopener noreferrer" : undefined}
                                            className="hover:text-primary transition-all hover:translate-x-1 block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p className="opacity-50">
                        {copyrightText}
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => (
                            <Link 
                                key={social.id || idx} 
                                href={social.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
                            >
                                {getSocialIcon(social.platform)}
                                <span className="sr-only">{social.platform}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
