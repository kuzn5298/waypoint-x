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
    isLoggedIn: computed(() => !!user),
  })),
  withMethods((store) => {
    const authService = inject(AuthService);
    return {
      _updateUser: rxMethod<FirebaseUser | null>(
        pipe(
          tap(() => patchState(store, { loading: true })),
          switchMap((user) => {
            if (user) {
              return authService.getUserData(user);
            }
            return of(null);
          }),
          tap((user) => {
            patchState(store, { user, loading: false });
          })
        )
      ),
      async loginWithGoogle() {
        await authService.loginWithGoogle();
      },
      async loginWithGithub() {
        await authService.loginWithGithub();
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
        authService.user$.subscribe((user) => {
          store._updateUser(user);
        });
      },
    };
  })
);
