import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import {
  LanguageService,
  Language,
} from '@/app/core/services/language.service';

type LanguageMenuItem = MenuItem & {
  code: Language;
  flagUrl: string;
  name: string;
};

@Component({
  selector: 'app-language-selector',
  imports: [Menu, ButtonModule, TranslatePipe],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  private languageService = inject(LanguageService);

  language = this.languageService.language;
  loadingLanguage = this.languageService.loading;
  items = computed<LanguageMenuItem[]>(() =>
    this.languageService
      .availableLanguages()
      .map(this.getLanguageItem.bind(this))
  );
  selectedItem = computed<LanguageMenuItem>(() =>
    this.getLanguageItem(this.language())
  );

  private getFlagUrl(countryCode: string): string {
    if (countryCode === 'en') {
      countryCode = 'gb';
    }
    return `https://flagcdn.com/${countryCode}.svg`;
  }

  private getLanguageName(countryCode: string): string {
    return `COMMON.LANGUAGE.${countryCode.toUpperCase()}`;
  }

  private changeLanguage(language: Language) {
    this.languageService.setLanguage(language);
  }

  private getLanguageItem(countryCode: Language): LanguageMenuItem {
    return {
      name: this.getLanguageName(countryCode),
      flagUrl: this.getFlagUrl(countryCode),
      code: countryCode,
      command: () => this.changeLanguage(countryCode),
    };
  }
}
