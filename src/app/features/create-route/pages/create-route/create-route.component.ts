import { ThemeService } from '@/app/core/services/theme.service';
import { Component, computed, inject } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

const LIGHT_STYLE = '/map/styles/wpx-light.json';

const DARK_STYLE = '/map/styles/wpx-dark.json';

@Component({
  selector: 'app-create-route',
  imports: [MapComponent],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
})
export class CreateRouteComponent {
  themeService = inject(ThemeService);
  style = computed(() =>
    this.themeService.isDark() ? DARK_STYLE : LIGHT_STYLE
  );
}
