import { getTestimonials } from '@/lib/queries/getTestimonials'
import TestimonialsClient from './TestimonialsClient'
import { getImageUrl } from '@/lib/getImageUrl'

type TestimonialsProps = {
    title?: string
}

export default async function Testimonials({ title }: TestimonialsProps) {
    const testimonials = await getTestimonials()

    const cards = testimonials.map((item) => ({
        id: String(item.id),
        name: item.name,
        role: item.role,
        company: item.company,
        content: item.content,
        avatar: getImageUrl(item.avatar, '/images/tecobit-logo.png'),
        rating: item.rating,
    }))

    return <TestimonialsClient title={title} testimonials={cards} />
}
