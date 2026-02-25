"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  delay?: number
}

const AnimatedCardMain = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, hover = true, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={hover ? { y: -8, scale: 1.02 } : {}}
        className={cn("transition-all duration-300", className)}
      >
        <Card ref={ref} className="h-full" {...props}>
          {children}
        </Card>
      </motion.div>
    )
  }
)

AnimatedCardMain.displayName = "AnimatedCard"

export const AnimatedCard = Object.assign(AnimatedCardMain, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
})
