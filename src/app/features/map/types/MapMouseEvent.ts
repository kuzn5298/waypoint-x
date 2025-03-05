import { EventData } from '@maplibre/ngx-maplibre-gl';
import {
  MapGeoJSONFeature,
  MapMouseEvent as MaplibreMouseEvent,
} from 'maplibre-gl';

export type MapMouseEvent = MaplibreMouseEvent & {
  features?: MapGeoJSONFeature[];
} & EventData;
