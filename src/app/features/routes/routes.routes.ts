import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { RoutesComponent } from './pages/routes/routes.component';

export const routesRoutes: Routes = [
  {
    path: AppRoutes.ROUTES,
    component: RoutesComponent,
  },
];
