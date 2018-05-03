import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Colors from './Colors';
import Grid from './Grid';

storiesOf('Layout', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Colors', () => <Colors />)
  .add('Grid', () => <Grid />);
