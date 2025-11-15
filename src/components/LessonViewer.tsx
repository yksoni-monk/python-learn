import React from 'react';
import { Lesson } from '@/types/lesson';

interface LessonViewerProps {
  lesson: Lesson;
}

/**
 * Component for displaying lesson theory and explanation
 * Shows the educational content to help kids understand concepts
 */
export const LessonViewer: React.FC<LessonViewerProps> = ({ lesson }) => {
  return (
    <div className="w-1/2 bg-white p-8 overflow-y-auto border-r-4 border-purple-200">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">{lesson.title}</h2>
      
      <div className="prose prose-lg">
        <pre className="whitespace-pre-wrap font-sans text-gray-700 text-lg leading-relaxed">
          {lesson.theory}
        </pre>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p className="text-blue-800 font-medium">💡 {lesson.explanation}</p>
      </div>
    </div>
  );
};

