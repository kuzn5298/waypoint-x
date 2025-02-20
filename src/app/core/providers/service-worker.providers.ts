import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

export const provideSW = () =>
  provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000',
  });
