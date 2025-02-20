import { provideAppInitializer, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, firstValueFrom } from 'rxjs';
import { AuthStore } from '../store/auth/auth.store';

const appInitializer = async () => {
  const authStore = inject(AuthStore);

  await firstValueFrom(
    toObservable(authStore.loading).pipe(filter((loading) => !loading))
  );
};

export const provideAppInit = () => provideAppInitializer(appInitializer);
