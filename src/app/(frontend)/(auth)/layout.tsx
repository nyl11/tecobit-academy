import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Logo } from '@/components/admin/Branding'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground overflow-hidden">
            {/* Left Side - Hero / Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 p-20 flex-col justify-between relative overflow-hidden bg-card border-r border-border">
                {/* Background Decorative */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-none blur-[120px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-none blur-[120px] -ml-32 -mb-32" />
                </div>

                <div className="relative z-10 flex items-center justify-between">
                    <Link href="/" className="transform hover:scale-105 transition-transform duration-500">
                        <Logo />
                    </Link>
                    <ThemeToggle />
                </div>

                <div className="relative z-10 space-y-8">
                    <h1 className="text-6xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
                        Start Your <br />
                        <span className="text-primary">Career</span> <br />
                        Exploration.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-md font-medium">
                        Access high-performance curriculum, track your evolution, and sync with industry standards.
                    </p>
                </div>

                <div className="relative z-10 flex items-center gap-10">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-none border-4 border-card bg-muted flex items-center justify-center text-[10px] font-black text-foreground">
                                {i}
                            </div>
                        ))}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                        Evolution Sync: <span className="text-foreground tracking-normal">1,000+ Students</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative bg-background/50 backdrop-blur-3xl">
                {/* Mobile Background Elements */}
                <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-none blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-none blur-3xl opacity-50" />
                    <div className="absolute top-6 right-6 z-50 pointer-events-auto">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="w-full max-w-sm relative z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
