import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'routes', pathMatch: 'full' },
      {
        path: 'routes',
        loadChildren: () =>
          import('./features/routes/routes.routes').then((m) => m.routesRoutes),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.routes').then(
            (m) => m.settingsRoutes
          ),
        canActivate: [guestGuard],
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
    canActivate: [guestGuard],
  },

  // { path: 'create', component: undefined },
  // { path: 'route', component: undefined },
  // { path: 'profile', component: undefined },
  // { path: 'error', component: undefined },
  // { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];
