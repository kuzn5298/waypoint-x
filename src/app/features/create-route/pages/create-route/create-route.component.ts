import { MapService } from '@/app/core/services/map.service';
import { Component, inject } from '@angular/core';
import {
  MapComponent as MaplibreComponent,
  ControlComponent,
  NavigationControlDirective,
} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-create-route',
  imports: [MaplibreComponent, ControlComponent, NavigationControlDirective],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
})
export class CreateRouteComponent {
  mapService = inject(MapService);
}
