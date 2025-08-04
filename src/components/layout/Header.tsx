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
import LanguageSwitcher from './LanguageSwitcher';
import { type Locale } from '@/i18n-config';


const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/services', labelKey: 'services' },
  { href: '/projects', labelKey: 'projects' },
  { href: '/blog', labelKey: 'blog' },
  { href: '/testimonials', labelKey: 'testimonials' },
  { href: '/contact', labelKey: 'contact' },
];

const navLabels: Record<string, {en: string, ar: string}> = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About Us', ar: 'من نحن' },
  services: { en: 'Services', ar: 'خدماتنا' },
  projects: { en: 'Projects', ar: 'مشاريعنا' },
  blog: { en: 'Blog', ar: 'المدونة' },
  testimonials: { en: 'Testimonials', ar: 'الشهادات' },
  contact: { en: 'Contact', ar: 'اتصل بنا' },
  requestAQuote: { en: 'Request A Quote', ar: 'اطلب عرض سعر' },
}


export function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = pathname === `/${lang}`;

  const getLabel = (key: string) => navLabels[key][lang]

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
            {navLinks.map(({ href, labelKey }) => (
              <Link
                key={labelKey}
                href={`/${lang}${href}`}
                className={cn(
                  'transition-colors hover:text-foreground/80 font-medium',
                  pathname === `/${lang}${href}` || (href === '/' && pathname === `/${lang}`) ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {getLabel(labelKey)}
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
                    {navLinks.map(({ href, labelKey }) => (
                      <Link
                        key={labelKey}
                        href={`/${lang}${href}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                           pathname === `/${lang}${href}` || (href === '/' && pathname === `/${lang}`) ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {getLabel(labelKey)}
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


          <div className="flex items-center gap-4 ml-6">
             {isHomePage && <LanguageSwitcher />}
            <div className='hidden md:flex'>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/${lang}/contact`}>{getLabel('requestAQuote')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
