import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-helper-text';
import '../icon/fds-icon';

export default {
  title: 'Components/Helper Text',
  component: 'fds-helper-text',
  parameters: {
    docs: {
      description: {
        component:
          'Helper text provides additional information for a situation or action or allows us to explain the situation in more detail for the input it belongs to.',
      },
    },
  },
  argTypes: {
    status: {
      options: ['information', 'error', 'warning'],
      control: {
        type: 'inline-radio',
      },
    },
    withIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    status: 'information',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-helper-text status=${ifDefined(args.status)} ?with-icon=${args.withIcon}
    >Helper text goes here Helper text goes here Helper text goes hereHelper text goes here
  </fds-helper-text>
`;

export const Statuses = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-helper-text status="information">Info text goes here</fds-helper-text>
      <fds-helper-text status="error">Error text goes here</fds-helper-text>
      <fds-helper-text status="warning">Warning text goes here</fds-helper-text>
    </div>
  `,
};

export const WithIcon = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-helper-text status="information" with-icon>Info text goes here</fds-helper-text>
      <fds-helper-text status="error" with-icon>Error text goes here</fds-helper-text>
      <fds-helper-text status="warning" with-icon>Warning text goes here</fds-helper-text>
    </div>
  `,
};
