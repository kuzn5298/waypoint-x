import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  MapComponent as MaplibreComponent,
  ControlComponent,
  NavigationControlDirective,
} from '@maplibre/ngx-maplibre-gl';
import { MapService } from '@/app/core/services/map.service';
import { GeolocationService } from '@/app/core/services/geolocation.service';
import { PoiTransportComponent } from '../../../map/layers/poi-transport/poi-transport.component';
import { PoiComponent } from '../../../map/layers/poi/poi.component';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, startWith, switchMap, timer } from 'rxjs';

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
export class CreateRouteComponent implements OnInit {
  mapService = inject(MapService);
  geolocationService = inject(GeolocationService);

  style = computed(() => this.mapService.mapStyle());
  styleLoaded = toSignal(
    toObservable(this.style).pipe(
      switchMap(() =>
        timer(50).pipe(
          map(() => true),
          startWith(false)
        )
      )
    )
  );

  mapCenter = signal<[number, number]>([0, 0]);
  mapConfigLoaded = signal(false);

  ngOnInit() {
    this.loadMapConfig();
  }

  async loadMapConfig() {
    const location = await this.geolocationService.getMyLocation();
    const center: [number, number] = [location.longitude, location.latitude];
    this.mapCenter.set(center);
    this.mapConfigLoaded.set(true);
  }
}
