import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import {
  LanguageService,
  Language,
} from '@/app/core/services/language.service';

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
  items = computed<MenuItem[]>(() =>
    this.languageService
      .availableLanguages()
      .map(this.getLanguageItem.bind(this))
  );
  selectedItem = computed<MenuItem>(() =>
    this.getLanguageItem(this.language())
  );

  private getFlagEmoji(countryCode: string): string {
    if (countryCode === 'en') {
      countryCode = 'gb';
    }
    return countryCode
      .toUpperCase()
      .split('')
      .map((char) => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65))
      .join('');
  }

  private getLanguageName(countryCode: string): string {
    return `COMMON.LANGUAGE.${countryCode.toUpperCase()}`;
  }

  private changeLanguage(language: Language) {
    this.languageService.setLanguage(language);
  }

  private getLanguageItem(countryCode: Language): MenuItem {
    return {
      name: this.getLanguageName(countryCode),
      flag: this.getFlagEmoji(countryCode),
      code: countryCode,
      command: () => this.changeLanguage(countryCode),
    };
  }
}
