import React, { PureComponent } from 'react';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsSystem from 'reapop';

import 'react-tippy/dist/tippy.css';
import 'react-select/dist/react-select.css';

import { styles } from '../../utils';
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
    styles.setValue('--fa-light', '600');
  } else if (fa === 'local') {
    enhanceHead('link', {
      rel: 'stylesheet prefetch',
      href: 'https://static.fontawesome.com/css/fontawesome-app.css',
    });
    enhanceHead('link', {
      rel: 'stylesheet prefetch',
      href: 'https://pro-staging.fontawesome.com/releases/v5.0.8/css/all.css',
    });
    styles.setValue('--fa-light', '300');
  } else {
    enhanceHead('link', {
      rel: 'stylesheet',
      href: 'https://pro.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: fa,
      crossorigin: 'anonymous',
    });
    styles.setValue('--fa-light', '300');
  }
};

const config = {
  google: {
    families: [
      'Montserrat:400,500,700:latin,latin-ext',
      'Raleway:400,500,700:latin,latin-ext',
    ],
  },
};

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    getFontAwesome(this.props.fa || 'free');
  }

  render() {
    const { children, before, after, notifications, className, bodyClassName } = this.props;

    return (
      <WebfontLoader config={config}>
        <Container className={className}>
          {before}
          <Body className={bodyClassName}>
            <Scrollbars>
              {children}
            </Scrollbars>
          </Body>
          {after}
          {notifications && <NotificationsSystem theme={theme} />}
        </Container>
      </WebfontLoader>
    );
  }
}
