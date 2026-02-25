'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ProgressLabelProps {
    label: string
    value: number
    total: number
    color?: string
    showPercentage?: boolean
}

export function ProgressLabel({
    label,
    value,
    total,
    color = '#FF8C00',
    showPercentage = true
}: ProgressLabelProps) {
    const [progress, setProgress] = useState(0)
    const percentage = Math.round((value / total) * 100)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(percentage), 100)
        return () => clearTimeout(timer)
    }, [percentage])

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </span>
                {showPercentage && (
                    <motion.span
                        className="text-sm font-bold"
                        style={{ color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {progress}%
                    </motion.span>
                )}
            </div>

            <div className="h-2 bg-gray-200 dark:bg-dark-surface rounded-none overflow-hidden">
                <motion.div
                    className="h-full rounded-none"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
            </div>
        </div>
    )
}
