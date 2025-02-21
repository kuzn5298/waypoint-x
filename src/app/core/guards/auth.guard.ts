import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth/auth.store';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';

export const authGuard: CanActivateFn = (_, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (!authStore.isAuthenticated()) {
    router.navigateByUrl(AppRoutes.SIGN_IN, {
      state: { redirectUrl: state.url },
    });
  }

  return authStore.isAuthenticated();
};
