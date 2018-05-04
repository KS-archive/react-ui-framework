import React from 'react';
import { Fab } from 'react-ui-framework';
import { Container } from '../../helpers/styles';

export default () => (
  <Container>
    {/* <Fab
      title="Filters"
      icon="icons/filter.svg"
      count={1}
    /> */}
    <Fab
      icon="icons/edit.svg"
      iconOpen="icons/times.svg"
      title="Edit"
      items={[
        {
          title: 'Change tags',
          icon: 'icons/bookmark.svg',
        },
        {
          title: 'Change font',
          icon: 'icons/font.svg',
        },
        {
          title: 'Change colors',
          icon: 'icons/paint-brush.svg',
        },
      ]}
    />
  </Container>
);
