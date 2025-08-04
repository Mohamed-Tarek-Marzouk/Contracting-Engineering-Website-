'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { type Locale } from '@/i18n-config';

interface HeaderActionsProps {
  lang: Locale;
  getLabel: (key: string) => string;
}

export default function HeaderActions({ lang, getLabel }: HeaderActionsProps) {
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  return (
     <div className="flex items-center gap-4 ml-6">
        {isHomePage && <LanguageSwitcher />}
       <div className='hidden md:flex'>
         <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href={`/${lang}/contact`}>{getLabel('requestAQuote')}</Link>
         </Button>
       </div>
     </div>
  );
}
