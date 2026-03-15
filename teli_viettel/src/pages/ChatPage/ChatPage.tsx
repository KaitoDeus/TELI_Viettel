import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { chatService } from '../../services/ChatService';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import EditorPanel from '../../components/EditorPanel/EditorPanel';
import ChatInput from '../../components/ChatInput/ChatInput';
import './ChatPage.css';

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const chatId = id ? parseInt(id) : 1;
  const chatData = chatService.getChatById(chatId);

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

  if (!chatData) {
    return <div className="chat-page">Không tìm thấy cuộc trò chuyện.</div>;
  }

  return (
    <main className="chat-page">
      {/* Header */}
      <header className="chat-header">
        <h1 className="chat-title">{chatData.title}</h1>
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
          {chatData.inputMessage && (
            <ChatMessage 
              type="user"
              content={chatData.inputMessage}
              isCollapsed={isCollapsed}
              onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
            />
          )}

          {chatData.aiResponse && (
            <ChatMessage 
              type="ai"
              aiData={chatData.aiResponse}
              onActionClick={handleActionClick}
              activeActionIdx={showEditor ? 0 : -1}
            />
          )}

          {!chatData.inputMessage && !chatData.aiResponse && (
            <div className="chat-empty">Chưa có nội dung cho cuộc trò chuyện này.</div>
          )}
        </div>

        {/* Editor Panel */}
        {showEditor && (
          <EditorPanel 
            content={chatData.editorContent} 
            onExport={() => alert('Đang xuất file...')} 
            onClose={() => setShowEditor(false)}
          />
        )}
      </div>

      <ChatInput 
        value={message} 
        onChange={setMessage} 
        onSend={handleSend} 
      />
    </main>
  );
}
