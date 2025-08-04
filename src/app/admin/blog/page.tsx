import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminBlogPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you will be able to add, edit, and delete your blog posts.</p>
        <p className="text-muted-foreground text-sm mt-2">This feature is under construction.</p>
      </CardContent>
    </Card>
  );
}
