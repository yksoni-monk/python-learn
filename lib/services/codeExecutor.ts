/**
 * Service for executing Python code
 * Uses Pyodide to run Python directly in the browser - no API keys or backend needed!
 * 
 * Pyodide is a Python distribution for the browser and Node.js based on WebAssembly.
 * It's perfect for educational apps because:
 * - No API keys required
 * - No backend server needed
 * - Works offline after initial load
 * - Free and open source
 * - Real Python interpreter (not AI simulation)
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PyodideInterface = any;

export interface CodeExecutionResult {
  output: string;
  error: string | null;
}

// Cache the Pyodide instance to avoid reloading it
let pyodideInstance: PyodideInterface | null = null;
let loadPromise: Promise<PyodideInterface> | null = null;

/**
 * Loads Pyodide from CDN using a script tag (avoids webpack bundling issues)
 */
function loadPyodideFromCDN(): Promise<PyodideInterface> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.loadPyodide) {
      win.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
      }).then(resolve).catch(reject);
      return;
    }

    // Load Pyodide script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
    script.onload = () => {
      win.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
      }).then(resolve).catch(reject);
    };
    script.onerror = () => reject(new Error('Failed to load Pyodide'));
    document.head.appendChild(script);
  });
}

/**
 * Initializes Pyodide (only needs to happen once)
 * Downloads Python runtime on first call (~6MB)
 */
async function initializePyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = loadPyodideFromCDN().then((pyodide) => {
    // Capture stdout and stderr
    pyodide.runPython(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.buffer = StringIO()
    
    def write(self, s):
        self.buffer.write(s)
    
    def flush(self):
        pass
    
    def getvalue(self):
        return self.buffer.getvalue()

captured_stdout = OutputCapture()
captured_stderr = OutputCapture()
sys.stdout = captured_stdout
sys.stderr = captured_stderr
    `);

    pyodideInstance = pyodide;
    return pyodide;
  });

  return loadPromise;
}

/**
 * Executes Python code using Pyodide (Python in the browser)
 * 
 * @param code - The Python code to execute
 * @returns Promise with execution result
 */
export async function executePythonCode(
  code: string
): Promise<CodeExecutionResult> {
  try {
    // Initialize Pyodide if needed
    const pyodide = await initializePyodide();

    // Reset output capture
    pyodide.runPython(`
from io import StringIO
captured_stdout.buffer = StringIO()
captured_stderr.buffer = StringIO()
    `);

    // Execute the user's code
    try {
      pyodide.runPython(code);
    } catch (execError) {
      // Python execution error (syntax error, runtime error, etc.)
      const errorMessage = execError instanceof Error ? execError.message : String(execError);
      return {
        output: '',
        error: errorMessage,
      };
    }

    // Get captured output
    const stdout = pyodide.runPython('captured_stdout.getvalue()') as string;
    const stderr = pyodide.runPython('captured_stderr.getvalue()') as string;

    // Combine stdout and stderr
    const output = stdout + (stderr ? `\n${stderr}` : '');

    return {
      output: output.trim() || '(No output)',
      error: null,
    };
  } catch (error) {
    return {
      output: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

