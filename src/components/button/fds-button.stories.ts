import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-button';
import '../icon/fds-icon';
import { icons } from '../icon/fds-icon-list';

export default {
  title: 'Components/Button',
  component: 'fds-button',
  parameters: {
    docs: {
      description: {
        component: 'Button is a primary UI element that can trigger an action in a flow.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'destructive-outline'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    icon: {
      options: icons,
      control: {
        type: 'select',
      },
    },
    iconPlacement: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'inline-radio',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-button
    variant=${ifDefined(args.variant)}
    size=${ifDefined(args.size)}
    ?disabled=${args.disabled}
    ?full-width=${args.fullWidth}
    icon=${ifDefined(args.icon)}
    icon-placement=${ifDefined(args.iconPlacement)}
    type=${ifDefined(args.type)}
    href=${ifDefined(args.href)}
    target=${ifDefined(args.target)}
  >
    ${args.label}
  </fds-button>
`;

export const Variants = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-button variant="primary">Primary button</fds-button>
      <fds-button variant="secondary">Secondary button</fds-button>
      <fds-button variant="outline">Outline button</fds-button>
      <fds-button variant="ghost">Ghost button</fds-button>
      <fds-button variant="destructive">Destructive button</fds-button>
      <fds-button variant="destructive-outline">Destructive outline button</fds-button>
    </div>
  `,
};

export const Size = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-button variant="primary" size="large">Large button</fds-button>
      <fds-button variant="primary" size="medium">Medium button</fds-button>
      <fds-button variant="primary" size="small">Small button</fds-button>
    </div>
  `,
};

export const FullWidth = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-button variant="primary" full-width>Full width button</fds-button>
      <fds-button variant="outline" full-width>Full width button</fds-button>
    </div>
  `,
};

export const Disabled = {
  render: () => html`
    <div style="display: flex; gap: 1rem">
      <fds-button variant="primary" disabled>Disabled button</fds-button>
      <fds-button variant="outline" disabled>Disabled button</fds-button>
    </div>
  `,
};

export const WithIcon = {
  render: () => html`
    <div style="display: flex; gap: 1rem">
      <fds-button variant="primary" icon="filter">Icon left</fds-button>
      <fds-button variant="primary" icon="plus" icon-placement="right">Icon right</fds-button>
    </div>
  `,
};

export const IconOnly = {
  render: () => html`
    <div style="display: flex; gap: 1rem">
      <fds-button variant="primary" icon="plus"></fds-button>
      <fds-button variant="outline" icon="plus"></fds-button>
    </div>
  `,
};
