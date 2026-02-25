'use client'

import React from 'react';
import Link from 'next/link';
import { Career } from '@/data/careers';
import { MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CareerCardProps {
    career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
    return (
        <div className="bg-white dark:bg-[#0A0D18] rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 p-8 flex flex-col md:flex-row gap-8 items-start md:items-center group overflow-hidden relative">
            {/* Subtle Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex-grow space-y-4 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        {career.department}
                    </Badge>
                    <Badge variant="outline" className="border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        {career.type}
                    </Badge>
                    {career.isOpen && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-none border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-none bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Open Now</span>
                        </div>
                    )}
                </div>

                <Link href={`/careers/${career.slug}`} className="block">
                    <h3 className="text-2xl font-black text-navy dark:text-white group-hover:text-primary transition-colors flex items-center gap-2 decoration-primary/30 group-hover:underline underline-offset-8">
                        {career.title}
                        <Sparkles size={18} className="text-primary hidden group-hover:block animate-pulse" />
                    </h3>
                </Link>

                <div className="flex flex-wrap gap-8 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        {career.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary" />
                        Posted {career.postedDate}
                    </div>
                </div>
            </div>

            <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 relative z-10">
                <Link href={`/careers/${career.slug}`} className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-navy dark:bg-white text-white dark:text-navy font-black uppercase tracking-[0.2em] text-[10px] rounded-none hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-xl group-hover:-translate-x-2">
                    View Details
                    <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default CareerCard;
