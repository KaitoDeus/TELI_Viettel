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
  { 
    id: 1, 
    title: 'Soạn bài: Chuột máy tính lớp 4', 
    active: true,
    inputMessage: `Tôi đang dạy Tin học lớp 4. Dựa vào giáo trình Tin học của Bộ giáo dục & đào tạo, hãy giúp tôi soạn nội dung bài giảng về chuột máy tính cho học sinh.
Bài giảng cần:
• Giải thích đơn giản, dễ hiểu cho học sinh tiểu học
• Giới thiệu các bộ phận chính của chuột máy tính
• Các thao tác cơ bản như: nhấp chuột, nhấp đúp, kéo thả
• Gợi ý một hoạt động thực hành ngắn cho học sinh trong lớp.`,
    aiResponse: AI_CHAT_RESPONSE,
    editorContent: {
      title: 'Giáo án Tin học Lớp 4: Chuột máy tính',
      sections: [
        {
          title: 'I. MỤC TIÊU',
          intro: 'Sau bài học, học sinh có thể:',
          list: [
            'Hiểu được **Chuột máy tính** là thiết bị điều khiển quan trọng.',
            'Biết cách **cầm chuột đúng cách** và các bộ phận của chuột.',
            'Thực hiện thành thạo các thao tác: **nhấp chuột, nhấp đúp, kéo thả**.',
            'Hào hứng tham gia các hoạt động thực hành trên máy.'
          ]
        },
        {
          title: 'II. CHUẨN BỊ HỌC LIỆU',
          list: [
            '**Giáo viên**: Slide bài giảng, chuột máy tính mẫu, phòng máy có phần mềm Paint.',
            '**Học sinh**: SGK Tin học 4, vở ghi.'
          ]
        },
        {
          title: 'III. CÁC HOẠT ĐỘNG DẠY VÀ HỌC',
          table: [
            {
              leftBold: '1. Ổn định tổ chức & Kiểm tra bài cũ:',
              leftList: [
                '- Máy tính để bàn có mấy bộ phận chính?',
                '- Bàn phím máy tính dùng để làm gì?',
                '- GV nhận xét, tuyên dương.'
              ],
              rightList: [
                '- HS hát / Khởi động.',
                '- HS trả lời: 4 bộ phận chính.',
                '- HS nhận xét bạn.'
              ]
            },
            {
              leftBold: '2. Bài mới: Hoạt động 1 - Giới thiệu bài',
              leftList: [
                '- GV trình chiếu hình ảnh bàn tay và con chuột. Đặt câu hỏi kích thích tư duy.',
                '- GV dẫn dắt vào bài: Chuột máy tính.'
              ],
              rightList: [
                '- HS quan sát và suy nghĩ.',
                '- HS nhắc lại tựa bài.'
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    id: 2, 
    title: 'Hoạt động thực hành Paint lớp 4',
    inputMessage: 'Hãy gợi ý cho tôi các hoạt động thực hành vẽ nâng cao với phần mềm Paint dành cho học sinh lớp 4 (các em đã biết vẽ hình cơ bản).',
    aiResponse: {
      intro: 'Chào thầy/cô, dựa trên chương trình Tin học lớp 4, tôi xin đề xuất một chuỗi hoạt động thực hành Paint nâng cao nhằm phát triển tư duy thẩm mỹ và kỹ năng điều khiển chuột tinh xảo cho học sinh:',
      sections: [
        {
          title: '1. Hoạt động 1: "Kỹ sư nhí thiết kế đô thị xanh"',
          content: [
            '**Mục tiêu**: Sử dụng thành thạo nhóm công cụ Shapes và công cụ Sao chép (Copy/Paste).',
            '**Yêu cầu**: Học sinh phải vẽ một khu phố có ít nhất 3 tòa nhà khác nhau, có cây xanh và đèn đường. Các em được khuyến khích sử dụng phím Shift để vẽ đường thẳng và hình vuông hoàn hảo.',
            '**Mẹo nhỏ**: Hướng dẫn các em vẽ một cái cây mẫu, sau đó dùng công cụ Select và nhấn giữ Ctrl để nhân bản ra cả một khu vườn nhanh chóng.'
          ],
        },
        {
          title: '2. Hoạt động 2: "Phù thủy màu sắc - Kỹ thuật Gradient"',
          content: [
            '**Mục tiêu**: Hiểu về cách phối hợp màu sắc và sử dụng công cụ Eraser (tẩy) để tạo hiệu ứng.',
            '**Yêu cầu**: Vẽ cảnh hoàng hôn trên biển. Sử dụng công cụ Lines để chia màn hình thành các dải màu (Cam, Đỏ, Tím). Đổ màu vào từng dải, sau đó dùng công cụ Resize để làm nhòe các đường biên (một kỹ thuật "hack" trong Paint để tạo màu Gradient cực đẹp).',
            '**Lưu ý**: Đây là kỹ thuật khó, GV nên làm mẫu chậm ít nhất 2 lần.'
          ],
        },
        {
          title: '3. Hoạt động 3: "Thiết kế thiệp chúc mừng 20/11"',
          content: [
            '**Mục tiêu**: Kết hợp công cụ vẽ và công cụ Text (viết chữ).',
            '**Yêu cầu**: Vẽ lọ hoa tặng thầy cô, sau đó sử dụng công cụ Text để viết lời chúc. Học sinh cần chọn đúng font chữ tiếng Việt có dấu và thay đổi kích thước, màu chữ sao cho nổi bật.',
            '**Sản phẩm**: Các bài vẽ đẹp nhất sẽ được in ra để trang trí bảng tin lớp học.'
          ],
        }
      ],
      actions: ['Nội dung giáo án', 'Tải bộ hình mẫu', 'Xem tiêu chí chấm điểm']
    },
    editorContent: {
      title: 'Kế hoạch dạy thực hành: Sáng tạo cùng Paint - Lớp 4',
      sections: [
        {
          title: 'I. YÊU CẦU CẦN ĐẠT',
          list: [
            'Sử dụng thành thạo các phím tắt bổ trợ (Shift, Ctrl) trong quá trình vẽ.',
            'Biết cách điều chỉnh kích thước khung tranh và xử lý các lỗi vẽ sai bằng Undo (Ctrl+Z).',
            'Thể hiện được ý tưởng cá nhân thông qua việc lựa chọn màu sắc và bố cục tranh.'
          ]
        },
        {
          title: 'II. CHUẨN BỊ',
          list: [
            'Dàn máy tính có cài sẵn MS Paint.',
            'Bộ ảnh mẫu về các tòa nhà và phong cảnh biển để học sinh tham khảo.',
            'Phiếu đánh giá sản phẩm thực hành.'
          ]
        },
        {
          title: 'III. TIẾN TRÌNH HOẠT ĐỘNG',
          table: [
            {
              leftBold: 'Hoạt động 1: Khởi động (5-7p)',
              leftList: [
                '- Trò chơi: "Nhìn hình đoán công cụ".',
                '- GV đưa ra các bức tranh và đố HS đã dùng công cụ gì để vẽ hình đó.'
              ],
              rightList: [
                '- HS quan sát, giơ tay trả lời nhanh.',
                '- Nhận quà sticker từ GV.'
              ]
            },
            {
              leftBold: 'Hoạt động 2: Hướng dẫn kỹ thuật mới (10p)',
              leftList: [
                '- GV hướng dẫn kỹ thuật Copy/Paste để nhân bản đối tượng.',
                '- Thao tác mẫu kỹ thuật viết chữ có dấu trong Paint.'
              ],
              rightList: [
                '- HS theo dõi màn hình chiếu.',
                '- Ghi chú các bước thực hiện vào vở.'
              ]
            },
            {
              leftBold: 'Hoạt động 3: Thực hành sáng tạo (20p)',
              leftList: [
                '- GV đưa ra chủ đề: "Ngôi trường mơ ước".',
                '- GV đi từng máy để hỗ trợ các em gặp khó khăn.'
              ],
              rightList: [
                '- HS tự triển khai ý tưởng.',
                '- Tự do thảo luận cùng bạn bên cạnh.'
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    id: 3, 
    title: 'Bài giảng PowerPoint: Chuột máy tính lớp 3',
    inputMessage: 'Soạn giúp tôi đề cương chi tiết cho 5 slide bài giảng PowerPoint về chủ đề Chuột máy tính cho học sinh lớp 3.',
    aiResponse: {
      intro: 'Dưới đây là đề cương chi tiết và kịch bản cho 5 slide bài giảng PowerPoint về "Chuột máy tính" được thiết kế đặc biệt cho lứa tuổi lớp 3, đảm bảo sự sinh động và lôi cuốn:',
      sections: [
        {
          title: 'Slide 1: Chào mừng và Giới thiệu',
          content: [
            '**Hình ảnh**: Một chú chuột máy tính hoạt hình đang vẫy tay chào.',
            '**Tiêu đề**: "BÀI 3: NGƯỜI BẠN ĐIỀU KHIỂN - CHUỘT MÁY TÍNH"',
            '**Kịch bản**: GV bắt đầu bằng một câu đố: "Con gì không biết ăn ngô, nhưng lại giúp bé điều khiển máy tài tình?".'
          ],
        },
        {
          title: 'Slide 2: Khám phá các bộ phận của chuột',
          content: [
            '**Hình ảnh**: Ảnh chụp thật một chiếc chuột máy tính với các mũi tên màu sắc chỉ vào 3 phần.',
            '**Nội dung**: Chú thích rõ ràng: "Nút trái", "Nút phải" và "Con lăn".',
            '**Hoạt động**: Yêu cầu HS nhìn vào chuột thật trên bàn và đặt tay theo hướng dẫn của GV trên slide.'
          ],
        },
        {
          title: 'Slide 3: Các thao tác "Thần thánh"',
          content: [
            '**Hình ảnh**: Các biểu tượng minh họa: 1 ngón tay nhấn (Click), 2 ngón tay nhấn (Double Click), và hành động kéo (Drag).',
            '**Nội dung**: Giải thích ngắn gọn khi nào dùng thao tác nào (Ví dụ: Click để chọn, Double Click để mở).',
            '**Kịch bản**: GV hướng dẫn HS làm động tác "nháy ngón tay trong không trung" trước khi thực hành trên chuột.'
          ],
        },
        {
          title: 'Slide 4: Bí kíp cầm chuột đúng cách',
          content: [
            '**Hình ảnh**: So sánh hai bức ảnh: Một ảnh "Cầm chuột đúng" (tích xanh) và một ảnh "Cầm chuột sai" (dấu x đỏ).',
            '**Nội dung**: Lòng bàn tay ôm trọn chuột, ngón trỏ để ở nút trái, ngón giữa để ở nút phải.',
            '**Lưu ý**: Không cầm chuột quá chặt hoặc quá lỏng.'
          ],
        },
        {
          title: 'Slide 5: Trò chơi "Ai là chuyên gia chuột?"',
          content: [
            '**Hình ảnh**: Các câu hỏi trắc nghiệm hiện ra với hiệu ứng âm thanh cổ vũ.',
            '**Câu hỏi**: "Để mở một trò chơi, em nên dùng thao tác nào?".',
            '**Kết thúc**: Hình ảnh chúc mừng và lời dặn dò chuẩn bị cho tiết thực hành.'
          ],
        }
      ],
      actions: ['Nội dung giáo án', 'Tải bộ Icon mẫu', 'Trò chơi Kahoot đi kèm']
    },
    editorContent: {
      title: 'Đề cương kịch bản Slide: Chuột máy tính - Tin học 3',
      sections: [
        {
          title: 'I. THÔNG TIN CHUNG',
          list: [
            'Đối tượng: Học sinh khối lớp 3.',
            'Thời lượng: 35 phút (1 tiết học).',
            'Mục tiêu: Giúp HS nhận biết hình dáng và biết cách sử dụng chuột cơ bản.'
          ]
        },
        {
          title: 'II. NỘI DUNG CHI TIẾT TỪNG SLIDE',
          table: [
            {
              leftBold: 'Slide 1: Khởi động',
              leftList: ['- Chèn file âm thanh vui nhộn.', '- GV đặt câu đố về con chuột.'],
              rightList: ['Ý tưởng: Tạo không khí hào hứng ngay từ đầu.']
            },
            {
              leftBold: 'Slide 2: Nhận diện',
              leftList: ['- Hình ảnh chuột laser, chuột quang.', '- Chỉ ra nút trái/phải.'],
              rightList: ['Ý tưởng: Sử dụng hình ảnh thật để HS dễ liên tưởng.']
            },
            {
              leftBold: 'Slide 3: Thực hành tại chỗ',
              leftList: ['- Video ngắn 15s hướng dẫn cầm chuột.', '- GV quan sát từng HS.'],
              rightList: ['Ý tưởng: Học đi đôi với hành ngay lập tức.']
            }
          ]
        }
      ]
    }
  },
  { id: 4, title: 'Hoạt động thực hành: Nhận biết bàn phím lớp 3' },
  { id: 5, title: 'Cách giải thích Internet cho học sinh lớp 4' },
  { id: 6, title: 'Soạn slide: Thư mục và tệp tin lớp 5' },
  { id: 7, title: 'Bài giảng: Cách gõ bàn phím 10 ngón lớp 5' },
  { id: 8, title: 'Ví dụ dễ hiểu về mạng Internet lớp 5' },
];
