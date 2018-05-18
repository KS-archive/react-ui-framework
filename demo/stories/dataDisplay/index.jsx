import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import { withReadme } from 'storybook-readme';
import Fab from './Fab';
import FabReadme from './Fab/README.md';
import Spinner from './Spinner';
import SpinnerReadme from './Spinner/README.md';
import Tooltip from './Tooltip';

storiesOf('Data display', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Fab', withReadme(FabReadme, () => <Fab />))
  .add('Spinner', withReadme(SpinnerReadme, () => <Spinner />))
  .add('Tooltip', () => <Tooltip />);
