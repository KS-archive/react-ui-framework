import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Provider from '../../helpers/Provider';
import Forms from './forms';
import Notifications from './notifications';
import Search from './search';

storiesOf('Services', module)
  .addDecorator(story => <Provider notifications story={story()} />)
  .addDecorator(StoryRouter())
  .add('Forms', () => <Forms />)
  .add('Notifications', () => <Notifications />)
  .add('Search', () => <Search />);
