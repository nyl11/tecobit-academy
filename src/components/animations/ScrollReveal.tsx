'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
    children: React.ReactNode
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
}

export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollAnimation()

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            animate={isVisible ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.div>
    )
}
