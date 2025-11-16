# Architecture Overview

## 🏗️ System Architecture

This document describes the architecture of the Python Learning Webapp for Kids.

## 📁 Directory Structure

```
python-learn/
├── src/
│   ├── components/          # UI Components (Presentation Layer)
│   │   ├── Header.tsx              # App header/title
│   │   ├── LessonViewer.tsx        # Displays lesson theory
│   │   ├── CodeEditor.tsx          # Code input area
│   │   ├── OutputPanel.tsx         # Code execution output
│   │   ├── CodeWorkspace.tsx       # Combines editor + output
│   │   ├── NavigationFooter.tsx    # Lesson navigation
│   │   └── LessonProgress.tsx      # Progress indicator
│   │
│   ├── data/                # Data Layer
│   │   └── lessons.ts              # Lesson content (easily extensible)
│   │
│   ├── hooks/               # Custom React Hooks (State Logic)
│   │   ├── useLesson.ts            # Lesson navigation & state
│   │   └── useCodeExecution.ts     # Code execution state
│   │
│   ├── services/            # External Services (Business Logic)
│   │   └── codeExecutor.ts         # Python code execution API
│   │
│   ├── types/               # Type Definitions
│   │   └── lesson.ts               # TypeScript interfaces
│   │
│   ├── App.tsx              # Main App Component (Orchestration)
│   ├── main.tsx             # Application Entry Point
│   └── index.css            # Global Styles
│
├── public/                  # Static Assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript Configuration
├── vite.config.ts           # Vite Build Configuration
└── tailwind.config.js       # Tailwind CSS Configuration
```

## 🎯 Architecture Layers

### 1. **Presentation Layer** (`components/`)
- **Purpose**: Reusable UI components
- **Characteristics**: 
  - Stateless where possible
  - Receive data via props
  - Emit events via callbacks
  - No business logic
- **Examples**: `Header`, `CodeEditor`, `OutputPanel`

### 2. **State Management Layer** (`hooks/`)
- **Purpose**: Encapsulate stateful logic
- **Characteristics**:
  - Custom React hooks
  - Manage component state
  - Provide clean APIs to components
- **Examples**: `useLesson`, `useCodeExecution`

### 3. **Business Logic Layer** (`services/`)
- **Purpose**: External integrations and business rules
- **Characteristics**:
  - Pure functions where possible
  - No React dependencies
  - Easy to test and swap implementations
- **Examples**: `codeExecutor` (uses Pyodide - Python in the browser, no backend needed)

### 4. **Data Layer** (`data/`)
- **Purpose**: Static data and content
- **Characteristics**:
  - Easy to modify/extend
  - Can be moved to API/database later
  - Type-safe
- **Examples**: `lessons` array

### 5. **Type Layer** (`types/`)
- **Purpose**: TypeScript type definitions
- **Characteristics**:
  - Shared across layers
  - Ensures type safety
  - Documents data structures
- **Examples**: `Lesson`, `CodeExecutionState`

## 🔄 Data Flow

```
User Interaction
    ↓
Component (e.g., CodeEditor)
    ↓
Hook (e.g., useCodeExecution)
    ↓
Service (e.g., codeExecutor)
    ↓
Pyodide (Python in browser)
    ↓
Response flows back up
    ↓
State updates
    ↓
UI re-renders
```

## 🎨 Component Hierarchy

```
App
├── Header
├── Main Content Area
│   ├── LessonViewer
│   └── CodeWorkspace
│       ├── CodeEditor
│       └── OutputPanel
└── NavigationFooter
    └── LessonProgress
```

## 🔌 Key Design Patterns

### 1. **Separation of Concerns**
- UI components don't know about API details
- Business logic is isolated in services
- State management is abstracted in hooks

### 2. **Single Responsibility Principle**
- Each component has one clear purpose
- Hooks manage specific state domains
- Services handle specific external integrations

### 3. **Dependency Injection**
- Components receive dependencies via props
- Hooks can be swapped/tested independently
- Services can be replaced (e.g., different code executor)

### 4. **Composition over Inheritance**
- Small, focused components
- Combined to create complex UIs
- Easy to reuse and test

## 🚀 Extension Points

### Adding New Lessons
1. Edit `src/data/lessons.ts`
2. Add new lesson object
3. No code changes needed elsewhere

### Changing Code Executor
1. Modify `src/services/codeExecutor.ts`
2. Or create new service (e.g., `pyodideExecutor.ts`)
3. Update `useCodeExecution` hook to use new service

### Adding New Features
- **Progress Tracking**: Add to `useLesson` hook or create `useProgress` hook
- **User Accounts**: Create `services/authService.ts` and `hooks/useAuth.ts`
- **Code Saving**: Add `services/storageService.ts` and `hooks/useCodeStorage.ts`
- **Syntax Highlighting**: Add `components/SyntaxHighlighter.tsx`

## 🧪 Testing Strategy

### Unit Tests
- Test services independently (no React)
- Test hooks with React Testing Library
- Test utility functions

### Integration Tests
- Test component interactions
- Test hook + service integration
- Test data flow

### E2E Tests
- Test complete user flows
- Test lesson navigation
- Test code execution

## 📈 Scalability Considerations

### Current State
- ✅ Easy to add lessons
- ✅ Easy to swap code executor
- ✅ Component-based architecture
- ✅ Type-safe

### Future Enhancements
- 🔄 Move lessons to database/API
- 🔄 Add user authentication
- 🔄 Add progress tracking backend
- 🔄 Add real-time collaboration
- 🔄 Add code sharing features
- 🔄 Add lesson search/filtering
- 🔄 Add multiple programming languages

## 🔒 Security Considerations

- No API keys needed (Pyodide runs in browser)
- No sensitive data in client-side code
- Input validation in code executor
- XSS prevention (React handles this)
- Code execution is sandboxed in browser

## 📝 Code Quality Standards

- TypeScript for type safety
- ESLint for code quality
- Consistent naming conventions
- Comprehensive comments
- Self-documenting code structure

