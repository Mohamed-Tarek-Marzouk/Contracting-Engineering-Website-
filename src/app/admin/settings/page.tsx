import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Site Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you will be able to change general site settings like the logo, colors, and social media links.</p>
        <p className="text-muted-foreground text-sm mt-2">This feature is under construction.</p>
      </CardContent>
    </Card>
  );
}
