import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">Shadow of the Demon Lord</h1>
        <p className="text-muted-foreground">
          Create and manage your characters, paths, and ancestries
        </p>
      </div>
      
      <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Character Creation</CardTitle>
            <CardDescription>Create new characters for your game</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/character-creation">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Paths & Ancestries</CardTitle>
            <CardDescription>Manage and customize game content</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/content-manager">View Content</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Test Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>
    </div>
  );
}