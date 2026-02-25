'use client';

import React from 'react';
import Link from 'next/link';

export const LogoutLink = () => {
    return (
        <div className="nav__log-out-wrapper mt-auto pt-10 px-2">
            <Link href="/admin/logout" className="group w-full flex items-center justify-center gap-4 px-6 py-5 rounded-[2rem] bg-zinc-50 border border-zinc-200 text-zinc-500 hover:bg-[#7da6c1] hover:text-white hover:border-[#7da6c1] hover:shadow-2xl hover:shadow-[#7da6c1]/20 transition-all duration-500 font-black uppercase tracking-[0.2em] text-[10px] no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out group-hover:stroke-white transition-colors">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                <span className="group-hover:text-white transition-colors">Terminate Session</span>
            </Link>
        </div>
    );
};
