import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslationObject,
} from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { importProvidersFrom } from '@angular/core';

class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<TranslationObject> {
    return forkJoin({
      AUTH: this.http.get(`./i18n/${lang}/auth.json`),
      ERRORS: this.http.get(`./i18n/${lang}/errors.json`),
      COMMON: this.http.get(`./i18n/${lang}/common.json`),
    });
  }
}

const httpLoaderFactory = (http: HttpClient) =>
  new MultiTranslateHttpLoader(http);

export const provideTranslation = () =>
  importProvidersFrom([
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
  ]);
