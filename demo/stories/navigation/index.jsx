import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Index } from 'react-ui-framework';
import Pagination from './Pagination';
import PaginationReadme from './Pagination/README.md';

const stories = storiesOf('Navigation', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Pagination', withReadme(PaginationReadme, props => <Pagination {...props} />));
