import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-notification.scss';

export type NotificationType = 'line' | 'toast' | 'app';
export type NotificationStatus = 'information' | 'success' | 'warning' | 'error';

@customElement('fds-notification')
export class FdsNotification extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  type: NotificationType = 'line';

  @property({ type: String, reflect: true })
  status: NotificationStatus = 'information';

  @property({ type: String, reflect: true })
  heading?: string;

  @property({ type: Boolean, reflect: true })
  closable = false;

  @property({ type: Boolean, reflect: true })
  icon?: boolean;

  @property({ type: Boolean, reflect: true })
  hidden = false;

  private handleClose() {
    this.hidden = true;
  }

  private getIconName() {
    switch (this.status) {
      case 'success':
        return 'circle-check';
      case 'warning':
        return 'circle-exclamation';
      case 'error':
        return 'circle-minus';
      default:
        return 'circle';
    }
  }

  render(): TemplateResult {
    return html`<div class="fds-notification" role="alert" aria-hidden="${this.hidden}">
      ${this.icon
        ? html`<fds-icon icon-style="fas" name="${this.getIconName()}"></fds-icon>`
        : null}
      <div class="fds-notification__content-wrapper">
        ${this.heading
          ? html`<span class="fds-notification__header">
              <slot name="header">${this.heading}</slot>
            </span>`
          : null}
        <div part="content" class="fds-notification__content">
          <slot></slot>
        </div>
      </div>
      ${this.closable
        ? html`<fds-button
            class="fds-notification__close-button"
            variant="ghost"
            aria-label="close"
            size="small"
            icon="xmark"
            @click=${this.handleClose}
          ></fds-button>`
        : null}
    </div>`;
  }
}
