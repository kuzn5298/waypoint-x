import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  initializeAuth,
  browserSessionPersistence,
  browserPopupRedirectResolver,
  provideAuth,
} from '@angular/fire/auth';
import { environment } from '../environment';

const fbApp = () => initializeApp(environment.firebase);

const authApp = () =>
  initializeAuth(fbApp(), {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });

export const provideFirebase = () => {
  return provideFirebaseApp(fbApp);
};

export const provideFirebaseAuth = () => {
  return provideAuth(authApp);
};
