import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

interface NavigationProps {
    mobile?: boolean;
    onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onLinkClick }) => {
    const pathname = usePathname();

    if (mobile) {
        return (
            <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={onLinkClick}
                            className={`
                text-lg font-medium px-4 py-3 rounded-none transition-all
                ${isActive
                                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary'}
              `}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        );
    }

    return (
        <nav className="flex items-center space-x-1">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`
              px-4 py-2 text-sm font-semibold rounded-none transition-all duration-200
              ${isActive 
                ? 'text-primary bg-primary/5' 
                : 'text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'}
            `}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navigation;
