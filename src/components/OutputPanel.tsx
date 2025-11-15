import React from 'react';

interface OutputPanelProps {
  output: string;
  error: string | null;
  isRunning: boolean;
}

/**
 * Component for displaying code execution output
 * Shows results or errors from running Python code
 */
export const OutputPanel: React.FC<OutputPanelProps> = ({
  output,
  error,
  isRunning,
}) => {
  const displayText = isRunning
    ? 'Running...'
    : error
    ? `Error: ${error}`
    : output || 'Click "Run Code" to see the output!';

  const textColor = error ? 'text-red-400' : 'text-green-400';

  return (
    <div className="bg-black text-green-400 p-4 font-mono text-sm h-48 overflow-y-auto">
      <div className="mb-2 text-gray-500">📺 Output:</div>
      <pre className={`whitespace-pre-wrap ${textColor}`}>{displayText}</pre>
    </div>
  );
};

