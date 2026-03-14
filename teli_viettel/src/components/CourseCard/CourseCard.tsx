import type { ICourse } from '../../models/types';
import './CourseCard.css';

interface CourseCardProps {
  course: ICourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="library-card">
      <div className="card-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <span className="card-badge">{course.grade}</span>
      </div>
      <button className="card-view-btn">Xem ngay</button>
    </div>
  );
}
