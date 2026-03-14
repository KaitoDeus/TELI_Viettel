import type { ICourse } from '../models/types';
import { COURSES_DATA } from '../data/courses';

/**
 * CourseService handles all logic related to educational courses and materials.
 * Singleton pattern is used to ensure single instance data management.
 */
class CourseService {
  private static instance: CourseService;
  private courses: ICourse[] = COURSES_DATA;

  private constructor() {}

  public static getInstance(): CourseService {
    if (!CourseService.instance) {
      CourseService.instance = new CourseService();
    }
    return CourseService.instance;
  }

  public getAllCourses(): ICourse[] {
    return this.courses;
  }

  public getFeaturedCourses(): ICourse[] {
    return this.courses.filter(course => course.featured);
  }

  public getCoursesByGrade(grade: string): ICourse[] {
    return this.courses.filter(course => course.grade === grade);
  }
}

export const courseService = CourseService.getInstance();
