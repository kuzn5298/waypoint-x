import { computed, Directive, inject, input } from '@angular/core';
import {
  TransitionType,
  ViewTransitionService,
} from '@/app/core/services/view-transition.service';

@Directive({
  selector: '[appViewTransition]',
  standalone: true,
  host: { '[style.view-transition-name]': 'viewTransitionName()' },
})
export class ViewTransitionDirective {
  viewTransitionService = inject(ViewTransitionService);

  name = input.required<string>({ alias: 'appViewTransition' });

  transitionId = input<string>();
  transitionActive = input<boolean>(true);
  transitionType = input<TransitionType>('route');

  viewTransitionName = computed(() => {
    const transitionType = this.viewTransitionService.transitionType();

    if (transitionType !== this.transitionType() || !this.transitionActive()) {
      return 'none';
    }

    const uniqueName = [this.name(), this.transitionId()]
      .filter(Boolean)
      .join('-');
    return uniqueName;
  });
}
