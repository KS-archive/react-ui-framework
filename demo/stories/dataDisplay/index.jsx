import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Tooltip from './Tooltip';

storiesOf('Data display', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Tooltip', () => <Tooltip />);
