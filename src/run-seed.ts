import config from './payload.config'
import { getPayload } from 'payload'
import { seed } from './seed'

const runSeed = async () => {
    try {
        const payload = await getPayload({ config })
        await seed(payload)
        console.log('Seeding completed!')
        process.exit(0)
    } catch (err) {
        console.error('Seeding failed', err)
        process.exit(1)
    }
}

runSeed()
