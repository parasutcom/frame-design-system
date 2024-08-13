import { html } from 'lit';

import './fds-card';

export default {
  title: 'Components/Card',
  component: 'fds-card',
  parameters: {
    docs: {
      description: {
        component:
          'Card is a layout element used to display information or content in an organized format.',
      },
    },
  },
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
      },
    },
    content: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
      },
    },
    footer: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
      },
    },
  },
  args: {
    content: 'Content area',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-card>
    <div slot="header">${args.header}</div>
    <div slot="content">${args.content}</div>
    <div slot="footer">${args.footer}</div>
  </fds-card>
`;

export const WithHeader = {
  render: () => html`
    <fds-card>
      <div slot="header">Header</div>
      <div slot="content">Content area</div>
    </fds-card>
  `,
};

export const WithFooter = {
  render: () => html`
    <fds-card>
      <div slot="content">Content area</div>
      <div slot="footer">
        <fds-button variant="ghost" size="small">Button label</fds-button>
        <fds-button variant="secondary" size="small">Button label</fds-button>
      </div>
    </fds-card>
  `,
};
