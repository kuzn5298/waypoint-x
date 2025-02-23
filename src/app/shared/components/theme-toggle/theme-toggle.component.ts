import {
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [ButtonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  private toggleRef = viewChild<ElementRef<HTMLSpanElement>>('toggleButton');

  isDark = computed(() => this.themeService.isDark());

  createNextAnimation(): void {
    const element = this.toggleRef()?.nativeElement;
    if (!element) {
      return;
    }
    const { top, left, width, height } = element.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(theme-transition)',
      }
    );
  }

  async toggleTheme() {
    await this.themeService.toggleTheme();
    this.createNextAnimation();
  }
}
