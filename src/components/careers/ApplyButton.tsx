'use client'

import React from 'react'
import Button from '@/components/common/Button'

interface ApplyButtonProps {
  email: string
  subject: string
  children: React.ReactNode
}

export default function ApplyButton({ email, subject, children }: ApplyButtonProps) {
  return (
    <Button size="lg" onClick={() => (window.location.href = `mailto:${email}?subject=${subject}`)}>
      {children}
    </Button>
  )
}
