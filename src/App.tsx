import React from 'react';
import { Header } from '@/components/Header';
import { LessonViewer } from '@/components/LessonViewer';
import { CodeWorkspace } from '@/components/CodeWorkspace';
import { NavigationFooter } from '@/components/NavigationFooter';
import { useLesson } from '@/hooks/useLesson';
import { useCodeExecution } from '@/hooks/useCodeExecution';

/**
 * Main application component
 * Orchestrates all the pieces together
 */
const App: React.FC = () => {
  const {
    currentLesson,
    currentLessonIndex,
    currentCode,
    setCurrentCode,
    totalLessons,
    isFirstLesson,
    isLastLesson,
    goToNextLesson,
    goToPreviousLesson,
  } = useLesson();

  const { executionState, runCode, clearOutput } = useCodeExecution();

  // Clear output when lesson changes
  React.useEffect(() => {
    clearOutput();
  }, [currentLessonIndex, clearOutput]);

  const handleRunCode = () => {
    runCode(currentCode);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <LessonViewer lesson={currentLesson} />
        <CodeWorkspace
          code={currentCode}
          onCodeChange={setCurrentCode}
          onRunCode={handleRunCode}
          output={executionState.output}
          error={executionState.error}
          isRunning={executionState.isRunning}
        />
      </div>

      <NavigationFooter
        currentLesson={currentLessonIndex}
        totalLessons={totalLessons}
        onPrevious={goToPreviousLesson}
        onNext={goToNextLesson}
        isFirstLesson={isFirstLesson}
        isLastLesson={isLastLesson}
      />
    </div>
  );
};

export default App;

