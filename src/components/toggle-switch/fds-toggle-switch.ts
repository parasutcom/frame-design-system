import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './fds-toggle-switch.scss';

export type ToggleSwitchSize = 'medium' | 'large';

@customElement('fds-toggle-switch')
export class FdsToggleSwitch extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String, reflect: true })
  size: ToggleSwitchSize = 'medium';

  private toggleChecked() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.dispatchEvent(new CustomEvent('change'));
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleChecked();
    }
  }

  render(): TemplateResult {
    return html`
      <label class="fds-toggle-switch">
        ${this.label ? html`<span class="fds-toggle-switch__label">${this.label}</span>` : ''}
        <input
          class="fds-toggle-switch__input"
          type="checkbox"
          name=${ifDefined(this.name)}
          role="switch"
          aria-checked=${this.checked}
          .checked=${this.checked}
          .disabled=${this.disabled}
          @keydown=${this.handleKeyDown}
          @click=${this.toggleChecked}
        />
        <span class="fds-toggle-switch__control"></span>
      </label>
    `;
  }
}
