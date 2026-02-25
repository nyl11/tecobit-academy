import { getPayload } from 'payload'
import config from '@/payload.config'
import { TeamMember } from '@/payload-types'

export const getTeamMembers = async (): Promise<TeamMember[]> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'team-members',
        sort: 'order',
    })
    return docs as unknown as TeamMember[]
}
