import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { authGuard } from '@/app/core/guards/auth.guard';
import { SettingsComponent } from './pages/settings/settings.component';

export const settingsRoutes: Routes = [
  {
    path: AppRoutes.SETTINGS,
    component: SettingsComponent,
    canActivate: [authGuard],
  },
];
