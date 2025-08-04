import { BlogGenerator } from '@/components/blog/BlogGenerator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Generator',
  description: 'Use our AI-powered tool to generate drafts for articles on construction, engineering, and industry trends.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl text-primary">AI Blog Post Generator</CardTitle>
          <CardDescription className="text-lg mt-2 text-muted-foreground">
            Generate initial drafts for your blog. Provide a topic and our AI will create a post.
            <br />
            <span className="text-sm text-muted-foreground">Human review and editing are recommended before publishing.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogGenerator />
        </CardContent>
      </Card>
    </div>
  );
}
