import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Input from './Input';

storiesOf('Data entry', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Input', () => <Input />);
