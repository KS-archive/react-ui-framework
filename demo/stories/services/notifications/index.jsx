import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../../helpers/Provider';
import Notifications from './Notifications';

storiesOf('Services', module)
  .addDecorator(story => <Provider notifications story={story()} />)
  .add('Notifications', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <Notifications />
    </div>
  ));
