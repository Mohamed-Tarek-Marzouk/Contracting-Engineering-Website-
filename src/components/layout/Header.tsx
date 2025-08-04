"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-auto hidden md:flex">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-foreground/80 font-medium',
                  pathname === href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex-1">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:hidden">
             <Logo />
          </div>


          <div className="hidden md:flex items-center gap-2 ml-6">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request A Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
