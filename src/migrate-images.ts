/**
 * Migration: Nullify old URL strings in image/avatar fields
 * that were changed from type:'text' to type:'upload'
 *
 * Run with: cross-env NODE_OPTIONS=--no-deprecation npx tsx -r dotenv/config src/migrate-images.ts
 */
import { getPayload } from 'payload'
import config from './payload.config'

async function migrate() {
    const payload = await getPayload({ config })

    // Access the underlying mongoose connection
    const db = (payload.db as any).connection.db

    // Collections and their image fields that changed from text→upload
    const updates: { collection: string; field: string }[] = [
        { collection: 'courses', field: 'image' },
        { collection: 'team-members', field: 'image' },
        { collection: 'news-events', field: 'image' },
        { collection: 'offices', field: 'image' },
        { collection: 'testimonials', field: 'avatar' },
    ]

    for (const { collection, field } of updates) {
        const result = await db.collection(collection).updateMany(
            { [field]: { $type: 'string' } },
            { $set: { [field]: null } },
        )
        console.log(`${collection}.${field}: cleared ${result.modifiedCount} URL strings`)
    }

    console.log('✅ Migration complete')
    process.exit(0)
}

migrate().catch((err) => {
    console.error(err)
    process.exit(1)
})
