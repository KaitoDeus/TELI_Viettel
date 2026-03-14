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
