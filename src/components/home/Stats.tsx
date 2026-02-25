import React from 'react';
import { Users, BookOpen, Award, Briefcase } from 'lucide-react';

const stats = [
    { id: 1, label: 'Students Trained', value: '3,000+', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, label: 'Expert Instructors', value: '20+', icon: BookOpen, color: 'text-primary', bg: 'bg-orange-100' },
    { id: 3, label: 'Hiring Partners', value: '50+', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
    { id: 4, label: 'Course Completion', value: '98%', icon: Award, color: 'text-green-600', bg: 'bg-green-100' },
];

const Stats: React.FC = () => {
    return (
        <section className="py-12 bg-white -mt-8 relative z-20">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="bg-white p-6 rounded-none shadow-lg border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className={`w-14 h-14 mx-auto rounded-none flex items-center justify-center mb-4 ${stat.bg} ${stat.color}`}>
                                <stat.icon size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-navy mb-1">{stat.value}</h3>
                            <p className="text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
