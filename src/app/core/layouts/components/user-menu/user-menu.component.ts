import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { AuthStore } from '@/app/core/store/auth/auth.store';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';

@Component({
  selector: 'app-user-menu',
  imports: [
    ButtonModule,
    AvatarModule,
    Menu,
    RippleModule,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  authStore = inject(AuthStore);
  user = this.authStore.user;
  userAvatar = computed(() => this.user()?.photoURL ?? undefined);

  guestItems = signal<MenuItem[]>([
    {
      label: 'AUTH.SIGN_IN',
      icon: 'pi pi-sign-in',
      routerLink: AppRoutes.SIGN_IN,
    },
    {
      label: 'AUTH.SIGN_UP',
      icon: 'pi pi-user-plus',
      routerLink: AppRoutes.SIGN_UP,
    },
  ]);

  userItems = signal<MenuItem[]>([
    {
      label: 'COMMON.PROFILE',
      icon: 'pi pi-user',
      routerLink: AppRoutes.PROFILE,
    },
    {
      label: 'COMMON.SETTINGS',
      icon: 'pi pi-cog',
      routerLink: AppRoutes.SETTINGS,
    },
    {
      separator: true,
    },
    {
      label: 'AUTH.SIGN_OUT',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    },
  ]);

  items = computed(() => (this.user() ? this.userItems() : this.guestItems()));

  logout() {
    this.authStore.logout();
  }
}
