import React from 'react';
import { Button, Tooltip } from 'react-ui-framework';
import { Container } from '../../../helpers/styles';

export default () => (
  <Container>
    <Tooltip title="I'm the default tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  </Container>
);
