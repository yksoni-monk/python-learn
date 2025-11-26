'use client';

import React from 'react';
import { Trophy, Star, CheckCircle, Sparkles } from 'lucide-react';

/**
 * Final congratulations slide after completing the test
 */
export function FinalCongratulations() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-yellow-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Title */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 mb-4">
            Congratulations!
          </h1>
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">
            You've Completed the Python Learning Course!
          </h2>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Course Complete</h3>
            <p className="text-gray-600">You've mastered 37 lessons covering Python from basics to advanced!</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
            <Star className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Knowledge Test</h3>
            <p className="text-gray-600">You've completed the comprehensive 45-question test!</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Python Master</h3>
            <p className="text-gray-600">You're now ready to build amazing Python projects!</p>
          </div>
        </div>

        {/* What You've Learned */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What You've Mastered 🐍
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Basics:</strong> Variables, strings, math, print()
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Control Flow:</strong> If/else, loops, conditionals
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Data Structures:</strong> Lists, dictionaries, tuples, sets
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Functions:</strong> Parameters, return values, lambda
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Advanced:</strong> Classes, inheritance, modules, generators
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-800">Tools:</strong> File handling, error handling, context managers
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Next? 🚀</h3>
          <div className="space-y-3 text-left max-w-2xl mx-auto">
            <p className="text-gray-700">
              <strong>1. Build Projects:</strong> Create games, web apps, or automation scripts
            </p>
            <p className="text-gray-700">
              <strong>2. Join Communities:</strong> Share your code and learn from others
            </p>
            <p className="text-gray-700">
              <strong>3. Keep Learning:</strong> Explore libraries like NumPy, Pandas, Django, Flask
            </p>
            <p className="text-gray-700">
              <strong>4. Practice Daily:</strong> Code something every day to stay sharp
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8">
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            You're now a Python programmer! 🎊
          </p>
          <p className="text-lg text-gray-600">
            Keep coding, keep learning, and most importantly - have fun! 🐍✨
          </p>
        </div>
      </div>
    </div>
  );
}

