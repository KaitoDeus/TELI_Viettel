import { GoogleGenerativeAI } from "@google/generative-ai";
import type { IAIResponse, IChatHistoryItem } from '../models/types';
import { AI_CHAT_RESPONSE, CHAT_HISTORY_DATA } from '../data/chat';

// Helper để lấy API Key và khởi tạo AI
const getAIModule = () => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  const modelName = import.meta.env.VITE_GEMINI_MODEL;
  
  if (!key) {
    console.warn("TELI: VITE_GEMINI_API_KEY is missing in .env file");
  }
  
  return {
    key,
    modelName,
    genAI: new GoogleGenerativeAI(key)
  };
};

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

  public getChatById(id: number): IChatHistoryItem | undefined {
    return this.history.find(c => c.id === id);
  }

  public addNewChat(title: string): number {
    const newId = this.history.length > 0 ? Math.max(...this.history.map(c => c.id)) + 1 : 1;
    this.history.unshift({ id: newId, title });
    return newId;
  }

  public updateChatData(id: number, data: Partial<IChatHistoryItem>): void {
    const index = this.history.findIndex(c => c.id === id);
    if (index !== -1) {
      this.history[index] = { ...this.history[index], ...data };
    }
  }

  /**
   * Gọi API Gemini để lấy phản hồi thực tế
   */
  public async getAiResponse(userPrompt: string): Promise<{ aiResponse: IAIResponse, editorContent: IChatHistoryItem['editorContent'] }> {
    const { key, modelName, genAI } = getAIModule();

    if (!key || key.includes("YOUR_GEMINI")) {
      // Fallback nếu chưa có API Key
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            aiResponse: AI_CHAT_RESPONSE,
            editorContent: CHAT_HISTORY_DATA[0].editorContent
          });
        }, 1500);
      });
    }

    const model = genAI.getGenerativeModel({ 
      model: modelName,
      generationConfig: { responseMimeType: "application/json" }
    });

    const systemInstruction = `
      Bạn là trợ lý AI tên "TELI" hỗ trợ giáo viên vùng cao Việt Nam soạn bài giảng môn Tin học.
      Hãy trả lời chuyên nghiệp, tận tâm, ngôn ngữ phù hợp với giáo viên tiểu học và THCS.
      
      QUY ĐỊNH TRẢ VỀ:
      Chỉ trả về JSON hợp lệ với cấu trúc sau:
      {
        "aiResponse": {
          "intro": "string (Lời chào và giới thiệu ngắn gọn)",
          "sections": [
            {
              "title": "string",
              "content": ["string (đoạn văn bản, có thể dùng markdown bold)"],
              "bullets": ["string (danh sách nếu có)"],
              "footer": "string (lời khuyên nhỏ)"
            }
          ],
          "actions": ["Nội dung giáo án", "Slide bài giảng", "Bài tập thực hành"]
        },
        "editorContent": {
          "title": "string (Tiêu đề giáo án chuẩn)",
          "sections": [
            {
              "title": "string (I. Mục tiêu, II. Chuẩn bị...)",
              "list": ["string"],
              "table": [
                {
                  "leftBold": "string",
                  "leftList": ["string"],
                  "rightList": ["string"]
                }
              ]
            }
          ]
        }
      }
    `;

    try {
      const result = await model.generateContent(systemInstruction + "\n\nYêu cầu của giáo viên: " + userPrompt);
      const responseText = result.response.text();
      return JSON.parse(responseText);
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const chatService = ChatService.getInstance();
