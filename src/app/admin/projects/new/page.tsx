
'use client';

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
import { ChevronLeft, UploadCloud, X } from 'lucide-react';
import { projectCategories } from '@/lib/data';
import { useState } from 'react';
import Image from 'next/image';

export default function NewProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);


  const categories = projectCategories.filter(c => c.key !== 'all');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(prevImages => [...prevImages, ...filesArray]);

      const previewsArray = filesArray.map(file => URL.createObjectURL(file));
      setImagePreviews(prevPreviews => [...prevPreviews, ...previewsArray]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      client,
      duration,
      category,
      images,
    };
    console.log('New Project Data:', newProject);
    // Here you would typically send the data to your backend or API
  };

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
           <form onSubmit={handleSubmit}>
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
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="A stunning modern villa featuring minimalist design..."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="client">Client</Label>
                        <Input
                          id="client"
                          type="text"
                          className="w-full"
                          placeholder="e.g., Private Client"
                          value={client}
                          onChange={(e) => setClient(e.target.value)}
                          required
                        />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          type="text"
                          className="w-full"
                          placeholder="e.g., 12 Months"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          required
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
                        <div className="grid gap-4">
                          <div className="flex items-center justify-center w-full">
                            <Label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-muted"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                              </div>
                              <Input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} multiple />
                            </Label>
                          </div>
                          {imagePreviews.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {imagePreviews.map((src, index) => (
                                <div key={index} className="relative group">
                                  <Image
                                    alt={`Preview ${index + 1}`}
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="100"
                                    src={src}
                                    width="100"
                                  />
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => removeImage(index)}
                                  >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Remove image</span>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
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
                          <Select value={category} onValueChange={setCategory}>
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
                          <Button type="submit">Save Project</Button>
                          <Button variant="outline" asChild type="button">
                            <Link href="/admin/projects">Discard</Link>
                          </Button>
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
