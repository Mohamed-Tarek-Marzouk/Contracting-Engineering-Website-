
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
import { ChevronLeft, UploadCloud, X, Loader2 } from 'lucide-react';
import { projectCategories } from '@/lib/data';
import { useActionState, useState } from 'react';
import Image from 'next/image';
import { useFormStatus } from 'react-dom';
import { createProjectAction } from '../actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
       {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Save Project
    </Button>
  );
}

export default function NewProjectPage() {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(createProjectAction, initialState);

  const categories = projectCategories.filter(c => c.key !== 'all');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      const previewsArray = filesArray.map(file => URL.createObjectURL(file));

      // For the sake of the form, we only manage previews.
      // The actual files are handled directly by the form submission.
      // But if we wanted to remove specific files, we'd need to manage the FileList state as well.
      setImagePreviews(prevPreviews => [...prevPreviews, ...previewsArray]);
    }
  };

  // This is a simplified removal. For a more robust solution, you'd manage the FileList in state
  // and remove files from there before form submission.
  const removeImage = (index: number) => {
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    // Note: This doesn't remove the file from the <Input type="file" />,
    // as its FileList is read-only. A more complex solution is needed for that.
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
           <form action={dispatch}>
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
                          name="title"
                          type="text"
                          className="w-full"
                          placeholder="e.g., Modern Residential Villa"
                          required
                        />
                         {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title.join(', ')}</p>}
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="A stunning modern villa featuring minimalist design..."
                          required
                        />
                         {state.errors?.description && <p className="text-sm font-medium text-destructive">{state.errors.description.join(', ')}</p>}
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="client">Client</Label>
                        <Input
                          id="client"
                          name="client"
                          type="text"
                          className="w-full"
                          placeholder="e.g., Private Client"
                          required
                        />
                         {state.errors?.client && <p className="text-sm font-medium text-destructive">{state.errors.client.join(', ')}</p>}
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          name="duration"
                          type="text"
                          className="w-full"
                          placeholder="e.g., 12 Months"
                          required
                        />
                         {state.errors?.duration && <p className="text-sm font-medium text-destructive">{state.errors.duration.join(', ')}</p>}
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
                              <Input id="dropzone-file" name="images" type="file" className="hidden" onChange={handleImageChange} multiple />
                            </Label>
                          </div>
                          {state.errors?.images && <p className="text-sm font-medium text-destructive">{state.errors.images.join(', ')}</p>}
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
                          <Select name="category" required>
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
                           {state.errors?.category && <p className="text-sm font-medium text-destructive">{state.errors.category.join(', ')}</p>}
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
                          <SubmitButton />
                          <Button variant="outline" asChild type="button">
                            <Link href="/admin/projects">Discard</Link>
                          </Button>
                       </div>
                     </CardContent>
                   </Card>
                    {state?.message && state.errors && (
                     <Alert variant={'destructive'} className="mt-4">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state.message}</AlertDescription>
                      </Alert>
                   )}
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
