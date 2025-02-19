import { inject, Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { TranslateService } from '@ngx-translate/core';
import { FIREBASE_ERRORS } from '../utils/firebaseErrors';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private translate = inject(TranslateService);

  getFirebaseErrorMessage(error: unknown): string {
    if (error instanceof FirebaseError) {
      const errorKey = FIREBASE_ERRORS[error.code] || 'ERRORS.UNKNOWN_ERROR';
      return this.translate.instant(errorKey);
    }
    return this.translate.instant('ERRORS.UNKNOWN_ERROR');
  }
}
