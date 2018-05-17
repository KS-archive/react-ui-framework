import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-ui-framework';
import Modal from './Modal';

storiesOf('Feedback', module)
  .addDecorator(story => <Index>{story()}</Index>)
  .add('Modal', () => <Modal />);
