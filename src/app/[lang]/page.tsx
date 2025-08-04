import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects, services } from '@/lib/data';
import { ArrowRight, Award, Building, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animation/Reveal';
import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/i18n-config';
import { getLabelForLocale } from '@/lib/i18n';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.homepage;
  const featuredProjects = projects.slice(0, 3);
  const _getLabel = getLabelForLocale(lang);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-slate-900">
         <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Construction site background" 
          fill
          style={{objectFit: "cover"}}
          className="opacity-20"
          data-ai-hint="construction site"
          priority
        />
        <div className="relative z-10 p-4">
           <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white">{t.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg md:text-2xl text-accent">{t.heroSubtitle}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={`/${lang}/contact`}>{t.requestQuote}</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Reveal>
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 text-accent" />
                <p className="text-4xl font-bold mt-2">20+</p>
                <p className="text-muted-foreground">{t.statsExperience}</p>
              </div>
            </Reveal>
             <Reveal delay={0.2}>
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-accent" />
                <p className="text-4xl font-bold mt-2">100+</p>
                <p className="text-muted-foreground">{t.statsProjects}</p>
              </div>
            </Reveal>
             <Reveal delay={0.4}>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-accent" />
                <p className="text-4xl font-bold mt-2">50+</p>
                <p className="text-muted-foreground">{t.statsClients}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{t.servicesTitle}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              {t.servicesDescription}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={_getLabel(service.title)} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                       <service.icon className="w-10 h-10 text-accent" />
                      <CardTitle className="font-headline">{_getLabel(service.title)}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{_getLabel(service.description).substring(0, 150)}...</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
           <Reveal>
            <Button asChild variant="link" className="mt-8 text-primary">
              <Link href={`/${lang}/services`}>{t.viewAllServices} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">{t.featuredProjectsTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.1}>
                <Card className="overflow-hidden group">
                  <div className="relative h-60">
                     <Image 
                      src={project.imageUrl} 
                      alt={_getLabel(project.title)} 
                      fill
                      style={{objectFit: "cover"}}
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{_getLabel(project.title)}</CardTitle>
                    <CardDescription>{_getLabel(project.category)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link href={`/${lang}/projects/${project.slug}`}>{t.viewProject}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
           <Reveal>
             <div className="text-center mt-8">
               <Button asChild>
                 <Link href={`/${lang}/projects`}>{t.viewAllProjects}</Link>
               </Button>
             </div>
           </Reveal>
        </div>
      </section>
    </div>
  );
}
