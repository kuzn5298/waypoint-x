import { Component, output } from '@angular/core';
import { MapMouseEvent } from '../../types/MapMouseEvent';

@Component({
  template: '',
})
export class PoiHoverExtensionComponent {
  click = output<Record<string, any>>();

  hoveredFeatureId: string | number | null = null;

  onMouseMove(event: MapMouseEvent) {
    const id = event.features?.[0]?.id;
    if (!id) return;
    this.hoveredFeatureId = id;
    const map = event.target;
    map.getCanvas().style.cursor = 'pointer';
    map.setFeatureState(
      { source: 'openmaptiles', sourceLayer: 'poi', id },
      { hover: true }
    );
  }

  onMouseLeave(event: MapMouseEvent) {
    if (!this.hoveredFeatureId) return;
    const map = event.target;
    map.getCanvas().style.cursor = '';
    map.setFeatureState(
      { source: 'openmaptiles', sourceLayer: 'poi', id: this.hoveredFeatureId },
      { hover: false }
    );
    this.hoveredFeatureId = null;
  }

  onMouseClick(event: MapMouseEvent) {
    const properties = event.features?.[0].properties ?? {};
    this.click.emit(properties);
  }
}
