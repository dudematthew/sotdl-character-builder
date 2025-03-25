import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from './ui/card';
import { Button } from './ui/button';

export function CharacterCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Character Name</CardTitle>
        <CardDescription>
          Character Level
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Character details will appear here.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">View</Button>
      </CardFooter>
    </Card>
  );
} 