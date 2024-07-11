import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './fds-aggregate.scss';

@customElement('fds-aggregate')
export class FdsAggregate extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  render(): TemplateResult {
    return html`<div class="fds-aggregate">
      <slot name="meta"></slot>
      <slot name="tally"></slot>
    </div>`;
  }
}
