import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="fill-slate-50 text-slate-50" />
            <p className="text-sm text-slate-300">
              Your trusted partner in construction and engineering, delivering excellence and innovation from start to finish.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent font-headline">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent font-headline">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+2001000196382" className="text-sm hover:text-accent transition-colors">
                  +20 01000196382
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:mohamedtarekmarzouk@gmail.com" className="text-sm hover:text-accent transition-colors">
                  mohamedtarekmarzouk@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">Egypt, New Valley, El Zhoor</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold text-accent font-headline">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-slate-50 hover:text-accent transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-slate-50 hover:text-accent transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-slate-50 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Tekam Contracting & Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
