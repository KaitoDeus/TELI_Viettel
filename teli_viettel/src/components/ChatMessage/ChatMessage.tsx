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
  onToggleCollapse?: () => void;
  onActionClick?: (actionIndex: number) => void;
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
  onToggleCollapse,
  onActionClick 
}: ChatMessageProps) {
  if (type === 'user') {
    return (
      <div className="chat-message user-message">
        <div className="message-bubble user-bubble">
          <button className="collapse-btn" onClick={onToggleCollapse}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s' }}>
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
        {aiData && (
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
                  className={`ai-action-btn ${idx === 0 ? 'primary' : 'secondary'}`}
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
