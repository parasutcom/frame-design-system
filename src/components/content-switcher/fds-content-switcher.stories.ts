import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-content-switcher';
import './content-switcher-button/fds-content-switcher-button';

export default {
  title: 'Components/Content Switcher',
  component: 'fds-content-switcher',
  parameters: {
    docs: {
      description: {
        component:
          'The content switcher is a layout-level component that helps differentiate and group similar or identical types of records and allows users to switch between them within itself.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline'],
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
  },
  args: {
    variant: 'solid',
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-content-switcher variant=${ifDefined(args.variant)} size=${ifDefined(args.size)}>
    <fds-content-switcher-button selected>First item</fds-content-switcher-button>
    <fds-content-switcher-button>Second item</fds-content-switcher-button>
    <fds-content-switcher-button>Third item</fds-content-switcher-button>
  </fds-content-switcher>
`;

export const Variants = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-content-switcher variant="solid" size="medium">
        <fds-content-switcher-button selected>First item</fds-content-switcher-button>
        <fds-content-switcher-button>Second item</fds-content-switcher-button>
        <fds-content-switcher-button>Third item</fds-content-switcher-button>
      </fds-content-switcher>

      <fds-content-switcher variant="outline" size="medium">
        <fds-content-switcher-button selected>First item</fds-content-switcher-button>
        <fds-content-switcher-button>Second item</fds-content-switcher-button>
        <fds-content-switcher-button>Third item</fds-content-switcher-button>
      </fds-content-switcher>
    </div>
  `,
};

export const Sizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-content-switcher variant="solid" size="small">
        <fds-content-switcher-button selected>First item</fds-content-switcher-button>
        <fds-content-switcher-button>Second item</fds-content-switcher-button>
        <fds-content-switcher-button>Third item</fds-content-switcher-button>
      </fds-content-switcher>

      <fds-content-switcher variant="solid" size="medium">
        <fds-content-switcher-button selected>First item</fds-content-switcher-button>
        <fds-content-switcher-button>Second item</fds-content-switcher-button>
        <fds-content-switcher-button>Third item</fds-content-switcher-button>
      </fds-content-switcher>
    </div>
  `,
};
