import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'routes', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  // { path: 'routes', component: undefined },
  // { path: 'create', component: undefined },
  // { path: 'route', component: undefined },
  // { path: 'profile', component: undefined },
  // { path: 'settings', component: undefined },
  // { path: 'error', component: undefined },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];
