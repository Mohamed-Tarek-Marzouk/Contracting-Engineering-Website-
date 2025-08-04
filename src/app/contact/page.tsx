import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';
import { Reveal } from '@/components/animation/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tekam Contracting & Engineering. Find our contact details, office location, or send us a message through our contact form.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Contact Us</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services or want to discuss your next project, our team is ready to help.
          </p>
        </Reveal>
      </section>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Reveal>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                   <MessageSquare className="w-6 h-6 text-primary" /> Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </Reveal>

        {/* Contact Info & Map */}
        <div className="space-y-8">
           <Reveal delay={0.2}>
            <Card>
              <CardHeader>
                  <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-accent"/>
                    <p>Egypt, New Valley, El Zhoor</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent"/>
                    <a href="tel:+2001000196382" className="hover:text-primary">+20 01000196382</a>
                 </div>
                 <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent"/>
                    <a href="mailto:mohamedtarekmarzouk@gmail.com" className="hover:text-primary">mohamedtarekmarzouk@gmail.com</a>
                 </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.4}>
            <Card>
               <CardHeader>
                  <CardTitle className="font-headline text-2xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-md overflow-hidden">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7249491.886311654!2d26.235948743128913!3d26.82055322986423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x147376e14c53d105%3A0x44c414b53331b674!2sNew%20Valley%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
              </CardContent>
            </Card>
          </Reveal>
          
          <Reveal delay={0.6}>
             <div className="space-y-2">
               <h3 className="font-headline text-xl">Quick Contact</h3>
               <div className="flex gap-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="tel:+2001000196382"><Phone className="mr-2 h-4 w-4" /> Call Us</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="mailto:mohamedtarekmarzouk@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
                  </Button>
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
