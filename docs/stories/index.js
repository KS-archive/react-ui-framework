import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Index, Button } from 'react-ui-framework';

storiesOf('Button', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button ghost onClick={action('clicked')}>Hello Button</Button>
  ));
