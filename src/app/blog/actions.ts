'use server';

import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { z } from 'zod';

const BlogFormSchema = z.object({
  topic: z.string().min(10, { message: 'Topic must be at least 10 characters long.' }),
});

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  issues?: string[];
  data?: {
    title: string;
    content: string;
  }
};

export async function createBlogPostAction(_prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = BlogFormSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.flatten().fieldErrors.topic;
    return {
      status: 'error',
      message: 'Invalid form data.',
      issues,
    };
  }

  try {
    const result = await generateBlogPost({ topic: validatedFields.data.topic });
    return {
      status: 'success',
      message: 'Blog post generated successfully.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'An unexpected error occurred while generating the blog post. Please try again later.',
    };
  }
}
