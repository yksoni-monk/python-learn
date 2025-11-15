# 🐍 Learn Python for Kids

A fun, interactive web application designed to teach Python programming to kids through hands-on lessons and code execution.

## 🏗️ Architecture

This project follows a clean, modular architecture that makes it easy to grow and maintain:

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── LessonViewer.tsx
│   ├── CodeEditor.tsx
│   ├── OutputPanel.tsx
│   ├── CodeWorkspace.tsx
│   ├── NavigationFooter.tsx
│   └── LessonProgress.tsx
├── data/               # Data layer (lessons, constants)
│   └── lessons.ts
├── hooks/              # Custom React hooks
│   ├── useLesson.ts
│   └── useCodeExecution.ts
├── services/           # External services (API calls)
│   └── codeExecutor.ts
├── types/              # TypeScript type definitions
│   └── lesson.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Key Design Principles

1. **Separation of Concerns**: UI, logic, and data are separated
2. **Reusability**: Components are small and focused
3. **Type Safety**: Full TypeScript support
4. **Scalability**: Easy to add new lessons, features, or components
5. **Maintainability**: Clear structure and well-commented code

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- No API keys needed! Python runs directly in the browser using Pyodide

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## 📚 Adding New Lessons

To add a new lesson, simply edit `src/data/lessons.ts` and add a new lesson object:

```typescript
{
  id: '14',
  title: '14. Your Lesson Title',
  theory: `Your theory content here...`,
  code: `print("Your code example")`,
  explanation: 'Your explanation here',
  difficulty: 'beginner',
  tags: ['tag1', 'tag2'],
}
```

## 🔧 Customization

### Changing the Code Executor

The code execution is abstracted in `src/services/codeExecutor.ts`. Currently uses Pyodide (Python in the browser). You can easily swap it for:
- A different Python WASM implementation
- A backend Python server
- A different code execution service

### Styling

The app uses Tailwind CSS. Modify `tailwind.config.js` to customize the theme, or edit component classes directly.

## 🧪 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Pyodide** - Python interpreter in the browser (no backend needed!)

## 🎨 Future Enhancements

Potential features to add:
- User progress tracking
- Code challenges/exercises
- Multiple difficulty levels
- Code syntax highlighting
- Save/load code snippets
- Lesson search and filtering
- User accounts and profiles
- Gamification (badges, achievements)

## 📝 License

MIT

