import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { i18n, type Locale } from '@/i18n-config';
import { dir } from 'i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedPage } from '@/components/animation/AnimatedPage';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: {
    default: 'Tekam Online | Contracting & Engineering',
    template: '%s | Tekam Online',
  },
  description: 'Tekam Contracting & Engineering: Building the future with precision and trust. Specializing in general contracting, design, and infrastructure.',
  keywords: ['contracting', 'engineering', 'construction', 'architectural design', 'renovation', 'infrastructure'],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-body bg-background text-foreground antialiased ${params.lang === 'ar' ? 'font-arabic' : ''}`}>
        <div className="flex flex-col min-h-screen">
          <Header lang={params.lang} />
          <main className="flex-grow">
            <AnimatedPage>{children}</AnimatedPage>
          </main>
          <Footer lang={params.lang} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
