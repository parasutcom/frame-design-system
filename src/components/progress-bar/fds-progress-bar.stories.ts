import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-progress-bar';

export default {
  title: 'Components/Progress Bar',
  component: 'fds-progress-bar',
  parameters: {
    docs: {
      description: {
        component:
          'Progress bars are used to visually and quantitatively represent the progression of a system operation, such as a download or upload, indicating how long the system will take to complete the process. ',
      },
    },
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    valueLabel: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 10 },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    label: 'Process label',
    valueLabel: '%40',
    value: 40,
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-progress-bar
    value=${ifDefined(args.value)}
    label=${ifDefined(args.label)}
    value-label=${ifDefined(args.valueLabel)}
    size=${ifDefined(args.size)}
  >
  </fds-progress-bar>
`;

export const Plain = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem">
      <fds-progress-bar value="40" size="small"></fds-progress-bar>
      <fds-progress-bar value="40" size="medium"></fds-progress-bar>
      <fds-progress-bar value="40" size="large"></fds-progress-bar>
    </div>
  `,
};

export const WithoutValueLabel = {
  render: () => html` <fds-progress-bar value="40" label="Process label"></fds-progress-bar> `,
};

export const WithoutLabel = {
  render: () => html` <fds-progress-bar value="40" value-label="%40"></fds-progress-bar> `,
};

export const Size = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem">
      <fds-progress-bar
        value="40"
        size="small"
        label="Process label"
        value-label="%40"
      ></fds-progress-bar>
      <fds-progress-bar
        value="40"
        size="medium"
        label="Process label"
        value-label="%40"
      ></fds-progress-bar>
      <fds-progress-bar
        value="40"
        size="large"
        label="Process label"
        value-label="%40"
      ></fds-progress-bar>
    </div>
  `,
};
