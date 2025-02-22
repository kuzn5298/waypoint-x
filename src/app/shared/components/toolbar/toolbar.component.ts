import { CommonModule } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [Toolbar, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  host: { '[class.toolbar-border]': 'border()', class: 'block' },
})
export class ToolbarComponent {
  border = input(false);

  startTemplate = contentChild<TemplateRef<any>>('start');
  centerTemplate = contentChild<TemplateRef<any>>('center');
  endTemplate = contentChild<TemplateRef<any>>('end');
}
