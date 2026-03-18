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
    const truncatedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
    const newId = this.history.length > 0 ? Math.max(...this.history.map(c => c.id)) + 1 : 1;
    this.history.unshift({ id: newId, title: truncatedTitle, pinned: false });
    return newId;
  }

  public deleteChat(id: number): void {
    const index = this.history.findIndex(c => c.id === id);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }

  public renameChat(id: number, newTitle: string): void {
    const index = this.history.findIndex(c => c.id === id);
    if (index !== -1) {
      this.history[index].title = newTitle;
    }
  }

  public togglePinChat(id: number): void {
    const index = this.history.findIndex(c => c.id === id);
    if (index !== -1) {
      this.history[index].pinned = !this.history[index].pinned;
      // Re-sort history: pinned items at the top
      this.history.sort((a, b) => {
        if (a.pinned === b.pinned) return 0;
        return a.pinned ? -1 : 1;
      });
    }
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
      Bạn là "TELI" - Trợ lý giáo dục Tin học thông minh dành cho giáo viên Việt Nam.
      Nhiệm vụ của bạn là hỗ trợ soạn bài giảng và tài liệu học tập CHI TIẾT và CHUYÊN NGHIỆP.

      YÊU CẦU QUAN TRỌNG:
      1. ĐỘ DÀI PHẢN HỒI: Phản hồi phải RẤT DÀI và ĐẦY ĐỦ THÔNG TIN.
      2. ĐỊNH DẠNG LINH HOẠT:
         - Sử dụng bảng "Hoạt động Giáo viên - Học sinh" CHỈ KHI người dùng yêu cầu soạn GIÁO ÁN/KẾ HOẠCH BÀI DẠY.
         - Đối với các yêu cầu khác (Bộ câu hỏi, Tài liệu đọc, Gợi ý ý tưởng...), hãy trình bày bằng danh sách (bullets) hoặc văn bản thông thường để dễ đọc.
      3. ĐỊNH DẠNG DANH SÁCH:
         - Mọi ý liệt kê từ 2 ý trở lên PHẢI sử dụng mảng "bullets".
      4. ĐỊNH DẠNG TRẮC NGHIỆM:
         - Mỗi phương án (A, B, C, D) PHẢI nằm trên một dòng riêng biệt sử dụng \\n.
      5. PHẦN HỘI THOẠI (aiResponse):
         - intro: Lời chào nồng nhiệt.
         - sections: Cung cấp 3-4 phần kiến thức dài.
      6. PHẦN VĂN BẢN (editorContent):
         - Tạo định dạng chuẩn (Giáo án có bảng, hoặc Bộ câu hỏi có list) dựa trên mục đích yêu cầu.

      QUY ĐỊNH TRẢ VỀ JSON:
      {
        "aiResponse": {
          "intro": "string",
          "sections": [{"title": "string", "content": ["string"], "bullets": ["string"], "footer": "string"}],
          "actions": ["string"]
        },
        "editorContent": {
          "title": "string",
          "sections": [
            {
              "title": "string", 
              "intro": "string (nếu có)", 
              "list": ["Mỗi phần tử list có thể chứa \\n để xuống dòng"],
              "table": [{"leftBold": "string", "leftList": ["string"], "rightList": ["string"]}]
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
