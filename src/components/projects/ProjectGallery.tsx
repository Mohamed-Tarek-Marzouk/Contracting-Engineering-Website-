'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project, ProjectCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { type Locale } from '@/i18n-config';
import { getLabelForLocale } from '@/lib/i18n';

interface ProjectGalleryProps {
  projects: Project[];
  categories: {key: string, en: string, ar: string}[];
  lang: Locale;
}

export default function ProjectGallery({ projects, categories, lang }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const _getLabel = getLabelForLocale(lang);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === activeFilter);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <Button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            variant={activeFilter === category.key ? 'default' : 'outline'}
            className="capitalize"
          >
            {_getLabel(category)}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden group h-full flex flex-col">
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
                <CardContent className="mt-auto">
                   <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/${lang}/projects/${project.slug}`}>View Project Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
