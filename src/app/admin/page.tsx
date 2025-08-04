import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText,
  BookImage,
  Newspaper,
  Users,
  MessageSquareQuote,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

const managementSections = [
  { title: 'Pages', href: '/admin/pages', icon: FileText, description: 'Edit Home, About, and Services pages.' },
  { title: 'Projects', href: '/admin/projects', icon: BookImage, description: 'Add, edit, or delete projects.' },
  { title: 'Blog', href: '/admin/blog', icon: Newspaper, description: 'Manage blog posts.' },
  { title: 'Team Members', href: '/admin/team', icon: Users, description: 'Update your team member list.' },
  { title: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote, description: 'Manage client feedback.' },
  { title: 'Settings', href: '/admin/settings', icon: Settings, description: 'Update site settings.' },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managementSections.map((section) => (
          <Link href={section.href} key={section.title}>
            <Card className="hover:border-primary hover:shadow-lg transition-all h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium font-headline">
                  {section.title}
                </CardTitle>
                <section.icon className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
