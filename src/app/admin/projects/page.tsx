import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminProjectsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you will be able to add, edit, and delete your projects.</p>
        <p className="text-muted-foreground text-sm mt-2">This feature is under construction.</p>
      </CardContent>
    </Card>
  );
}
