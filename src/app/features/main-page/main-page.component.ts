import { Component } from '@angular/core';
import { OffersComponent } from '../offers/offers.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TeamComponent } from '../team/team.component';
import { StudentsComponent } from '../students/students.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { InterstsComponent } from '../intersts/intersts.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    OffersComponent,
    StatisticsComponent,
    TeamComponent,
    StudentsComponent,
    CarouselComponent,
    InterstsComponent,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  text1: string = "Фронтенд";
  text2: string = "Бекенд";
  text3: string = "Языковые";
  displayedText: string = "";
  index: number = 0;
  textIndex: number = 0;
  texts: string[] = [this.text1, this.text2, this.text3];
  
  ngOnInit(): void {
    this.type();
  }
  type() {
    const currentText = this.texts[this.textIndex];
    if (this.index < currentText.length) {
      this.displayedText += currentText.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 100);
    } else {
      setTimeout(() => {
        this.erase();
      }, 500);
    }
  }

  erase() {
    const currentText = this.texts[this.textIndex];
    if (this.index > 0) {
      this.displayedText = currentText.substring(0, this.index - 1);
      this.index--;
      setTimeout(() => this.erase(), 40);
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.index = 0;
      setTimeout(() => this.type(), 10);
    }
  }
}
