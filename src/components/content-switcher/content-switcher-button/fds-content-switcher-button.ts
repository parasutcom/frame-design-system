import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-content-switcher-button.scss';

@customElement('fds-content-switcher-button')
export class FdsContentSwitcherButton extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: Boolean, reflect: true })
  selected = false;

  render(): TemplateResult {
    return html`
      <button class="fds-content-switcher-btn" type="button" aria-pressed="${this.selected}">
        <span class="fds-content-switcher-btn__label">
          <slot></slot>
        </span>
      </button>
    `;
  }
}
