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
      <div className="chat-message user-message-layout">
        <div 
          className={`user-prompt-box ${isCollapsed ? 'is-collapsed' : ''}`}
        >
          <div className="user-prompt-header">
            <div className="user-prompt-text-container">
              {isCollapsed ? null : (
                <div className="user-prompt-full-content">
                  {content?.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
            <button 
              className={`user-prompt-toggle ${isCollapsed ? '' : 'active'}`} 
              onClick={(e) => {
                e.stopPropagation();
                onToggleCollapse && onToggleCollapse();
              }}
              aria-label={isCollapsed ? "Mở rộng" : "Thu gọn"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="chat-message ai-message-layout">
      <div className="ai-avatar-msg">
        <img src={mascotAvatar} alt="TELI" />
      </div>
      <div className="ai-bubble-container">
        {isThinking && (
          <div className="thinking-bubble">
            <div className="thinking-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="thinking-text">Đang suy nghĩ...</span>
          </div>
        )}

        {aiData && !isThinking && (
          <div className="ai-response-body">
            <p className="ai-intro-text">{renderBoldText(aiData.intro)}</p>

            {aiData.sections.map((section, idx) => (
              <div key={idx} className="ai-section-group">
                {idx > 0 && <hr className="ai-section-divider" />}
                <div className="ai-section-content">
                  <h3 className="ai-section-heading">{renderBoldText(section.title)}</h3>
                  
                  {section.content?.map((line, i) => (
                    <p key={i} className="ai-section-paragraph">{renderBoldText(line)}</p>
                  ))}

                  {section.bullets && (
                    <ul className="ai-section-list">
                      {section.bullets.map((bullet, i) => (
                        <li key={i}>{renderBoldText(bullet)}</li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="ai-section-footer-text">{renderBoldText(section.footer)}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="ai-suggestion-actions">
              {['Nội dung giáo án', 'Slide bài giảng', 'Bài tập thực hành cho học sinh'].map((action, idx) => (
                <button 
                  key={idx} 
                  className={`ai-suggestion-btn ${activeActionIdx === idx ? 'active' : ''}`}
                  onClick={() => onActionClick?.(idx)}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
