import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminPagesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Pages</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you will be able to edit the content of your static pages like Home, About, and Services.</p>
        <p className="text-muted-foreground text-sm mt-2">This feature is under construction.</p>
      </CardContent>
    </Card>
  );
}
