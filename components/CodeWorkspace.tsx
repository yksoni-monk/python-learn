'use client';

import React from 'react';
import { CodeEditor } from './CodeEditor';
import { OutputPanel } from './OutputPanel';

interface CodeWorkspaceProps {
  code: string;
  onCodeChange: (code: string) => void;
  onRunCode: () => void;
  output: string;
  error: string | null;
  isRunning: boolean;
}

/**
 * Combined workspace component for code editing and output display
 * Groups the editor and output panel together
 */
export function CodeWorkspace({
  code,
  onCodeChange,
  onRunCode,
  output,
  error,
  isRunning,
}: CodeWorkspaceProps) {
  return (
    <div className="w-1/2 flex flex-col bg-gray-50">
      <CodeEditor
        code={code}
        onCodeChange={onCodeChange}
        onRunCode={onRunCode}
        isRunning={isRunning}
      />
      <OutputPanel output={output} error={error} isRunning={isRunning} />
    </div>
  );
}

