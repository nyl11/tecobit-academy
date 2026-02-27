import type { Media } from '@/payload-types'

/**
 * Extract the URL from a Payload image field that can be either
 * a string ID (unpopulated) or a populated Media object.
 */
export function getImageUrl(
    image: string | Media | null | undefined,
    fallback = '/images/logo.png',
): string {
    if (!image) return fallback
    if (typeof image === 'string') return fallback // unpopulated ID
    return image.url || fallback
}

/**
 * Extract alt text from a populated Media object, with a fallback.
 */
export function getImageAlt(
    image: string | Media | null | undefined,
    fallback = '',
): string {
    if (!image || typeof image === 'string') return fallback
    return image.alt || fallback
}
