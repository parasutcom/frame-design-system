import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './fds-link.scss';

export type LinkVariant = 'primary' | 'secondary' | 'dark';
export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

@customElement('fds-link')
export class FdsLink extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  variant: LinkVariant = 'primary';

  @property({ type: Boolean, reflect: true, attribute: 'with-icon' })
  withIcon? = false;

  @property({ type: Boolean, reflect: true })
  inline? = false;

  @property({ type: Boolean, reflect: true })
  autofocus = false;

  @property({ type: String, reflect: true })
  href = '';

  @property({ type: String })
  target: LinkTarget = '_self';

  render(): TemplateResult {
    const target = this.withIcon ? '_blank' : this.target;

    return html`
      <a class="fds-link" href=${ifDefined(this.href)} target=${ifDefined(target)}>
        <slot></slot>
        ${this.withIcon
          ? html`<fds-icon
              name="arrow-up-right-from-square"
              icon-style="far"
              size="x-small"
            ></fds-icon>`
          : ''}</a
      >
    `;
  }
}
