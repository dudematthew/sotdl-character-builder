# Understanding the Function Factory Pattern for SotDL Character Creator

## What Is The Function Factory Pattern?

The Function Factory Pattern is an approach that allows non-programmers to create complex, type-safe functions through a user-friendly interface. In the context of our Shadow of the Demon Lord character creator, this pattern solves a fundamental challenge: **How do we let users create custom ancestries and paths that require complex calculation logic, without asking them to write code?**

At its core, this pattern:
- Identifies common calculation patterns (like fixed values, attribute references, formulas)
- Provides configurable templates for each pattern
- Generates actual functions based on user selections
- Assembles these functions into valid character components

## Why We Need This Approach

Shadow of the Demon Lord's character system is deeply interlinked with complex calculations. For example, look at how the Human ancestry defines its attributes:

```typescript
const humanAncestry = new Ancestry(
  // Base attributes
  { strength: 10, agility: 10, intellect: 10, will: 10 },
  
  // Secondary attribute calculations
  {
    perception: (mainAttrs) => mainAttrs.intellect,
    healingRate: (mainAttrs, level, secondaryAttrs) => 
      Math.floor(secondaryAttrs.health / 4),
    size: () => 1,
    // ...and many more
  },
  
  // Level 4 benefits
  new AttributeModifier({...})
);
```

These aren't simple data objects—they're functions with logic. A traditional form interface can't capture this complexity without our Function Factory approach.

## How It Works (For Users)

From the user's perspective, the process will be intuitive:

1. **Choose an Attribute**: Select which attribute to configure (e.g., "Healing Rate")

2. **Select a Calculation Type**: Pick from common patterns:
   - "Fixed Value" (always returns the same number)
   - "Based on Another Attribute" (returns the value of a different attribute)
   - "Formula-Based" (calculates based on a formula)
   - And so on...

3. **Configure Parameters**: Based on the selected type, provide needed values:
   - For Fixed Value: Enter the number (e.g., 1 for Size)
   - For Base Attribute: Select which attribute to reference (e.g., Intellect for Perception)
   - For Formula: Pick a formula type and relevant attributes

4. **Preview Results**: See how the attribute will behave with different inputs

5. **Apply to Character**: Save the custom ancestry/path for use in character creation

## What's Happening Behind The Scenes

When a user configures an attribute through the UI, here's what happens:

1. **Configuration Capture**: The UI collects a configuration object like:
   ```javascript
   {
     type: "derived",
     params: {
       attribute: "health",
       denominator: 4,
       operation: "floor"
     }
   }
   ```

2. **Function Generation**: The system passes this to the appropriate factory:
   ```javascript
   // Inside the derivedAttributeFactory
   create: (params) => {
     const { attribute, denominator, operation } = params;
     
     return (mainAttrs, level, secondaryAttrs) => {
       const baseValue = secondaryAttrs[attribute];
       
       if (operation === "floor") {
         return Math.floor(baseValue / denominator);
       }
       // Handle other operations...
     };
   }
   ```

3. **Assembly**: The generated functions are assembled into a complete ancestry:
   ```javascript
   const customAncestry = new Ancestry(
     baseAttributes,
     secondaryAttributeFunctions, // Generated functions
     levelBenefits
   );
   ```

4. **Storage**: The custom ancestry is saved in Redux for use in character creation

## The Outcome: What Users Will Get

With this system in place, users will be able to:

- **Create True Custom Content**: Not just flavor text, but mechanically unique ancestries and paths
- **Visual Building**: Construct complex game mechanics without seeing a line of code
- **Immediate Feedback**: Preview how their creations will affect character stats
- **System Consistency**: Create content that follows the same rules as official content
- **Share Creations**: Export their custom content for other players to use

## Real-World Example: Creating a Custom Ancestry

Imagine a user wants to create a "Feytouched" ancestry with these special characteristics:
- Higher intellect but lower strength
- Perception based on willpower instead of intellect
- Healing rate that scales with level

Without writing code, they would:

1. Set base attributes (strength: 8, agility: 10, intellect: 12, will: 11)
2. For perception, select "Based on Another Attribute" and choose "Will"
3. For healing rate, select "Formula-Based", then "Level-Scaled Fraction", and configure:
   - Base Attribute: Health
   - Denominator: 4
   - Level Factor: 0.5 (adds half the level)

The system generates the appropriate functions, so when characters level up, all calculations remain valid.

## The Technical Foundation

For developers implementing this system, we'll use several patterns:

1. **Factory Interface**
   ```typescript
   interface AttributeFactory<T = any> {
     create: (params: Record<string, any>) => (...args: any[]) => T;
     paramSchema: FactoryParamSchema[];
     description: string;
   }
   ```

2. **Configuration Schema**
   ```typescript
   interface FactoryParamSchema {
     name: string;
     type: 'number' | 'string' | 'select';
     label: string;
     options?: string[];
     default?: any;
   }
   ```

3. **Generator Functions**
   ```typescript
   function generateAncestry(config: AncestryConfig): Ancestry {
     // Transform configurations into functions
     // Create valid Ancestry object
   }
   ```

## Implementation Plan Summary

1. Define factory types based on existing ancestry/path patterns
2. Create a generator to transform configurations into valid objects
3. Build a user-friendly UI for configuring calculations
4. Integrate with the character creation system
5. Add validation and testing

By implementing this pattern, we'll create a powerful system that bridges the gap between complex TypeScript logic and user-friendly content creation. 