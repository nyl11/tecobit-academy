'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.errors?.[0]?.message || 'Login failed. Please check your credentials.')
            }

            router.push(data.user?.role === 'admin' ? '/admin' : '/')
            router.refresh()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10"
        >
            <div className="space-y-3">
                <h2 className="text-4xl font-black text-foreground tracking-tighter">Enter Console</h2>
                <p className="text-muted-foreground font-medium">Synchronize your session to continue.</p>
            </div>

            {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-none flex items-start gap-3 text-sm animate-shake">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span className="font-bold">{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Identity Secret (Email)</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="email"
                            required
                            placeholder="admin@tecobit.cloud"
                            className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Access Token (Password)</label>
                        <Link href="/forgot-password" icon-label="lost-token" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors">
                            Lost Token?
                        </Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="password"
                            required
                            placeholder="••••••••••••"
                            className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-16 bg-primary text-white hover:bg-foreground hover:text-background font-black uppercase tracking-[0.2em] rounded-none group shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] text-xs"
                >
                    {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Initialize Session
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    )}
                </Button>
            </form>

            <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground font-medium">
                    Unregistered Identity?{' '}
                    <Link href="/book-consultation" className="text-primary font-black hover:text-foreground transition-colors uppercase tracking-widest text-[10px] ml-2">
                        Acquire Access
                    </Link>
                </p>
            </div>
        </motion.div>
    )
}
