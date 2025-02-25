import { MapService } from '@/app/core/services/map.service';
import { Component, inject, signal } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-route',
  imports: [MapComponent, ButtonModule],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
})
export class CreateRouteComponent {
  mapService = inject(MapService);
  loaded = signal(true);
  customIcons = signal<string[]>([]);
}
