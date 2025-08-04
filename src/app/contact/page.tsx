import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tekam Contracting & Engineering. Find our contact details, office location, or send us a message through our contact form.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We'd love to hear from you. Whether you have a question about our services or want to discuss your next project, our team is ready to help.
        </p>
      </section>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
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

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-accent"/>
                  <p>123 Engineering Lane, Construction City, 12345</p>
               </div>
               <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent"/>
                  <a href="tel:+1234567890" className="hover:text-accent">(123) 456-7890</a>
               </div>
               <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent"/>
                  <a href="mailto:info@tekam.com" className="hover:text-accent">info@tekam.com</a>
               </div>
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-md flex items-center justify-center">
                 <p className="text-muted-foreground">Google Map integration placeholder</p>
              </div>
            </CardContent>
          </Card>
          
           <div className="space-y-2">
             <h3 className="font-headline text-xl">Quick Contact</h3>
             <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="tel:+1234567890"><Phone className="mr-2 h-4 w-4" /> Call Us</a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="mailto:info@tekam.com"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
                </Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
