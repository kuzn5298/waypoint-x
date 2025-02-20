import { computed, inject, Injectable, signal } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

const LOCAL_STORAGE_LANGUAGE_KEY = 'wpx-language' as const;
const DEFAULT_LANGUAGE = 'en' as const;
const AVAILABLE_LANGUAGES = ['en', 'ru'] as const;
export type Language = (typeof AVAILABLE_LANGUAGES)[number];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private persistenceService = inject(PersistenceService);
  private translate = inject(TranslateService);

  private currentLanguage = signal<Language>(DEFAULT_LANGUAGE);
  language = computed(() => this.currentLanguage());
  availableLanguages = signal(AVAILABLE_LANGUAGES);
  loading = signal(false);

  constructor() {
    const savedLanguage = this.persistenceService.get(
      LOCAL_STORAGE_LANGUAGE_KEY
    ) as Language;
    const defaultLanguage = savedLanguage ?? this.currentLanguage();
    this.translate.addLangs([...AVAILABLE_LANGUAGES]);
    this.setLanguage(defaultLanguage);
  }

  async setLanguage(language: Language) {
    this.persistenceService.set(LOCAL_STORAGE_LANGUAGE_KEY, language);
    this.loading.set(true);
    await firstValueFrom(this.translate.use(language));
    this.loading.set(false);
    this.currentLanguage.set(language);
  }
}
