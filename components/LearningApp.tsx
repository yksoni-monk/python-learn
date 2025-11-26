'use client';

import React from 'react';
import { Header } from './Header';
import { LessonViewer } from './LessonViewer';
import { CodeWorkspace } from './CodeWorkspace';
import { NavigationFooter } from './NavigationFooter';
import { Chatbot } from './Chatbot';
import { useLesson } from '@/lib/hooks/useLesson';
import { useCodeExecution } from '@/lib/hooks/useCodeExecution';
import type { User } from '@supabase/supabase-js';

interface LearningAppProps {
  user: User | null;
}

/**
 * Main learning application component
 * Orchestrates all the pieces together
 */
export default function LearningApp({ user }: LearningAppProps) {
  const {
    currentLesson,
    currentLessonIndex,
    currentCode,
    setCurrentCode,
    totalLessons,
    isFirstLesson,
    isLastLesson,
    isCurrentQuestionAnswered,
    markQuestionAnswered,
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

  // Prepare context for chatbot
  const chatbotContext = {
    currentLessonTitle: currentLesson.title,
    currentLessonTheory: currentLesson.theory,
    currentCode: currentCode,
    error: executionState.error,
  };


  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <Header user={user} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <LessonViewer
          lesson={currentLesson}
          onQuestionAnswered={markQuestionAnswered}
          isQuestionAnswered={isCurrentQuestionAnswered}
        />
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
        canProceed={isCurrentQuestionAnswered}
      />

      {/* Chatbot Assistant */}
      <Chatbot context={chatbotContext} />
    </div>
  );
}

