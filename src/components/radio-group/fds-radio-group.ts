import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { FdsRadio } from '../radio/fds-radio';

import style from './fds-radio-group.scss';

export type RadioGroupPlacement = 'horizontal' | 'vertical';

@customElement('fds-radio-group')
export class FdsRadioGroup extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  placement: RadioGroupPlacement = 'horizontal';

  @property({ type: String, reflect: true })
  label: string | undefined;

  @property({ type: String, reflect: true, attribute: 'helper-text' })
  helperText = '';

  private _handleOption(event: Event) {
    const selectedRadio = event.target as FdsRadio;
    const radios = this.querySelectorAll('fds-radio') as NodeListOf<FdsRadio>;

    radios.forEach(radio => {
      if (radio !== selectedRadio) {
        radio.checked = false;
      } else {
        radio.checked = true;
      }
    });
  }

  render(): TemplateResult {
    return html`
      <fieldset class="fds-radio-group" role="radiogroup" aria-labelledby="label">
        <legend id="label" class="fds-radio-group__legend">${this.label}</legend>
        <div class="fds-radio-group__options" @click=${this._handleOption}>
          <slot></slot>
        </div>
        ${this.helperText
          ? html`<fds-helper-text with-icon>${this.helperText}</fds-helper-text>`
          : ''}
      </fieldset>
    `;
  }
}
