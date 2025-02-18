import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthStore } from '../../store/auth/auth.store';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, ButtonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  authStore = inject(AuthStore);

  logout() {
    this.authStore.logout();
  }
}
