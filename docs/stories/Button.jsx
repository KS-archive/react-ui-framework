import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index, Button } from 'react-ui-framework';

storiesOf('Buttons', module)
  .addDecorator(story => <Index><div style={{ width: '100%', padding: 32 }}>{story()}</div></Index>)
  .add('Primary button', () => (
    <Button>Primary Button</Button>
  ))
  .add('Ghost button', () => (
    <Button ghost>Primary Ghost Button</Button>
  ));
