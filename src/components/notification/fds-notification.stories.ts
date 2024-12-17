import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './fds-notification';
import '../icon/fds-icon';
import '../button/fds-button';
import '../list/fds-list';

export default {
  title: 'Components/Notification',
  component: 'fds-notification',
  parameters: {
    docs: {
      description: {
        component:
          'Notification is a component that provides the user with relevant information and updates about the outcome of an action they have taken.',
      },
    },
  },
  argTypes: {
    status: {
      options: ['information', 'success', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['line', 'app', 'toast'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    status: 'information',
    type: 'line',
    icon: false,
    closable: false,
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Base = (args: any) => html`
  <fds-notification
    status=${ifDefined(args.status)}
    type=${ifDefined(args.type)}
    ?icon=${args.icon}
    ?closable=${args.closable}
    heading=${ifDefined(args.heading)}
  >
    A notification message goes here
  </fds-notification>
`;

export const Statuses = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification status="information">
        An info notification message goes here
      </fds-notification>
      <fds-notification status="success">
        A success notification message goes here
      </fds-notification>
      <fds-notification status="warning">
        A warning notification message goes here
      </fds-notification>
      <fds-notification status="error"> An error notification message goes here </fds-notification>
    </div>
  `,
};

export const Types = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification type="app" status="information">
        An info notification message goes here
      </fds-notification>
      <fds-notification type="line" status="information">
        An info notification message goes here
      </fds-notification>
      <fds-notification type="toast" status="information">
        An info notification message goes here
      </fds-notification>
    </div>
  `,
};

export const WithHeading = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification status="information" heading="Informational notification">
        An info notification message goes here
      </fds-notification>
      <fds-notification status="success" heading="Success notification">
        A success notification message goes here
      </fds-notification>
      <fds-notification status="warning" heading="Warning notification">
        A warning notification message goes here
      </fds-notification>
      <fds-notification status="error" heading="Error notification">
        An error notification message goes here
      </fds-notification>
    </div>
  `,
};

export const WithIcon = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification status="information" heading="Informational notification" icon>
        An info notification message goes here
      </fds-notification>
      <fds-notification status="success" heading="Success notification" icon>
        A success notification message goes here
      </fds-notification>
      <fds-notification status="warning" heading="Warning notification" icon>
        A warning notification message goes here
      </fds-notification>
      <fds-notification status="error" heading="Error notification" icon>
        An error notification message goes here
      </fds-notification>
    </div>
  `,
};

export const WithList = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification status="information" heading="Informational notification" icon>
        <fds-list type="bulleted">
          <fds-list-item>An info notification message goes here</fds-list-item>
          <fds-list-item>An info notification message goes here</fds-list-item>
          <fds-list-item>An info notification message goes here</fds-list-item>
          <fds-list-item>An info notification message goes here</fds-list-item>
        </fds-list>
      </fds-notification>
      <fds-notification status="success" heading="Success notification" icon>
        <fds-list type="bulleted">
          <fds-list-item>A success notification message goes here</fds-list-item>
          <fds-list-item>A success notification message goes here</fds-list-item>
          <fds-list-item>A success notification message goes here</fds-list-item>
          <fds-list-item>A success notification message goes here</fds-list-item>
        </fds-list>
      </fds-notification>
      <fds-notification status="warning" heading="Warning notification" icon>
        <fds-list type="bulleted">
          <fds-list-item>A warning notification message goes here</fds-list-item>
          <fds-list-item>A warning notification message goes here</fds-list-item>
          <fds-list-item>A warning notification message goes here</fds-list-item>
          <fds-list-item>A warning notification message goes here</fds-list-item>
        </fds-list>
      </fds-notification>
      <fds-notification status="error" heading="Error notification" icon>
        <fds-list type="bulleted">
          <fds-list-item>An error notification message goes here</fds-list-item>
          <fds-list-item>An error notification message goes here</fds-list-item>
          <fds-list-item>An error notification message goes here</fds-list-item>
          <fds-list-item>An error notification message goes here</fds-list-item>
        </fds-list>
      </fds-notification>
    </div>
  `,
};

export const Closable = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <fds-notification
        type="app"
        status="information"
        heading="Informational notification"
        closable
      >
        An info notification message goes here
      </fds-notification>
      <fds-notification
        type="line"
        status="information"
        heading="Informational notification"
        closable
      >
        An info notification message goes here
      </fds-notification>
      <fds-notification
        type="toast"
        status="information"
        heading="Informational notification"
        closable
      >
        An info notification message goes here
      </fds-notification>
    </div>
  `,
};
