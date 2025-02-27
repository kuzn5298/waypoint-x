import { MapService } from '@/app/core/services/map.service';
import { Component, inject, signal } from '@angular/core';
import {
  MapComponent,
  ControlComponent,
  NavigationControlDirective,
} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-create-route',
  imports: [MapComponent, ControlComponent, NavigationControlDirective],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
})
export class CreateRouteComponent {
  mapService = inject(MapService);
  loaded = signal(true);
  customIcons = signal<string[]>([]);
}
