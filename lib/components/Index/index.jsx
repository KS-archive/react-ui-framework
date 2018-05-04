import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsSystem from 'reapop';
import 'react-tippy/dist/tippy.css';
import { colors } from '../../utils';
import theme from '../../services/notifications/theme';
import enhanceHead from '../../helpers/enhanceHead';
import { Container, Body } from './styles';
import '../../styles.css';

const getFontAwesome = (fa) => {
  if (fa === 'free') {
    enhanceHead('link', {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: 'sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9',
      crossorigin: 'anonymous',
    });
    colors.setValue('--fa-light', '600');
  } else if (fa === 'local') {
    enhanceHead('link', {
      rel: 'stylesheet prefetch',
      href: 'https://static.fontawesome.com/css/fontawesome-app.css',
    });
    enhanceHead('link', {
      rel: 'stylesheet prefetch',
      href: 'https://pro-staging.fontawesome.com/releases/v5.0.8/css/all.css',
    });
    colors.setValue('--fa-light', '300');
  } else {
    enhanceHead('link', {
      rel: 'stylesheet',
      href: 'https://pro.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: fa,
      crossorigin: 'anonymous',
    });
    colors.setValue('--fa-light', '300');
  }
};

export default ({ children, before, after, notifications, fa = 'free' }) => {
  getFontAwesome(fa);

  return (
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
};
