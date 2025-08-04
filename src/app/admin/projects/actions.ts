
'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const FormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  client: z.string().min(2, 'Client name must be at least 2 characters.'),
  duration: z.string().min(3, 'Duration must be at least 3 characters.'),
  category: z.string({ required_error: 'Please select a category.' }),
  images: z.any()
    .refine((files) => files?.length >= 1, 'At least one image is required.')
    .refine((files) => Array.from(files).every((file: any) => file.size <= MAX_FILE_SIZE), `Max file size is 5MB.`)
    .refine((files) => Array.from(files).every((file: any) => ACCEPTED_IMAGE_TYPES.includes(file.type)), ".jpg, .jpeg, .png and .webp files are accepted.")
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    client?: string[];
    duration?: string[];
    category?: string[];
    images?: string[];
  };
  message?: string | null;
};

export async function createProjectAction(prevState: State, formData: FormData) {

  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    client: formData.get('client'),
    duration: formData.get('duration'),
    category: formData.get('category'),
    images: formData.getAll('images'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }

  // At this point, you would typically handle the file uploads
  // (e.g., save them to a cloud storage service like Firebase Storage)
  // and then save the project data (including image URLs) to your database.
  
  // For now, we'll just log the data to the console.
  console.log('Project data is valid and ready to be saved:');
  console.log(validatedFields.data);
  const images = validatedFields.data.images as File[];
  console.log(`${images.length} images to be uploaded.`);
  images.forEach(image => {
    console.log(`- ${image.name} (${image.type}, ${image.size} bytes)`);
  });


  // On successful creation, you would typically redirect the user.
  // We will simulate this for now, but since we don't have a database yet,
  // we won't see the new project in the list.
  // redirect('/admin/projects');

  // Instead, we'll return a success message.
  return {
    message: 'Project created successfully! (Simulation)',
  }
}
