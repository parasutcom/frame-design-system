import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-radio.scss';

@customElement('fds-radio')
export class FdsRadio extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: String, reflect: true })
  name = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: String, reflect: true, attribute: 'helper-text' })
  helperText = '';

  private _handleClick = () => {
    if (!this.disabled) {
      this.checked = true;
    }
  };

  private _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.checked = true;
    }
  }

  render(): TemplateResult {
    return html`
      <div class="fds-radio">
        <div
          class="fds-radio__wrapper"
          role="radio"
          aria-labelledby="label-${this.value}"
          tabindex=${this.checked ? '0' : '-1'}
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-disabled=${this.disabled ? 'true' : 'false'}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <div class="fds-radio__control"></div>
          <slot class="fds-radio__label" id="label-${this.value}"></slot>
        </div>
        ${this.helperText ? html`<fds-helper-text>${this.helperText}</fds-helper-text>` : ''}
      </div>
    `;
  }
}
