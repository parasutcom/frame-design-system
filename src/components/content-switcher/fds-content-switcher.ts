import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-content-switcher.scss';

@customElement('fds-content-switcher')
export class FdsContentSwitcher extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  variant: 'solid' | 'outline' = 'solid';

  @property({ type: String, reflect: true })
  size: 'small' | 'medium' = 'medium';

  private handleButtonClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const clickedButton = target.closest('fds-content-switcher-button') as HTMLElement;

    if (!clickedButton) return;

    const buttons = this.querySelectorAll('fds-content-switcher-button');
    buttons.forEach((button: Element) => {
      if (button === clickedButton) {
        button.setAttribute('selected', '');
      } else {
        button.removeAttribute('selected');
      }
    });

    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedButton: clickedButton },
        bubbles: true,
        composed: true,
      })
    );
  };

  firstUpdated() {
    this.addEventListener('click', this.handleButtonClick);
  }

  render(): TemplateResult {
    return html`
      <div class="fds-content-switcher">
        <slot></slot>
      </div>
    `;
  }
}
