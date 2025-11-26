/**
 * Represents a single lesson in the Python learning course
 */
export interface Lesson {
  /** Unique identifier for the lesson */
  id: string;
  /** Display title of the lesson */
  title: string;
  /** Theory/explanation content shown to the student */
  theory: string;
  /** Default code example for this lesson */
  code: string;
  /** Brief explanation/tip about the concept */
  explanation: string;
  /** Question to test understanding - required for all lessons */
  question: {
    text: string;
    options: string[];
    correctAnswer: number; // Index of correct answer (0-based)
    explanation: string;
  };
  /** Optional: Difficulty level (for future filtering) */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** Optional: Tags for categorization */
  tags?: string[];
}

/**
 * Represents the state of code execution
 */
export interface CodeExecutionState {
  /** Current output from code execution */
  output: string;
  /** Whether code is currently being executed */
  isRunning: boolean;
  /** Any error that occurred during execution */
  error: string | null;
}

