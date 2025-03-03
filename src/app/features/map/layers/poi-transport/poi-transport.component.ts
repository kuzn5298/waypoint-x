import { Component, computed, inject } from '@angular/core';
import { LayerComponent } from '@maplibre/ngx-maplibre-gl';
import {
  getPoiTransportFilter,
  getPoiTransportLayout,
  getPoiTransportPaint,
} from './poi-transport.constants';
import { ThemeService } from '@/app/core/services/theme.service';

@Component({
  selector: 'app-poi-transport',
  imports: [LayerComponent],
  templateUrl: './poi-transport.component.html',
  styleUrl: './poi-transport.component.css',
})
export class PoiTransportComponent {
  private themeService = inject(ThemeService);

  filter = computed(getPoiTransportFilter);
  layout = computed(getPoiTransportLayout);
  paint = computed(() => getPoiTransportPaint(this.themeService.isDark()));
}
