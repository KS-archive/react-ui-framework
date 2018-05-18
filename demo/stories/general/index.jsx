import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Button from './Button';
import ButtonReadme from './Button/README.md';
import SVGIcon from './SVGIcon';
import SVGIconReadme from './SVGIcon/README.md';

storiesOf('General', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Button', withReadme(ButtonReadme, () => <Button />))
  .add('SVGIcon', withReadme(SVGIconReadme, () => <SVGIcon />));
