import { inject } from '@angular/core';
import { ViewTransitionInfo } from '@angular/router';
import { ViewTransitionService } from '@/app/core/services/view-transition.service';

export const onViewTransitionCreated = ({
  transition,
}: ViewTransitionInfo): void => {
  const viewTransitionService = inject(ViewTransitionService);
  viewTransitionService.setTransitionType('route');

  transition.finished.finally(() => {
    viewTransitionService.resetTransitionType();
  });
};
