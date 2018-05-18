import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Modal from './Modal';

storiesOf('Feedback', module)
  .addDecorator(story => <Index fa={__FONT_AWESOME__}>{story()}</Index>)
  .add('Modal', () => <Modal />);
