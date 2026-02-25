'use client'

import { useTheme } from '@payloadcms/ui'
import React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, autoMode } = useTheme()

  const currentTheme = autoMode ? 'auto' : theme

  const handleToggle = () => {
    if (currentTheme === 'light') setTheme('dark')
    else if (currentTheme === 'dark') setTheme('auto' as any)
    else setTheme('light')
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="theme-switcher-btn ml-2 mr-5 md:mr-6"
      aria-label={`Current theme: ${currentTheme}. Click to swap.`}
      title={`Theme: ${currentTheme}`}
    >
      {currentTheme === 'light' && <Sun size={18} />}
      {currentTheme === 'dark' && <Moon size={18} />}
      {currentTheme === 'auto' && <Monitor size={18} />}
      
      <span className="hidden md:inline-block capitalize">{currentTheme} Mode</span>
    </button>
  )
}
