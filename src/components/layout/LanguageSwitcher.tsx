'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '@/i18n-config'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const currentLocale = pathName.split('/')[1] as Locale

  return (
    <div className='flex gap-1'>
      {i18n.locales.map(locale => (
        <Button 
          key={locale}
          asChild
          variant={currentLocale === locale ? 'secondary' : 'ghost'}
          size="sm"
          className='text-xs'
        >
          <Link href={redirectedPathName(locale)}>
            {locale.toUpperCase()}
          </Link>
        </Button>
      ))}
    </div>
  )
}
