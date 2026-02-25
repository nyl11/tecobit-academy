import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export const AdminLogo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative flex items-center justify-center h-10 w-10">
      {/* Monogram TB */}
      <span className="absolute text-3xl font-serif font-light text-[#7da6c1] leading-none -translate-x-1.5 -translate-y-0.5 select-none">
        T
      </span>
      <span className="absolute text-3xl font-serif font-light text-[#7da6c1] leading-none translate-x-1.5 translate-y-0.5 select-none">
        B
      </span>
      <div className="absolute h-[60%] w-[2px] bg-[#7da6c1]/20 -rotate-[15deg] group-hover:rotate-0 transition-transform duration-700" />
    </div>
    <span className="text-[#6b8da5] font-serif text-[11px] tracking-[0.25em] font-medium uppercase whitespace-nowrap">
      Tecobit Academy
    </span>
  </div>
)

export const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative flex items-center justify-center h-10 w-10">
      {/* Monogram TB */}
      <span className="absolute text-3xl font-serif font-light text-[#7da6c1] leading-none -translate-x-1.5 -translate-y-0.5 select-none">
        T
      </span>
      <span className="absolute text-3xl font-serif font-light text-[#7da6c1] leading-none translate-x-1.5 translate-y-0.5 select-none">
        B
      </span>
      <div className="absolute h-[60%] w-[2px] bg-[#7da6c1]/20 -rotate-[15deg] group-hover:rotate-0 transition-transform duration-700" />
    </div>
    <span className="text-[#6b8da5] font-serif text-[11px] tracking-[0.25em] font-medium uppercase whitespace-nowrap">
      Tecobit Academy
    </span>
  </div>
)

export const Icon = () => (
  <div className="relative flex items-center justify-center h-10 w-10 bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#7da6c1]/10 shadow-sm mr-3">
    <span className="absolute text-xl font-serif font-light text-[#7da6c1] leading-none -translate-x-1 -translate-y-0.5 select-none">
      T
    </span>
    <span className="absolute text-xl font-serif font-light text-[#7da6c1] leading-none translate-x-1 translate-y-0.5 select-none">
      B
    </span>
  </div>
)
