import { computed, inject, Injectable, signal } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { ViewTransitionService } from './view-transition.service';

const LOCAL_STORAGE_THEME_KEY = 'wpx-theme' as const;
const DEFAULT_THEME = 'light' as const;
type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private persistenceService = inject(PersistenceService);
  private viewTransitionService = inject(ViewTransitionService);

  private currentTheme = signal<Theme>(DEFAULT_THEME);
  getTheme = computed(() => this.currentTheme());

  constructor() {
    const savedTheme = this.persistenceService.get(
      LOCAL_STORAGE_THEME_KEY
    ) as Theme;
    this.setTheme(savedTheme ?? this.currentTheme());
  }

  setTheme(theme: Theme) {
    const root = document.getElementsByTagName('html')[0];
    if (root) {
      root.className = theme;
      this.currentTheme.set(theme);
      this.persistenceService.set(LOCAL_STORAGE_THEME_KEY, theme);
    }
  }

  toggleTheme() {
    this.viewTransitionService.setTransitionType('theme');
    return document.startViewTransition(() => {
      this.setTheme(this.currentTheme() === 'light' ? 'dark' : 'light');
      this.viewTransitionService.resetTransitionType;
    }).ready;
  }
}
