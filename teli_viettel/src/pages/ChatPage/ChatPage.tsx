import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chatService } from '../../services/ChatService';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import EditorPanel from '../../components/EditorPanel/EditorPanel';
import ChatInput from '../../components/ChatInput/ChatInput';
import type { IChatHistoryItem } from '../../models/types';
import { ExportService } from '../../services/ExportService';
import './ChatPage.css';

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const chatId = id ? parseInt(id) : 1;
  const [currentChat, setCurrentChat] = useState<IChatHistoryItem | null>(null);

  const [message, setMessage] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load chat data
    const chat = chatService.getChatById(chatId);
    if (chat) {
      setCurrentChat(chat);
      // Không tự động mở trình soạn thảo để tránh gây phiền trên mobile
      setShowEditor(false);
    }
  }, [chatId]);

  // Tự động kích hoạt AI nếu có tin nhắn từ Trang chủ nhưng chưa có phản hồi
  useEffect(() => {
    if (currentChat?.inputMessage && !currentChat.aiResponse && !isLoading) {
      processAiChat(currentChat.inputMessage);
    }
  }, [currentChat?.id]); // Chỉ chạy khi chuyển ID hoặc khi chat mới được load

  const processAiChat = async (userMsg: string) => {
    setIsLoading(true);
    
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT')), 60000);
    });

    try {
      const result = await Promise.race([
        chatService.getAiResponse(userMsg),
        timeoutPromise
      ]) as any;
      
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

    const updatedData: Partial<IChatHistoryItem> = {
      inputMessage: userMsg,
      aiResponse: undefined, 
    };
    
    setCurrentChat(prev => prev ? { ...prev, ...updatedData } : null);
    chatService.updateChatData(chatId, updatedData);

    await processAiChat(userMsg);
  };

  const handleActionClick = (idx: number) => {
    if (idx === 0) {
      setShowEditor(true);
    }
  };

  const handleExportFile = async () => {
    if (currentChat?.editorContent) {
      try {
        await ExportService.exportToWord(currentChat.editorContent);
      } catch (error) {
        console.error("Export error:", error);
        alert("Có lỗi khi xuất file Word. Thầy/Cô hãy thử lại sau nhé!");
      }
    }
  };

  if (!currentChat) return <div>Đang tải cuộc trò chuyện...</div>;

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
            onExport={handleExportFile} 
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
