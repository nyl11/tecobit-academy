'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedBadgeProps {
    icon?: LucideIcon
    label: string
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
    size?: 'sm' | 'md' | 'lg'
    animated?: boolean
    pulse?: boolean
    className?: string
}

export function AnimatedBadge({
    icon: Icon,
    label,
    variant = 'primary',
    size = 'md',
    animated = true,
    pulse = false,
    className = ''
}: AnimatedBadgeProps) {
    const variants = {
        primary: 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/30',
        secondary: 'bg-navy/10 text-navy border-navy/20 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
        success: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
        warning: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800',
        info: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
    }

    const sizes = {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2',
    }

    const iconSizes = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
    }

    const MotionDiv = animated ? motion.div : 'div'

    return (
        <MotionDiv
            className={`
        inline-flex items-center gap-1.5 font-medium rounded-none border
        ${variants[variant]} ${sizes[size]}
        ${pulse ? 'animate-pulse-slow' : ''}
        transition-all duration-300 hover:scale-105
        ${className}
      `}
            {...(animated && {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                whileHover: { scale: 1.05 },
                transition: { duration: 0.2 }
            })}
        >
            {Icon && <Icon className={iconSizes[size]} />}
            <span>{label}</span>
        </MotionDiv>
    )
}
