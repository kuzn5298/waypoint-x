import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LanguageSelectorComponent } from '@/app/shared/components/language-selector/language-selector.component';
import { LogoComponent } from '@/app/shared/components/logo/logo.component';
import { ThemeToggleComponent } from '@/app/shared/components/theme-toggle/theme-toggle.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-plain-toolbar',
  imports: [
    LogoComponent,
    ThemeToggleComponent,
    ButtonModule,
    LanguageSelectorComponent,
    ToolbarComponent,
  ],
  templateUrl: './plain-toolbar.component.html',
  styleUrl: './plain-toolbar.component.css',
})
export class PlainToolbarComponent {}
