import { useState } from 'react';
import { chatService } from '../../services/ChatService';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import EditorPanel from '../../components/EditorPanel/EditorPanel';
import ChatInput from '../../components/ChatInput/ChatInput';
import './ChatPage.css';

const aiResponse = chatService.getAiSuggestion('');

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleActionClick = (idx: number) => {
    if (idx === 0) setShowEditor(!showEditor);
  };

  return (
    <main className="chat-page">
      {/* Header */}
      <header className="chat-header">
        <h1 className="chat-title">Soạn bài: Chuột máy tính lớp 4</h1>
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
          <ChatMessage 
            type="user"
            content={
            `Tôi đang dạy Tin học lớp 4. Dựa vào giáo trình Tin học của Bộ giáo dục & đào tạo, hãy giúp tôi soạn nội dung bài giảng về chuột máy tính cho học sinh.
            Bài giảng cần:
            • Giải thích đơn giản, dễ hiểu cho học sinh tiểu học
            • Giới thiệu các bộ phận chính của chuột máy tính
            • Các thao tác cơ bản như: nhấp chuột, nhấp đúp, kéo thả
            • Gợi ý một hoạt động thực hành ngắn cho học sinh trong lớp.`
            }
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          />

          <ChatMessage 
            type="ai"
            aiData={aiResponse}
            onActionClick={handleActionClick}
          />
        </div>

        {/* Editor Panel */}
        {showEditor && <EditorPanel onExport={() => alert('Đang xuất file...')} />}
      </div>

      <ChatInput 
        value={message} 
        onChange={setMessage} 
        onSend={handleSend} 
      />
    </main>
  );
}
