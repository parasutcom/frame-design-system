import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-spinner';
import '../icon/fds-icon';

export default {
  title: 'Components/Spinner',
  component: 'fds-spinner',
  parameters: {
    docs: {
      description: {
        component:
          'A spinner is an animated circle icon used to indicate an indeterminate loading process.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'inline-radio',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    labelPlacement: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-spinner
    variant=${ifDefined(args.variant)}
    size=${ifDefined(args.size)}
    label=${ifDefined(args.label)}
    label-placement=${ifDefined(args.labelPlacement)}
  ></fds-spinner>
`;

export const Variants = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary"></fds-spinner>
      <fds-spinner variant="secondary"></fds-spinner>
    </div>
  `,
};

export const Sizes = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary" size="small"></fds-spinner>
      <fds-spinner variant="primary" size="medium"></fds-spinner>
    </div>
  `,
};

export const WithLabel = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary" label="Spinner label"></fds-spinner>
      <fds-spinner variant="secondary" label="Spinner label"></fds-spinner>
    </div>
  `,
};

export const LabelPlacement = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner
        variant="primary"
        label="Spinner label"
        label-placement="horizontal"
      ></fds-spinner>
      <fds-spinner variant="primary" label="Spinner label" label-placement="vertical"></fds-spinner>
    </div>
  `,
};
