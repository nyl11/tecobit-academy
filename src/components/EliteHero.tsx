'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Users, BookOpen, Briefcase, Zap, Sparkles, Globe, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/admin/Branding'

function TypewriterText({ words, className }: { words: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.slice(0, currentText.length + 1))
          if (currentText.length === word.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(word.slice(0, currentText.length - 1))
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

export function EliteHero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const skills = [
    'Full Stack JS',
    'Advanced DevOps',
    'Cyber Security',
  ]

  const stats = [
    { label: 'MERN', value: '3,000+', icon: Users },
    { label: 'Industry Mentors', value: '4+', icon: BookOpen },
    
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background transition-colors duration-500 pt-28 pb-12 md:pb-24">
      {/* Aesthetic Background - Pure CSS Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-primary/20 dark:bg-primary/10 rounded-full blur-[140px] animate-pulse-slow"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 dark:bg-blue-900/10 rounded-full blur-[140px] animate-pulse-slow delay-1000"
        />
        <div className="absolute inset-0 pattern-grid-lg opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-10 text-center lg:text-left">


              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'circOut' }}
                >
                  Master <span className="text-primary">Professional</span>
                  <br />
                  <TypewriterText
                    words={['Capabilities', 'Technology', 'Innovation']}
                    className="gradient-text opacity-90"
                  />
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-muted-foreground dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Bridging the gap between academic theory and industry expertise. Tecobit Academy
                  is Nepal&apos;s premier institution for professional digital transformation and
                  technical leadership.
                </motion.p>
              </div>

              {/* Skills Marquee Aesthetic */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              >
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-none bg-muted border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-black uppercase tracking-[0.2em] px-12 h-20 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-105 active:scale-95 text-xs group"
                >
                  <Link href="/courses" className="flex items-center gap-3">
                    Enroll Now
                    <GraduationCap size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none border-border text-foreground font-black uppercase tracking-[0.2em] px-12 h-20 transition-all hover:bg-muted hover:scale-105 active:scale-95 text-xs group"
                >
                  <Link href="/book-consultation" className="flex items-center gap-3">
                    <Globe size={18} className="animate-spin-slow opacity-50" />
                    Academic Consultation
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Aesthetic Side Column - Interactive Element Without 3D */}
            <motion.div
              className="hidden lg:block lg:col-span-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[80px] group-hover:bg-primary/40 transition-all duration-700" />
                <div className="relative aspect-[3/4] bg-card/50 backdrop-blur-3xl border border-border rounded-none p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-none bg-primary flex items-center justify-center text-primary-foreground shadow-xl">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-foreground tracking-tighter leading-none">
                      Advanced
                      <br />
                      Curriculum
                    </h3>
                    <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                      Rigorous technical programs designed for high-performance engineering
                      excellence.
                    </p>
                  </div>

                  <div className="space-y-6 pt-12 border-t border-border">
                    {[
                      { label: 'Certified Graduates', value: '3,000+', icon: Users },
                      { label: 'Academic Faculty', value: '25+', icon: BookOpen },
                      { label: 'Global Affiliations', value: '50+', icon: Briefcase },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="p-2 rounded-none bg-muted text-primary">
                          <stat.icon size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-foreground font-black tracking-tighter text-xl leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic Decoration */}
                  <div className="absolute -right-12 -top-12 w-48 h-48 border-[1px] border-border rounded-full opacity-20" />
                  <div className="absolute -right-24 -top-24 w-48 h-48 border-[1px] border-border rounded-full opacity-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
