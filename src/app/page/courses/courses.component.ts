import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
export class CoursesComponent {
  activeTab: TabKey = 'language';
  isDropdownOpen = false;
  selectedLanguage = 'english';

  languages: string[] = [];
  languageCourses: Record<string, LanguageCourse> = {};
  tabs: Record<TabKey, any> = { language: {}, frontend: {}, backend: {} };

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
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
        console.log('Loaded translations:', this.tabs.language);
      });
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
    this.tabs.language = this.languageCourses[lang];
    console.log('Selected language:', lang, 'Image:', this.tabs.language.image);
  }
}
