import React, { PureComponent } from 'react';
import { withNotifications } from 'react-ui-framework/services/notifications';
import { Container, Section, Flexbox, Header, StyledButton } from '../../../helpers/styles';

@withNotifications
export default class Notifications extends PureComponent {
  notifyInfo = () => {
    this.props.notify({
      title: 'Info notification',
      message: 'This is an exmple of info notification.',
      status: 'info',
      dismissAfter: 0,
    });
  };

  notifySuccess = () => {
    this.props.notify({
      title: 'Success notification',
      message: 'This is an exmple of success notification.',
      status: 'success',
      dismissAfter: 0,
    });
  };

  notifyWarning = () => {
    this.props.notify({
      title: 'Warning notification',
      message: 'This is an exmple of warning notification.',
      status: 'warning',
      dismissAfter: 0,
    });
  };

  notifyError = () => {
    this.props.notify({
      title: 'Error notification',
      message: 'This is an exmple of error notification.',
      status: 'error',
      dismissAfter: 0,
    });
  };

  notifyLoading = () => {
    this.props.notify({
      title: 'Loading notification',
      message: 'This is an exmple of loading notification.',
      status: 'loading',
      dismissAfter: 0,
    });
  };

  notifyOneButton = () => {
    this.props.notify({
      title: 'Notification with button',
      message: 'This is an notification with one button.',
      status: 'info',
      dismissAfter: 0,
      buttons: [
        {
          name: 'Close',
        },
      ],
    });
  };

  notifyTwoButtons = () => {
    this.props.notify({
      title: 'Notification with two buttons',
      message: 'This is an notification with two buttons',
      status: 'info',
      dismissAfter: 0,
      buttons: [
        {
          name: 'Confirm',
        },
        {
          name: 'Cancel',
        },
      ],
    });
  };

  notifyTwoButtonsWithPrimary = () => {
    this.props.notify({
      title: 'Notification with primary button',
      message: 'This notification has one primary button.',
      status: 'info',
      dismissAfter: 0,
      buttons: [
        {
          name: 'Confirm',
          primary: true,
        },
        {
          name: 'Cancel',
        },
      ],
    });
  };

  notifyWithImage = () => {
    this.props.notify({
      title: 'Notification with image',
      message: 'This notification contains an image instead of icon.',
      status: 'info',
      dismissAfter: 0,
      image: 'img/squirrel.jpg',
    });
  };

  notifyWithClosingButton = () => {
    this.props.notify({
      title: ' Notification with closing button',
      message: 'This notification can be closed only if you click button.',
      status: 'info',
      dismissAfter: 0,
      closeButton: true,
    });
  };

  render() {
    return (
      <Container>
        <Section>
          <Header>Basic notifications</Header>
          <Flexbox>
            <StyledButton onClick={this.notifyInfo}>Info</StyledButton>
            <StyledButton onClick={this.notifySuccess}>Success</StyledButton>
            <StyledButton onClick={this.notifyWarning}>Warning</StyledButton>
            <StyledButton onClick={this.notifyError}>Error</StyledButton>
            <StyledButton onClick={this.notifyLoading}>Loading</StyledButton>
          </Flexbox>
        </Section>
        <Section>
          <Header>Notifications with buttons</Header>
          <Flexbox>
            <StyledButton onClick={this.notifyOneButton}>One button</StyledButton>
            <StyledButton onClick={this.notifyTwoButtons}>Two buttons</StyledButton>
            <StyledButton onClick={this.notifyTwoButtonsWithPrimary}>
              Two buttons (first as primary)
            </StyledButton>
          </Flexbox>
        </Section>
        <Section>
          <Header>Other variants</Header>
          <Flexbox>
            <StyledButton onClick={this.notifyWithImage}>With image</StyledButton>
            <StyledButton onClick={this.notifyWithClosingButton}>With closing button</StyledButton>
          </Flexbox>
        </Section>
      </Container>
    );
  }
}
