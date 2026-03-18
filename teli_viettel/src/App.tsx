import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import './App.css';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 767);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar on navigation on mobile
  useEffect(() => {
    if (window.innerWidth <= 767) {
      Promise.resolve().then(() => setIsSidebarOpen(false));
    }
  }, [location.pathname]);

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Mobile Menu Button */}
      <button 
        className="mobile-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isSidebarOpen ? (
            <line x1="18" y1="6" x2="6" y2="18" />
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && window.innerWidth <= 767 && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/chat/:id" 
            element={<ChatPageWithKey />} 
          />
          <Route path="/chat" element={<ChatPage key="default" />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </div>
    </div>
  );
}

function ChatPageWithKey() {
  const location = useLocation();
  return <ChatPage key={location.pathname} />;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
