import { Component, computed, inject, input } from '@angular/core';
import { MainToolbarComponent } from '../components/main-toolbar/main-toolbar.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavMobileComponent } from '../components/nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MainToolbarComponent, NavMobileComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  private route = inject(ActivatedRoute);

  withoutContainer = computed(
    () => this.route.snapshot.data['withoutContainer'] ?? false
  );
}
