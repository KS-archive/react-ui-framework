import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../helpers/Provider';
import Forms from './forms';
import Notifications from './notifications';

storiesOf('Services', module)
  .addDecorator(story => <Provider notifications story={story()} />)
  .add('Forms', () => <Forms />)
  .add('Notifications', () => <Notifications />);
