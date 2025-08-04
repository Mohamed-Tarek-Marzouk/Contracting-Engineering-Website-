import { Reveal } from '@/components/animation/Reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive range of construction and engineering services offered by Tekam, including general contracting, design, renovation, and more.',
};


export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We offer a full spectrum of contracting and engineering services to bring your vision to life, ensuring quality and precision at every stage of the project.
          </p>
        </Reveal>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <Card className="flex flex-col">
              <CardHeader>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-md">
                       <service.icon className="w-8 h-8 text-accent" />
                    </div>
                   <CardTitle className="font-headline text-2xl mt-2">{service.title}</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
