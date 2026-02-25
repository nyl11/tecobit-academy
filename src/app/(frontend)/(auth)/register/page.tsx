'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Phone, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    fullName: formData.fullName,
                    phoneNumber: formData.phoneNumber,
                    role: 'student', // Default role
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.errors?.[0]?.message || 'Registration failed')
            }

            // Successfully registered
            // Redirect to login or auto-login
            router.push('/login?registered=true')
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10"
        >
            <div className="space-y-3">
                <h2 className="text-4xl font-black text-foreground tracking-tighter">Initialize Profile</h2>
                <p className="text-muted-foreground font-medium">Join the Elite network of future architects.</p>
            </div>

            {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-none flex items-start gap-3 text-sm animate-shake">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span className="font-bold">{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Identity Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="John Doe"
                            className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Identity Secret (Email)</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Comms Uplink (Phone)</label>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="+977 98XXXXXXXX"
                            className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Access Token</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="••••••••"
                                className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Verify Token</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                placeholder="••••••••"
                                className="w-full h-16 bg-muted/30 border border-border rounded-none pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
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
                            Establish Connection
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    )}
                </Button>
            </form>

            <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground font-medium">
                    Already Authenticated?{' '}
                    <Link href="/login" className="text-primary font-black hover:text-foreground transition-colors uppercase tracking-widest text-[10px] ml-2">
                        Sync Session
                    </Link>
                </p>
            </div>
        </motion.div>
    )
}
