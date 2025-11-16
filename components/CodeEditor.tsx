'use client';

import React from 'react';
import { Play } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  onRunCode: () => void;
  isRunning?: boolean;
}

/**
 * Code editor component with run button
 * Allows kids to write and edit Python code
 * Note: Syntax highlighting can be added later with a proper code editor library
 */
export function CodeEditor({
  code,
  onCodeChange,
  onRunCode,
  isRunning = false,
}: CodeEditorProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-gray-800 text-white font-bold flex items-center justify-between">
        <span>✏️ Code Editor</span>
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className={`px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition ${
            isRunning
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          <Play size={20} />
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
      </div>

      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        className="flex-1 p-4 font-mono text-lg resize-none focus:outline-none border-b-4 border-gray-300 bg-gray-900 text-green-400"
        spellCheck="false"
        placeholder="Write your Python code here..."
      />
    </div>
  );
}

