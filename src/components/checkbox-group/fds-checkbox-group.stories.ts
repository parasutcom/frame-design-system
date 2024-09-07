import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-checkbox-group';
import '../checkbox/fds-checkbox';
import '../icon/fds-icon';
import '../helper-text/fds-helper-text';

export default {
  title: 'Components/Checkbox/Checkbox Group',
  component: 'fds-checkbox-group',
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox group is a form input element formed by multiple checkboxes coming together, which are contextually related to each other.',
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
  <fds-checkbox-group
    label=${ifDefined(args.label)}
    placement=${ifDefined(args.placement)}
    helper-text=${ifDefined(args.helperText)}
  >
    <fds-checkbox value="1">Checkbox 1</fds-checkbox>
    <fds-checkbox value="2">Checkbox 2</fds-checkbox>
    <fds-checkbox value="3">Checkbox 3</fds-checkbox>
  </fds-checkbox-group>
`;

export const Placement = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-checkbox-group label="Horizontal checkbox group" placement="horizontal">
        <fds-checkbox value="1">Checkbox 1</fds-checkbox>
        <fds-checkbox value="2">Checkbox 2</fds-checkbox>
        <fds-checkbox value="3">Checkbox 3</fds-checkbox>
      </fds-checkbox-group>
      <fds-checkbox-group label="Vertical checkbox group" placement="vertical">
        <fds-checkbox value="1">Checkbox 1</fds-checkbox>
        <fds-checkbox value="2">Checkbox 2</fds-checkbox>
        <fds-checkbox value="3">Checkbox 3</fds-checkbox>
      </fds-checkbox-group>
    </div>
  `,
};

export const WithHelperText = {
  render: () => html`
    <fds-checkbox-group label="Label" placement="horizontal" helper-text="Helper text goes here">
      <fds-checkbox value="1">Checkbox 1</fds-checkbox>
      <fds-checkbox value="2">Checkbox 2</fds-checkbox>
      <fds-checkbox value="3">Checkbox 3</fds-checkbox>
    </fds-checkbox-group>
  `,
};
