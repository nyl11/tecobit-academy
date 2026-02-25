'use client'

import { motion } from 'framer-motion'

interface StaggerContainerProps {
    children: React.ReactNode
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1
}: StaggerContainerProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.div variants={item}>
            {children}
        </motion.div>
    )
}
