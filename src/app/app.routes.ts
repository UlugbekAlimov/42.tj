import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { CoursesComponent } from './page/courses/courses.component';
import { CourseInfoComponent } from './page/course-info/course-info.component';
import { AboutCourseComponent } from './page/about-course/about-course.component';
import { MentorsComponent } from './page/mentors/mentors.component';
import { FaqComponent } from './page/faq/faq.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PartnersComponent } from './page/partners/partners.component';
import { StudTableComponent } from './features/stud-table/stud-table.component';

export const routes: Routes = [
    { path:'', component:MainPageComponent },
    { path:'courses', component: CoursesComponent },
    { path:'courses-info', component: CourseInfoComponent },
    { path:'about-course', component: AboutCourseComponent },
    { path:'mentors', component: MentorsComponent },
    { path:'faq', component: FaqComponent },
    { path:'aboutus', component: AboutUsComponent },
    { path:'partners', component: PartnersComponent },
    { path:'table', component: StudTableComponent }
];
