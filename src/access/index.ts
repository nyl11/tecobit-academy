import type { Access, FieldAccess } from 'payload'

/**
 * Allow anyone (public access)
 */
export const anyone: Access = () => true

/**
 * Require authenticated user
 */
export const authenticated: Access = ({ req: { user } }) => Boolean(user)

/**
 * Require admin role
 */
export const adminOnly: Access = ({ req: { user } }) => {
    return Boolean(user?.role === 'admin')
}

/**
 * Admin gets full access, otherwise restrict to own documents
 */
export const adminOrSelf: Access = ({ req: { user } }) => {
    if (!user) return false
    if (user.role === 'admin') return true
    return { id: { equals: user.id } }
}

/**
 * Field-level: only admins can update this field
 */
export const adminOnlyField: FieldAccess = ({ req: { user } }) => {
    return Boolean(user?.role === 'admin')
}
