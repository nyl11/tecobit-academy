'use client'

import { ReactLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SmoothNavigationProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <ReactLenis root options={{
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </ReactLenis>
    )
}
