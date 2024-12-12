import { Component } from '@angular/core';
import { CourseNavbarComponent } from '../../layout/course-navbar/course-navbar.component';

@Component({
  selector: 'app-about-course',
  standalone: true,
  imports: [CourseNavbarComponent],
  templateUrl: './about-course.component.html',
  styleUrl: './about-course.component.scss'
})
export class AboutCourseComponent {

}
