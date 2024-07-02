import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-badge';
import '../icon/fds-icon';
import { icons } from '../icon/fds-icon-list';

export default {
  title: 'Components/Badge',
  component: 'fds-badge',
  parameters: {
    docs: {
      description: {
        component:
          'A badge is a component that represents the type of record registered in the system. Badges are a non-interactive way to visually identify and distinguish a specific type of record within a system.',
      },
    },
  },
  argTypes: {
    letter: {
      control: {
        type: 'text',
      },
    },
    image: {
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
    size: {
      options: ['medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    circle: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'medium',
    letter: 'DS',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-badge
    letter=${ifDefined(args.letter)}
    image=${ifDefined(args.image)}
    icon=${ifDefined(args.icon)}
    size=${ifDefined(args.size)}
    ?circle=${args.circle}
  >
  </fds-badge>
`;

export const Letter = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge letter="DS"></fds-badge>
      <fds-badge letter="DS" circle></fds-badge>
    </div>
  `,
};

export const Image = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge
        image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        circle
      ></fds-badge>
      <fds-badge
        image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        circle
        size="large"
      ></fds-badge>
    </div>
  `,
};

export const Icon = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge icon="bank"></fds-badge>
      <fds-badge icon="bank" size="large"></fds-badge>
    </div>
  `,
};

export const Circle = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge letter="DS" circle></fds-badge>
      <fds-badge letter="DS" circle size="large"></fds-badge>
    </div>
  `,
};

export const Size = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge letter="MD"></fds-badge>
      <fds-badge letter="LG" size="large"></fds-badge>
    </div>
  `,
};
