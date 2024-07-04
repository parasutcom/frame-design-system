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
          'Badges are a non-interactive way to visually identify and distinguish a specific record type within a system.',
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
    shape: {
      options: ['rounded', 'circle'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'medium',
    letter: 'DS',
    shape: 'rounded',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-badge
    letter=${ifDefined(args.letter)}
    image=${ifDefined(args.image)}
    icon=${ifDefined(args.icon)}
    size=${ifDefined(args.size)}
    shape=${ifDefined(args.shape)}
  >
  </fds-badge>
`;

export const Letter = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge letter="F"></fds-badge>
      <fds-badge letter="DS"></fds-badge>
    </div>
  `,
};

export const Image = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div style="display: flex; align-items: center; gap: 1rem">
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></fds-badge>
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="large"
        ></fds-badge>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem">
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          shape="circle"
        ></fds-badge>
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          shape="circle"
          size="large"
        ></fds-badge>
      </div>
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

export const Shape = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-badge letter="DS"></fds-badge>
      <fds-badge letter="DS" shape="circle"></fds-badge>
    </div>
  `,
};

export const Size = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div style="display: flex; align-items: center; gap: 1rem">
        <fds-badge letter="DS"></fds-badge>
        <fds-badge letter="DS" size="large"></fds-badge>
        <fds-badge letter="DS" shape="circle"></fds-badge>
        <fds-badge letter="DS" shape="circle" size="large"></fds-badge>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem">
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></fds-badge>
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="large"
        ></fds-badge>
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          shape="circle"
        ></fds-badge>
        <fds-badge
          image="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&amp;w=2333&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          shape="circle"
          size="large"
        ></fds-badge>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem">
        <fds-badge icon="bank"></fds-badge>
        <fds-badge icon="bank" size="large"></fds-badge>
      </div>
    </div>
  `,
};
