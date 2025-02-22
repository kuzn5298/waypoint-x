import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlainToolbarComponent } from '../components/plain-toolbar/plain-toolbar.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, PlainToolbarComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
