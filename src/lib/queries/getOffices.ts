import { getPayload } from 'payload'
import config from '@/payload.config'
import { Office } from '@/payload-types'

export const getOffices = async (): Promise<Office[]> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'offices',
        sort: 'order',
    })
    return docs as unknown as Office[]
}
