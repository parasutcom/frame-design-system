import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../spinner/fds-spinner';

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
  busy = false;

  @property({ type: Boolean, reflect: true })
  autofocus = false;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true, attribute: 'icon-placement' })
  iconPlacement?: 'left' | 'right' = 'left';

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: String, reflect: true })
  type?: ButtonType;

  @property({ type: String, reflect: true })
  href?: string;

  @property({ type: String })
  target?: LinkTarget = '_self';

  private get hasLabel(): boolean {
    return !!this.textContent?.trim();
  }

  private renderIcon() {
    return this.icon ? html`<fds-icon prefix="far" name=${this.icon}></fds-icon>` : '';
  }

  private renderLabel() {
    return this.hasLabel ? html`<span class="fds-btn__label"><slot></slot></span>` : '';
  }

  private renderBusy() {
    return this.busy ? html`<fds-spinner variant="secondary" size="small"></fds-spinner>` : '';
  }

  private get buttonContent(): TemplateResult {
    return this.iconPlacement === 'right'
      ? html`${this.renderBusy()} ${this.renderLabel()} ${this.renderIcon()}`
      : html`${this.renderBusy()} ${this.renderIcon()} ${this.renderLabel()}`;
  }

  render(): TemplateResult {
    const classes = classMap({
      [`fds-btn`]: true,
      [`fds-btn--${this.variant}`]: this.variant,
      [`fds-btn--${this.size}`]: this.size,
      [`fds-btn--full-width`]: this.fullWidth,
      [`fds-btn--disabled`]: this.disabled,
      [`fds-btn--busy`]: this.busy,
      [`fds-btn--icon`]: !this.hasLabel && !!this.icon,
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
            ?disabled="${this.disabled || this.busy}"
            aria-disabled="${ifDefined(this.disabled || this.busy)}"
            aria-label="${ifDefined(this.label)}"
          >
            ${this.buttonContent}
          </button>
        `;
  }
}
