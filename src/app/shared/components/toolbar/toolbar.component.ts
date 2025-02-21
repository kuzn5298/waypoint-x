import { CommonModule } from '@angular/common';
import { Component, contentChild, TemplateRef } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [Toolbar, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  startTemplate = contentChild<TemplateRef<any>>('start');
  centerTemplate = contentChild<TemplateRef<any>>('center');
  endTemplate = contentChild<TemplateRef<any>>('end');
}
