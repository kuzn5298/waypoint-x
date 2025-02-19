import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ViewTransitionDirective } from '@/app/shared/directives/view-transition.directive';
import { AuthStore } from '@/app/core/store/auth/auth.store';
import { LinkButtonDirective } from '@/app/shared/directives/link-button.directive';

@Component({
  selector: 'app-registration',
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
    ReactiveFormsModule,
    LinkButtonDirective,
    TranslatePipe,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
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

  onSubmit() {
    const { email, password } = this.form.value;
    this.authStore.registerWithEmailAndPassword(email ?? '', password ?? '');
  }
}
