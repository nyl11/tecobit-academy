import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true
}) => {
    return (
        <div
            className={`
        bg-white rounded-none shadow-lg p-6 
        ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} 
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
