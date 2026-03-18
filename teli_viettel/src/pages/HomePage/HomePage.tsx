import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { chatService } from '../../services/ChatService';
import SuggestionChip from '../../components/SuggestionChip/SuggestionChip';
import mascotImage from '../../assets/mascot-screen1.png';
import './HomePage.css';

const ALL_SUGGESTIONS = [
  'Soạn bài Tin học lớp 3 bài Word cơ bản',
  'Tạo bài tập trắc nghiệm Tin học lớp 4',
  'Giải thích khái niệm Internet cho học sinh lớp 5',
  'Soạn bài Tin học lớp 2 bài Làm quen với máy tính',
  'Tạo bài tập trắc nghiệm Tin học lớp 3 về chuột và bàn phím',
  'Giải thích khái niệm phần mềm cho học sinh lớp 4',
  'Soạn bài Tin học lớp 5 bài Sử dụng PowerPoint cơ bản',
  'Tạo bài tập trắc nghiệm Tin học lớp 2 về nhận biết thiết bị máy tính',
  'Giải thích khái niệm tệp và thư mục cho học sinh lớp 3',
  'Soạn bài Tin học lớp 4 bài Vẽ tranh bằng Paint',
  'Tạo bài tập trắc nghiệm Tin học lớp 5 về an toàn khi sử dụng Internet',
  'Giải thích khái niệm mạng máy tính cho học sinh lớp 4'
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>(() => {
    const shuffled = [...ALL_SUGGESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRefreshing(true);
    setTimeout(() => {
      const shuffled = [...ALL_SUGGESTIONS].sort(() => 0.5 - Math.random());
      setSuggestions(shuffled.slice(0, 3));
      setIsRefreshing(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const newId = chatService.addNewChat(query.trim());
      chatService.updateChatData(newId, { inputMessage: query.trim() });
      navigate(`/chat/${newId}`);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
      }, 0);
    }
  };

  return (
    <main className="home-page">
      <div className="home-top-bar">
        <button className="user-profile-btn" aria-label="Hồ sơ người dùng">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>

      <div className="home-content">
        {/* TOP: Search Bar */}
        <form className="home-search-form" onSubmit={handleSubmit}>
          <div className="search-input-prefix">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <textarea
            ref={textareaRef}
            className="home-search-input"
            placeholder="Hôm nay chúng ta soạn bài gì nhỉ?"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const textarea = e.target;
              textarea.style.height = 'auto';
              textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            rows={1}
          />
          <button type="submit" className="home-search-btn" disabled={!query.trim()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        {/* MIDDLE: Mascot Section */}
        <div className="home-mascot-section">
          <div className="home-mascot-wrapper">
            <img 
              src={mascotImage} 
              alt="TELI Mascot" 
              className="home-mascot-img"
            />
          </div>
          <div className="home-greeting-bubble">
            Chào Thầy/Cô, hôm nay chúng ta chuẩn bị giáo án Tin học lớp mấy?
            <div className="bubble-tail" />
          </div>
        </div>

        {/* BOTTOM: Suggestion Chips */}
        <div className="home-suggestions-container">
          <div className="home-suggestions-header">
            <button 
              className={`home-suggestions-refresh ${isRefreshing ? 'refreshing' : ''}`} 
              onClick={handleRefresh}
              aria-label="Đổi gợi ý"
              disabled={isRefreshing}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              </svg>
            </button>
          </div>
          <div className={`home-suggestions ${isRefreshing ? 'refreshing' : ''}`}>
            {suggestions.map((text, index) => (
              <SuggestionChip 
                key={`${text}-${index}`} 
                label={text} 
                onClick={() => handleSuggestionClick(text)} 
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
