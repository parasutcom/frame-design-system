import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './fds-checkbox-group.scss';

export type CheckboxGroupPlacement = 'horizontal' | 'vertical';

@customElement('fds-checkbox-group')
export class FdsCheckboxGroup extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  placement: CheckboxGroupPlacement = 'horizontal';

  @property({ type: String, reflect: true })
  label: string | undefined;

  @property({ type: String, reflect: true, attribute: 'helper-text' })
  helperText = '';

  render(): TemplateResult {
    return html`
      <fieldset class="fds-checkbox-group" role="group" aria-labelledby="label">
        <legend id="label" class="fds-checkbox-group__legend">${this.label}</legend>
        <div class="fds-checkbox-group__options">
          <slot></slot>
        </div>
        ${this.helperText
          ? html`<fds-helper-text with-icon>${this.helperText}</fds-helper-text>`
          : ''}
      </fieldset>
    `;
  }
}
