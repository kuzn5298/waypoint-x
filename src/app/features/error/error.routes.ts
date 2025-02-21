import { Routes } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const errorRoutes: Routes = [
  {
    path: AppRoutes.NOT_FOUND,
    component: NotFoundComponent,
  },
];
