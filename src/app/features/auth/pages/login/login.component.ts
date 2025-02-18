import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ViewTransitionDirective } from '@/app/shared/directives/view-transition.directive';
import { AuthStore } from '@/app/core/store/auth/auth.store';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    InputTextModule,
    RippleModule,
    CheckboxModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    RouterLink,
    ViewTransitionDirective,
    DividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authStore = inject(AuthStore);

  disabled = computed(() => {
    return this.authStore.loading() || this.authStore.submitting();
  });

  loginWithGoogle() {
    this.authStore.loginWithGoogle();
  }

  loginWithGithub() {
    this.authStore.loginWithGithub();
  }
}
