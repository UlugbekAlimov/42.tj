import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { CoursesComponent } from './page/courses/courses.component';
import { CourseInfoComponent } from './page/course-info/course-info.component';
import { AboutCourseComponent } from './page/about-course/about-course.component';
import { MentorsComponent } from './page/mentors/mentors.component';

export const routes: Routes = [
    { path:'', component:MainPageComponent },
    { path:'courses', component: CoursesComponent },
    { path:'courses-info', component: CourseInfoComponent },
    { path:'about-course', component: AboutCourseComponent },
    { path:'mentors', component: MentorsComponent },
];
