import React from 'react';
import { text, number, object, select } from '@storybook/addon-knobs';
import { WithFigma } from 'storybook-addon-figma';
import { Fab } from 'react-ui-framework';
import { Container } from '../../../helpers/styles';

/* eslint-disable comma-dangle */
const items = [
  {
    title: 'Change tags',
    icon: 'icons/bookmark.svg'
  },
  {
    title: 'Change font',
    icon: 'icons/font.svg'
  },
  {
    title: 'Change colors',
    icon: 'icons/paint-brush.svg'
  },
];
/* eslint-enable */

const positions = {
  'left top': 'left top',
  'left center': 'left center',
  'left bottom': 'left bottom',
  'center top': 'center top',
  'center bottom': 'center bottom',
  'right top': 'right top',
  'right center': 'right center',
  'right bottom': 'right bottom',
};

const offset = [0, 0];

export default () => (
  <WithFigma url="https://www.figma.com/file/UiPAHOSZM4nMLzzICmhlUHle/Data-display?node-id=93%3A2">
    <Container>
      <Fab
        className={text('className', 'fab')}
        count={number('count', 2)}
        icon={text('icon', 'icons/edit.svg')}
        iconOpen={text('iconOpen', 'icons/times.svg')}
        items={object('items', items)}
        offset={object('offset', offset)}
        position={select('position', positions, 'right bottom')}
        title={text('title', 'Edit')}
      />
    </Container>
  </WithFigma>
);
