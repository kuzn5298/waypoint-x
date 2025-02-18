import { AuthStore } from './core/store/auth/auth.store';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { environment } from './core/environment/environment';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _ = inject(AuthStore); //trigger onInit
  title = environment.publicTitle;
}
