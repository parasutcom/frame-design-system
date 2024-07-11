import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';

import style from './fds-progress-bar.scss';

export type ProgressBarSize = 'small' | 'medium' | 'large';

@customElement('fds-progress-bar')
export class FdsProgressBar extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: Number, reflect: true })
  value = 0;

  @property({ type: String, reflect: true })
  label?: '';

  @property({ type: String, reflect: true, attribute: 'value-label' })
  valueLabel?: '';

  @property({ type: String, reflect: true })
  size: ProgressBarSize = 'medium';

  render(): TemplateResult {
    return html`<div class="fds-progress-bar">
      ${this.label || this.valueLabel
        ? html`<div class="fds-progress-bar__label-wrapper">
            ${this.label ? html`<label class="fds-progress-bar__label">${this.label}</label>` : ''}
            ${this.valueLabel
              ? html`<label class="fds-progress-bar__value">${this.valueLabel}</label>`
              : ''}
          </div>`
        : ''}
      <div
        class="fds-progress-bar__track"
        role="progressbar"
        aria-label=${ifDefined(this.label ? 'label' : undefined)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.value}
      >
        <div
          class="fds-progress-bar__indicator"
          style=${styleMap({ width: `${this.value}%` })}
        ></div>
      </div>
    </div>`;
  }
}
