import type { IAIResponse, IChatHistoryItem } from '../models/types';

export const AI_CHAT_RESPONSE: IAIResponse = {
  intro: 'Dưới đây là nội dung bài giảng gợi ý cho bài học: Chuột máy tính – Tin học lớp 4.',
  sections: [
    {
      title: '1. Chuột máy tính là gì?',
      content: [
        'Chuột máy tính là thiết bị giúp chúng ta **điều khiển con trỏ trên màn hình** để mở chương trình, chọn biểu tượng hoặc thực hiện các thao tác trên máy tính.',
        'Giáo viên có thể giải thích cho học sinh:',
        '"Chuột máy tính giống như tay của chúng ta khi làm việc với máy tính."',
      ],
    },
    {
      title: '2. Các bộ phận chính của chuột máy tính',
      content: [
        'Giới thiệu cho học sinh 3 bộ phận cơ bản:',
      ],
      bullets: [
        '**• Nút chuột trái:** dùng để chọn hoặc mở chương trình',
        '**• Nút chuột phải:** dùng để mở các lựa chọn khác',
        '**• Con lăn chuột (scroll wheel):** dùng để cuộn lên xuống trang',
      ],
      footer: 'Gợi ý: giáo viên có thể **giơ chuột thật để học sinh quan sát trực tiếp.**',
    },
    {
      title: '3. Các thao tác chuột cơ bản',
      content: [
        '**Nhấp chuột (Click):** Bấm nhanh nút chuột trái một lần.',
        '**Nhấp đúp (Double Click):** Bấm nhanh nút chuột trái hai lần liên tiếp để mở chương trình.',
        '**Kéo thả (Drag and Drop):** Giữ nút chuột trái, di chuyển chuột, sau đó thả ra.',
      ],
    },
    {
      title: '4. Hoạt động thực hành gợi ý',
      content: [
        'Hoạt động: "Tìm biểu tượng trên màn hình"',
        'Bước 1: Giáo viên yêu cầu học sinh mở máy tính.',
        'Bước 2: Học sinh dùng chuột để nhấp vào một biểu tượng bất kỳ trên màn hình.',
        'Bước 3: Thực hành nhấp đúp để mở phần mềm Paint.',
        'Bước 4: Thử kéo thả cửa sổ phần mềm sang vị trí khác.',
      ],
    },
    {
      title: '5. Câu hỏi kiểm tra nhanh',
      bullets: [
        '1. Chuột máy tính dùng để làm gì?',
        '2. Nút chuột trái dùng để làm gì?',
        '3. Khi nào chúng ta dùng thao tác nhấp đúp?',
      ],
    },
  ],
  actions: ['Nội dung giáo án', 'Slide bài giảng', 'Bài tập thực hành cho học sinh'],
};

export const CHAT_HISTORY_DATA: IChatHistoryItem[] = [
  { id: 1, title: 'Soạn bài: Chuột máy tính lớp 4', active: true },
  { id: 2, title: 'Hoạt động thực hành Paint lớp 3' },
  { id: 3, title: 'Bài giảng PowerPoint: Chuột máy tính' },
  { id: 4, title: 'Hoạt động thực hành: Nhận biết...' },
  { id: 5, title: 'Cách giải thích Internet cho trẻ em' },
  { id: 6, title: 'Soạn slide: Thư mục và tệp tin' },
  { id: 7, title: 'Bài giảng: Cách gõ bàn phím' },
  { id: 8, title: 'Ví dụ dễ hiểu về mạng Internet' },
];
