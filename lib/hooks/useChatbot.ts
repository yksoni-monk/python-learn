import { useState, useCallback, useRef, useEffect } from 'react';
import { sendChatbotMessage, type ChatMessage, type ChatbotContext } from '../services/chatbotService';

/**
 * Custom hook for managing chatbot state and interactions
 */
export function useChatbot(context: ChatbotContext) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your Python learning assistant. I can help you understand concepts, debug code, or answer questions about the current lesson. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim() || isLoading) return;

      // Add user message
      const userMsg: ChatMessage = {
        role: 'user',
        content: userMessage,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        // Get assistant response
        const response = await sendChatbotMessage(userMessage, context);
        const assistantMsg: ChatMessage = {
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } catch (error) {
        const errorMsg: ChatMessage = {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [context, isLoading]
  );

  const clearChat = useCallback(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm your Python learning assistant. I can help you understand concepts, debug code, or answer questions about the current lesson. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    messages,
    isLoading,
    isOpen,
    sendMessage,
    clearChat,
    toggleChat,
    messagesEndRef,
  };
}

