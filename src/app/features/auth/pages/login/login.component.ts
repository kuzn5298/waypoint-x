import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ViewTransitionDirective } from '@/app/shared/directives/view-transition.directive';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
