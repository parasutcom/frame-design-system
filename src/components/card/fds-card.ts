import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './fds-card.scss';

@customElement('fds-card')
export class FdsCard extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  render(): TemplateResult {
    return html`
      <div class="fds-card">
        <slot name="header" class="fds-card__header"></slot>
        <slot name="content" class="fds-card__content"></slot>
        <slot name="footer" class="fds-card__footer"></slot>
      </div>
    `;
  }
}
