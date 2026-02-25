import React from 'react'
import { RichText } from '../RichText'

export const ContentBlock: React.FC<any> = ({ content }) => {
    return (
        <section className="py-24 bg-background transition-colors duration-500">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto prose dark:prose-invert prose-orange lg:prose-xl">
                    <RichText content={content} />
                </div>
            </div>
        </section>
    )
}
