import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-helper-text.scss';

export type HelperTextStatuses = 'information' | 'error' | 'warning';

@customElement('fds-helper-text')
export class FdsHelperText extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  status: HelperTextStatuses = 'information';

  @property({ type: Boolean, reflect: true, attribute: 'with-icon' })
  withIcon? = false;

  private getHelperTextIcon() {
    switch (this.status) {
      case 'information':
        return 'circle-info';
      case 'error':
        return 'circle-exclamation';
      case 'warning':
        return 'triangle-exclamation';
      default:
        return '';
    }
  }

  render(): TemplateResult {
    const helperTextIcon = this.getHelperTextIcon();

    return html`
      <div class="fds-helper-text">
        ${this.withIcon
          ? html`<fds-icon name="${helperTextIcon}" icon-style="fas" size="x-small"></fds-icon>`
          : ''}
        <slot></slot>
      </div>
    `;
  }
}
