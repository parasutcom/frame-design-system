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
        component: 'Description will come',
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
    placement: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Loading label',
    placement: 'horizontal',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-spinner
    variant=${ifDefined(args.variant)}
    size=${ifDefined(args.size)}
    label=${ifDefined(args.label)}
    placement=${ifDefined(args.placement)}
  ></fds-spinner>
`;

export const Variants = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary" label="Loading label"></fds-spinner>
      <fds-spinner variant="secondary" label="Loading label"></fds-spinner>
    </div>
  `,
};

export const Size = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary" label="Loading label" size="medium"></fds-spinner>
      <fds-spinner variant="primary" label="Loading label" size="small"></fds-spinner>
    </div>
  `,
};

export const Placement = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary" label="Loading" placement="horizontal"></fds-spinner>
      <fds-spinner variant="primary" label="Loading" placement="vertical"></fds-spinner>
    </div>
  `,
};

export const Plain = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-spinner variant="primary"></fds-spinner>
      <fds-spinner variant="secondary"></fds-spinner>
    </div>
  `,
};
