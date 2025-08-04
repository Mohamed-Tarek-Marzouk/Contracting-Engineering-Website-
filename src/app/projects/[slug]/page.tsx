import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { projects } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/animation/Reveal';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <Reveal>
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <Badge variant="secondary" className="mt-4 text-sm">{project.category}</Badge>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">{project.description}</p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="mt-12">
              <h2 className="text-2xl font-headline font-semibold">Project Gallery</h2>
              <Carousel className="mt-4 w-full">
                <CarouselContent>
                  {project.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={image.url} alt={`${project.title} - image ${index + 1}`} fill style={{objectFit: "cover"}} data-ai-hint={image.hint} />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </Reveal>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
           <Reveal delay={0.4}>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-muted-foreground">Client</h3>
                  <p className="font-medium text-lg">{project.details.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">Duration</h3>
                  <p className="font-medium text-lg">{project.details.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">Services Rendered</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.details.services.map((service, i) => (
                      <Badge key={i} variant="outline">{service}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}
