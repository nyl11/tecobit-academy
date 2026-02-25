import React from 'react';
import { Blog } from '@/data/blogs';
import BlogCard from './BlogCard';

interface BlogListProps {
    blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    if (blogs.length === 0) {
        return (
            <div className="text-center py-12 border border-dashed border-gray-300 rounded-none">
                <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your category selection.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;
