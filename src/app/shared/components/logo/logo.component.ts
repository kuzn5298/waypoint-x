import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@/app/shared/enums/AppRoute.enum';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  host: {
    class: 'flex text-primary h-8',
  },
})
export class LogoComponent {
  link = AppRoutes.MAIN;
}
