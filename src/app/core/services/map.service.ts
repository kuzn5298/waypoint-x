import { effect, inject, Injectable, signal } from '@angular/core';
import { ThemeService } from '@/app/core/services/theme.service';

export enum MapStyles {
  AUTO = 'auto',
  STREET = 'street',
  STREET_NIGHT = 'street-dark',
}

const STREET_STYLE = '/map/styles/wpx-street.json';
const STREET_NIGHT_STYLE = '/map/styles/wpx-street.json';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private themeService = inject(ThemeService);
  private styleType = signal<MapStyles>(MapStyles.AUTO);

  mapStyle = signal<string>('');

  constructor() {
    this.styleType.set(MapStyles.AUTO);

    effect(() => {
      this.setStyle.call(this, this.styleType(), this.themeService.isDark());
    });
  }

  private setStreetStyle() {
    this.mapStyle.set(STREET_STYLE);
  }

  private setStreetNightStyle() {
    this.mapStyle.set(STREET_NIGHT_STYLE);
  }

  private setStyle(style: MapStyles, isDark: boolean = false) {
    if (this.mapStyle() !== MapStyles.AUTO && this.mapStyle() === style) {
      return;
    }

    switch (style) {
      case MapStyles.AUTO:
        return isDark ? this.setStreetNightStyle() : this.setStreetStyle();
      case MapStyles.STREET:
        return this.setStreetStyle();
      case MapStyles.STREET_NIGHT:
        return this.setStreetNightStyle();
    }
  }

  //public methods

  setMapStyle(style: MapStyles) {
    this.styleType.set(style);
  }
}
