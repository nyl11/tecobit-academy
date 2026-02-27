import config from './src/payload.config'
import { getPayload } from 'payload'

const testInit = async () => {
    try {
        console.log('Initializing Payload...')
        const payload = await getPayload({ config })
        console.log('Payload initialized successfully!')
        process.exit(0)
    } catch (err) {
        console.error('Initialization failed', err)
        process.exit(1)
    }
}

testInit()
