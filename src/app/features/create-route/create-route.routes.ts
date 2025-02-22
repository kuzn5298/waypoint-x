import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { authGuard } from '@/app/core/guards/auth.guard';
import { CreateRouteComponent } from './pages/create-route/create-route.component';

export const createRoutes: Routes = [
  {
    path: AppRoutes.CREATE_ROUTE,
    component: CreateRouteComponent,
    canActivate: [authGuard],
  },
];
