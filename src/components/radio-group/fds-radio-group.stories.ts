import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-radio-group';
import '../radio/fds-radio';
import '../icon/fds-icon';
import '../helper-text/fds-helper-text';

export default {
  title: 'Components/Radio/Radio Group',
  component: 'fds-radio-group',
  parameters: {
    docs: {
      description: {
        component:
          'A radio button group contains multiple options in a list or form, but allows only one option to be selected among them.',
      },
    },
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    placement: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    label: 'Label',
    placement: 'horizontal',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-radio-group
    label=${ifDefined(args.label)}
    placement=${ifDefined(args.placement)}
    helper-text=${ifDefined(args.helperText)}
  >
    <fds-radio value="1" checked>Radio 1</fds-radio>
    <fds-radio value="2">Radio 2</fds-radio>
    <fds-radio value="3">Radio 3</fds-radio>
  </fds-radio-group>
`;

export const Placement = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-radio-group label="Horizontal radio group" placement="horizontal">
        <fds-radio value="1" checked>Radio 1</fds-radio>
        <fds-radio value="2">Radio 2</fds-radio>
        <fds-radio value="3">Radio 3</fds-radio>
      </fds-radio-group>
      <fds-radio-group label="Vertical radio group" placement="vertical">
        <fds-radio value="1" checked>Radio 1</fds-radio>
        <fds-radio value="2">Radio 2</fds-radio>
        <fds-radio value="3">Radio 3</fds-radio>
      </fds-radio-group>
    </div>
  `,
};

export const WithHelperText = {
  render: () => html`
    <fds-radio-group label="Label" placement="horizontal" helper-text="Helper text goes here">
      <fds-radio value="1" checked>Radio 1</fds-radio>
      <fds-radio value="2">Radio 2</fds-radio>
      <fds-radio value="3">Radio 3</fds-radio>
    </fds-radio-group>
  `,
};
