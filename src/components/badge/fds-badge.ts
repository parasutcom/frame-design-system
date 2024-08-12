import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-badge.scss';

export type BadgeSize = 'medium' | 'large';

@customElement('fds-badge')
export class FdsBadge extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  letter = '';

  @property({ type: String, reflect: true })
  image = '';

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  size: BadgeSize = 'medium';

  @property({ type: String, reflect: true })
  shape: 'rounded' | 'circle' = 'rounded';

  private renderLetter() {
    return this.letter ? html`<div class="fds-badge__letter">${this.letter}</div>` : '';
  }

  private renderImage() {
    return this.image ? html`<img src="${this.image}" class="fds-badge__image" />` : '';
  }

  private renderIcon() {
    const iconSize = this.size === 'large' ? 'x-large' : 'large';
    return this.icon
      ? html`<fds-icon
          icon-style="far"
          name="${this.icon}"
          size="${iconSize}"
          aria-hidden="true"
        ></fds-icon>`
      : '';
  }

  private renderContent() {
    if (this.letter) {
      return this.renderLetter();
    } else if (this.image) {
      return this.renderImage();
    } else {
      return this.renderIcon();
    }
  }

  render(): TemplateResult {
    return html`<div class="fds-badge" size="${this.size}" shape="${this.shape}">
      ${this.renderContent()}
    </div>`;
  }
}
