import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { AuthStore } from '../store/auth/auth.store';

export const guestGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.isAuthenticated()) {
    router.navigateByUrl(AppRoutes.MAIN);
  }

  return !authStore.isAuthenticated();
};
