import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-link';
import '../icon/fds-icon';

export default {
  title: 'Components/Link',
  component: 'fds-link',
  parameters: {
    docs: {
      description: {
        component:
          'Links are a fundamental element that allows users to redirect to a different page on the interface or to an external resource directly using a sentence, paragraph, or label with the <a> (Anchor) tag.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    withIcon: {
      control: {
        type: 'boolean',
      },
    },
    inline: {
      control: {
        type: 'boolean',
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
    href: '#',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-link
    variant=${ifDefined(args.variant)}
    ?with-icon=${args.withIcon}
    ?inline=${args.inline}
    href=${ifDefined(args.href)}
    target=${ifDefined(args.target)}
    >Link
  </fds-link>
`;

export const Variants = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-link variant="primary">Primary link</fds-link>
      <fds-link variant="secondary">Secondary link</fds-link>
      <div style="background-color: #000;">
        <fds-link variant="dark">Dark link</fds-link>
      </div>
    </div>
  `,
};

export const Inline = {
  render: () => html`
    <p>
      Your invoice credit is running low, which may affect your ability to process invoices. Please
      top up your credits by <fds-link variant="primary" inline>viewing our plans </fds-link> to
      avoid interruptions. If you need assistance, our
      <fds-link variant="primary" inline>support team</fds-link> is available to help.
    </p>
  `,
};

export const WithIcon = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-link variant="primary" with-icon>Primary link</fds-link>
      <fds-link variant="secondary" with-icon>Secondary link</fds-link>
      <div style="background-color: #000;">
        <fds-link variant="dark" with-icon>Dark link</fds-link>
      </div>
    </div>
  `,
};
