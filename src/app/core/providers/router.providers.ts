import { inject } from '@angular/core';
import {
  provideRouter,
  Routes,
  withViewTransitions,
  ViewTransitionInfo,
} from '@angular/router';
import { ViewTransitionService } from '@/app/core/services/view-transition.service';

const onViewTransitionCreated = ({ transition }: ViewTransitionInfo): void => {
  const viewTransitionService = inject(ViewTransitionService);
  viewTransitionService.setTransitionType('route');

  transition.finished.finally(() => {
    viewTransitionService.resetTransitionType();
  });
};

export const provideAppRouter = (routes: Routes) =>
  provideRouter(routes, withViewTransitions({ onViewTransitionCreated }));
