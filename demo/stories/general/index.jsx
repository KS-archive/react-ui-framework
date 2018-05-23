import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Button from './Button';
import ButtonReadme from './Button/README.md';
import SVGIcon from './SVGIcon';
import SVGIconReadme from './SVGIcon/README.md';

const stories = storiesOf('General', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index>{story()}</Index>);
stories.add('Button', withReadme(ButtonReadme, props => <Button {...props} />));
stories.add('SVGIcon', withReadme(SVGIconReadme, props => <SVGIcon {...props} />));
