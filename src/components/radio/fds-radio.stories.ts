import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-radio';
import '../helper-text/fds-helper-text';

export default {
  title: 'Components/Radio/Radio',
  component: 'fds-radio',
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-radio
    value=${ifDefined(args.value)}
    name=${ifDefined(args.name)}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    helper-text=${ifDefined(args.helperText)}
  >
    Radio label
  </fds-radio>
`;

export const Checked = {
  render: () => html`<fds-radio checked>Checked radio</fds-radio>`,
};

export const Disabled = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-radio disabled>Disabled radio</fds-radio>
      <fds-radio checked disabled>Disabled and checked radio</fds-radio>
    </div>
  `,
};

export const WithHelperText = {
  render: () => html` <fds-radio helper-text="Helper text goes here">Radio label</fds-radio> `,
};
