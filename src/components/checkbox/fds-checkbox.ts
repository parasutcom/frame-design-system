import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import style from './fds-checkbox.scss';

@customElement('fds-checkbox')
export class FdsCheckbox extends LitElement {
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

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String, reflect: true, attribute: 'helper-text' })
  helperText = '';

  private _handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.checked = !this.checked;
    }
  }

  render(): TemplateResult {
    return html`
      <div class="fds-checkbox">
        <label>
          <input
            class="fds-checkbox__input"
            type="checkbox"
            name=${this.name}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            ?disabled=${this.disabled}
            aria-checked=${this.checked ? 'true' : 'false'}
            @change=${this._handleInputChange}
            @keydown=${this._handleKeyDown}
          />
          <div class="fds-checkbox__control">
            ${this.checked
              ? html`<fds-icon name="check" icon-style="far" size="x-small"></fds-icon>`
              : ''}
            ${this.indeterminate && !this.checked
              ? html`<fds-icon name="minus" icon-style="far" size="x-small"></fds-icon>`
              : ''}
          </div>
          <slot class="fds-checkbox__label"></slot>
        </label>
        ${this.helperText ? html`<fds-helper-text>${this.helperText}</fds-helper-text>` : ''}
      </div>
    `;
  }
}
