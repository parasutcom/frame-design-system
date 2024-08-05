import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-list.scss';

export type ListType = 'bulleted' | 'dashed' | 'numbered' | 'lettered';

@customElement('fds-list')
export class FdsList extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  type: ListType = 'bulleted';

  render(): TemplateResult {
    return this.type === 'bulleted' || this.type === 'dashed'
      ? html`<ul class="fds-list">
          <slot></slot>
        </ul>`
      : html`<ol class="fds-list">
          <slot></slot>
        </ol>`;
  }
}
