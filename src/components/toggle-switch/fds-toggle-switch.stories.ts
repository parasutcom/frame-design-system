import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-toggle-switch';

export default {
  title: 'Components/Toggle Switch',
  component: 'fds-toggle-switch',
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch is an input item can be used to enable or disable certain settings.',
      },
    },
  },
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-toggle-switch
    name=${ifDefined(args.name)}
    label=${ifDefined(args.label)}
    .disabled=${args.disabled}
    .checked=${args.checked}
    size=${ifDefined(args.size)}
  ></fds-toggle-switch>
`;

export const Size = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-toggle-switch size="medium"></fds-toggle-switch>
      <fds-toggle-switch size="large"></fds-toggle-switch>
    </div>
  `,
};

export const Checked = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-toggle-switch size="medium" checked></fds-toggle-switch>
      <fds-toggle-switch size="large" checked></fds-toggle-switch>
    </div>
  `,
};

export const Disabled = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-toggle-switch size="medium" disabled></fds-toggle-switch>
      <fds-toggle-switch size="medium" disabled checked></fds-toggle-switch>
    </div>
  `,
};

export const WithLabel = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-toggle-switch label="Toggle switch label" size="medium"></fds-toggle-switch>
      <fds-toggle-switch label="Toggle switch label"></fds-toggle-switch>
    </div>
  `,
};
