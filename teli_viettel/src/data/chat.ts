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
  { 
    id: 4, 
    title: 'Hoạt động thực hành: Nhận biết bàn phím lớp 3',
    inputMessage: 'Tôi cần một kịch bản hoạt động thực hành sinh động để giúp học sinh lớp 3 nhận biết các khu vực trên bàn phím máy tính.',
    aiResponse: {
      intro: 'Chào thầy cô, bàn phím là một "mê cung" các nút bấm đối với học sinh lớp 3. Để các em không bị choáng ngợp, chúng ta nên chia nhỏ các khu vực và sử dụng trò chơi vận động nhé:',
      sections: [
        {
          title: '1. Trò chơi: "Vùng đất của các chữ cái"',
          content: [
            '**Khu vực trung tâm**: Đây là nơi tập trung các chữ cái. Hãy ví đây như là trung tâm thành phố.',
            '**Cách dạy**: GV hô "Chữ A", HS phải tìm nhanh và đặt ngón tay vào. Ai làm nhanh nhất sẽ được cộng điểm cho tổ.',
            '**Lưu ý**: Nhấn mạnh hai phím có gai (F và J) để các em dùng làm mốc định vị khi đặt tay.'
          ],
        },
        {
          title: '2. Khám phá "Hàng phím số" và "Phím đặc biệt"',
          content: [
            '**Hàng phím số**: Nằm ở phía trên cùng, giống như các tầng cao của tòa nhà.',
            '**Phím lớn nhất**: Phím Space (phím cách) – Hãy ví như một chiếc giường dài cho đôi bàn tay nghỉ ngơi.',
            '**Phím Enter**: Phím "Đồng ý" hoặc phím xuống dòng – Giống như chiếc chìa khóa để thực hiện lệnh.'
          ],
        },
        {
          title: '3. Hoạt động nhóm: "Gõ tên người bạn"',
          content: [
            'Yêu cầu học sinh mở Notepad. Mỗi em thử gõ tên của mình và tên bạn bên cạnh.',
            'Sử dụng phím **Backspace** khi gõ sai và phím **Space** để cách chữ.',
            'Đây là bước đầu tiên để các em hình thành phản xạ với vị trí phím.'
          ],
        }
      ],
      actions: ['Xem giáo án chi tiết', 'Tải sơ đồ bàn phím tô màu', 'Bài tập trắc nghiệm']
    },
    editorContent: {
      title: 'Giáo án: Làm quen với người bạn Bàn phím - Tin học 3',
      sections: [
        {
          title: 'I. MỤC TIÊU BÀI HỌC',
          list: [
            'Nhận biết được khu vực hàng phím số, hàng phím chữ và các phím chức năng cơ bản.',
            'Biết tác dụng của phím Space, Enter, Backspace.',
            'Hình thành thói quen giữ gìn vệ sinh bàn phím.'
          ]
        },
        {
          title: 'II. TIẾN TRÌNH DẠY HỌC',
          table: [
            {
              leftBold: 'Hoạt động 1: Ai nhanh tay hơn? (10p)',
              leftList: ['- GV treo sơ đồ bàn phím khổ lớn.', '- Tổ chức thi đua tìm phím giữa các tổ.'],
              rightList: ['- HS quan sát và chỉ nhanh vị trí phím được gọi tên.']
            },
            {
              leftBold: 'Hoạt động 2: Tập gõ phím đầu đời (20p)',
              leftList: ['- GV hướng dẫn mở phần mềm gõ văn bản đơn giản.', '- Hướng dẫn cách dùng phím xóa khi gõ nhầm.'],
              rightList: ['- HS thực hành gõ tên không dấu.', '- Giúp bạn bên cạnh nếu bạn chưa tìm thấy phím.']
            }
          ]
        }
      ]
    }
  },
  { 
    id: 5, 
    title: 'Cách giải thích Internet cho học sinh lớp 4',
    inputMessage: 'Làm sao để giải thích khái niệm Internet cho học sinh lớp 4 một cách trực quan, dễ hiểu nhất mà không dùng quá nhiều từ chuyên môn?',
    aiResponse: {
      intro: 'Giải thích về Internet cho trẻ em cần những ví dụ gần gũi với cuộc sống. Thay vì nói về giao thức hay máy chủ, thầy cô hãy sử dụng hình ảnh "Mạng nhện khổng lồ" hoặc "Thư viện không biên giới" nhé:',
      sections: [
        {
          title: '1. Ví dụ 1: Chiếc mạng nhện khổng lồ',
          content: [
            'Hãy tưởng tượng mỗi máy tính là một chú nhện.',
            'Các chú nhện này giăng tơ để kết nối với nhau trên toàn thế giới. Sợi tơ đó chính là đường truyền Internet.',
            'Nhờ có những sợi tơ này, thông tin có thể chạy từ máy tính này sang máy tính khác cực kỳ nhanh chóng.'
          ],
        },
        {
          title: '2. Ví dụ 2: Thư viện vạn năng',
          content: [
            'Internet giống như một thư viện khổng lồ chứa hàng triệu cuốn sách, video và trò chơi.',
            'Điểm đặc biệt là thư viện này "mở cửa" 24/24 và chúng ta có thể ghé thăm dù đang ở bất cứ đâu, miễn là có kết nối mạng.'
          ],
        },
        {
          title: '3. Lưu ý an toàn cho học sinh',
          content: [
            '**Quy tắc bàn tay**: Luôn hỏi ý kiến người lớn khi truy cập trang web lạ.',
            '**Bảo mật**: Không bao giờ chia sẻ tên thật, địa chỉ nhà hay sđt trên mạng nhện này.',
            '**Lịch sự**: Luôn dùng lời lẽ tử tế khi nhắn tin cho bạn bè.'
          ],
        }
      ],
      actions: ['Nội dung bài giảng', 'Bộ tranh minh họa Internet', 'Video ngắn về Internet']
    },
    editorContent: {
      title: 'Kịch bản tiết dạy: Internet là gì? - Lớp 4',
      sections: [
        {
          title: 'I. KHỞI ĐỘNG (5p)',
          list: [
            'GV đặt câu hỏi: "Làm sao để xem phim hoạt hình nếu tivi không chiếu?"',
            'HS tự do phát biểu suy nghĩ cá nhân.'
          ]
        },
        {
          title: 'II. NỘI DUNG CHÍNH (20p)',
          table: [
            {
              leftBold: 'Thế giới kết nối:',
              leftList: ['- GV minh họa việc gửi một bức tranh cho bạn ở xa bằng Internet.', '- So sánh thời gian gửi thư tay và gửi qua mạng.'],
              rightList: ['- HS ngạc nhiên về tốc độ của Internet.', '- Hiểu Internet giúp kết nối mọi người.']
            },
            {
              leftBold: 'Lợi ích của mạng:',
              leftList: ['- Tổ chức thảo luận: Internet giúp ích gì cho em?', '- GV tổng kết: Tìm thông tin, xem clip học tập, liên lạc.'],
              rightList: ['- HS liệt kê: Xem Youtube, tra Google, học Tiếng Anh...']
            }
          ]
        }
      ]
    }
  },
  { 
    id: 6, 
    title: 'Soạn slide: Thư mục và tệp tin lớp 5',
    inputMessage: 'Hãy thiết kế cấu trúc 5 slide bài giảng về "Thư mục và Tệp tin" cho học sinh lớp 5, cần có ví dụ thực tế về việc sắp xếp ngăn nắp.',
    aiResponse: {
      intro: 'Chào mừng thầy cô đến với bài học về sự ngăn nắp trong máy tính! Với lớp 5, chúng ta cần nhấn mạnh vào tư duy quản lý thông tin thông qua việc tổ chức Thư mục và Tệp tin khoa học:',
      sections: [
        {
          title: 'Slide 1: Nhận diện Tệp tin (File)',
          content: [
            '**Hình ảnh**: Các icon khác nhau của file Word, ảnh (.jpg), nhạc (.mp3).',
            '**Nội dung**: Tệp tin là "vật chứa" thông tin (như một tờ giấy có chữ, một tấm ảnh).Mỗi tệp tin có tên riêng để chúng ta nhận biết.'
          ],
        },
        {
          title: 'Slide 2: Khám phá Thư mục (Folder)',
          content: [
            '**Hình ảnh**: Icon thư mục màu vàng quen thuộc trên Windows.',
            '**Nội dung**: Thư mục giống như một chiếc cặp hoặc ngăn kéo để chứa các tệp tin hoặc các thư mục con khác.',
            '**Lưu ý**: Một thư mục có thể chứa rất nhiều tệp tin cùng chủ đề.'
          ],
        },
        {
          title: 'Slide 3: Ví dụ "Ngăn bàn ngăn nắp"',
          content: [
            '**So sánh**: So sánh một ngăn bàn bừa bãi và một ngăn bàn chia thành các hộp đựng vở, hộp bút.',
            '**Bài học**: Nếu không tạo thư mục, máy tính sẽ trở nên bừa bãi và chúng ta sẽ mất rất nhiều thời gian để tìm kiếm tài liệu.'
          ],
        },
        {
          title: 'Slide 4: Quy tắc đặt tên thông minh',
          bullets: [
            '• Đặt tên ngắn gọn, dễ nhớ.',
            '• Không dùng các ký tự đặc biệt (/, :, *...).',
            '• Nên đặt tên theo cấu trúc: [Tên bài]_[Ngày soạn].'
          ],
        }
      ],
      actions: ['Xây dựng kịch bản slide', 'Tải bộ Icon Folder màu sắc', 'Bài tập thực hành xếp file']
    },
    editorContent: {
      title: 'Đề cương bài học: Tổ chức dữ liệu máy tính - Lớp 5',
      sections: [
        {
          title: 'I. KIẾN THỨC TRỌNG TÂM',
          list: [
            'Phân biệt được biểu tượng của Tệp và Thư mục.',
            'Biết cách tạo mới, đổi tên và sắp xếp thư mục con bên trong thư mục cha.'
          ]
        },
        {
          title: 'II. HOẠT ĐỘNG THỰC HÀNH',
          table: [
            {
              leftBold: 'Hoạt động: "Dọn dẹp máy tính"',
              leftList: [
                '- GV tạo sẵn một thư mục "Rác" chứa nhiều file hỗn độn.',
                '- Yêu cầu HS tạo 2 thư mục mới: "HINH ANH" và "BAI TAP".'
              ],
              rightList: [
                '- HS phân loại và thực hiện thao tác kéo thả tệp vào đúng thư mục.',
                '- Kiểm tra lại thành quả của mình.'
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    id: 7, 
    title: 'Bài giảng: Cách gõ bàn phím 10 ngón lớp 5',
    inputMessage: 'Soạn giáo án dạy kỹ năng gõ bàn phím 10 ngón cho lớp 5. Cần tập trung vào hàng phím cơ sở và các phần mềm luyện tập miễn phí.',
    aiResponse: {
      intro: 'Gõ 10 ngón là một kỹ năng cần sự kiên trì và đúng phương pháp ngay từ đầu. Dưới đây là lộ trình để thầy cô giúp các em học sinh lớp 5 làm chủ bàn phím mà không cần nhìn phím:',
      sections: [
        {
          title: '1. Quy tắc đặt tay "Căn cứ địa"',
          content: [
            '**Hàng phím cơ sở**: ASDF (tay trái) và JKL; (tay phải).',
            '**Phím mốc**: Luôn nhắc học sinh tìm hai cái gai trên phím F và J bằng ngón trỏ.',
            '**Tư thế**: Lưng thẳng, mắt nhìn màn hình, cổ tay không được tì vào mặt bàn.'
          ],
        },
        {
          title: '2. Phân công "Nhiệm vụ" cho từng ngón tay',
          content: [
            'Mỗi ngón tay chỉ được phép gõ một nhóm phím nhất định theo sơ đồ màu sắc.',
            'Hai ngón cái chỉ dùng để nhấn phím Space.',
            'Khuyến khích học sinh gõ nhẹ nhàng như "lướt trên phím đàn".'
          ],
        },
        {
          title: '3. Giới thiệu phần mềm hỗ trợ',
          bullets: [
            '**RapidTyping**: Có nhiều cấp độ từ dễ đến khó, hình ảnh sinh động dưới lòng đại dương.',
            '**Tux Typing**: Trò chơi chú chim cánh cụt bắt cá bằng cách gõ chữ, rất thu hút học sinh tiểu học.',
            '**TypingClub**: Nền tảng web hiện đại với các bài học theo lộ trình chuẩn quốc tế.'
          ],
        }
      ],
      actions: ['Xem giáo án gõ 10 ngón', 'Tải sơ đồ phân công ngón tay', 'Link tải phần mềm RapidTyping']
    },
    editorContent: {
      title: 'Kế hoạch dạy học: Kỹ năng gõ 10 ngón - Lớp 5',
      sections: [
        {
          title: 'I. YÊU CẦU CỦA TIẾT HỌC',
          list: [
            'HS thuộc được vị trí các phím trên hàng cơ sở.',
            'Biết cách đặt 8 ngón tay đúng vị trí xuất phát.',
            'Không nhìn bàn phím khi thực hiện các bài tập gõ chữ cái đơn.'
          ]
        },
        {
          title: 'II. TIẾN TRÌNH LÊN LỚP',
          table: [
            {
              leftBold: 'Khởi động ngón tay (3p):',
              leftList: ['- GV cho HS làm một số động tác khởi động cổ tay và ngón tay.'],
              rightList: ['- HS hào hứng thực hiện theo hướng dẫn.']
            },
            {
              leftBold: 'Thực hành trên máy (30p):',
              leftList: [
                '- Mở phần mềm RapidTyping.',
                '- GV đi từng máy sửa tư thế ngồi và cách đặt tay cho từng em.'
              ],
              rightList: [
                '- HS tập trung gõ theo bài học trên màn hình.',
                '- Cố gắng đạt độ chính xác trên 90%.'
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    id: 8, 
    title: 'Ví dụ dễ hiểu về mạng Internet lớp 5',
    inputMessage: 'Gợi ý một số ví dụ thực tế và kịch bản sắm vai để học sinh lớp 5 hiểu được cách dữ liệu di chuyển trên Internet (từ máy này sang máy kia).',
    aiResponse: {
      intro: 'Để trả lời câu hỏi "Làm sao ảnh của tớ gửi đến máy cậu được?", thầy cô hãy biến lớp học thành một "Mạng lưới bưu điện số" thu nhỏ thông qua kịch bản sắm vai dưới đây:',
      sections: [
        {
          title: '1. Kịch bản sắm vai: "Bưu cục tốc hành"',
          content: [
            '**Nhân vật**: Một HS là "Người gửi", một HS là "Người nhận", và 3 HS là "Bộ định tuyến" (Router).',
            '**Thực hiện**: Người gửi xé một bức thư lớn thành 3 mảnh nhỏ (gọi là Gói tin - Packet). Các bộ định tuyến đứng ở các góc lớp chuyền tay nhau các mảnh thư này đến tay Người nhận.',
            '**Bài học**: Dữ liệu trên Internet không đi nguyên khối mà được chia nhỏ để di chuyển nhanh hơn qua nhiều con đường khác nhau.'
          ],
        },
        {
          title: '2. Ví dụ về "Địa chỉ nhà" (Địa chỉ IP)',
          content: [
            'Làm sao để thư không gửi nhầm nhà hàng xóm?',
            'Trên Internet, mỗi máy tính đều có một địa chỉ duy nhất giống như mã số nhà của chúng ta.',
            'Địa chỉ này giúp các gói tin biết chính xác nơi cần đến.'
          ],
        },
        {
          title: '3. Hoạt động: "Giải mã thông điệp"',
          content: [
            'Chia lớp thành 2 nhóm. Một nhóm mã hóa một câu nói bằng các ký hiệu, nhóm kia dùng "Internet" (các bạn chuyền tin) để gửi đi và giải mã.',
            'Qua đó học sinh hiểu tầm quan trọng của việc truyền tin chính xác và an toàn.'
          ],
        }
      ],
      actions: ['Nội dung thảo luận', 'Bộ thẻ bài sắm vai', 'Slide minh họa chuyển gói tin']
    },
    editorContent: {
      title: 'Giáo án hoạt động: Hành trình của Gói tin - Tin học 5',
      sections: [
        {
          title: 'I. MỤC TIÊU CẦN ĐẠT',
          list: [
            'Hiểu sơ lược về cách thông tin được chia nhỏ khi truyền tải trên mạng.',
            'Biết Internet kết nối hàng tỷ thiết bị thông qua các giao lộ (bộ định tuyến).',
            'Phát triển kỹ năng làm việc nhóm.'
          ]
        },
        {
          title: 'II. TIẾN TRÌNH HOẠT ĐỘNG',
          table: [
            {
              leftBold: 'Trò chơi sắm vai:',
              leftList: [
                '- GV chuẩn bị các mảnh giấy màu đánh số tự tự.',
                '- GV quan sát và hướng dẫn luồng đi của dữ liệu.'
              ],
              rightList: [
                '- HS hào hứng đóng vai các thiết bị mạng.',
                '- Ghép lại thông điệp hoàn chỉnh ở đích đến.'
              ]
            }
          ]
        }
      ]
    }
  },
];
