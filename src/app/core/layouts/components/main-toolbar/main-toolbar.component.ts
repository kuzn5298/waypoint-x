import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ThemeToggleComponent } from '@/app/shared/components/theme-toggle/theme-toggle.component';
import { LanguageSelectorComponent } from '@/app/shared/components/language-selector/language-selector.component';
import { LogoComponent } from '@/app/shared/components/logo/logo.component';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-main-toolbar',
  imports: [
    ButtonModule,
    LogoComponent,
    ToolbarComponent,
    ThemeToggleComponent,
    LanguageSelectorComponent,
    UserMenuComponent,
    ButtonModule,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.css',
})
export class MainToolbarComponent {
  createLink = AppRoutes.CREATE_ROUTE;
}
