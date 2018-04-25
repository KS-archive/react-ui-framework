import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Index, Button } from 'react-ui-framework';

storiesOf('Buttons', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Primary button', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Ghost button', () => (
    <Button ghost onClick={action('clicked')}>Hello Button</Button>
  ));
