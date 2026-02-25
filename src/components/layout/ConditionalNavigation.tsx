'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import Footer from './Footer';

export default function ConditionalNavigation({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isAuthPage = pathname?.startsWith('/login') || pathname?.startsWith('/register');
    const isDashboard = pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');

    if (isAuthPage || isDashboard) {
        return <main className="flex-grow">{children}</main>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
