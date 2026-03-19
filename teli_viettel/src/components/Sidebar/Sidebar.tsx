import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { chatService } from '../../services/ChatService';
import type { IChatHistoryItem } from '../../models/types';
import './Sidebar.css';

interface SidebarProps {
  activeChat?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLibrary = location.pathname === '/library';
  const chatIdFromUrl = location.pathname.startsWith('/chat/') ? parseInt(location.pathname.split('/')[2]) : (location.pathname === '/chat' ? 1 : null);
  
  const [chatHistory, setChatHistory] = useState(chatService.getChatHistory());
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  
  // Subscribe to ChatService changes
  useEffect(() => {
    return chatService.subscribe((updatedHistory) => {
      setChatHistory(updatedHistory);
    });
  }, []);

  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [targetChat, setTargetChat] = useState<IChatHistoryItem | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const handleAction = (e: React.MouseEvent, action: string, id: number) => {
    e.stopPropagation();
    setActiveMenuId(null);

    const chat = chatService.getChatById(id);
    if (!chat) return;

    setTargetChat(chat);

    switch (action) {
      case 'share':
        setShowShareModal(true);
        setIsCopied(false);
        break;
      case 'rename':
        setEditingId(id);
        setEditValue(chat.title);
        break;
      case 'pin':
        chatService.togglePinChat(id);
        // setChatHistory removed, subscriber will handle it
        break;
      case 'delete':
        setShowDeleteModal(true);
        break;
    }
  };

  const confirmDelete = () => {
    if (targetChat) {
      chatService.deleteChat(targetChat.id);
      // setChatHistory removed, subscriber will handle it
      if (chatIdFromUrl === targetChat.id) {
        navigate('/');
      }
    }
    setShowDeleteModal(false);
    setTargetChat(null);
  };

  const handleCopyLink = () => {
    if (targetChat) {
      const link = `${window.location.origin}/chat/${targetChat.id}`;
      navigator.clipboard.writeText(link);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleRenameSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (editValue.trim()) {
      chatService.renameChat(id, editValue.trim());
      // setChatHistory removed, subscriber will handle it
    }
    setEditingId(null);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-header">
          <div className="sidebar-logo" onClick={() => navigate('/')}>
            <span className="logo-text">TELI</span>
            <span className="logo-sub">viettel</span>
          </div>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Đóng sidebar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <button className="sidebar-nav-item new-chat-btn" onClick={() => navigate('/')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            <span>Cuộc trò chuyện mới</span>
          </button>

          <button
            className={`sidebar-nav-item ${isLibrary ? 'active' : ''}`}
            onClick={() => navigate('/library')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <span>Nội dung đã tạo</span>
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </nav>

        {/* Chat History */}
        <div className="sidebar-history">
          <h3 className="sidebar-history-title">Lịch sử trò chuyện</h3>
          <ul className="sidebar-history-list">
            {chatHistory.map((item) => (
              <li
                key={`${item.id}-${item.pinned}`}
                className={`sidebar-history-item ${item.id === chatIdFromUrl ? 'active' : ''} ${item.pinned ? 'pinned' : ''}`}
                onClick={() => navigate(`/chat/${item.id}`)}
              >
                {editingId === item.id ? (
                  <form className="rename-form" onSubmit={(e) => handleRenameSubmit(e, item.id)}>
                    <input
                      autoFocus
                      className="rename-input"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={(e) => handleRenameSubmit(e, item.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </form>
                ) : (
                  <>
                    {item.pinned && (
                      <svg className="pin-indicator" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="17" x2="12" y2="22" />
                        <path d="M5 17h14v-2l-1.5-1.5V6a2 2 0 0 0-2-2H8.5a2 2 0 0 0-2 2v7.5L5 15v2z" />
                      </svg>
                    )}
                    <span className="history-item-title">{item.title}</span>
                    <button 
                      className="history-item-more" 
                      onClick={(e) => handleMenuClick(e, item.id)}
                      aria-label="Thêm tùy chọn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>

                    {activeMenuId === item.id && (
                      <div className="history-context-menu" ref={menuRef}>
                        <button onClick={(e) => handleAction(e, 'share', item.id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                          </svg>
                          Chia sẻ
                        </button>
                        <button onClick={(e) => handleAction(e, 'rename', item.id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Đổi tên
                        </button>
                        <button onClick={(e) => handleAction(e, 'pin', item.id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="17" x2="12" y2="22" />
                            <path d="M5 17h14v-2l-1.5-1.5V6a2 2 0 0 0-2-2H8.5a2 2 0 0 0-2 2v7.5L5 15v2z" />
                          </svg>
                          {item.pinned ? 'Bỏ ghim' : 'Ghim'}
                        </button>
                        <div className="menu-divider" />
                        <button className="delete-action" onClick={(e) => handleAction(e, 'delete', item.id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                          Xóa
                        </button>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <button className="sidebar-footer-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.72V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.17a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Cài đặt và trợ giúp</span>
          </button>
        </div>
      </aside>

      {/* Custom Delete Modal */}
      {showDeleteModal && (
        <div className="teli-modal-overlay">
          <div className="teli-modal-content">
            <div className="modal-icon-warning">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3>Xóa cuộc trò chuyện?</h3>
            <p>Bạn có chắc chắn muốn xóa cuộc trò chuyện <strong>"{targetChat?.title}"</strong> không? Hành động này không thể hoàn tác.</p>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowDeleteModal(false)}>Hủy</button>
              <button className="btn-danger" onClick={confirmDelete}>Xóa</button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Share Modal */}
      {showShareModal && (
        <div className="teli-modal-overlay">
          <div className="teli-modal-content">
            <div className="modal-icon-share">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </div>
            <h3>Chia sẻ nội dung</h3>
            <p>Người có liên kết này sẽ xem được nội dung cuộc trò chuyện.</p>
            <div className="share-link-box">
              <input readOnly value={`${window.location.origin}/chat/${targetChat?.id}`} />
              <button onClick={handleCopyLink}>
                {isCopied ? "Đã chép!" : "Sao chép"}
              </button>
            </div>
            <div className="modal-actions">
              <button className="btn-primary" onClick={() => setShowShareModal(false)}>Hoàn tất</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
