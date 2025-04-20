# Character History Plan

## Overview

The Character History feature provides users with a way to track, view, and manage their previously created characters. This feature enhances the user experience by allowing quick access to past creations, the ability to continue working on characters, and options to iterate on character designs.

## User Flow

1. **View Character History**
   - See a list of previously created characters
   - Sort by creation date, name, level, or ancestry/path
   - Filter characters by various criteria

2. **Character Details**
   - View comprehensive character information
   - See character sheet with all attributes and abilities
   - Access character creation choices and history

3. **Load Character**
   - Load a character into the character creator for editing
   - Option to create a duplicate/variant of an existing character
   - Version comparison between iterations of a character

4. **Edit Character**
   - Make changes to an existing character
   - Update character progression (level up)
   - Modify attributes, equipment, or abilities

5. **Delete Character**
   - Remove a character from history
   - Archive option for temporarily hiding characters
   - Batch operations for multiple characters

## Component Structure

```
CharacterHistory/
├── CharacterHistoryLayout.tsx (main container)
├── views/
│   ├── CharacterList.tsx
│   ├── CharacterDetails.tsx
│   └── CharacterComparison.tsx
├── components/
│   ├── CharacterCard.tsx
│   ├── CharacterSheet.tsx
│   ├── FilterControls.tsx
│   ├── SortControls.tsx
│   ├── CharacterTimeline.tsx
│   ├── ConfirmDialog.tsx
│   └── CharacterActions.tsx
└── hooks/
    ├── useCharacterHistory.tsx
    └── useCharacterFilters.tsx
```

## State Management

The character history will use Redux to store and manage all created characters:

### Redux Slice

```typescript
// characterHistorySlice.ts
interface CharacterHistoryState {
  characters: Record<string, Character>;
  characterVersions: Record<string, string[]>; // character ID -> version IDs
  selectedCharacterId: string | null;
  filters: {
    searchTerm: string;
    minLevel: number;
    maxLevel: number;
    ancestries: string[];
    novicePaths: string[];
    expertPaths: string[];
    masterPaths: string[];
    createdAfter: Date | null;
    createdBefore: Date | null;
    showArchived: boolean;
  };
  sortBy: 'name' | 'level' | 'createdAt' | 'updatedAt';
  sortDirection: 'asc' | 'desc';
}

// Actions:
// - addCharacter
// - updateCharacter
// - deleteCharacter
// - archiveCharacter
// - restoreCharacter
// - selectCharacter
// - clearSelection
// - setFilters
// - resetFilters
// - setSortOptions
// - duplicateCharacter
// - exportCharacter
```

## UI Design Guidelines

- Use a responsive grid layout for character cards
- Implement a detailed character sheet view
- Provide an intuitive filtering and sorting interface
- Use visual indicators for character level and type
- Create a comparison view for character versions
- Include quick action buttons for common operations

## Core Features

### Character Listing
- Grid/list toggle for character display
- Sorting by multiple criteria
- Advanced filtering options
- Batch selection for operations
- Search functionality

### Character Details
- Complete character sheet presentation
- Character portrait/avatar
- Equipment and ability details
- Character creation choices
- Modification history

### Character Management
- Duplicate character functionality
- Archive/unarchive options
- Export to PDF/image options
- Share character link generation
- Character deletion with confirmation

### Character Versioning
- Track character modifications
- Compare different versions
- Restore previous versions
- Branch from existing characters
- Merge character traits

## API Integration

Integration with the SotDL character wrapper library and Redux persistence:

```typescript
// Example integration
import { Character } from 'sotdl-character-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addCharacter, updateCharacter } from './characterHistorySlice';

function useCharacterOperations() {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characterHistory.characters);
  
  const saveCharacter = (character: Character) => {
    if (characters[character.id]) {
      dispatch(updateCharacter(character));
    } else {
      dispatch(addCharacter(character));
    }
  };
  
  // Other operations...
  
  return { saveCharacter, /* other functions */ };
}
```

## Validation Rules

- Character IDs must be unique
- Characters must have a name
- Required fields must be filled
- Level-appropriate content must be used
- Version history must be maintained

## Testing Strategy

- Unit tests for state management logic
- Component tests for UI elements
- Integration tests for character operations
- Performance tests for large character libraries
- Storage limit testing

## Implementation Plan

1. **Phase 1: Basic Character History**
   - Implement character storage in Redux
   - Create character listing view
   - Build basic filtering and sorting

2. **Phase 2: Character Details**
   - Create detailed character sheet view
   - Implement character loading
   - Add character actions (edit, duplicate, delete)

3. **Phase 3: Character Versioning**
   - Implement version tracking
   - Create comparison interface
   - Add version restoration

4. **Phase 4: Advanced Features**
   - Add character archiving
   - Implement batch operations
   - Create export functionality

5. **Phase 5: Performance Optimization**
   - Optimize for large character collections
   - Implement pagination or virtualization
   - Add data compression options 