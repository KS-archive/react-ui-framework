import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Steps from './Steps';
import StepsReadme from './Steps/README.md';

const stories = storiesOf('Navigation', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Steps', withReadme(StepsReadme, props => <Steps {...props} />));
