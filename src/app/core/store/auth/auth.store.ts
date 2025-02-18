import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { computed, inject } from '@angular/core';
import { User as FirebaseUser } from '@angular/fire/auth';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { of, pipe, switchMap, tap } from 'rxjs';
import { AuthService } from '@/app/core/services/auth.service';
import { User } from '@/app/shared/models/user.interface';
import { Router } from '@angular/router';

interface AuthState {
  user: User | null;
  loading: boolean;
  submitting: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: true,
  submitting: false,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('auth'),
  withComputed(({ user }) => ({
    isAuthenticated: computed(() => !!user()),
  })),
  withMethods((store) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return {
      _updateUser: rxMethod<FirebaseUser | null>(
        pipe(
          switchMap((user) => {
            if (user) {
              return authService.getUserData(user);
            }
            return of(null);
          }),
          tap((user) => {
            if (!store.loading()) {
              const redirectUrl = window.history.state?.['redirectUrl'] ?? '/';
              router.navigate([redirectUrl]);
            }
            patchState(store, { user, loading: false });
          })
        )
      ),
      async registerWithEmailAndPassword(email: string, password: string) {
        patchState(store, { submitting: true });
        await authService.registerWithEmailAndPassword(email, password);
        patchState(store, { submitting: false });
      },
      async loginWithGoogle() {
        await authService.loginWithGoogle();
      },
      async loginWithGithub() {
        await authService.loginWithGithub();
      },
      async loginWithEmailAndPassword(email: string, password: string) {
        patchState(store, { submitting: true });
        await authService.loginWithEmailAndPassword(email, password);
        patchState(store, { submitting: false });
      },
      async resetPassword(email: string) {
        await authService.resetPassword(email);
      },
      async logout() {
        patchState(store, { submitting: true });
        await authService.logout();
        patchState(store, { user: null, submitting: false });
      },
    };
  }),
  withHooks((store) => {
    const authService = inject(AuthService);
    return {
      onInit() {
        store._updateUser(authService.authUser$);
      },
    };
  })
);
