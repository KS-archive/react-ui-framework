import React from 'react';
import { Container, Flexbox, StyledButton } from '../../helpers/styles';

export default () => (
  <Container>
    <Flexbox>
      <StyledButton>Primary Button</StyledButton>
      <StyledButton ghost>Ghost Button</StyledButton>
    </Flexbox>
  </Container>
);
