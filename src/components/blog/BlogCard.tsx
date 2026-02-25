import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Blog } from '@/data/blogs';
import Badge from '@/components/common/Badge';

interface BlogCardProps {
    blog: Blog;
    featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, featured = false }) => {
    return (
        <div className={`group bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full ${featured ? 'md:flex-row md:h-80' : ''}`}>
            {/* Thumbnail */}
            <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-full' : 'h-56 w-full'}`}>
                <div className="absolute inset-0 bg-gray-200">
                    {/* Placeholder for image */}
                    <div className="w-full h-full bg-navy-light/10 flex items-center justify-center text-navy/20 font-bold text-lg">
                        {blog.category}
                    </div>
                </div>

                <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="shadow-sm backdrop-blur-md bg-white/90">
                        {blog.category}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className={`p-6 flex flex-col ${featured ? 'md:w-1/2 justify-center' : 'flex-grow'}`}>
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1.5 text-primary" />
                        {blog.publishedDate}
                    </div>
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1.5 text-primary" />
                        {blog.readTime}
                    </div>
                </div>

                <Link href={`/blog/${blog.slug}`}>
                    <h3 className={`font-bold text-navy group-hover:text-primary transition-colors line-clamp-2 mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {blog.excerpt}
                </p>

                <div className={`flex items-center justify-between border-t border-gray-100 pt-4 ${featured ? 'mt-4' : 'mt-auto'}`}>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-none bg-gray-200 overflow-hidden">
                            <div className="w-full h-full bg-navy flex items-center justify-center text-white text-xs">
                                {blog.author.name.charAt(0)}
                            </div>
                        </div>
                        <span className="text-sm font-medium text-navy truncate max-w-[120px]">{blog.author.name}</span>
                    </div>

                    <Link href={`/blog/${blog.slug}`} className="text-primary font-medium text-sm flex items-center hover:underline">
                        Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
