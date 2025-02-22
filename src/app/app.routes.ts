import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { guestGuard } from './core/guards/guest.guard';
import { AppRoutes } from './shared/enums/AppRoute.enum';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: AppRoutes.MAIN, redirectTo: AppRoutes.ROUTES, pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./features/routes/routes.routes').then((m) => m.routesRoutes),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/settings/settings.routes').then(
            (m) => m.settingsRoutes
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/profile/profile.routes').then(
            (m) => m.profileRoutes
          ),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    data: { withoutContainer: true },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/create-route/create-route.routes').then(
            (m) => m.createRoutes
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
    canActivate: [guestGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/error/error.routes').then((m) => m.errorRoutes),
  },
  { path: '**', redirectTo: AppRoutes.NOT_FOUND, pathMatch: 'full' },
];
