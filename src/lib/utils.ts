import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getThemeColor(theme: string | undefined, lightColor: string, darkColor: string) {
    return theme === 'dark' ? darkColor : lightColor
}
