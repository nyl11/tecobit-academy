import React from 'react';
import { Course } from '@/data/courses';
import CourseCard from './CourseCard';

interface CourseListProps {
    courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    if (courses.length === 0) {
        return (
            <div className="text-center py-12">
                <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you&apos;re looking for.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
