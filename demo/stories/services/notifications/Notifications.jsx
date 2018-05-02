import React, { PureComponent, Fragment } from 'react';
import { withNotifications } from 'react-ui-framework/services/notifications';
import { Section, Flexbox, Header, StyledButton } from './styles';

@withNotifications
export default class NotificationsButton extends PureComponent {
  notifyInfo = () => {
    this.props.notify({
      title: 'Info notification',
      message: 'This is an exmple of info notification.',
      status: 'info',
    });
  }

  notifySuccess = () => {
    this.props.notify({
      title: 'Success notification',
      message: 'This is an exmple of success notification.',
      status: 'success',
    });
  }

  notifyWarning = () => {
    this.props.notify({
      title: 'Warning notification',
      message: 'This is an exmple of warning notification.',
      status: 'warning',
    });
  }

  notifyError = () => {
    this.props.notify({
      title: 'Error notification',
      message: 'This is an exmple of error notification.',
      status: 'error',
    });
  }

  render() {
    return (
      <Fragment>
        <Section>
          <Header>Basic notifications</Header>
          <Flexbox>
            <StyledButton onClick={this.notifyInfo}>Info</StyledButton>
            <StyledButton onClick={this.notifySuccess}>Success</StyledButton>
            <StyledButton onClick={this.notifyWarning}>Warning</StyledButton>
            <StyledButton onClick={this.notifyError}>Error</StyledButton>
          </Flexbox>
        </Section>
      </Fragment>
    );
  }
}
