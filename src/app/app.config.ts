import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideAppInit,
  provideAppRouter,
  provideFirebase,
  provideFirebaseAuth,
  providePrimeNGConfig,
  providePrimeNGMessageService,
  provideSW,
  provideTranslation,
} from './core/providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAppRouter(routes),
    provideAppInit(),
    provideSW(),
    providePrimeNGMessageService(),
    providePrimeNGConfig(),
    provideFirebase(),
    provideFirebaseAuth(),
    provideTranslation(),
  ],
};
