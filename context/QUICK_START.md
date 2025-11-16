# Quick Start Guide

## 🚀 Getting Up and Running

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

**No API keys needed!** Python runs directly in the browser using Pyodide.

```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

## 📝 Project Structure Overview

```
src/
├── components/     # UI components (Header, CodeEditor, etc.)
├── data/          # Lesson content
├── hooks/         # Custom React hooks (state management)
├── services/      # External API calls (code execution)
├── types/         # TypeScript type definitions
└── App.tsx        # Main app component
```

## 🎯 Key Files to Know

- **`src/data/lessons.ts`** - Add/edit lessons here
- **`src/services/codeExecutor.ts`** - Change code execution backend here
- **`src/components/`** - Modify UI components here
- **`src/hooks/`** - Add new state management logic here

## 🛠️ Common Tasks

### Adding a New Lesson

Edit `src/data/lessons.ts`:

```typescript
{
  id: '14',
  title: '14. Your Lesson Title',
  theory: `Your theory content...`,
  code: `print("Your code")`,
  explanation: 'Your explanation',
  difficulty: 'beginner',
  tags: ['tag1'],
}
```

### Changing the Code Executor

Modify `src/services/codeExecutor.ts` to use a different backend (e.g., Pyodide, real Python server).

### Customizing Styles

- Global styles: `src/index.css`
- Component styles: Edit Tailwind classes in component files
- Theme: `tailwind.config.js`

## 🐛 Troubleshooting

### Python Not Loading
- First load downloads ~6MB Python runtime (one-time)
- Requires internet connection for initial load
- After first load, works offline

### TypeScript Errors
- Run `npm install` to ensure all types are installed
- Check that `tsconfig.json` is properly configured

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

## 📚 Next Steps

1. Read `ARCHITECTURE.md` for detailed architecture info
2. Read `README.md` for full documentation
3. Start customizing lessons in `src/data/lessons.ts`
4. Explore components in `src/components/`

## 💡 Tips

- Use TypeScript for type safety
- Follow the existing component patterns
- Keep components small and focused
- Add new features by extending hooks and services

