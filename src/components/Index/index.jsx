import React from 'react';
import PropTypes from 'prop-types';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsSystem from 'reapop';

import 'react-tippy/dist/tippy.css';
import 'react-select/dist/react-select.css';
import '../../styles.css';

import getFontAwesome from './getFontAwesome';
import theme from '../../services/notifications/theme';
import { Container, Body } from './styles';

let isFontAwesomeLoaded = false;

const config = {
  google: {
    families: ['Montserrat:400,500,700:latin,latin-ext', 'Raleway:400,500,700:latin,latin-ext'],
  },
};

const Index = ({ after, before, bodyClassName, children, className, fa, notifications }) => {
  if (!isFontAwesomeLoaded) {
    isFontAwesomeLoaded = getFontAwesome(fa, isFontAwesomeLoaded);
  }

  return (
    <WebfontLoader config={config}>
      <Container className={className}>
        {before}
        <Body className={bodyClassName}>
          <Scrollbars>{children}</Scrollbars>
        </Body>
        {after}
        {notifications && <NotificationsSystem theme={theme} />}
      </Container>
    </WebfontLoader>
  );
};

Index.propTypes = {
  after: PropTypes.node,
  before: PropTypes.node,
  bodyClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
  fa: PropTypes.string,
  notifications: PropTypes.bool,
};

Index.defaultProps = {
  after: null,
  before: null,
  bodyClassName: '',
  className: '',
  fa: 'free',
  notifications: false,
};

export default Index;
