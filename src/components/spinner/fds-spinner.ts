import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './fds-spinner.scss';

export type SpinnerVariant = 'primary' | 'secondary';
export type SpinnerSize = 'small' | 'medium';
export type SpinnerPlacement = 'horizontal' | 'vertical';

@customElement('fds-spinner')
export class FdsSpinner extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  variant: SpinnerVariant = 'primary';

  @property({ type: String, reflect: true })
  size: SpinnerSize = 'medium';

  @property({ type: String, reflect: true })
  label?: string = '';

  @property({ type: String, reflect: true })
  placement: SpinnerPlacement = 'horizontal';

  render(): TemplateResult {
    const iconSize = this.size === 'medium' ? '3x-large' : 'medium';
    return html`<div
      class="fds-spinner"
      role="progressbar"
      aria-label="${ifDefined(this.label ? this.label : 'Loading')}"
    >
      <fds-icon prefix="far" name="spinner-third" size="${iconSize}"></fds-icon>
      ${this.label ? html`<div class="fds-spinner__label">${this.label}</div>` : ''}
    </div>`;
  }
}
