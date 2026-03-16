import mascotAvatar from '../../assets/mascot-screen2.png';
import './ChatMessage.css';

interface ChatMessageProps {
  type: 'user' | 'ai';
  content?: string;
  aiData?: {
    intro: string;
    sections: Array<{
      title: string;
      content?: string[];
      bullets?: string[];
      footer?: string;
    }>;
    actions: string[];
  };
  isCollapsed?: boolean;
  isThinking?: boolean;
  onToggleCollapse?: () => void;
  onActionClick?: (actionIndex: number) => void;
  activeActionIdx?: number;
}

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function ChatMessage({ 
  type, 
  content, 
  aiData, 
  isCollapsed, 
  isThinking,
  onToggleCollapse,
  onActionClick,
  activeActionIdx
}: ChatMessageProps) {
  if (type === 'user') {
    return (
      <div className="chat-message user-message">
        <div className={`message-bubble user-bubble ${isCollapsed ? 'collapsed' : ''}`}>
          <button className="collapse-btn" onClick={onToggleCollapse} aria-label={isCollapsed ? "Mở rộng" : "Thu gọn"}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {!isCollapsed && (
            <div className="message-content">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="chat-message ai-message">
      <div className="ai-avatar">
        <img src={mascotAvatar} alt="TELI" />
      </div>
      <div className="message-bubble ai-bubble">
        {isThinking && (
          <div className="loading-bubble-inline">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span>Đang suy nghĩ...</span>
          </div>
        )}

        {aiData && !isThinking && (
          <>
            <p className="ai-intro">{renderBoldText(aiData.intro)}</p>
            {aiData.sections.map((section, idx) => (
              <div key={idx} className="ai-section">
                <h3 className="ai-section-title">{section.title}</h3>
                {section.content?.map((line: string, i: number) => (
                  <p key={i} className="ai-section-text">{renderBoldText(line)}</p>
                ))}
                {section.bullets && (
                  <ul className="ai-section-bullets">
                    {section.bullets.map((bullet: string, i: number) => (
                      <li key={i}>{renderBoldText(bullet)}</li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="ai-section-text ai-section-footer">{renderBoldText(section.footer)}</p>
                )}
              </div>
            ))}

            <div className="ai-actions">
              {aiData.actions.map((action, idx) => (
                <button 
                  key={idx} 
                  className={`ai-action-btn ${activeActionIdx === idx ? 'primary' : 'secondary'}`}
                  onClick={() => onActionClick?.(idx)}
                >
                  {action}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
