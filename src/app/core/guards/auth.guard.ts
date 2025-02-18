import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth/auth.store';

export const authGuard: CanActivateFn = (_, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (!authStore.isAuthenticated()) {
    router.navigate(['auth', 'login'], { state: { redirectUrl: state.url } });
  }

  return authStore.isAuthenticated();
};
