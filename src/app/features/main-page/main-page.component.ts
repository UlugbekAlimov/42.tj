import { Component, OnDestroy } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OffersComponent } from '../offers/offers.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TeamComponent } from '../team/team.component';
import { StudentsComponent } from '../students/students.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { InterstsComponent } from '../intersts/intersts.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TranslateModule,
    OffersComponent,
    StatisticsComponent,
    TeamComponent,
    StudentsComponent,
    CarouselComponent,
    InterstsComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnDestroy {
  displayedText: string = '';
  private index: number = 0;
  private textIndex: number = 0;
  private texts: string[] = [];
  private translateSub!: Subscription;
  private animationTimeout: any;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      }
    });

    this.setupTranslation();
    this.translate.onLangChange.subscribe(() => {
      this.resetAnimation();
      this.setupTranslation();
    });
  }

  private setupTranslation(): void {
    if (this.translateSub) {
      this.translateSub.unsubscribe();
    }

    this.translateSub = this.translate
      .get('mainPage.specializations')
      .subscribe((translated: string[]) => {
        this.texts = translated;
        this.resetAnimation();
        this.type();
      });
  }

  private type(): void {
    if (this.texts.length === 0) return;

    const currentText = this.texts[this.textIndex];
    if (this.index < currentText.length) {
      this.displayedText += currentText.charAt(this.index);
      this.index++;
      this.animationTimeout = setTimeout(() => this.type(), 100);
    } else {
      this.animationTimeout = setTimeout(() => this.erase(), 500);
    }
  }

  private erase(): void {
    const currentText = this.texts[this.textIndex];
    if (this.index > 0) {
      this.displayedText = currentText.substring(0, this.index - 1);
      this.index--;
      this.animationTimeout = setTimeout(() => this.erase(), 40);
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.index = 0;
      this.animationTimeout = setTimeout(() => this.type(), 10);
    }
  }

  private resetAnimation(): void {
    // Очищаем таймауты анимации
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
    this.displayedText = '';
    this.index = 0;
    this.textIndex = 0;
  }

  ngOnDestroy(): void {
    if (this.translateSub) {
      this.translateSub.unsubscribe();
    }
    this.resetAnimation();
  }
}
