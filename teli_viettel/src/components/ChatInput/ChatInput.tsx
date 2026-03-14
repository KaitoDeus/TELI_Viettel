import './ChatInput.css';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
}

export default function ChatInput({ value, onChange, onSend, placeholder }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form className="chat-input-bar" onSubmit={handleSubmit}>
      <div className="chat-input-wrapper">
        <button type="button" className="chat-add-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <input
          type="text"
          className="chat-input"
          placeholder={placeholder || "Hôm nay chúng ta soạn bài gì nhỉ?"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" className="chat-send-btn" aria-label="Gửi">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>
    </form>
  );
}
