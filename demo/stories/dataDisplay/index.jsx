import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Fab from './Fab';
import FabReadme from './Fab/README.md';
import Spinner from './Spinner';
import SpinnerReadme from './Spinner/README.md';
import Tooltip from './Tooltip';
import TooltipReadme from './Tooltip/README.md';

const stories = storiesOf('Data display', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Fab', withReadme(FabReadme, props => <Fab {...props} />));
stories.add('Spinner', withReadme(SpinnerReadme, props => <Spinner {...props} />));
stories.add('Tooltip', withReadme(TooltipReadme, props => <Tooltip {...props} />));
