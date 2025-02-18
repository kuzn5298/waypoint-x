import { Directive } from '@angular/core';

@Directive({
  selector: '[appLinkButton]',
  host: {
    class: 'p-button p-button-link p-0 hover:underline',
  },
})
export class LinkButtonDirective {}
