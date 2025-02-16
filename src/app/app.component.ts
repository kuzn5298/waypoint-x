import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { environment } from './core/environment/environment';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = environment.PUBLIC_TITLE;
}
