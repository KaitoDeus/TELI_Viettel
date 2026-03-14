import { courseService } from '../../services/CourseService';
import CourseCard from '../../components/CourseCard/CourseCard';
import './LibraryPage.css';

const libraryItems = courseService.getAllCourses();

export default function LibraryPage() {
  return (
    <main className="library-page">
      <header className="library-header">
        <h1 className="library-title">Kho học liệu và giáo án đã tạo</h1>
        <div className="user-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </header>

      <div className="library-content">
        <div className="library-grid">
          {libraryItems.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
