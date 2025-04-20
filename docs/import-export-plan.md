# Import/Export System Plan

## Overview

The Import/Export System allows users to share, backup, and transfer their characters, ancestries, paths, and other content between devices or with other users. This feature enhances collaboration and content sharing within the Shadow of the Demon Lord community while providing data portability.

## User Flow

1. **Access Import/Export Page**
   - Navigate to dedicated import/export interface
   - Choose between importing or exporting
   - Select content type to transfer

2. **Export Content**
   - Select content items to export
   - Choose export format (JSON, PDF, etc.)
   - Configure export settings
   - Generate and download export file

3. **Import Content**
   - Upload or paste import data
   - Preview content to be imported
   - Resolve conflicts and duplicates
   - Configure import settings

4. **Merge Settings**
   - Choose between add or replace strategies
   - Select specific elements to import/skip
   - Handle version conflicts
   - Validate imported content

5. **Manage Shared Content**
   - View history of imports/exports
   - Generate shareable links
   - Access community shared content
   - Manage permissions

## Component Structure

```
ImportExport/
├── ImportExportLayout.tsx (main container)
├── views/
│   ├── ExportView.tsx
│   ├── ImportView.tsx
│   ├── ContentPreview.tsx
│   └── ConflictResolution.tsx
├── components/
│   ├── ContentTypeSelector.tsx
│   ├── ExportOptions.tsx
│   ├── ImportOptions.tsx
│   ├── ContentSelector.tsx
│   ├── FormatSelector.tsx
│   ├── MergeStrategySelector.tsx
│   ├── FileUploader.tsx
│   ├── JsonEditor.tsx
│   └── ShareLinkGenerator.tsx
└── utils/
    ├── ExportService.tsx
    ├── ImportService.tsx
    ├── ValidationService.tsx
    └── FormatConverters.tsx
```

## State Management

The import/export system will use Redux to manage the selection, configuration, and execution of import/export operations:

### Redux Slice

```typescript
// importExportSlice.ts
interface ImportExportState {
  view: 'import' | 'export';
  contentType: 'characters' | 'ancestries' | 'paths' | 'all';
  
  // Export state
  selectedItemIds: {
    characters: string[];
    ancestries: string[];
    paths: {
      novice: string[];
      expert: string[];
      master: string[];
    };
  };
  exportFormat: 'json' | 'pdf' | 'text';
  exportOptions: {
    includeImages: boolean;
    prettyPrint: boolean;
    includeVersionHistory: boolean;
    // Format-specific options
  };
  
  // Import state
  importedData: any;
  importFormat: 'json' | 'text';
  validationErrors: Record<string, string[]>;
  conflicts: {
    itemId: string;
    itemType: string;
    localVersion: any;
    importedVersion: any;
    resolution: 'keep' | 'replace' | 'merge' | 'skip';
  }[];
  importOptions: {
    mergeStrategy: 'add' | 'replace' | 'smart';
    handleDuplicates: 'skip' | 'rename' | 'overwrite' | 'ask';
    validateBeforeImport: boolean;
  };
  
  // Status
  isProcessing: boolean;
  lastOperation: {
    type: 'import' | 'export';
    timestamp: number;
    success: boolean;
    items: number;
  } | null;
}

// Actions:
// - setView
// - setContentType
// - selectItems
// - deselectItems
// - setExportFormat
// - setExportOptions
// - setImportedData
// - setImportOptions
// - validateImport
// - resolveConflict
// - resolveAllConflicts
// - executeImport
// - executeExport
// - resetState
```

## UI Design Guidelines

- Create a clear tab-based interface for import vs. export
- Use drag-and-drop for file uploads
- Provide detailed previews of import/export content
- Implement clear visual indicators for conflicts
- Show validation errors inline with affected fields
- Use progress indicators for multi-step operations

## Core Features

### Export System
- Multi-selection of content to export
- Multiple export formats (JSON, PDF, text)
- Configurable export options
- Content filtering and search
- Export file naming conventions

### Import System
- File upload and paste support
- Content validation
- Conflict detection and resolution
- Merge strategies (add, replace, smart merge)
- Preview before confirming

### Conflict Resolution
- Side-by-side comparison of conflicting items
- Granular resolution options (per field)
- Batch conflict resolution
- Intelligent conflict detection
- History preservation

### Sharing System
- Generate shareable links
- QR code generation
- Password protection options
- Expiration settings
- Access tracking

## API Integration

Integration with application state and file system:

```typescript
// Example export service
import { RootState } from '../store';
import { Character } from 'sotdl-character-wrapper';

interface ExportOptions {
  format: 'json' | 'pdf' | 'text';
  includeImages: boolean;
  prettyPrint: boolean;
}

async function exportCharacters(characters: Character[], options: ExportOptions): Promise<Blob> {
  switch (options.format) {
    case 'json':
      const data = characters.map(char => char.serialize());
      const json = JSON.stringify(data, null, options.prettyPrint ? 2 : 0);
      return new Blob([json], { type: 'application/json' });
      
    case 'pdf':
      // Generate PDF
      
    case 'text':
      // Generate text format
  }
}
```

## Validation Rules

- Import data must conform to expected schema
- Referenced content must exist (or be included in import)
- Version compatibility must be checked
- File size limits must be enforced
- Security validation must be performed

## Testing Strategy

- Unit tests for import/export services
- Component tests for UI elements
- Integration tests for full import/export flows
- Security tests for data validation
- Cross-device compatibility testing

## Implementation Plan

1. **Phase 1: Basic Export**
   - Implement character JSON export
   - Create content selection interface
   - Build export options form

2. **Phase 2: Basic Import**
   - Create file upload interface
   - Implement JSON parsing
   - Add basic validation

3. **Phase 3: Conflict Resolution**
   - Build conflict detection system
   - Create conflict resolution UI
   - Implement merge strategies

4. **Phase 4: Advanced Formats**
   - Add PDF export for characters
   - Implement text format options
   - Create visual customization options

5. **Phase 5: Sharing System**
   - Implement shareable links
   - Add QR code generation
   - Create permissions management 