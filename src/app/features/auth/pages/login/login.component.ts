import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ViewTransitionDirective } from '@/app/shared/directives/view-transition.directive';
import { LinkButtonDirective } from '@/app/shared/directives/link-button.directive';
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
    ReactiveFormsModule,
    LinkButtonDirective,
    TranslatePipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private translate = inject(TranslateService);
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

  async resetPassword() {
    const email = prompt(
      this.translate.instant('AUTH.RESET_PASSWORD_ENTER_EMAIL')
    );
    if (email) {
      await this.authStore.resetPassword(email);
      alert(this.translate.instant('AUTH.RESET_PASSWORD_CHECK_EMAIL'));
    }
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.authStore.loginWithEmailAndPassword(email ?? '', password ?? '');
  }
}
