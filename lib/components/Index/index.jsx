import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import 'react-tippy/dist/tippy.css';
import { Container, Body } from './styles';
import '../../styles.css';

document.addEventListener('touchstart', () => {}, false);

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
