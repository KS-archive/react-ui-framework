import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import Modal from './Modal';
import ModalReadme from './Modal/README.md';

const stories = storiesOf('Feedback', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>);
stories.add('Modal', withReadme(ModalReadme, props => <Modal {...props} />));
