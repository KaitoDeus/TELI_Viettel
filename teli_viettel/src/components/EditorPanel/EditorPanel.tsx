import './EditorPanel.css';
import type { IChatHistoryItem } from '../../models/types';

interface EditorPanelProps {
  content?: IChatHistoryItem['editorContent'];
  onExport?: () => void;
  onClose?: () => void;
}

export default function EditorPanel({ content, onExport, onClose }: EditorPanelProps) {
  if (!content) return null;

  return (
    <div className="editor-panel">
      <div className="editor-header">
        <button className="close-panel-btn" onClick={onClose} aria-label="Đóng">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <button className="export-btn" onClick={onExport}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Xuất file
        </button>
      </div>
      <div className="editor-toolbar">
        {['B', 'I', 'U'].map(btn => (
          <button key={btn} className="toolbar-btn"><strong>{btn}</strong></button>
        ))}
        <div style={{ width: 1, height: 20, background: '#ddd', margin: '0 4px' }} />
        <button className="toolbar-btn">Align</button>
      </div>
      <div className="editor-content-area">
        <div className="document-page">
          <h1 className="doc-title">{content.title}</h1>
          
          {content.sections.map((section, sIdx) => (
            <div key={sIdx} className="doc-section">
              <p className="doc-section-title">{section.title}</p>
              {section.intro && <p className="doc-section-intro">{section.intro}</p>}
              
              {section.list && (
                <ul className="doc-list">
                  {section.list.map((item, iIdx) => (
                    <li key={iIdx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              )}

              {section.table && (
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th style={{ width: '60%' }}>HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
                      <th style={{ width: '40%' }}>HOẠT ĐỘNG CỦA HỌC SINH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td>
                          <div className="table-item-bold">{row.leftBold}</div>
                          <div className="table-item-list">
                            {row.leftList.map((li, lIdx) => <div key={lIdx}>{li}</div>)}
                          </div>
                        </td>
                        <td>
                          {row.rightBold && <div className="table-item-bold">{row.rightBold}</div>}
                          <div className="table-item-list">
                            {row.rightList.map((ri, riIdx) => <div key={riIdx}>{ri}</div>)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
