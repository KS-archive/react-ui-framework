import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Container, Body } from './styles';

import '../../styles.css';

export default ({ children, before, after }) => (
  <Container>
    {before}
    <Body>
      <Scrollbars>
        {children}
      </Scrollbars>
    </Body>
    {after}
  </Container>
);
