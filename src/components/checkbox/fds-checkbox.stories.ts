import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-checkbox';
import '../icon/fds-icon';
import '../helper-text/fds-helper-text';

export default {
  title: 'Components/Checkbox/Checkbox',
  component: 'fds-checkbox',
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox allows the users can easily indicate which options they want to select, and the selected options can be submitted as a group to perform a specific action or to record their preferences.',
      },
    },
  },
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
    indeterminate: {
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
  <fds-checkbox
    value=${ifDefined(args.value)}
    name=${ifDefined(args.name)}
    ?checked=${args.checked}
    ?indeterminate=${args.indeterminate}
    ?disabled=${args.disabled}
    helper-text=${ifDefined(args.helperText)}
  >
    Checkbox label
  </fds-checkbox>
`;

export const Checked = {
  render: () => html`<fds-checkbox checked>Checked checkbox</fds-checkbox>`,
};

export const Indeterminate = {
  render: () => html`<fds-checkbox indeterminate>Indeterminate checkbox</fds-checkbox>`,
};

export const Disabled = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-checkbox disabled>Disabled checkbox</fds-checkbox>
      <fds-checkbox checked disabled>Disabled and checked checkbox</fds-checkbox>
      <fds-checkbox indeterminate disabled>Disabled and indeterminate checkbox</fds-checkbox>
    </div>
  `,
};

export const WithHelperText = {
  render: () => html`
    <fds-checkbox helper-text="Helper text goes here">Checkbox label</fds-checkbox>
  `,
};
