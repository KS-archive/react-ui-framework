import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Buttons from './Buttons';
import ButtonsReadme from './Buttons/README.md';
import SVGIcon from './SVGIcon';

storiesOf('General', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Buttons', withReadme(ButtonsReadme, () => <Buttons />))
  .add('SVGIcon', () => <SVGIcon />);
