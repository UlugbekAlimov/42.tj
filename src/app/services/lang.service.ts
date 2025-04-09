import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translateService: TranslateService) {
    const savedLang = localStorage.getItem('lang') || this.getBrowserLang();
    this.translateService.setDefaultLang('ru');
    this.translateService.use(savedLang);
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  private getBrowserLang(): string {
    const browserLang = navigator.language || 'ru';
    const langCode = browserLang.split('-')[0];
    return ['ru', 'tj'].includes(langCode) ? langCode : 'ru';
  }
}
