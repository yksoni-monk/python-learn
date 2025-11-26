/**
 * Service for chatbot interactions
 * Provides a simple AI assistant to help users with Python learning
 */

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatbotContext {
  currentLessonTitle: string;
  currentLessonTheory: string;
  currentCode: string;
  error?: string | null;
}

/**
 * Sends a message to the chatbot API
 * @param message - User's message
 * @param context - Current lesson context to help the chatbot understand what the user is working on
 * @returns Assistant's response
 */
export async function sendChatbotMessage(
  message: string,
  context: ChatbotContext
): Promise<string> {
  try {
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        context,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get chatbot response');
    }

    const data = await response.json();
    return data.response || 'I apologize, but I could not generate a response.';
  } catch (error) {
    console.error('Chatbot error:', error);
    return 'Sorry, I encountered an error. Please try again or check your connection.';
  }
}

