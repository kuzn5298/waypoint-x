import { lastValueFrom } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGeolocation } from '@/app/shared/models/geolocation.interface';

const API_URL = '/api/geocode';

const DEFAULT_LOCATION: UserGeolocation = {
  latitude: 52.22977,
  longitude: 21.01178,
};

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  http = inject(HttpClient);

  async getMyLocationByIP(): Promise<UserGeolocation | null> {
    try {
      const response = await lastValueFrom(
        this.http.get<{ latitude: string; longitude: string }>(API_URL)
      );
      if (!response.latitude || !response.longitude) {
        return null;
      }
      return {
        latitude: Number(response.latitude),
        longitude: Number(response.longitude),
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getMyLocationByBrowser(): Promise<UserGeolocation | null> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        console.warn('Geolocation is not supported by your browser');
        resolve(null);
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          console.warn('Unable to retrieve your location');
          resolve(null);
        }
      );
    });
  }

  async getMyLocation(): Promise<UserGeolocation> {
    const locationByBrowser = await this.getMyLocationByBrowser();
    const locationByIP = locationByBrowser ?? (await this.getMyLocationByIP());
    return locationByIP ?? DEFAULT_LOCATION;
  }
}
