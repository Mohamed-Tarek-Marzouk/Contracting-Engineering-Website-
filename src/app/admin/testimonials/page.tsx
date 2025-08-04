import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminTestimonialsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Testimonials</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you will be able to add, edit, and delete client testimonials.</p>
        <p className="text-muted-foreground text-sm mt-2">This feature is under construction.</p>
      </CardContent>
    </Card>
  );
}
