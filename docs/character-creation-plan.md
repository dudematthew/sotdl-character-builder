# Character Creation Plan

## Overview

The Character Creation route is the core feature of the application, allowing users to create and customize their Shadow of the Demon Lord characters. The process follows the game's character creation rules while providing an intuitive interface that guides users through each step.

## User Flow

1. **Start Character Creation**
   - Enter character name
   - Choose to start fresh or use a template
   
2. **Select Ancestry**
   - Choose from built-in or custom ancestries
   - View ancestry details and benefits
   - Apply ancestry attributes and traits

3. **Choose Paths**
   - Novice path selection (level 1)
   - Expert path selection (level 3, optional)
   - Master path selection (level 7, optional)
   - View path details and benefits

4. **Adjust Attributes**
   - Distribute additional attribute points (if applicable)
   - View calculated derived attributes
   - Apply any character-specific modifiers

5. **Choose Equipment & Spells**
   - Select starting equipment
   - Choose spells (if applicable)
   - Manage inventory

6. **Finalize & Save**
   - Review character summary
   - Add background details (optional)
   - Save character to history

## Component Structure

```
CharacterCreation/
├── CharacterCreationWizard.tsx (main container/wizard)
├── steps/
│   ├── NameAndBasics.tsx
│   ├── AncestrySelection.tsx
│   ├── PathSelection.tsx
│   │   ├── NovicePath.tsx
│   │   ├── ExpertPath.tsx
│   │   └── MasterPath.tsx
│   ├── AttributeAdjustment.tsx
│   ├── EquipmentAndSpells.tsx
│   └── CharacterSummary.tsx
├── components/
│   ├── AncestryCard.tsx
│   ├── PathCard.tsx
│   ├── AttributeEditor.tsx
│   ├── EquipmentSelector.tsx
│   ├── SpellSelector.tsx
│   └── CharacterSheet.tsx
└── hooks/
    ├── useCharacterCreation.tsx
    └── useCharacterValidation.tsx
```

## State Management

The character creation process will use a combination of local component state and Redux:

### Redux Slice

```typescript
// characterCreationSlice.ts
interface CharacterCreationState {
  currentStep: number;
  character: Character;  // From types/character.ts
  availableAncestries: Ancestry[];
  availablePaths: {
    novice: Path[];
    expert: Path[];
    master: Path[];
  };
  validationErrors: Record<string, string[]>;
}

// Actions:
// - setCharacterName
// - setAncestry
// - setNovicePath
// - setExpertPath
// - setMasterPath
// - adjustAttribute
// - addEquipment
// - removeEquipment
// - addSpell
// - removeSpell
// - setStep
// - saveCharacter
// - resetCharacter
```

## UI Design Guidelines

- Use a step-by-step wizard interface with progress indicator
- Show informative cards for choices (ancestries, paths)
- Provide tooltips and help text for game mechanics
- Display real-time updates of character attributes
- Include validation and feedback for user choices
- Support mobile and desktop layouts

## Core Features

### Ancestry Selection
- Display ancestry options with descriptions
- Show ancestry's impact on attributes
- Display special abilities granted by ancestry
- Support for custom ancestries

### Path Selection
- Filter paths based on eligibility
- Show path descriptions and benefits
- Update character based on selected paths
- Support for custom paths

### Attribute Calculation
- Implement game rules for attribute calculations
- Show derived attributes (defense, health, etc.)
- Validate attribute adjustments per rules
- Real-time updates when making changes

### Equipment & Spells
- Provide lists of available items and spells
- Filter based on character eligibility
- Track encumbrance and other limits
- Support for custom items

## API Integration

Integration with the SotDL character wrapper library:

```typescript
// Example integration
import { Character, Ancestry, Path } from 'sotdl-character-wrapper';

function createCharacter(data) {
  const character = new Character(data.name);
  character.setAncestry(data.ancestry);
  character.addPath(data.novicePath);
  // ...
  return character;
}
```

## Validation Rules

- Character name is required
- Ancestry must be selected
- Novice path is required (levels 1+)
- Expert path is required (levels 3+)
- Master path is required (levels 7+)
- Attributes must follow game limits
- Equipment must not exceed encumbrance limits

## Testing Strategy

- Unit tests for state management logic
- Component tests for UI elements
- Integration tests for full character creation flow
- Edge case testing for different character configurations
- Accessibility testing

## Implementation Plan

1. **Phase 1: Core Structure**
   - Set up basic wizard UI
   - Implement navigation between steps
   - Create Redux state for character data

2. **Phase 2: Ancestry & Paths**
   - Implement ancestry selection
   - Implement path selection logic
   - Connect selections to character state

3. **Phase 3: Attributes & Calculations**
   - Implement attribute adjustment UI
   - Set up derived attribute calculations
   - Add validation for attribute changes

4. **Phase 4: Equipment & Spells**
   - Create equipment selection UI
   - Implement spell selection (if applicable)
   - Add inventory management

5. **Phase 5: Finalization**
   - Create character summary view
   - Implement save functionality
   - Add export options 