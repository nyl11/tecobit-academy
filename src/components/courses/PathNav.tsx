'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface PathStep {
    stepName: string
    stepSlug: string
    id?: string | null
}

interface PathNavProps {
    courseSlug: string
    pathSteps: PathStep[]
    activeStepSlug?: string
}

export default function PathNav({ courseSlug, pathSteps, activeStepSlug }: PathNavProps) {
    if (!pathSteps || pathSteps.length === 0) return null

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Learning Path"
            className="w-full overflow-x-auto scrollbar-hide"
        >
            <div className="flex items-center gap-1 sm:gap-2 py-6 px-1 min-w-max">
                {/* Path Label */}
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mr-2 sm:mr-4 shrink-0">
                    Path
                </span>

                {pathSteps.map((step, index) => {
                    const isLast = index === pathSteps.length - 1
                    const isActive = activeStepSlug ? step.stepSlug === activeStepSlug : false

                    return (
                        <React.Fragment key={step.id || index}>
                            <div
                                className={`
                                    group relative flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 
                                    border transition-all duration-300 shrink-0 cursor-default
                                    ${isActive
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                        : 'bg-card/60 text-foreground border-border hover:border-primary/40 hover:bg-card'
                                    }
                                `}
                            >
                                {/* Step Number */}
                                <span
                                    className={`
                                        text-[9px] sm:text-[10px] font-black tabular-nums
                                        ${isActive
                                            ? 'text-white/60'
                                            : 'text-muted-foreground group-hover:text-primary'
                                        }
                                        transition-colors duration-300
                                    `}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Step Name */}
                                <span
                                    className={`
                                        text-[10px] sm:text-xs font-black uppercase tracking-wider
                                        ${isActive
                                            ? 'text-white'
                                            : 'text-foreground/80 group-hover:text-foreground'
                                        }
                                        transition-colors duration-300
                                    `}
                                >
                                    {step.stepName}
                                </span>

                                {/* Active indicator bar */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeStep"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </div>

                            {/* Chevron separator — not after final step */}
                            {!isLast && (
                                <ChevronRight
                                    size={14}
                                    className="text-muted-foreground/40 shrink-0 -mx-0.5"
                                    aria-hidden="true"
                                />
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </motion.nav>
    )
}
