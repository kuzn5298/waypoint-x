import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from '@/app/shared/components/logo/logo.component';
import { ToolbarComponent } from '@/app/shared/components/toolbar/toolbar.component';
import { ThemeToggleComponent } from '@/app/shared/components/theme-toggle/theme-toggle.component';
import { LanguageSelectorComponent } from '@/app/shared/components/language-selector/language-selector.component';
import { UserMenuComponent } from '@/app/shared/components/user-menu/user-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    ButtonModule,
    LogoComponent,
    ToolbarComponent,
    ThemeToggleComponent,
    LanguageSelectorComponent,
    UserMenuComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
