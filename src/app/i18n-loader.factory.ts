import { HttpBackend, HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

export function HttpLoaderFactory(): TranslateLoader {
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const handler = inject(HttpBackend);
    const http = new HttpClient(handler);
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  } else {
    return {
      getTranslation: (lang: string) =>
        new Observable(observer => {
          observer.next({});
          observer.complete();
        }),
    } as TranslateLoader;
  }
}
