'use client';

import React, { useEffect } from 'react';
import { useTest } from '@/lib/hooks/useTest';
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Flag } from 'lucide-react';

/**
 * Test component for displaying and taking the Python knowledge test
 */
export function Test() {
  const {
    testStarted,
    testCompleted,
    currentQuestion,
    currentQuestionIndex,
    currentAnswer,
    totalQuestions,
    answeredCount,
    isLastQuestion,
    result,
    startTest,
    submitAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    finishTest,
    resetTest,
  } = useTest();

  // Auto-start the test when component mounts
  useEffect(() => {
    if (!testStarted && !testCompleted) {
      startTest();
    }
  }, [testStarted, testCompleted, startTest]);

  if (!testStarted && !testCompleted) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">🐍 Python Knowledge Test</h2>
          <p className="text-lg text-gray-700 mb-6">
            Test your knowledge with 45 questions covering all the concepts you've learned!
          </p>
          <div className="bg-purple-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-purple-800 mb-3">Test Details:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>45 questions</strong> covering beginner to advanced topics</li>
              <li>• Multiple choice format</li>
              <li>• You can navigate between questions</li>
              <li>• Review your answers before submitting</li>
              <li>• Get detailed results and explanations</li>
            </ul>
          </div>
          <button
            onClick={startTest}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (testCompleted && result) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Test Results</h2>
            <div className="text-6xl font-bold mb-2">
              {result.percentage >= 80 ? '🎉' : result.percentage >= 60 ? '👍' : '📚'}
            </div>
            <div className="text-5xl font-bold text-purple-600 mb-2">
              {result.percentage}%
            </div>
            <p className="text-xl text-gray-700">
              You got {result.correctAnswers} out of {result.totalQuestions} questions correct!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{result.correctAnswers}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{result.incorrectAnswers}</div>
              <div className="text-sm text-gray-600">Incorrect</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-purple-600 h-4 rounded-full transition-all"
                style={{ width: `${result.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              {result.percentage >= 80
                ? 'Excellent work! You have mastered Python!'
                : result.percentage >= 60
                ? 'Good job! Keep practicing!'
                : "Don't worry! Review the lessons and try again!"}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetTest}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white shadow-md p-4 border-b-2 border-purple-400 flex-shrink-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-purple-600">Python Knowledge Test</h2>
          <div className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500">{answeredCount} answered</span>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-y-auto p-8 min-h-0">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                currentQuestion.difficulty === 'beginner'
                  ? 'bg-green-100 text-green-800'
                  : currentQuestion.difficulty === 'intermediate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {currentQuestion.difficulty}
            </span>
            <span className="ml-2 text-sm text-gray-600">{currentQuestion.topic}</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = currentAnswer?.selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = currentAnswer !== undefined;

              return (
                <button
                  key={index}
                  onClick={() => submitAnswer(currentQuestion.id, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    showResult
                      ? isCorrect
                        ? 'bg-green-50 border-green-500'
                        : isSelected
                        ? 'bg-red-50 border-red-500'
                        : 'bg-gray-50 border-gray-300'
                      : isSelected
                      ? 'bg-purple-50 border-purple-500'
                      : 'bg-white border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {showResult ? (
                      isCorrect ? (
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                      ) : isSelected ? (
                        <Circle className="text-red-600 flex-shrink-0" size={20} />
                      ) : (
                        <Circle className="text-gray-400 flex-shrink-0" size={20} />
                      )
                    ) : isSelected ? (
                      <Circle className="text-purple-600 fill-current flex-shrink-0" size={20} />
                    ) : (
                      <Circle className="text-gray-400 flex-shrink-0" size={20} />
                    )}
                    <span className="font-medium text-gray-800">{option}</span>
                    {showResult && isCorrect && (
                      <span className="ml-auto text-sm text-green-600 font-semibold">✓ Correct</span>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <span className="ml-auto text-sm text-red-600 font-semibold">✗ Incorrect</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {currentAnswer && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Explanation:</strong> {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 flex justify-between items-center flex-shrink-0 shadow-lg z-10">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-semibold"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <div className="text-sm text-gray-600 font-medium">
          {answeredCount} of {totalQuestions} answered
        </div>

        {isLastQuestion ? (
          <button
            onClick={finishTest}
            className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            <Flag size={20} />
            Finish Test
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Next Question
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}


