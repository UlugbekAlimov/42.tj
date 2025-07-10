import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private isBrowser: boolean;

  constructor(private translateService: TranslateService) {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    const savedLang = this.isBrowser
      ? localStorage.getItem('lang') || this.getBrowserLang()
      : 'ru';

    this.translateService.setDefaultLang('ru');
    this.translateService.use(savedLang);
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
  }

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  private getBrowserLang(): string {
    if (!this.isBrowser) return 'ru';

    const browserLang = navigator.language || 'ru';
    const langCode = browserLang.split('-')[0];
    return ['ru', 'tj'].includes(langCode) ? langCode : 'ru';
  }
}
