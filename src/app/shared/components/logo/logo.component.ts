import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  host: {
    class: 'flex text-primary h-12',
  },
})
export class LogoComponent {}
