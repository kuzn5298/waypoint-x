import { Component, computed, inject, signal } from '@angular/core';
import {
  MapComponent as MaplibreComponent,
  ControlComponent,
  NavigationControlDirective,
} from '@maplibre/ngx-maplibre-gl';
import { Map } from 'maplibre-gl';
import { MapService } from '@/app/core/services/map.service';
import { GeolocationService } from '@/app/core/services/geolocation.service';
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
  geolocationService = inject(GeolocationService);

  style = computed(() => this.mapService.mapStyle());

  map = signal<Map>({} as Map);

  async loadMapStartLocation() {
    const location = await this.geolocationService.getMyLocation();
    const center: [number, number] = [location.longitude, location.latitude];
    this.map().flyTo({ center, zoom: 10, speed: 1.5 });
  }

  mapLoad(map: Map) {
    this.map.set(map);
    this.loadMapStartLocation();
  }
}
