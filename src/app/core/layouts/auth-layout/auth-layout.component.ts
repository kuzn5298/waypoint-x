import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from '@/app/shared/components/logo/logo.component';
import { ThemeToggleComponent } from '@/app/shared/components/theme-toggle/theme-toggle.component';
import { LanguageSelectorComponent } from '@/app/shared/components/language-selector/language-selector.component';
import { ToolbarComponent } from '@/app/shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-auth-layout',
  imports: [
    RouterOutlet,
    LogoComponent,
    ThemeToggleComponent,
    ButtonModule,
    LanguageSelectorComponent,
    ToolbarComponent,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
