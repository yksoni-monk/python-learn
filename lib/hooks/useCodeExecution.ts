import { useState, useCallback } from 'react';
import { executePythonCode } from '../services/codeExecutor';
import { CodeExecutionState } from '../types/lesson';

/**
 * Custom hook for managing code execution state and logic
 * Handles running code and managing output/error states
 */
export function useCodeExecution() {
  const [executionState, setExecutionState] = useState<CodeExecutionState>({
    output: '',
    isRunning: false,
    error: null,
  });

  const runCode = useCallback(async (code: string) => {
    setExecutionState({
      output: '',
      isRunning: true,
      error: null,
    });

    const result = await executePythonCode(code);

    setExecutionState({
      output: result.output,
      isRunning: false,
      error: result.error,
    });
  }, []);

  const clearOutput = useCallback(() => {
    setExecutionState({
      output: '',
      isRunning: false,
      error: null,
    });
  }, []);

  return {
    executionState,
    runCode,
    clearOutput,
  };
}

