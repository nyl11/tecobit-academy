import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    className = ''
}) => {
    const variants = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-navy/10 text-navy',
        outline: 'border border-gray-200 text-gray-600',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-700',
    };

    return (
        <span
            className={`
        inline-flex items-center px-3 py-1 rounded-none text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
};

export default Badge;
