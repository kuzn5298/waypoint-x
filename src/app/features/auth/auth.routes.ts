import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const authRoutes: Routes = [
  {
    path: AppRoutes.SIGN_IN,
    component: LoginComponent,
  },
  {
    path: AppRoutes.SIGN_UP,
    component: RegistrationComponent,
  },
];
