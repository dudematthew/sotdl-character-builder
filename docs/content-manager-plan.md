# Paths and Ancestries Manager Plan

## Overview

The Paths and Ancestries Manager is a crucial component of the application that allows users to view, create, modify, and delete custom content. This module leverages the Function Factory Pattern to enable non-programmers to create complex game mechanics without writing code.

## User Flow

1. **Content Library View**
   - View all available ancestries and paths
   - Filter and search through content
   - Toggle between built-in and custom content

2. **View Content Details**
   - See full descriptions and mechanics
   - Preview attribute calculations
   - View special abilities and features

3. **Create New Content**
   - Create new ancestries using the Function Factory
   - Create new paths (novice, expert, master)
   - Add descriptions, requirements, and benefits

4. **Edit Existing Content**
   - Modify descriptions and flavor text
   - Adjust attribute calculations and bonuses
   - Update special abilities and features

5. **Delete Content**
   - Remove custom content with confirmation
   - View dependencies before deletion
   - Option to archive instead of delete

## Component Structure

```
ContentManager/
├── ContentManagerLayout.tsx (main container)
├── views/
│   ├── ContentLibrary.tsx
│   ├── AncestryDetails.tsx
│   ├── PathDetails.tsx
│   ├── AncestryEditor.tsx
│   └── PathEditor.tsx
├── components/
│   ├── ContentCard.tsx
│   ├── ContentList.tsx
│   ├── FilterBar.tsx
│   ├── SearchInput.tsx
│   ├── AttributeFactoryForm.tsx
│   ├── SpecialAbilityEditor.tsx
│   └── ConfirmationDialog.tsx
├── factories/
│   ├── FixedValueFactory.tsx
│   ├── AttributeReferenceFactory.tsx
│   ├── FormulaFactory.tsx
│   ├── LevelScaledFactory.tsx
│   └── ConditionBasedFactory.tsx
└── hooks/
    ├── useContentManagement.tsx
    └── useFactoryGenerator.tsx
```

## State Management

The content manager will use Redux to maintain the state of all custom and built-in content:

### Redux Slice

```typescript
// contentManagerSlice.ts
interface ContentManagerState {
  ancestries: {
    builtIn: Record<string, Ancestry>;
    custom: Record<string, Ancestry>;
  };
  paths: {
    novice: {
      builtIn: Record<string, Path>;
      custom: Record<string, Path>;
    };
    expert: {
      builtIn: Record<string, Path>;
      custom: Record<string, Path>;
    };
    master: {
      builtIn: Record<string, Path>;
      custom: Record<string, Path>;
    };
  };
  activeContentId: string | null;
  activeContentType: 'ancestry' | 'novicePath' | 'expertPath' | 'masterPath' | null;
  isEditing: boolean;
  searchTerm: string;
  filters: {
    showBuiltIn: boolean;
    showCustom: boolean;
    // Additional filters
  };
}

// Actions:
// - addCustomAncestry
// - updateCustomAncestry
// - deleteCustomAncestry
// - addCustomPath
// - updateCustomPath
// - deleteCustomPath
// - setActiveContent
// - setSearchTerm
// - setFilters
// - startEditing
// - cancelEditing
// - saveContent
```

## UI Design Guidelines

- Use tabs for switching between ancestries and path types
- Display content cards in a grid or list view (toggle option)
- Show visual indicators for custom vs. built-in content
- Use detailed forms for content creation with live previews
- Implement drag-and-drop for reordering complex items
- Provide rich text editing for descriptions

## Core Features

### Content Library
- Filter by type (ancestry, novice path, etc.)
- Search by name or description
- Sort by various attributes
- Toggle between list and grid views
- Quick actions menu for each item

### Ancestry Creation/Editing
- Set base attributes
- Configure secondary attribute calculations using Function Factory
- Add special abilities and traits
- Set level 4 benefits
- Preview ancestry in character builder

### Path Creation/Editing
- Set path requirements
- Configure path level benefits
- Add path features and abilities
- Set attribute modifiers
- Manage spell/talent selections

### Function Factory Implementation
- Implement various factory types:
  - Fixed value factory
  - Attribute reference factory
  - Formula-based factory
  - Level-scaled factory
  - Condition-based factory
- Provide intuitive UI for configuring each factory
- Show live previews of generated functions
- Validate function outputs

## API Integration

Integration with the SotDL character wrapper library:

```typescript
// Example integration for creating custom content
import { Ancestry, Path, AttributeModifier } from 'sotdl-character-wrapper';

// Create ancestry from user inputs and function factory output
function createCustomAncestry(data, generatedFunctions) {
  return new Ancestry(
    // Base attributes
    data.baseAttributes,
    // Secondary attribute calculations from function factory
    generatedFunctions.secondaryAttributes,
    // Level 4 benefits
    new AttributeModifier(data.level4Benefits)
  );
}
```

## Validation Rules

- Content names must be unique
- Required fields must be filled
- Attribute calculations must be valid
- Functions must return expected types
- Path requirements must be consistent with game rules
- Special abilities must have names and descriptions

## Testing Strategy

- Unit tests for function factory implementation
- Component tests for editor interfaces
- Integration tests for content creation flow
- Edge case testing for complex calculations
- Performance testing for large content libraries

## Implementation Plan

1. **Phase 1: Content Library**
   - Implement content listing views
   - Create filtering and search functionality
   - Build content detail views

2. **Phase 2: Function Factory Base**
   - Implement core factory interfaces
   - Create basic factory types
   - Build function generation system

3. **Phase 3: Ancestry Editor**
   - Create ancestry creation UI
   - Integrate function factory for attributes
   - Implement ancestry validation

4. **Phase 4: Path Editors**
   - Create editors for each path type
   - Implement path-specific requirements
   - Build path benefit editors

5. **Phase 5: Content Management**
   - Add edit/delete functionality
   - Implement import/export for content
   - Create dependency tracking system 