import { useState, useCallback } from 'react';
import { testQuestions } from '../data/testQuestions';
import type { TestResult, QuestionAnswer } from '../types/test';

/**
 * Custom hook for managing test state and logic
 */
export function useTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  const startTest = useCallback(() => {
    setTestStarted(true);
    setTestCompleted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  const submitAnswer = useCallback((questionId: string, selectedAnswer: number) => {
    const question = testQuestions.find((q) => q.id === questionId);
    if (!question) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    const newAnswer: QuestionAnswer = {
      questionId,
      selectedAnswer,
      isCorrect,
    };

    setAnswers((prev) => {
      // Check if answer already exists, update it
      const existingIndex = prev.findIndex((a) => a.questionId === questionId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  }, []);

  const goToNextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => {
      if (prev < testQuestions.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const goToPreviousQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < testQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  }, []);

  const finishTest = useCallback(() => {
    // Calculate results
    let correctCount = 0;
    const finalAnswers: QuestionAnswer[] = [];

    testQuestions.forEach((question) => {
      const answer = answers.find((a) => a.questionId === question.id);
      const isCorrect = answer?.selectedAnswer === question.correctAnswer;
      if (isCorrect) correctCount++;

      finalAnswers.push({
        questionId: question.id,
        selectedAnswer: answer?.selectedAnswer ?? -1,
        isCorrect: isCorrect ?? false,
      });
    });

    const totalQuestions = testQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const testResult: TestResult = {
      score: correctCount,
      totalQuestions,
      percentage,
      correctAnswers: correctCount,
      incorrectAnswers: totalQuestions - correctCount,
      answers: finalAnswers,
    };

    setResult(testResult);
    setTestCompleted(true);
  }, [answers]);

  const resetTest = useCallback(() => {
    setTestStarted(false);
    setTestCompleted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  const currentQuestion = testQuestions[currentQuestionIndex];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.id);
  const totalQuestions = testQuestions.length;
  const answeredCount = answers.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return {
    testStarted,
    testCompleted,
    currentQuestion,
    currentQuestionIndex,
    currentAnswer,
    totalQuestions,
    answeredCount,
    isLastQuestion,
    result,
    answers, // Export answers for navigation dots
    startTest,
    submitAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    finishTest,
    resetTest,
  };
}

