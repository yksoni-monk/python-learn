import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple rule-based chatbot that can help with Python learning
 * Can be easily upgraded to use OpenAI API or other AI services
 */
export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const userMessage = message.toLowerCase().trim();
    const lessonTitle = context?.currentLessonTitle || '';
    const lessonTheory = context?.currentLessonTheory || '';
    const currentCode = context?.currentCode || '';
    const error = context?.error || '';

    // Simple rule-based responses (can be replaced with AI API)
    let response = generateResponse(userMessage, {
      lessonTitle,
      lessonTheory,
      currentCode,
      error,
    });

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

interface ResponseContext {
  lessonTitle: string;
  lessonTheory: string;
  currentCode: string;
  error: string;
}

function generateResponse(message: string, context: ResponseContext): string {
  const { lessonTitle, lessonTheory, currentCode, error } = context;

  // Help with errors
  if (error && (message.includes('error') || message.includes('wrong') || message.includes('help'))) {
    return `I see you're getting an error. Let me help!\n\nError: ${error}\n\nHere are some common fixes:\n• Check for typos in variable names\n• Make sure all quotes are closed\n• Verify indentation is correct (Python is sensitive to spaces)\n• Check that you're using the right syntax for the current lesson\n\nCan you share what you're trying to do? I can give more specific help!`;
  }

  // Explain concepts
  if (message.includes('what is') || message.includes('explain') || message.includes('how does')) {
    if (lessonTheory) {
      return `Based on the current lesson "${lessonTitle}", here's an explanation:\n\n${lessonTheory.substring(0, 300)}${lessonTheory.length > 300 ? '...' : ''}\n\nWould you like me to explain a specific part in more detail?`;
    }
    return "I'd be happy to explain! What specific Python concept would you like to understand? You can ask about:\n• Variables and data types\n• Loops and conditionals\n• Functions\n• Lists and dictionaries\n• Or anything else from your lessons!";
  }

  // Help with code
  if (message.includes('code') || message.includes('write') || message.includes('example')) {
    if (currentCode) {
      return `Here's the example code from your current lesson:\n\n\`\`\`python\n${currentCode}\n\`\`\`\n\nTry running it and see what happens! Then experiment by changing values or adding new lines. What would you like to try?`;
    }
    return "I can help you write code! What would you like to create? For example:\n• A program that calculates something\n• A loop that prints numbers\n• A function that does a specific task\n\nTell me what you want to build!";
  }

  // Debugging help
  if (message.includes('debug') || message.includes('fix') || message.includes('not working')) {
    return `Let's debug your code together! Here are some things to check:\n\n1. **Syntax errors**: Look for missing colons, parentheses, or quotes\n2. **Indentation**: Make sure your code is properly indented (especially in if statements and loops)\n3. **Variable names**: Check that you're using the same variable names throughout\n4. **Data types**: Make sure you're using the right types (strings vs numbers)\n\nIf you share your code or the error message, I can give more specific help!`;
  }

  // General Python help
  if (message.includes('python') || message.includes('learn') || message.includes('lesson')) {
    return `I'm here to help you learn Python! 🐍\n\nYou're currently on: **${lessonTitle}**\n\nI can help you with:\n• Understanding concepts from the lesson\n• Debugging your code\n• Explaining how Python works\n• Providing examples\n\nWhat would you like to know?`;
  }

  // Greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return `Hello! 👋 I'm your Python learning assistant!\n\nI can help you:\n• Understand lesson concepts\n• Debug your code\n• Answer Python questions\n• Provide examples\n\nWhat would you like help with today?`;
  }

  // Default response
  return `I'm here to help you learn Python! 🐍\n\nYou're working on: **${lessonTitle}**\n\nI can help you with:\n• Understanding concepts - ask "what is..." or "explain..."\n• Debugging code - share your error or ask "why isn't this working?"\n• Code examples - ask "show me an example of..."\n• General Python questions\n\nWhat would you like to know?`;
}

