import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './fds-button.scss';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'destructive-outline';
export type ButtonSize = 'small' | 'medium' | 'large';
export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

@customElement('fds-button')
export class FdsButton extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  variant: ButtonVariant = 'primary';

  @property({ type: String, reflect: true })
  size: ButtonSize = 'medium';

  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  fullWidth = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  autofocus = false;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  type?: ButtonType;

  @property({ type: String, reflect: true })
  href?: string;

  @property({ type: String })
  target?: LinkTarget = '_self';

  protected get buttonContent(): TemplateResult {
    const label = html`<span class="fds-btn__label"><slot></slot></span>`;
    const content = html`${label}`;
    return content;
  }

  render(): TemplateResult {
    const classes = classMap({
      [`fds-btn`]: true,
      [`fds-btn--${this.variant}`]: this.variant,
      [`fds-btn--${this.size}`]: this.size,
      [`fds-btn--full-width`]: this.fullWidth,
      [`fds-btn--disabled`]: this.disabled,
    });

    return this.href
      ? html`<a
          class="${classes}"
          role="button"
          ?autofocus=${this.autofocus}
          aria-disabled="${ifDefined(this.disabled)}"
          aria-label="${ifDefined(this.label)}"
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
        >
          ${this.buttonContent}
        </a>`
      : html`
          <button
            class="${classes}"
            type="${ifDefined(this.type)}"
            ?autofocus=${this.autofocus}
            ?disabled="${this.disabled}"
            aria-disabled="${ifDefined(this.disabled)}"
            aria-label="${ifDefined(this.label)}"
          >
            ${this.buttonContent}
          </button>
        `;
  }
}
