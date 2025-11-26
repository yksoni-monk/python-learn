/**
 * Types for the Python learning test
 */

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer (0-based)
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  correctAnswers: number;
  incorrectAnswers: number;
  answers: QuestionAnswer[];
}

export interface QuestionAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

