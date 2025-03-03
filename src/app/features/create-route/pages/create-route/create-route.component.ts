import { MapService } from '@/app/core/services/map.service';
import { Component, computed, inject } from '@angular/core';
import {
  MapComponent as MaplibreComponent,
  ControlComponent,
  NavigationControlDirective,
} from '@maplibre/ngx-maplibre-gl';
import { PoiTransportComponent } from '../../../map/layers/poi-transport/poi-transport.component';
import { PoiComponent } from '../../../map/layers/poi/poi.component';

@Component({
  selector: 'app-create-route',
  imports: [
    MaplibreComponent,
    ControlComponent,
    NavigationControlDirective,
    PoiTransportComponent,
    PoiComponent,
  ],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
})
export class CreateRouteComponent {
  mapService = inject(MapService);

  style = computed(() => this.mapService.mapStyle());
}
