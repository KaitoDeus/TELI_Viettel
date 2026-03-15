import type { IAIResponse, IChatHistoryItem } from '../models/types';
import { AI_CHAT_RESPONSE, CHAT_HISTORY_DATA } from '../data/chat';

/**
 * ChatService manages chat history and AI response generation.
 * Follows SOLID principles by separating chat logic from UI components.
 */
class ChatService {
  private static instance: ChatService;
  private history: IChatHistoryItem[] = CHAT_HISTORY_DATA;

  private constructor() {}

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  public getChatHistory(): IChatHistoryItem[] {
    return this.history;
  }

  public getAiSuggestion(): IAIResponse {
    // In a real app, this would be an API call
    return AI_CHAT_RESPONSE;
  }

  public getChatById(id: number): IChatHistoryItem | undefined {
    return this.history.find(c => c.id === id);
  }

  public addNewChat(title: string): void {
    const newId = this.history.length > 0 ? Math.max(...this.history.map(c => c.id)) + 1 : 1;
    this.history.unshift({ id: newId, title });
  }
}

export const chatService = ChatService.getInstance();
