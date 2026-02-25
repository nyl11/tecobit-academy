'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FloatingLabelProps {
    children: React.ReactNode
    label: string
    description?: string
    position?: 'top' | 'bottom' | 'left' | 'right'
}

export function FloatingLabel({
    children,
    label,
    description,
    position = 'top'
}: FloatingLabelProps) {
    const [isVisible, setIsVisible] = useState(false)

    const positions = {
        top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
        bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
        left: 'top-1/2 -left-2 -translate-y-1/2 -translate-x-full',
        right: 'top-1/2 -right-2 -translate-y-1/2 translate-x-full',
    }

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className={`absolute z-50 ${positions[position]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                    >
                        <div className="glass rounded-none p-3 shadow-2xl border border-white/20 dark:border-white/10 min-w-[150px]">
                            <p className="font-semibold text-sm text-navy dark:text-white mb-1">
                                {label}
                            </p>
                            {description && (
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                        {/* Arrow */}
                        <div
                            className={`absolute w-3 h-3 glass rotate-45 border border-white/20 dark:border-white/10
                ${position === 'top' ? 'bottom-[-6px] left-1/2 -translate-x-1/2' : ''}
                ${position === 'bottom' ? 'top-[-6px] left-1/2 -translate-x-1/2' : ''}
                ${position === 'left' ? 'right-[-6px] top-1/2 -translate-y-1/2' : ''}
                ${position === 'right' ? 'left-[-6px] top-1/2 -translate-y-1/2' : ''}
              `}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
