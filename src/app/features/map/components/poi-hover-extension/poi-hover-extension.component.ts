import { Component, output } from '@angular/core';
import { Map } from 'maplibre-gl';
import { MapMouseEvent } from '../../types/MapMouseEvent';

@Component({
  template: '',
})
export class PoiHoverExtensionComponent {
  click = output<Record<string, any>>();

  hoveredFeatureId: string | number | null = null;

  private addHoverEffect(map: Map, id: string | number) {
    this.hoveredFeatureId = id;
    map.getCanvas().style.cursor = 'pointer';
    map.setFeatureState(
      { source: 'openmaptiles', sourceLayer: 'poi', id },
      { hover: true }
    );
  }

  private removeHoverEffect(map: Map) {
    if (!this.hoveredFeatureId) return;
    map.getCanvas().style.cursor = '';
    map.setFeatureState(
      { source: 'openmaptiles', sourceLayer: 'poi', id: this.hoveredFeatureId },
      { hover: false }
    );
    this.hoveredFeatureId = null;
  }

  onMouseMove(event: MapMouseEvent) {
    const id = event.features?.[0]?.id;
    if (!id) return;
    const map = event.target;
    this.removeHoverEffect(map);
    this.addHoverEffect(map, id);
  }

  onMouseLeave(event: MapMouseEvent) {
    if (!this.hoveredFeatureId) return;
    const map = event.target;
    this.removeHoverEffect(map);
  }

  onMouseClick(event: MapMouseEvent) {
    const properties = event.features?.[0].properties ?? {};
    this.click.emit(properties);
  }
}
