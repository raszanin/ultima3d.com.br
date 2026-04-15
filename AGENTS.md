<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Guidelines for ultima3d.com.br

This document provides coding conventions and operational guidelines for agents working in this repository.

## Project Overview

- **Framework**: Next.js 16.2.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **Linter/Formatter**: Biome
- **React Compiler**: Enabled (babel-plugin-react-compiler)

## Build/Lint/Test Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter (check mode) |
| `npm run format` | Format all files with Biome (auto-fixes) |

**Note**: No test framework is currently configured. Do not add tests unless explicitly requested.

## Code Style Guidelines

### General
- **2 spaces** indentation (no tabs)
- **80 character** line width
- **LF** line endings
- **Semicolons**: Always required
- **Strings**: Single quotes (`'`)
- **Brackets**: Spaces inside (`{ value }`)

### TypeScript Conventions
- Strict mode enabled (`strict: true` in tsconfig)
- Use explicit types for function parameters and return types
- Prefer `interface` over `type` for object shapes
- Use `Readonly<>` for immutable data structures
- Enable `noUnusedImports` and `noUnusedVariables` (error level)

```typescript
// Correct
interface UserData {
  name: string;
  email: string;
}

function getUser(id: string): Promise<UserData> {
  // ...
}

// Avoid
function process(data: any) {
  // ...
}
```

### Imports
- Group imports in this order: React, external libraries, internal modules
- Use `import type` for type-only imports
- Always use named exports unless default export is idiomatic

```typescript
import type { Metadata } from "next";
import React from "react";
import { Settings, Layers } from "lucide-react";
import "@/styles/globals.css";
```

### React/Next.js Conventions
- Use Server Components by default (no "use client" unless needed)
- Use `function` keyword for components (not arrow functions)
- Metadata API for page metadata
- Use `next/font` for font optimization
- Prefer Composition pattern over prop drilling

```typescript
// Correct - Server Component
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <div>...</div>;
}

// Avoid - Unnecessary client boundary
"use client";
export default function Page() {
  // ...
}
```

### Tailwind CSS v4
- Uses CSS-first configuration (no `tailwind.config.js`)
- Custom values via `@theme` in CSS or inline arbitrary values
- Prefer utility classes over custom CSS
- Use `[value]` syntax for arbitrary values: `w-[120px]`, `text-[#1E40AF]`

```tsx
// Correct
<div className="flex items-center justify-between px-8 py-6">

// Avoid
<div className="flex items-center" style={{ padding: "32px 0" }}>
```

### Component Patterns
- Keep components focused and small
- Co-locate styles with components when using CSS Modules
- Use `clsx` or template literals for conditional classes
- Extract reusable patterns into shared components

### Error Handling
- Use `console.assert`, `console.error`, `console.info`, `console.warn` only
- Regular `console.log` triggers lint error
- Use `try/catch` with specific error handling
- Never swallow errors silently

### File Organization
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   └── [route]/
│       └── page.tsx        # Route pages
├── components/
│   └── *.tsx               # Shared components
└── lib/
    └── *.ts                # Utilities, helpers
```

### Naming Conventions
- **Files**: kebab-case (`user-profile.tsx`) or PascalCase for React components
- **Components**: PascalCase (`UserProfile`)
- **Functions**: camelCase (`getUserData`)
- **Constants**: SCREAMING_SNAKE_CASE for module-level constants
- **CSS Classes**: kebab-case utility classes

### React Compiler (Automatic Optimization)
- The React Compiler is enabled via `babel-plugin-react-compiler`
- Write code that complies with Rules of React
- Avoid mutating props or state directly
- Functions passed as props should be stable (use `useCallback` if needed)

## Running Lint/Format

Always run linting before committing changes:

```bash
npm run lint  # Check for issues
npm run format  # Auto-fix issues
```

## Adding Dependencies

- Verify package exists: `npm install <package>`
- Use official, well-maintained packages
- Check for TypeScript types availability
- Update AGENTS.md if new conventions are introduced

## Common Patterns

### Client Components
Only add `"use client"` when necessary:
- Using browser APIs (localStorage, window)
- Using React hooks (`useState`, `useEffect`, etc.)
- Using event handlers that need interactivity
- Third-party libraries requiring client-side rendering

### Server Actions
For form submissions and mutations:
```typescript
async function submitForm(formData: FormData) {
  "use server";
  // Server-side logic
}
```

### Metadata
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for SEO",
};
```
