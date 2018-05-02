import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../../helpers/Provider';
import Form from './Form';

storiesOf('Services', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Forms', () => (
    <div style={{ width: '100%', padding: 32 }}>
      <Form />
    </div>
  ));
