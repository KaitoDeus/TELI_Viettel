import './EditorPanel.css';

interface EditorPanelProps {
  onExport?: () => void;
}

export default function EditorPanel({ onExport }: EditorPanelProps) {
  return (
    <div className="editor-panel">
      <div className="editor-header">
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
          <h1 className="doc-title">Giáo án Tin học Lớp 4: Chuột máy tính</h1>
          
          <div className="doc-section">
            <p className="doc-section-title">I. MỤC TIÊU</p>
            <p className="doc-section-intro">Sau bài học, học sinh có thể:</p>
            <ul className="doc-list">
              <li>Hiểu được <strong>Internet là nguồn thông tin lớn</strong> giúp tìm kiếm kiến thức.</li>
              <li>Biết cách <strong>tìm kiếm thông tin đơn giản trên Internet</strong>.</li>
              <li>Nhận biết được <strong>một số quy tắc cơ bản khi sử dụng Internet an toàn</strong>.</li>
              <li>Hào hứng tham gia các hoạt động trò chơi hóa trong giờ học.</li>
            </ul>
          </div>

          <div className="doc-section">
            <p className="doc-section-title">II. CHUẨN BỊ HỌC LIỆU</p>
            <ul className="doc-list">
              <li><strong>Giáo viên</strong>: Slide bài giảng trình chiếu, 1 chuột máy tính để demo, phòng máy tính đã cài sẵn phần mềm Paint.</li>
              <li><strong>Học sinh</strong>: SGK Tin học 4, vở ghi.</li>
            </ul>
          </div>

          <div className="doc-section">
            <p className="doc-section-title">III. CÁC HOẠT ĐỘNG DẠY VÀ HỌC</p>
            <table className="doc-table">
              <thead>
                <tr>
                  <th style={{ width: '60%' }}>HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
                  <th style={{ width: '40%' }}>HOẠT ĐỘNG CỦA HỌC SINH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-item-bold">1. Ổn định tổ chức:</div>
                    <div className="table-item-bold">2. Kiểm tra bài cũ:</div>
                    <div className="table-item-list">
                      <div>- Máy tính để bàn có mấy bộ phận chính?</div>
                      <div>- Bàn phím máy tính dùng để làm gì?</div>
                      <div>- GV nhận xét, tuyên dương.</div>
                    </div>
                  </td>
                  <td>
                    <div className="table-item-list">
                      <div>- HS hát / Khởi động.</div>
                      <div style={{ marginTop: 24 }}>- HS trả lời.</div>
                      <div style={{ marginTop: 60 }}>- HS nhận xét câu trả lời của bạn.</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-item-bold">3. Bài mới:</div>
                    <div className="table-item-bold" style={{ marginTop: 8 }}>Hoạt động 1: Giới thiệu bài</div>
                    <div className="table-item-list">
                      <div>- GV trình chiếu hình ảnh bàn tay và con chuột máy tính. Đặt câu hỏi: "Làm sao để chúng ta có thể chạm vào các biểu tượng bên trong màn hình máy tính?"</div>
                      <div style={{ marginTop: 12 }}>- Để biết thiết bị nào giúp ta làm việc đó, hôm nay ta học bài mới.</div>
                      <div style={{ marginTop: 12 }}>- GV ghi tựa bài: Chuột máy tính.</div>
                    </div>
                    <div className="table-item-bold" style={{ marginTop: 12 }}>Hoạt động 2: Chuột máy tính là gì?</div>
                  </td>
                  <td>
                    <div className="table-item-list" style={{ marginTop: 80 }}>
                      <div>- HS quan sát, suy nghĩ và trả lời.</div>
                      <div style={{ marginTop: 100 }}>- HS nhắc lại tựa bài.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
