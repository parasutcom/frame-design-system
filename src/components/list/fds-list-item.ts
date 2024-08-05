import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './fds-list.scss';

@customElement('fds-list-item')
export class FdsListItem extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  render(): TemplateResult {
    return html` <li><slot></slot></li> `;
  }
}
