import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';
import { AuthStore } from '@/app/core/store/auth/auth.store';

type NavItem = {
  label: string;
  icon: string;
  routerLink?: string;
  disabled?: boolean;
};

@Component({
  selector: 'app-nav-mobile',
  imports: [
    ButtonModule,
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    AvatarModule,
  ],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.css',
})
export class NavMobileComponent {
  authStore = inject(AuthStore);
  user = this.authStore.user;
  userAvatar = computed(() => this.user()?.photoURL ?? undefined);

  profileLink = AppRoutes.PROFILE;

  items = signal<NavItem[]>([
    {
      label: 'COMMON.HOME',
      icon: 'pi pi-home',
      routerLink: AppRoutes.ROUTES,
    },
    {
      label: 'COMMON.CREATE',
      icon: 'pi pi-plus-circle',
      routerLink: AppRoutes.CREATE_ROUTE,
    },
    {
      label: 'COMMON.NAVIGATE',
      icon: 'pi pi-compass',
      disabled: true,
    },
    {
      label: 'COMMON.SAVED',
      icon: 'pi pi-bookmark',
      disabled: true,
    },
  ]);
}
