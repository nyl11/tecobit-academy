'use client'

import { motion } from 'framer-motion'

interface SkillTagCloudProps {
    skills: string[]
    highlightSkills?: string[]
}

export function SkillTagCloud({ skills, highlightSkills = [] }: SkillTagCloudProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    }

    return (
        <motion.div
            className="flex flex-wrap gap-2"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {skills.map((skill, index) => {
                const isHighlighted = highlightSkills.includes(skill)
                return (
                    <motion.span
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className={`
              px-4 py-2 rounded-none text-sm font-medium
              transition-all duration-300 cursor-pointer
              ${isHighlighted
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-light-hover dark:bg-dark-hover text-gray-700 dark:text-gray-300 hover:bg-light-border dark:hover:bg-dark-border'
                            }
            `}
                    >
                        {skill}
                    </motion.span>
                )
            })}
        </motion.div>
    )
}
