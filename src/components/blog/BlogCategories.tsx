'use client';

import React from 'react';
import { blogCategories } from '@/data/blogs';

interface BlogCategoriesProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {blogCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`
            px-4 py-2 rounded-none text-sm font-medium transition-all duration-200 whitespace-nowrap
            ${activeCategory === category
                            ? 'bg-navy text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default BlogCategories;
