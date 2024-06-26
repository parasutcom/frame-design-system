import { addons } from '@storybook/manager-api';
import FdsTheme from './fds-theme';

addons.setConfig({
  theme: FdsTheme,
});