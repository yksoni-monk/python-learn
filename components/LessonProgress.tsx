'use client';

import React from 'react';

interface LessonProgressProps {
  currentLesson: number;
  totalLessons: number;
}

/**
 * Component for displaying lesson progress
 * Shows current lesson number and total count
 */
export function LessonProgress({
  currentLesson,
  totalLessons,
}: LessonProgressProps) {
  return (
    <div className="text-center">
      <div className="text-sm text-gray-600">Lesson Progress</div>
      <div className="text-xl font-bold text-purple-600">
        {currentLesson + 1} / {totalLessons}
      </div>
    </div>
  );
}

