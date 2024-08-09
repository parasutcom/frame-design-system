import { html } from 'lit';

import './fds-aggregate';

export default {
  title: 'Components/Aggregate',
  component: 'fds-aggregate',
  parameters: {
    docs: {
      description: {
        component:
          'Aggregate represents the arithmetic or sum of all values in a data table or index list.',
      },
    },
  },
  argTypes: {
    meta: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
      },
    },
    tally: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
      },
    },
  },
  args: {
    meta: 'Outstanding amuount',
    tally: '1.000,00₺',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-aggregate>
    <p slot="meta">${args.meta}</p>
    <p slot="tally">${args.tally}</p>
  </fds-aggregate>
`;
