import { Reveal } from '@/components/animation/Reveal';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our clients have to say about their experience working with Tekam Contracting & Engineering.',
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Client Testimonials</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are proud of the relationships we build and the successful outcomes we deliver. Here’s what our clients have to say about working with Tekam.
          </p>
        </Reveal>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <Card className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                    data-ai-hint={testimonial.dataAiHint}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
