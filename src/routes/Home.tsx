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
    </div>
  );
}