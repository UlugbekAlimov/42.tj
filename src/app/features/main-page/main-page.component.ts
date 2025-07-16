import { Component, OnDestroy } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OffersComponent } from '../offers/offers.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TeamComponent } from '../team/team.component';
import { StudentsComponent } from '../students/students.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { InterstsComponent } from '../intersts/intersts.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RegistrationFormComponent } from './registration-form.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
    RegistrationFormComponent,
    RouterLink,
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
  private platformId: Object;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
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
      this.setSeoTags();
    }

    this.setupTranslation();
    this.translate.onLangChange.subscribe(() => {
      this.resetAnimation();
      this.setupTranslation();
    });
  }

  private setSeoTags(): void {
    const title =
      'ICD School — языковые и компьютерные курсы в Джаббор Расуловском районе';
    const description =
      'ICD School — языковые и компьютерные курсы для детей и взрослых. Профессиональные преподаватели, интерактивные уроки, гибкое расписание.';
    const keywords =
      'курсы английского, курсы русского языка, компьютерные курсы, образовательный центр Пролетарск, ICD School';

    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
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

        if (isPlatformBrowser(this.platformId)) {
          this.type();
        }
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
    if (isPlatformBrowser(this.platformId) && this.animationTimeout) {
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
