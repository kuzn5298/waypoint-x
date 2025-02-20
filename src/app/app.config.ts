import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
  provideAppInitializer,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  initializeAuth,
  browserSessionPersistence,
  browserPopupRedirectResolver,
  provideAuth,
} from '@angular/fire/auth';
import {
  TranslateLoader,
  TranslateModule,
  TranslationObject,
} from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { forkJoin, Observable } from 'rxjs';

import { themePreset } from './core/utils/theme';
import { onViewTransitionCreated } from './core/utils/withViewTransitions';
import { environment } from './core/environment';
import { appInitializer } from './core/utils/appInitializer';

import { routes } from './app.routes';

const fbApp = () => initializeApp(environment.firebase);
const authApp = () =>
  initializeAuth(fbApp(), {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });

export class MultiTranslateHttpLoader implements TranslateLoader {
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

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions({ onViewTransitionCreated })),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: themePreset,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind, primeng',
          },
        },
      },
    }),
    provideFirebaseApp(fbApp),
    provideAuth(authApp),
    provideAppInitializer(appInitializer),
    provideHttpClient(),
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
    ]),
  ],
};
