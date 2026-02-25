import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'navy';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-tecobit-mint text-navy hover:bg-[#2FE6B1] focus:ring-tecobit-mint',
        navy: 'bg-tecobit-teal hover:bg-[#1A5F66] text-white focus:ring-tecobit-teal',
        outline: 'border-2 border-tecobit-blue text-tecobit-blue hover:bg-tecobit-blue/10 focus:ring-tecobit-blue',
        ghost: 'text-gray-600 hover:text-tecobit-blue hover:bg-gray-50 focus:ring-gray-200',
    };

    const sizes = {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
    };

    return (
        <button
            className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
