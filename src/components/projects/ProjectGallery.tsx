'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project, ProjectCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectGalleryProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export default function ProjectGallery({ projects, categories }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        <Button
          onClick={() => setActiveFilter('All')}
          variant={activeFilter === 'All' ? 'default' : 'outline'}
          className="capitalize"
        >
          All
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            variant={activeFilter === category ? 'default' : 'outline'}
            className="capitalize"
          >
            {category}
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
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                   <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/projects/${project.slug}`}>View Project Details</Link>
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
