import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { library, icon, findIconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';

import style from './fds-icon.scss';

library.add(fas, far, fad);

export type IconStyles = 'fas' | 'far' | 'fad';
export type IconSize =
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large'
  | '3x-large';

@customElement('fds-icon')
export class FdsIcon extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  @property({ type: String, reflect: true })
  prefix: IconStyles = 'fas';

  @property({ type: String, reflect: true })
  name: string = '';

  @property({ type: String, reflect: true })
  size: string = 'medium';

  private _getIcon(): string {
    const iconDefinition = findIconDefinition({
      prefix: this.prefix,
      iconName: this.name as IconName,
    });
    return iconDefinition ? icon(iconDefinition).html.join('') : '';
  }

  render(): TemplateResult {
    const icon = this._getIcon();
    return html`${unsafeSVG(icon)}`;
  }
}
