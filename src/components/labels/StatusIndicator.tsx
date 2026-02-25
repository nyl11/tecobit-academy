'use client'

import { motion } from 'framer-motion'

interface StatusIndicatorProps {
    status: 'active' | 'inactive' | 'pending' | 'success' | 'error'
    label: string
    showDot?: boolean
    animated?: boolean
}

export function StatusIndicator({
    status,
    label,
    showDot = true,
    animated = true
}: StatusIndicatorProps) {
    const statusConfig = {
        active: {
            color: 'text-green-600 dark:text-green-400',
            bg: 'bg-green-50 dark:bg-green-900/20',
            dot: 'bg-green-500',
            border: 'border-green-200 dark:border-green-800'
        },
        inactive: {
            color: 'text-gray-600 dark:text-gray-400',
            bg: 'bg-gray-50 dark:bg-gray-900/20',
            dot: 'bg-gray-400',
            border: 'border-gray-200 dark:border-gray-700'
        },
        pending: {
            color: 'text-yellow-600 dark:text-yellow-400',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
            dot: 'bg-yellow-500',
            border: 'border-yellow-200 dark:border-yellow-800'
        },
        success: {
            color: 'text-green-600 dark:text-green-400',
            bg: 'bg-green-50 dark:bg-green-900/20',
            dot: 'bg-green-500',
            border: 'border-green-200 dark:border-green-800'
        },
        error: {
            color: 'text-red-600 dark:text-red-400',
            bg: 'bg-red-50 dark:bg-red-900/20',
            dot: 'bg-red-500',
            border: 'border-red-200 dark:border-red-800'
        }
    }

    const config = statusConfig[status]
    const Component = animated ? motion.div : 'div'

    return (
        <Component
            className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-none
        ${config.bg} ${config.color} ${config.border} border
        text-sm font-medium
      `}
            {...(animated && {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.3 }
            })}
        >
            {showDot && (
                <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-none ${config.dot} opacity-75`} />
                    <span className={`relative inline-flex rounded-none h-2 w-2 ${config.dot}`} />
                </span>
            )}
            <span>{label}</span>
        </Component>
    )
}
