'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/payload-types'

interface AuthContextType {
    user: User | null
    isLoading: boolean
    login: (user: User) => void
    logout: () => void
    refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const refreshUser = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/users/me')
            const data = await response.json()
            if (data.user) {
                setUser(data.user)
            } else {
                setUser(null)
            }
        } catch (error) {
            console.error('Failed to fetch user:', error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        refreshUser()
    }, [])

    const login = (userData: User) => {
        setUser(userData)
    }

    const logout = async () => {
        try {
            await fetch('/api/users/logout', { method: 'POST' })
            setUser(null)
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
