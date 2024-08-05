import { html } from 'lit';

import './fds-list';
import './fds-list-item';

export default {
  title: 'Components/List',
  component: 'fds-list',
  parameters: {
    docs: {
      description: {
        component:
          'List (list-group) is a set of related text labels, each of which starts with a bullet point, number, hyphen, or character.',
      },
    },
  },
  argTypes: {
    type: {
      options: ['bulleted', 'dashed', 'numbered', 'lettered'],
      control: {
        type: 'select',
      },
    },
    nested: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    type: 'bulleted',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-list type=${args.type} ?nested=${args.nested}>
    <fds-list-item>List item</fds-list-item>
    <fds-list-item>List item</fds-list-item>
    <fds-list-item>List item</fds-list-item>
    <fds-list-item>List item</fds-list-item>
  </fds-list>
`;

export const Bulleted = {
  render: () => html`
    <fds-list type="bulleted">
      <fds-list-item>Bulleted list item</fds-list-item>
      <fds-list-item>Bulleted list item</fds-list-item>
      <fds-list-item>Bulleted list item</fds-list-item>
      <fds-list-item>Bulleted list item</fds-list-item>
    </fds-list>
  `,
};

export const Dashed = {
  render: () => html`
    <fds-list type="dashed">
      <fds-list-item>Dashed list item</fds-list-item>
      <fds-list-item>Dashed list item</fds-list-item>
      <fds-list-item>Dashed list item</fds-list-item>
      <fds-list-item>Dashed list item</fds-list-item>
    </fds-list>
  `,
};

export const Numbered = {
  render: () => html`
    <fds-list type="numbered">
      <fds-list-item>Numbered list item</fds-list-item>
      <fds-list-item>Numbered list item</fds-list-item>
      <fds-list-item>Numbered list item</fds-list-item>
      <fds-list-item>Numbered list item</fds-list-item>
    </fds-list>
  `,
};

export const Lettered = {
  render: () => html`
    <fds-list type="lettered">
      <fds-list-item>Lettered list item</fds-list-item>
      <fds-list-item>Lettered list item</fds-list-item>
      <fds-list-item>Lettered list item</fds-list-item>
      <fds-list-item>Lettered list item</fds-list-item>
    </fds-list>
  `,
};

export const Nested = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem">
      <fds-list type="bulleted">
        <fds-list-item>Bulleted list item</fds-list-item>
        <fds-list-item>Bulleted list item</fds-list-item>
        <fds-list-item
          >Bulleted list item
          <fds-list type="dashed" nested>
            <fds-list-item>Dashed list item</fds-list-item>
            <fds-list-item>Dashed list item</fds-list-item>
            <fds-list-item>Dashed list item</fds-list-item>
            <fds-list-item>Dashed list item</fds-list-item>
          </fds-list>
        </fds-list-item>
        <fds-list-item>Bulleted list item</fds-list-item>
      </fds-list>

      <fds-list type="dashed">
        <fds-list-item>Dashed list item</fds-list-item>
        <fds-list-item>Dashed list item</fds-list-item>
        <fds-list-item
          >Dashed list item
          <fds-list type="bulleted" nested>
            <fds-list-item>Bulleted list item</fds-list-item>
            <fds-list-item>Bulleted list item</fds-list-item>
            <fds-list-item>Bulleted list item</fds-list-item>
            <fds-list-item>Bulleted list item</fds-list-item>
          </fds-list>
        </fds-list-item>
        <fds-list-item>Dashed list item</fds-list-item>
      </fds-list>

      <fds-list type="numbered">
        <fds-list-item>Numbered list item</fds-list-item>
        <fds-list-item>Numbered list item</fds-list-item>
        <fds-list-item
          >Numbered list item
          <fds-list type="lettered" nested>
            <fds-list-item>Lettered list item</fds-list-item>
            <fds-list-item>Lettered list item</fds-list-item>
            <fds-list-item>Lettered list item</fds-list-item>
            <fds-list-item>Lettered list item</fds-list-item>
          </fds-list>
        </fds-list-item>
        <fds-list-item>Numbered list item</fds-list-item>
      </fds-list>

      <fds-list type="lettered">
        <fds-list-item>Lettered list item</fds-list-item>
        <fds-list-item>Lettered list item</fds-list-item>
        <fds-list-item
          >Lettered list item
          <fds-list type="numbered" nested>
            <fds-list-item>Numbered list item</fds-list-item>
            <fds-list-item>Numbered list item</fds-list-item>
            <fds-list-item>Numbered list item</fds-list-item>
            <fds-list-item>Numbered list item</fds-list-item>
          </fds-list>
        </fds-list-item>
        <fds-list-item>Lettered list item</fds-list-item>
      </fds-list>
    </div>
  `,
};
