import { html } from 'lit';

import './fds-icon';
import { icons } from './fds-icon-list';

export default {
  title: 'Components/Icon',
  component: 'fds-icon',
  parameters: {
    docs: {
      description: {
        component:
          'Icons visually express complex interface actions and contribute to creating visual harmony in the overall layout.',
      },
    },
  },
  argTypes: {
    name: {
      options: icons,
      control: {
        type: 'select',
      },
    },
    prefix: {
      options: ['fas', 'far', 'fad'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['x-small', 'small', 'medium', 'large', 'x-large', '2x-large', '3x-large'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    prefix: 'fas',
    name: 'home',
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-icon name=${args.name} prefix=${args.prefix} size=${args.size}></fds-icon>
`;

export const Size = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-icon prefix="fas" name="home" size="x-small"></fds-icon>
      <fds-icon prefix="fas" name="home" size="small"></fds-icon>
      <fds-icon prefix="fas" name="home" size="medium"></fds-icon>
      <fds-icon prefix="fas" name="home" size="large"></fds-icon>
      <fds-icon prefix="fas" name="home" size="x-large"></fds-icon>
      <fds-icon prefix="fas" name="home" size="2x-large"></fds-icon>
      <fds-icon prefix="fas" name="home" size="3x-large"></fds-icon>
    </div>
  `,
};

export const IconList = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(3, auto); grid-gap: 1rem; justify-content: space-around;"
    >
      ${icons.map(
        icon => html`
          <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem">
            <fds-icon prefix="far" name="${icon}"></fds-icon>
            <div style="font-family: sans-serif;">${icon}</div>
          </div>
        `
      )}
    </div>
  `,
};
