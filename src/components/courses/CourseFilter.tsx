'use client';

import React from 'react';
import { courseCategories } from '@/data/courses';
import Button from '@/components/common/Button';

interface CourseFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {courseCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`
            px-4 py-2 rounded-none text-sm font-medium transition-all duration-200
            ${activeCategory === category
                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CourseFilter;
