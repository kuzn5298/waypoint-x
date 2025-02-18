import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  initializeAuth,
  browserSessionPersistence,
  browserPopupRedirectResolver,
  provideAuth,
} from '@angular/fire/auth';

import { providePrimeNG } from 'primeng/config';
import { themePreset } from './core/utils/theme';
import { onViewTransitionCreated } from './core/utils/withViewTransitions';
import { environment } from './core/environment';

import { routes } from './app.routes';

const fbApp = () => initializeApp(environment.firebase);
const authApp = () =>
  initializeAuth(fbApp(), {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });

export const appConfig: ApplicationConfig = {
  providers: [
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
  ],
};
