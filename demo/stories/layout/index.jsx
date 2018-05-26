import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Colors from './Colors';
import ColorsReadme from './Colors/README.md';
import Grid from './Grid';
import GridReadme from './Grid/README.md';

const stories = storiesOf('Layout', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index>{story()}</Index>);
stories.add('Colors', withReadme(ColorsReadme, props => <Colors {...props} />));
stories.add('Grid', withReadme(GridReadme, props => <Grid {...props} />));
