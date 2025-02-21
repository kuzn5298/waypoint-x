import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { authGuard } from '@/app/core/guards/auth.guard';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

export const profileRoutes: Routes = [
  {
    path: AppRoutes.PROFILE,
    component: MyProfileComponent,
    canActivate: [authGuard],
  },
];
