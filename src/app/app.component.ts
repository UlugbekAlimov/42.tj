import { MainPageComponent } from './features/main-page/main-page.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { OffersComponent } from './features/offers/offers.component';
import { StatisticsComponent } from './features/statistics/statistics.component';
import { TeamComponent } from './features/team/team.component';
import { StudentsComponent } from './features/students/students.component';
import { CarouselComponent } from './features/carousel/carousel.component';
import { InterstsComponent } from './features/intersts/intersts.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MainPageComponent,
    OffersComponent,
    StatisticsComponent,
    TeamComponent,
    StudentsComponent,
    CarouselComponent,
    InterstsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = '42.tj';
}
