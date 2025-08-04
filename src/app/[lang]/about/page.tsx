import { Card, CardContent } from '@/components/ui/card';
import { team } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Reveal } from '@/components/animation/Reveal';
import { type Locale } from '@/i18n-config';
import { getLabelForLocale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tekam Contracting & Engineering, our mission, vision, and the expert team driving our success.',
};

export default function AboutPage({ params: { lang } }: { params: { lang: Locale }}) {
  const _getLabel = getLabelForLocale(lang);
  
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      {/* Company Overview Section */}
      <section className="text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About Tekam</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Your trusted partner in building the future. We combine decades of experience with cutting-edge technology to deliver exceptional results in contracting and engineering.
          </p>
        </Reveal>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <Reveal>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-headline font-bold text-primary">Our Mission</h2>
              <p className="mt-2 text-muted-foreground">To deliver high-quality, cost-effective projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.</p>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.2}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-headline font-bold text-primary">Our Vision</h2>
              <p className="mt-2 text-muted-foreground">To be the preeminent provider of superior construction services by consistently improving the quality of our product; to add value for clients through innovation, foresight, integrity, and aggressive performance; and to serve with character and purpose that brings honor to God.</p>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.4}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-headline font-bold text-primary">Our Values</h2>
              <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                <li>Integrity</li>
                <li>Commitment</li>
                <li>Teamwork</li>
                <li>Excellence</li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </section>

       {/* History Section */}
      <section className="mt-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Founders of Tekam"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="construction history"
            />
          </Reveal>
          <Reveal>
            <div>
              <h2 className="text-3xl font-headline font-bold">Our History</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2003, Tekam Contracting & Engineering started as a small firm with a big vision. Over the past two decades, we have grown into a leading name in the industry, known for our commitment to quality, innovation, and client satisfaction. Our journey is marked by a portfolio of successful projects that stand as a testament to our expertise and dedication.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Team Section */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-4xl font-headline font-bold text-center text-primary">Meet Our Team</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">The driving force behind our success is our team of dedicated and experienced professionals.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Card className="text-center overflow-hidden">
                <div className="relative h-64 bg-secondary">
                   <Image
                      alt={_getLabel(member.name)}
                      src={member.imageUrl}
                      fill
                      style={{objectFit: 'cover'}}
                      data-ai-hint={member.dataAiHint}
                    />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-semibold">{_getLabel(member.name)}</h3>
                  <p className="text-accent font-medium">{_getLabel(member.role)}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
