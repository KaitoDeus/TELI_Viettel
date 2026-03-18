# TELI Viettel – Ghi chú của Agent

## Tổng quan

Dự án đã hoàn thiện giao diện dựa trên thiết kế Figma và được tái cấu trúc theo chuẩn công nghiệp, đảm bảo tính mở rộng và trải nghiệm người dùng trên mọi thiết bị.

*   **Figma Design**: [UI TELI - Viettel](https://www.figma.com/design/VJlt6w0IUg995El6zReswb/UI-TELI---Viettel?node-id=127-210)
*   **Tech stack**: React 19 + TypeScript + Vite + Vanilla CSS + React Router DOM.
*   **Font chuẩn**: **Montserrat** (toàn bộ website) & **Kallisto** (ưu tiên cho Logo text).

---

## Kiến trúc Hệ thống (Architecture)

Dự án tuân thủ nghiêm ngặt các nguyên tắc **OOP** (Object-Oriented Programming) và **SOLID**:

### 1. Cấu trúc Thư mục mới
```
src/
├── models/             # Interface & Domain Types (SOLID - Interface Segregation)
├── data/               # Lớp dữ liệu tĩnh (Mock Data layer)
├── services/           # Nghiệp vụ logic - Singleton Pattern (SOLID - Single Responsibility)
├── components/         # UI Components dùng chung
├── pages/              # Các trang chính của ứng dụng
└── assets/             # Tài nguyên (Ảnh, Logo, Icons)
```

### 2. Các Pattern đã áp dụng
*   **Singleton Pattern**: Áp dụng cho `ChatService` và `CourseService` để quản lý trạng thái dữ liệu tập trung.
*   **Repository/Service Pattern**: Tách biệt logic truy xuất dữ liệu khỏi giao diện (UI).
*   **Dependency Inversion**: Các Page phụ thuộc vào Abstraction (Interface/Service) thay vì Concrete Data.

---

## Responsive Design Implementation

Đã tối ưu hóa hiển thị cho Mobile, Tablet và Desktop (100% no horizontal scroll):

### 1. Sidebar (Mobile Drawer)
*   **Mobile (< 768px)**: Sidebar ẩn mặc định, điều khiển bằng nút **Hamburger** (z-index cao nhất). Thêm lớp phủ (Overlay) mờ hậu cảnh khi mở.
*   **Tablet**: Tự động thu gọn chiều rộng để tối ưu không gian hiển thị nội dung.
*   **Auto-close**: Tự động đóng sidebar khi chuyển trang hoặc click chọn mục lịch sử trên Mobile.

### 2. Adaptive Layouts
*   **HomePage**: Mascot và bong bóng chào hỏi chuyển sang dạng cột dọc trên Mobile.
*   **Library**: Grid tự động chuyển đổi: 4 cột (Desktop) -> 2 cột (Tablet) -> **1 cột (Mobile)**.
*   **Chat**: Bong bóng tin nhắn mở rộng 95% màn hình trên Mobile, Header thu gọn chữ nếu quá dài.

---

## Các vấn đề đã xử lý (Bug Fixes & Polish)

*   **React Render Error**: Đã fix triệt để lỗi `useEffect changed size between renders` bằng cách ổn định hóa dependency array và sử dụng micro-task (`Promise.resolve`) cho các thay đổi state đồng bộ.
*   **Layout Glitch**: Khắc phục khoảng xám dưới chân trang chủ bằng cách ép `min-height: 100vh` cho container chính.
*   **Logo Text**: Chuyển đổi từ sử dụng ảnh sang Text thuần với font **Kallisto** theo yêu cầu, đảm bảo sắc nét và dễ chỉnh sửa.
*   **Color Sync**: Đồng bộ toàn bộ màu đỏ thương hiệu về mã duy nhất: `#EA2A32`.

---

## Design Tokens & Resources

| Token | Giá trị | Mô tả |
|-------|---------|-------|
| **Brand Red** | `#EA2A32` | Đỏ chuẩn Viettel |
| **Primary** | `#172B4D` | Xanh đậm (Nút chính, Search) |
| **Background** | `#FFFFFF` | Nền trắng chủ đạo |
| **Typography** | Montserrat | Phông chữ chủ đạo |
| **Layout** | Max-width hidden | Ngăn chặn vỡ khung ngang trên thiết bị nhỏ |

---

## Các công việc vừa hoàn thành (Mới nhất)

- [x] **Đồng bộ điều hướng**: Nút "Cuộc trò chuyện mới" tự động nhảy về Trang chủ (`/`).
- [x] **Tăng tỷ lệ hiển thị**: Phóng to Linh vật, Bong bóng lời chào và Thanh tìm kiếm tại Trang chủ để giao diện cân đối và ấn tượng hơn.
- [x] **Cập nhật nút "Xem ngay"**: Chuyển nút từ dạng đè ảnh sang dạng nằm dưới nội dung thẻ, hiển thị khi hover (theo mẫu Figma Hình 2).
- [x] **Tích hợp Favicon đa thiết bị**: Cài đặt đầy đủ icon 16/32/PWA (Chrome, Android, Apple) và `site.webmanifest`.
- [x] **Tối ưu EditorPanel**: Cập nhật giáo án mẫu Tin học lớp 4 đúng theo yêu cầu (Chia cột GV/HS, bảng kẻ viền Word-style).
- [x] **Sửa lỗi hiển thị**: Fix icon Cài đặt bị mất góc, loại bỏ highlight mặc định mục lịch sử khi ở trang chủ.
- [x] **Responsive ChatPage**: Chuyển bố cục sang dạng dọc trên Mobile (Chat trên - Editor dưới), khắc phục khoảng trắng lỗi khi chưa mở giáo án.
- [x] **Tinh chỉnh UI Chat**: Xoá icon đầu các nút hành động (Button actions) để giao diện thoáng hơn.
- [x] **Căn lề nội dung Chat**: Loại bỏ khoảng trắng đầu dòng trong tin nhắn của người dùng để nội dung bám sát lề trái.
- [x] **Sửa nút Toggle Chat**: Điều chỉnh vị trí và thêm padding để nút không chồng lên văn bản, đồng thời làm trong suốt background nút để khớp hoàn toàn với bong bóng chat.
- [x] **Cấu trúc dữ liệu lịch sử động**: Cập nhật hệ thống dữ liệu để mỗi mục lịch sử lưu trữ riêng biệt tin nhắn người dùng, phản hồi AI và nội dung giáo án tương ứng.
- [x] **Dữ liệu mẫu chuyên sâu**: Soạn thảo nội dung bài giảng chi tiết cho "Paint lớp 4" và "PowerPoint lớp 3" với kịch bản AI dài, chuyên nghiệp và giáo án Word đầy đủ các phần.
- [x] **Điều hướng & Reset trạng thái**: Triển khai Dynamic Routing (`/chat/:id`) và cơ chế `key` component để tự động đóng giáo án và làm mới tin nhắn khi chuyển đổi mục lịch sử.
- [x] **Nút đóng tài liệu (X)**: Thêm nút X vào góc bảng soạn thảo (`EditorPanel`) giúp người dùng tắt tài liệu thuận tiện và nhanh chóng.
- [x] **Tối ưu Responsive toàn diện**: Cải thiện hiển thị Mobile cho thanh nhập liệu, xếp chồng các nút hành động của AI (full-width) và bố cục chia đôi màn hình khi xem giáo án.
- [x] **Trải nghiệm gõ phím Glassmorphism**: Cập nhật thanh nhập liệu sang nền trong suốt, mờ ảo (kính mờ), giải quyết triệt để lỗi con trỏ văn bản (`I-beam`) bị đè lên thanh cuộn bằng `cursor: auto`.
- [x] **Sidebar Đáp ứng tinh vi (Smart UX)**:
  - Máy tính: Sidebar thu gọn thành thanh Mini 68px, giữ lại khung icon thay vì biến mất.
  - Điện thoại: Cuộn mượt mà vùng Lịch sử riêng biệt (thanh cuộn tùy chỉnh siêu mỏng trong suốt), tự động ẩn/đồng bộ nút Hamburger điều hướng.
- [x] **Giao diện Nút AI (Pill Buttons)**: Tiêu chuẩn hóa 3 nút chức năng phản hồi của AI (*Nội dung giáo án, Slide bài giảng, Bài tập thực hành*) đúng định dạng siêu bo tròn. Cập nhật mã màu HEX chuẩn theo yêu cầu: Đỏ (#EA2A32F2) cho mặc định (chữ trắng) và Xanh dương (#0B1E7BF5) khi kích hoạt (chữ trắng).
- [x] **Căn chỉnh Nhận diện Thương hiệu**: Đồng bộ kích thước font, giãn cách chữ (letter-spacing, line-height) cho cụm Logo "TELI viettel" trên Navbar.
- [x] **Hoàn thiện Bố cục Chat (Alignment)**: Thiết lập cột nội dung trung tâm 800px chuẩn, đảm bảo Header, tin nhắn và thanh nhập liệu thẳng hàng tuyệt đối.
- [x] **Thiết kế Bong bóng Chat Cá nhân**: Chuyển tin nhắn User sang dạng bong bóng bo góc có "đuôi" (tail) căn phải, tạo cảm giác đối thoại tự nhiên như các ứng dụng chat hiện đại.
- [x] **Tinh chỉnh Nút Thu gọn (Toggle)**: Di chuyển mũi tên thu gọn lên góc trên bên phải khung tin nhắn. Trạng thái thu gọn (Collapsed) được thu nhỏ tối đa thành một vòng tròn linh hoạt, không chiếm diện tích.
- [x] **Làm nét Mascot**: Tăng kích thước Avatar AI lên 36px và áp dụng thuộc tính `crisp-edges` để linh vật sắc nét, không bị nhòe trên mọi độ phân giải.
- [x] **Sửa lỗi Responsive Editor**: Khắc phục hiện tượng bảng soạn thảo Word bị đè dưới Menu trên Mobile bằng cách chuyển sang dạng `position: fixed` với z-index cao tuyệt đối (3000).
- [x] **Tối ưu Trang chủ Mobile**: Điều chỉnh ô nhập liệu không bị nhảy dòng placeholder và thiết lập các thẻ gợi ý (Suggestions) tự động xuống dòng/xếp chồng hàng dọc để không bị tràn màn hình.



---

## Gợi ý hướng phát triển tiếp theo (Next Steps)

Để chuyển đổi từ bản Prototype Frontend sang một ứng dụng Production hoàn chỉnh, tôi gợi ý các bước sau:

### 1. Kiến trúc Backend & Dữ liệu
- [ ] **Xây dựng RESTful API**: Chuyển từ Mock Data sang API thực tế (Node.js/Express hoặc NestJS).
- [ ] **Cơ sở dữ liệu**: Thiết lập PostgreSQL hoặc MongoDB để lưu trữ thông tin kho học liệu và lịch sử trò chuyện của thầy/cô.
- [ ] **Authentication**: Triển khai đăng nhập (JWT/OAuth) để quản lý tài khoản cá nhân cho từng giáo viên.

### 2. Tích hợp AI thực tế
- [ ] **Kết nối LLM**: Thay thế `ChatService` bằng kết nối đến Google Gemini API hoặc OpenAI API thông qua Backend.
- [ ] **Prompt Engineering**: Tối ưu hóa các mẫu câu lệnh (Prompt) để AI soạn giáo án bám sát chuẩn chương trình Tin học của Bộ Giáo dục.

### 3. Nâng cấp tính năng biên tập
- [ ] **Rich Text Editor**: Tích hợp thư viện biên tập văn bản (như TipTap hoặc Quill) vào `EditorPanel` để thầy/cô có thể chỉnh sửa trực tiếp trên trình duyệt.
- [ ] **Export nâng cao**: Triển khai tính năng xuất file `.docx` và `.pdf` phía Server-side để đảm bảo định dạng văn bản chuẩn xác nhất.

### 4. Quản lý trạng thái & Hiệu năng
- [ ] **State Management**: Sử dụng **Zustand** hoặc **Redux Toolkit** để quản lý các trạng thái phức tạp khi ứng dụng mở rộng.
- [ ] **Data Fetching**: Sử dụng **TanStack Query (React Query)** để quản lý việc gọi API, cache dữ liệu và xử lý loading/error chuyên nghiệp.

### 5. Kiểm thử & Triển khai
- [ ] **Unit Testing**: Viết test cho các Service logic bằng Vitest.
- [ ] **CI/CD**: Thiết lập GitHub Actions để tự động kiểm tra và triển khai ứng dụng lên Vercel/Netlify hoặc Server riêng.
