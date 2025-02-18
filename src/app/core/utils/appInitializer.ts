import { filter, firstValueFrom } from 'rxjs';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AuthStore } from '../store/auth/auth.store';

export const appInitializer = async () => {
  const authStore = inject(AuthStore);

  await firstValueFrom(
    toObservable(authStore.loading).pipe(filter((loading) => !loading))
  );
};
