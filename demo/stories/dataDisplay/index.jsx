import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Fab from './Fab';
import Tooltip from './Tooltip';

storiesOf('Data display', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Fab', () => <Fab />)
  .add('Tooltip', () => <Tooltip />);
