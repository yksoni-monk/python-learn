'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LessonProgress } from './LessonProgress';

interface NavigationFooterProps {
  currentLesson: number;
  totalLessons: number;
  onPrevious: () => void;
  onNext: () => void;
  isFirstLesson: boolean;
  isLastLesson: boolean;
}

/**
 * Footer navigation component for moving between lessons
 * Provides previous/next buttons and progress indicator
 */
export function NavigationFooter({
  currentLesson,
  totalLessons,
  onPrevious,
  onNext,
  isFirstLesson,
  isLastLesson,
}: NavigationFooterProps) {
  return (
    <div className="bg-white border-t-4 border-purple-400 p-4 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstLesson}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${
          isFirstLesson
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-purple-500 hover:bg-purple-600 text-white'
        }`}
      >
        <ChevronLeft size={20} />
        Previous
      </button>

      <LessonProgress currentLesson={currentLesson} totalLessons={totalLessons} />

      <button
        onClick={onNext}
        disabled={isLastLesson}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${
          isLastLesson
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-purple-500 hover:bg-purple-600 text-white'
        }`}
      >
        Next
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

