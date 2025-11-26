'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, X } from 'lucide-react';

interface LessonQuestionProps {
  question: {
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  onAnswerCorrect: () => void;
  isAnswered: boolean;
}

/**
 * Component for displaying and answering lesson questions
 * Users must answer correctly before proceeding
 */
export function LessonQuestion({ question, onAnswerCorrect, isAnswered }: LessonQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Reset state when question changes or when lesson changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [question.text]);

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return; // Don't allow changing answer after it's correct
    
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === question.correctAnswer) {
      // Correct answer - notify parent after a brief delay
      setTimeout(() => {
        onAnswerCorrect();
      }, 500);
    }
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
      <h3 className="text-xl font-bold text-purple-700 mb-4">📝 Check Your Understanding</h3>
      <p className="text-lg font-semibold text-gray-800 mb-4">{question.text}</p>

      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const showFeedback = showResult && isSelected;
          const isCorrectAnswer = isSelected && isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                isAnswered && isCorrectAnswer
                  ? 'bg-green-100 border-green-500'
                  : showFeedback
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : isSelected
                  ? 'bg-purple-100 border-purple-500'
                  : 'bg-white border-gray-300 hover:border-purple-400'
              } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-3">
                {isAnswered && isCorrectAnswer ? (
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                ) : showFeedback ? (
                  isCorrect ? (
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                  ) : (
                    <X className="text-red-600 flex-shrink-0" size={20} />
                  )
                ) : isSelected ? (
                  <Circle className="text-purple-600 fill-current flex-shrink-0" size={20} />
                ) : (
                  <Circle className="text-gray-400 flex-shrink-0" size={20} />
                )}
                <span className="font-medium text-gray-800">{option}</span>
                {isAnswered && isCorrectAnswer && (
                  <span className="ml-auto text-sm text-green-600 font-semibold">✓ Correct!</span>
                )}
                {showFeedback && !isCorrect && (
                  <span className="ml-auto text-sm text-red-600 font-semibold">✗ Incorrect</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && selectedAnswer === question.correctAnswer && (
        <div className="p-4 rounded-lg border bg-green-50 border-green-200">
          <div>
            <p className="text-green-800 font-semibold mb-2">🎉 Correct! Great job!</p>
            <p className="text-green-700 text-sm">{question.explanation}</p>
          </div>
        </div>
      )}

      {showResult && selectedAnswer !== question.correctAnswer && (
        <div className="p-4 rounded-lg border bg-red-50 border-red-200">
          <div>
            <p className="text-red-800 font-semibold mb-2">❌ Not quite right. Try again!</p>
            <p className="text-red-700 text-sm">Select the correct answer to continue.</p>
          </div>
        </div>
      )}

      {isAnswered && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm font-semibold">
            ✓ Question answered! You can now proceed to the next lesson.
          </p>
        </div>
      )}
    </div>
  );
}

