import { ThemeService } from '@/app/core/services/theme.service';
import { Component, computed, inject } from '@angular/core';
import { LayerComponent } from '@maplibre/ngx-maplibre-gl';
import { getPoiFilter, getPoiLayout, getPoiPaint } from './poi.constants';
import { PoiHoverExtensionComponent } from '../../components/poi-hover-extension/poi-hover-extension.component';

@Component({
  selector: 'app-poi',
  imports: [LayerComponent],
  templateUrl: './poi.component.html',
  styleUrl: './poi.component.css',
})
export class PoiComponent extends PoiHoverExtensionComponent {
  private themeService = inject(ThemeService);

  filter = computed(getPoiFilter);
  layout = computed(getPoiLayout);
  paint = computed(() => getPoiPaint(this.themeService.isDark()));
}
