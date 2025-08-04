import { Reveal } from '@/components/animation/Reveal';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { projectCategories, projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Browse the portfolio of Tekam Contracting & Engineering. Discover our completed projects across residential, commercial, government, and infrastructure sectors.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Projects</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our diverse portfolio of successfully completed projects. Each one is a testament to our commitment to quality, innovation, and client satisfaction.
          </p>
        </Reveal>
      </section>
      
      <section className="mt-12">
        <ProjectGallery projects={projects} categories={projectCategories} />
      </section>
    </div>
  );
}
