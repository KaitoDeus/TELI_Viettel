import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chatService } from '../../services/ChatService';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import EditorPanel from '../../components/EditorPanel/EditorPanel';
import ChatInput from '../../components/ChatInput/ChatInput';
import type { IChatHistoryItem } from '../../models/types';
import './ChatPage.css';

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const chatId = id ? parseInt(id) : 1;
  const [currentChat, setCurrentChat] = useState<IChatHistoryItem | null>(null);

  const [message, setMessage] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Đồng bộ data từ service khi ID thay đổi
  useEffect(() => {
    const data = chatService.getChatById(chatId);
    setCurrentChat(data ? { ...data } : null);
    setShowEditor(false);
  }, [chatId]);

  // Tự động kích hoạt AI nếu có tin nhắn từ Trang chủ nhưng chưa có phản hồi
  useEffect(() => {
    if (currentChat?.inputMessage && !currentChat.aiResponse && !isLoading) {
      processAiChat(currentChat.inputMessage);
    }
  }, [currentChat?.id]); // Chỉ chạy khi chuyển ID hoặc khi chat mới được load

  const processAiChat = async (userMsg: string) => {
    setIsLoading(true);
    
    // Tạo một timeout 60 giây
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT')), 60000);
    });

    try {
      // 2. Chạy đua giữa API và Timeout
      const result = await Promise.race([
        chatService.getAiResponse(userMsg),
        timeoutPromise
      ]) as any;
      
      // 3. Cập nhật phản hồi AI và nội dung giáo án
      const aiUpdates: Partial<IChatHistoryItem> = {
        aiResponse: result.aiResponse,
        editorContent: result.editorContent
      };

      setCurrentChat(prev => prev ? { ...prev, ...aiUpdates } : null);
      chatService.updateChatData(chatId, aiUpdates);
      
    } catch (error: any) {
      console.error("Lỗi AI:", error);
      
      let errorMessage = "Trợ lý AI đang không ổn định!";
      if (error.message === 'TIMEOUT') {
        errorMessage = "Yêu cầu quá thời gian. Trợ lý AI đang không ổn định!";
      } else if (error.status === 429 || error.message?.includes('429')) {
        errorMessage = "Hệ thống AI đang quá tải (Lỗi 429). Thầy/Cô vui lòng đợi một lát rồi thử lại nhé!";
      }

      const errorUpdate: Partial<IChatHistoryItem> = {
        aiResponse: {
          intro: errorMessage,
          sections: [],
          actions: []
        }
      };
      
      setCurrentChat(prev => prev ? { ...prev, ...errorUpdate } : null);
      chatService.updateChatData(chatId, errorUpdate);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMsg = message;
    setMessage('');

    // 1. Cập nhật tin nhắn của người dùng ngay lập tức
    const updatedData: Partial<IChatHistoryItem> = {
      inputMessage: userMsg,
      aiResponse: undefined, 
    };
    
    setCurrentChat(prev => prev ? { ...prev, ...updatedData } : null);
    chatService.updateChatData(chatId, updatedData);

    // 2. Xử lý AI
    await processAiChat(userMsg);
  };

  const handleActionClick = (idx: number) => {
    if (idx === 0) setShowEditor(!showEditor);
  };

  if (!currentChat) {
    return <div className="chat-page">Không tìm thấy cuộc trò chuyện.</div>;
  }

  return (
    <main className="chat-page">
      {/* Header */}
      <header className="chat-header">
        <h1 className="chat-title">{currentChat.title}</h1>
        <div className="user-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </header>

      <div className={`chat-area-container ${showEditor ? 'show-editor' : ''}`}>
        {/* Chat Area */}
        <div className="chat-area">
          {currentChat.inputMessage && (
            <ChatMessage 
              type="user"
              content={currentChat.inputMessage}
              isCollapsed={isCollapsed}
              onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
            />
          )}

          {currentChat.aiResponse && (
            <ChatMessage 
              type="ai"
              aiData={currentChat.aiResponse}
              onActionClick={handleActionClick}
              activeActionIdx={showEditor ? 0 : -1}
            />
          )}

          {isLoading && !currentChat.aiResponse && (
            <ChatMessage 
              type="ai"
              isThinking={true}
            />
          )}

          {!currentChat.inputMessage && !currentChat.aiResponse && !isLoading && (
            <div className="chat-empty">Chưa có nội dung cho cuộc trò chuyện này.</div>
          )}
        </div>

        {/* Editor Panel */}
        {showEditor && (
          <EditorPanel 
            content={currentChat.editorContent} 
            onExport={() => alert('Đang xuất file...')} 
            onClose={() => setShowEditor(false)}
          />
        )}
      </div>

      <ChatInput 
        value={message} 
        onChange={setMessage} 
        onSend={handleSend} 
        placeholder={isLoading ? "Vui lòng chờ giây lát..." : "Hôm nay chúng ta soạn bài gì nhỉ?"}
      />
    </main>
  );
}
