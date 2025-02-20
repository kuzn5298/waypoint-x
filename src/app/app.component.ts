import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { AuthStore } from './core/store/auth/auth.store';
import { ViewTransitionDirective } from './shared/directives/view-transition.directive';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet, Toast, ViewTransitionDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _ = inject(AuthStore);
}
