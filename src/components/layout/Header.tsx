'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/providers/AuthProvider';
import { Logo } from '@/components/admin/Branding';

export const Header = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? 'bg-card/95 backdrop-blur-sm border-b border-border py-2'
        : 'bg-transparent py-3 md:py-4'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium font-mono uppercase tracking-[0.05em] transition-all duration-200 relative pb-1 ${pathname === link.href
                ? 'text-foreground border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          {!user && (
            <>
              <div className="w-px h-6 bg-border mx-2" />
              <Button asChild className="bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-widest px-8 h-11 hover:shadow-[4px_4px_0px_#111111] dark:hover:shadow-[4px_4px_0px_#EDEDED] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200">
                <Link href="/enrollment-form">Enroll Now</Link>
              </Button>
            </>
          )}
          {user && (
            <button
              onClick={logout}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-destructive transition-colors ml-4"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle — sharp square */}
        <button
          className="lg:hidden p-2 text-foreground relative z-50 hover:bg-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav — Full-screen overlay, sharp edges */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-[9999] flex flex-col overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Logo />
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground hover:bg-accent"
                >
                  <X size={32} />
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-8 gap-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-semibold uppercase tracking-widest flex items-center justify-between py-4 border-b border-border group transition-colors ${pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                        }`}
                    >
                      {link.name}
                      <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border border-border bg-card">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {user.fullName?.charAt(0) || user.email.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">{user.fullName || 'User'}</span>
                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Portal Access</span>
                      </div>
                    </div>
                    {user.role === 'admin' && (
                      <Button asChild className="w-full bg-primary text-primary-foreground font-semibold py-8 text-base hover:shadow-[4px_4px_0px_#111111] dark:hover:shadow-[4px_4px_0px_#EDEDED]">
                        <Link href="/admin" onClick={() => setIsOpen(false)}>
                          Go to Console
                        </Link>
                      </Button>
                    )}
                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="w-full text-center text-xs font-medium uppercase tracking-widest text-destructive py-4 border border-destructive/20 hover:bg-destructive/5 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button asChild className="w-full bg-primary text-primary-foreground font-semibold py-8 text-base hover:shadow-[4px_4px_0px_#111111] dark:hover:shadow-[4px_4px_0px_#EDEDED]">
                      <Link href="/enrollment-form" onClick={() => setIsOpen(false)}>
                        Enroll Now
                      </Link>
                    </Button>
                  </div>
                )}

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                    Tecobit Learning Hub
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
