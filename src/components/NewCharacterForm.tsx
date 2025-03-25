import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

interface NewCharacterFormProps {
  onClose: () => void;
}

export function NewCharacterForm({ onClose }: NewCharacterFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Character</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Character creation form will go here.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onClose} variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
} 