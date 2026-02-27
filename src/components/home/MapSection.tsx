'use client';

import React from 'react';
import { Star, MapPin, Navigation, Map as MapIcon, Globe, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MapSection() {
    return (
        <section className="h-[600px] md:h-[700px] w-full relative bg-background overflow-hidden border-y border-border">
            {/* Map Iframe with Theme-Aware Filters */}
            <div className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.1] opacity-60 dark:opacity-40 transition-all duration-700 hover:grayscale-0 hover:opacity-100">
                <iframe
                    width="100%"
                    height="100%"
                    title="Tecobit Location Synchronization"
                    className="absolute inset-0 border-0"
                    src="https://maps.google.com/maps?q=Tecobit%20Technology%20Pvt%20Ltd%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Elite Overlay Card Container */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="container-custom relative h-full flex items-center">
                    <div className="bg-card/90 backdrop-blur-2xl p-10 rounded-none shadow-2xl border border-border max-w-sm w-full space-y-8 relative overflow-hidden group pointer-events-auto">
                    {/* Active Status */}
                    <div className="absolute top-8 right-8 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-none bg-primary animate-ping" />
                        <div className="w-2 h-2 rounded-none bg-primary" />
                    </div>

                    <div className="space-y-4">
                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-none">
                            Tecobit Technology Pvt. Ltd.
                        </Badge>
                        <h3 className="text-2xl font-black text-foreground leading-none tracking-tighter uppercase">
                            Tecobit <span className="text-primary">Academy</span>
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed opacity-80">
                            31 Pragatinagar Marg, Kathmandu 44600, Digital Axis
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-none border border-border">
                            <span className="text-xl font-black text-foreground">4.9</span>
                            <div className="flex text-primary">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                60+ Reviews
                            </span>
                        </div>

                        <div className="pt-6 border-t border-border flex flex-col gap-4">
                            <a
                                href="https://maps.google.com?q=Tecobit+Technology+Kathmandu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all group/link"
                            >
                                <Globe size={16} />
                                Global Viewport
                                <Sparkles size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Floating CTA Button */}
            <a
                href="https://maps.google.com?q=Tecobit+Technology+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white px-10 py-5 rounded-none font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/40 hover:bg-foreground transition-all hover:-translate-y-2 flex items-center gap-3 group"
            >
                <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Find Us on the Map
            </a>
        </section>
    );
}
