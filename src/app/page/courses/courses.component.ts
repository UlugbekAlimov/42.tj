import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

type TabKey = 'language' | 'frontend' | 'backend';

interface LanguageCourse {
  title: string;
  items: string[];
  price: string;
  note: string;
  image: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink, TranslateModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  activeTab: TabKey = 'language';
  isDropdownOpen = false;
  selectedLanguage = 'english';

  languages: string[] = [];
  languageCourses: Record<string, LanguageCourse> = {};
  tabs: Record<TabKey, any> = { language: {}, frontend: {}, backend: {} };

  private langChangeSub: any;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setSeoTags();
    }

    this.loadTranslations();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
      if (isPlatformBrowser(this.platformId)) {
        this.setSeoTags();
      }
    });
  }

  loadTranslations() {
    this.translate
      .get([
        'courses.languages',
        'courses.languageCourses',
        'courses.frontendTab',
        'courses.backendTab',
        'courses.price',
        'courses.enroll',
      ])
      .subscribe((res: any) => {
        this.languages = res['courses.languages'];
        this.languageCourses = res['courses.languageCourses'];
        this.tabs = {
          language: this.languageCourses[this.languages[0]],
          frontend: res['courses.frontendTab'],
          backend: res['courses.backendTab'],
        };
        this.selectedLanguage = this.languages[0];
      });
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
    this.tabs.language = this.languageCourses[lang];
    console.log('Selected language:', lang, 'Image:', this.tabs.language.image);
  }

  private setSeoTags(): void {
    const title =
      'Курсы языков ICD School — Английский, Русский, Немецкий, Китайский, IELTS в Пролетарском районе, Чаббор Расуловский район';
    const description =
      'ICD School предлагает языковые курсы в Пролетарск, Ч.Расулов: английский, русский, немецкий, китайский и подготовку к IELTS. Профессиональные преподаватели и эффективные методики обучения.';
    const keywords =
      'курсы английского, курсы русского языка, курсы немецкого, курсы китайского, подготовка IELTS, языковые курсы Пролетарск, ICD School';

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
  }

  ngOnDestroy() {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
