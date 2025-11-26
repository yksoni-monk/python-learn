import { useState, useEffect, useCallback } from 'react';
import { Lesson } from '../types/lesson';
import { lessons } from '../data/lessons';

/**
 * Custom hook for managing lesson state and navigation
 * Encapsulates lesson-related logic for reusability
 */
export function useLesson() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentCode, setCurrentCode] = useState(lessons[0].code);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentLesson: Lesson = lessons[currentLessonIndex];
  const totalLessons = lessons.length;
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const isCurrentQuestionAnswered = answeredQuestions.has(currentLessonIndex);

  // Update code when lesson changes
  useEffect(() => {
    setCurrentCode(currentLesson.code);
  }, [currentLessonIndex, currentLesson.code]);

  const markQuestionAnswered = useCallback(() => {
    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(currentLessonIndex);
      return newSet;
    });
  }, [currentLessonIndex]);

  const goToNextLesson = useCallback(() => {
    // Only allow navigation if question is answered
    if (!isLastLesson && isCurrentQuestionAnswered) {
      setCurrentLessonIndex((prev) => prev + 1);
    }
  }, [isLastLesson, isCurrentQuestionAnswered]);

  const goToPreviousLesson = useCallback(() => {
    if (!isFirstLesson) {
      setCurrentLessonIndex((prev) => prev - 1);
    }
  }, [isFirstLesson]);

  const goToLesson = useCallback((index: number) => {
    if (index >= 0 && index < lessons.length) {
      setCurrentLessonIndex(index);
    }
  }, []);

  const resetCode = useCallback(() => {
    setCurrentCode(currentLesson.code);
  }, [currentLesson.code]);

  return {
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
    goToLesson,
    resetCode,
  };
}

