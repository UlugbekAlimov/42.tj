import { MainPageComponent } from './features/main-page/main-page.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CourseNavbarComponent } from './layout/course-navbar/course-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    CourseNavbarComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor( private router: Router ){}

  private navbarRoutes: string[] = ['/', '/courses', '/courses-info','/mentors' ]
  private courseNavbar: string[] = ['/about-course']
  private footerRoutes: string[] = ['/', '/courses', '/courses-info', ]

  get showNavbar():boolean{
    return this.navbarRoutes.includes(this.router.url)
  }

  get showCourseNavbar(): boolean {
    return this.courseNavbar.includes(this.router.url);
  }

  get showFooter(): boolean {
    return this.footerRoutes.includes(this.router.url);
  }

}
