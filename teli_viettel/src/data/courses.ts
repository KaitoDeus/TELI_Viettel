import type { ICourse } from '../models/types';

// Import course images
import lop6 from '../assets/course/lop6.webp';
import lop4 from '../assets/course/lop4.webp';
import lop6_2 from '../assets/course/lop6 (2).webp';
import lop3 from '../assets/course/lop3.webp';
import lop3_2 from '../assets/course/lop3 (2).webp';
import lop3_3 from '../assets/course/lop3 (3).webp';
import lop5 from '../assets/course/lop5.webp';
import lop5_2 from '../assets/course/lop5 (2).webp';

export const COURSES_DATA: ICourse[] = [
  {
    id: '1',
    title: 'Giáo án - Bài học: Tôn trọng quyền tác giả của phần mềm',
    grade: 'Lớp 6',
    image: lop6,
  },
  {
    id: '2',
    title: 'Slide - Bài 4: Trình bày thông tin ở dạng bảng',
    grade: 'Lớp 6',
    image: lop4,
    featured: true,
  },
  {
    id: '3',
    title: 'Tổng hợp - Chủ đề C: Đạo đức, pháp luật và văn hóa trong môi trường',
    grade: 'Lớp 6',
    image: lop6_2,
  },
  {
    id: '4',
    title: 'Giáo án - Sự cần thiết của sắp xếp dữ liệu',
    grade: 'Lớp 3',
    image: lop3,
  },
  {
    id: '5',
    title: 'Slide - Bài 3: Em tập làm người chỉ huy giỏi',
    grade: 'Lớp 3',
    image: lop3_2,
  },
  {
    id: '6',
    title: 'Tổng hợp - Chủ đề E1: Làm quen với bài trình chiếu đơn giản',
    grade: 'Lớp 3',
    image: lop3_3,
  },
  {
    id: '7',
    title: 'Slide - Sử dụng website YouTube Kids',
    grade: 'Lớp 5',
    image: lop5,
  },
  {
    id: '8',
    title: 'Slide - Bài 1: Thực hành tạo cây thư mục',
    grade: 'Lớp 5',
    image: lop5_2,
  },
];
