import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Sidebar from './Sidebar';
import SidebarReadme from './Sidebar/README.md';

const stories = storiesOf('Navigation', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Sidebar', withReadme(SidebarReadme, props => <Sidebar />));
