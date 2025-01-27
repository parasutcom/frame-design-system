import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Get Started',['Overview', 'Installation', 'Changelog'], 'Frameworks', 'Components', 'Design Tokens'],
        locales: 'en-US',
      },
    },
  },
};

export default preview;
