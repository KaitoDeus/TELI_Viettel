import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mascot from '../../assets/mascot-screen1.png';
import SuggestionChip from '../../components/SuggestionChip/SuggestionChip';
import './HomePage.css';

const suggestions = [
  'Soạn bài Tin học lớp 3 bài Word cơ bản',
  'Tạo bài tập trắc nghiệm Tin học lớp 4',
  'Giải thích khái niệm Internet cho học sinh lớp 5',
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/chat');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    navigate('/chat');
  };

  return (
    <main className="home-page">
      {/* User avatar */}
      <div className="home-top-bar">
        <div className="user-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      {/* Center Content */}
      <div className="home-content">
        {/* Search Bar */}
        <form className="home-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="home-search-input"
            placeholder="Hôm nay chúng ta soạn bài gì nhỉ?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="home-search-btn" aria-label="Tìm kiếm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </form>

        {/* Mascot + Greeting */}
        <div className="home-mascot-section">
          <div className="home-mascot-wrapper">
            <img src={mascot} alt="TELI Mascot" className="home-mascot-img" />
          </div>
          <div className="home-greeting-bubble">
            <p>Chào Thầy/Cô, hôm nay chúng ta chuẩn bị giáo án Tin học lớp mấy?</p>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="home-suggestions">
          {suggestions.map((suggestion, index) => (
            <SuggestionChip
              key={index}
              label={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
