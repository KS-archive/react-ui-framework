import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, Button } from 'react-ui-framework';

storiesOf('General', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Button', () => (
    <div style={{ width: '100%', padding: 32, display: 'flex' }}>
      <Button>Primary Button</Button>
      <Button style={{ marginLeft: 32 }} ghost>Primary Ghost Button</Button>
    </div>
  ));
