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
    iconStyle: {
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
    iconStyle: 'fas',
    name: 'bank',
    size: 'medium',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-icon name=${args.name} icon-style=${args.iconStyle} size=${args.size}></fds-icon>
`;

export const Styles = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-icon icon-style="fas" name="bank"></fds-icon>
      <fds-icon icon-style="far" name="bank"></fds-icon>
      <fds-icon icon-style="fad" name="bank"></fds-icon>
    </div>
  `,
};

export const Sizes = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-icon icon-style="fas" name="bank" size="x-small"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="small"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="medium"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="large"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="x-large"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="2x-large"></fds-icon>
      <fds-icon icon-style="fas" name="bank" size="3x-large"></fds-icon>
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
            <fds-icon icon-style="fas" name="${icon}"></fds-icon>
            <div style="font-family: sans-serif;">${icon}</div>
          </div>
        `
      )}
    </div>
  `,
};
