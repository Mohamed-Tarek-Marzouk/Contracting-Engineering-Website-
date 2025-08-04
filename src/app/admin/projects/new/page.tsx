
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { projectCategories } from '@/lib/data';

export default function NewProjectPage() {
  const categories = projectCategories.filter(c => c.key !== 'all');

  return (
    <div className="flex min-h-screen w-full flex-col">
       <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
           <Button size="icon" variant="outline" asChild>
            <Link href="/admin/projects">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back to Projects</span>
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Add New Project</h1>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
           <form>
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Details</CardTitle>
                      <CardDescription>
                        Fill in the details for your new project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          type="text"
                          className="w-full"
                          placeholder="e.g., Modern Residential Villa"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="A stunning modern villa featuring minimalist design..."
                        />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="client">Client</Label>
                        <Input
                          id="client"
                          type="text"
                          className="w-full"
                          placeholder="e.g., Private Client"
                        />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          type="text"
                          className="w-full"
                          placeholder="e.g., 12 Months"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Project Images</CardTitle>
                        <CardDescription>
                          Upload images for your project gallery.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {/* Placeholder for image upload */}
                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg">
                           <p className="text-muted-foreground">Image upload coming soon</p>
                        </div>
                      </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map(category => (
                                 <SelectItem key={category.key} value={category.key}>
                                    {category.name}
                                  </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                   <Card>
                     <CardHeader>
                       <CardTitle>Actions</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="grid gap-2">
                          <Button>Save Project</Button>
                          <Button variant="outline">Discard</Button>
                       </div>
                     </CardContent>
                   </Card>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
