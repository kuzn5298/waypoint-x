import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
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
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LinkButtonDirective } from '@/app/shared/directives/link-button.directive';

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
    ReactiveFormsModule,
    LinkButtonDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  authStore = inject(AuthStore);

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  disabled = computed(() => {
    return this.authStore.loading() || this.authStore.submitting();
  });

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }

  loginWithGoogle() {
    this.authStore.loginWithGoogle();
  }

  loginWithGithub() {
    this.authStore.loginWithGithub();
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.authStore.loginWithEmailAndPassword(email ?? '', password ?? '');
  }
}
