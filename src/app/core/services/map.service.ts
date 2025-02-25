import { ThemeService } from '@/app/core/services/theme.service';
import { effect, inject, Injectable, signal } from '@angular/core';

export enum MapStyles {
  AUTO = 'auto',
  DARK = 'dark',
  LIGHT = 'light',
  STREET = 'street',
}

const LIGHT_STYLE = '/map/styles/wpx-light.json';
const DARK_STYLE = '/map/styles/wpx-dark.json';
const STREET_STYLE = '/map/styles/wpx-street.json';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private themeService = inject(ThemeService);
  private styleType = signal<MapStyles>(MapStyles.AUTO);

  mapStyle = signal<string>('');

  constructor() {
    this.styleType.set(MapStyles.STREET);

    effect(() => {
      this.setStyle.call(this, this.styleType(), this.themeService.isDark());
    });
  }

  private setDarkStyle() {
    this.mapStyle.set(DARK_STYLE);
  }

  private setLightStyle() {
    this.mapStyle.set(LIGHT_STYLE);
  }

  private setStreetStyle() {
    this.mapStyle.set(STREET_STYLE);
  }

  private setStyle(style: MapStyles, isDark: boolean = false) {
    if (this.mapStyle() !== MapStyles.AUTO && this.mapStyle() === style) {
      return;
    }

    switch (style) {
      case MapStyles.AUTO:
        return isDark ? this.setDarkStyle() : this.setLightStyle();
      case MapStyles.DARK:
        return this.setDarkStyle();
      case MapStyles.LIGHT:
        return this.setLightStyle();
      case MapStyles.STREET:
        return this.setStreetStyle();
    }
  }

  //public methods

  setMapStyle(style: MapStyles) {
    this.styleType.set(style);
  }
}
