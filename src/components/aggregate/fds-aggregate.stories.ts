import { html } from 'lit';

import './fds-aggregate';

export default {
  title: 'Components/Aggregate',
  component: 'fds-aggregate',
  parameters: {
    docs: {
      description: {
        component:
          'Aggregate is the representation of the arithmetic or value sum of all aggregatable values present in a data table or index list.',
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
    meta: 'To be collected',
    tally: '1.000,00₺',
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Default = (args: any) => html`
  <fds-aggregate>
    <p slot="meta">${args.meta}</p>
    <p slot="tally">${args.tally}</p>
  </fds-aggregate>
`;
