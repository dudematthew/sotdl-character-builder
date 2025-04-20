# Shadow of the Demon Lord Character Creator - Documentation

This directory contains the detailed documentation for the Shadow of the Demon Lord (SotDL) Character Creator application. These documents serve as a roadmap for implementation and provide technical guidance for developers.

## Application Structure

The application is divided into several core routes, each with its own functionality and purpose:

### 1. [Character Creation](./character-creation-plan.md)
- Character creation workflow
- Selecting ancestry and paths
- Attribute calculations and modifications
- Character leveling
- Character naming and description

### 2. [Paths and Ancestries Manager](./content-manager-plan.md)
- Listing available ancestries and paths
- Adding new custom content
- Modifying existing content
- Removing content
- [Function Factory Pattern](./function-factory-plan.md) for creating complex game mechanics

### 3. [Character History](./character-history-plan.md)
- Saving character creation history
- Viewing previously created characters
- Loading characters from history
- Editing historical characters
- Removing characters from history

### 4. [Import/Export System](./import-export-plan.md)
- Exporting characters, ancestries, and paths
- Importing external content
- Merge options (replace vs. add)
- Selective import/export
- Data validation

## Technical Architecture

The application is built with the following technologies:

- **React 19** for the UI layer
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **Redux Persist** for local storage
- **Tailwind CSS** for styling
- **ShadCN UI** for component library
- **Vite** for build tooling

Each document includes:
- Detailed requirements
- Component structure
- State management approach
- User interface design
- Implementation steps
- Testing strategy

## Implementation Timeline

1. Core architecture and setup ✅
2. Character creation basics
3. Implement Function Factory Pattern for dynamic content
4. Content manager for paths and ancestries
5. Character history functionality
6. Import/Export system
7. Testing and refinement
8. Documentation and deployment 