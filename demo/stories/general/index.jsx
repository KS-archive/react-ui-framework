import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Buttons from './Buttons';

storiesOf('General', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Buttons', () => <Buttons />);
