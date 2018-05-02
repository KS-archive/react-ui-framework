import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsSystem from 'reapop';
import theme from '../../services/notifications/theme';
import 'react-tippy/dist/tippy.css';
import addCSS from '../../helpers/addCSS';
import { Container, Body } from './styles';
import '../../styles.css';

addCSS('https://static.fontawesome.com/css/fontawesome-app.css');
addCSS('https://pro-staging.fontawesome.com/releases/v5.0.8/css/all.css');

export default ({ children, before, after, notifications }) => (
  <Container>
    {before}
    <Body>
      <Scrollbars>
        {children}
      </Scrollbars>
    </Body>
    {after}
    {notifications && <NotificationsSystem theme={theme} />}
  </Container>
);
