import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { WithFigma } from 'storybook-addon-figma';
import { Container, Flexbox, Section, Header } from '../../../helpers/styles';
import { Steps } from 'react-ui-framework'

const kinds = {
  primary: 'primary',
  accent: 'accent',
  white: 'white',
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning',
  grey: 'grey',
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const types = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

export default () => (
  <WithFigma url="https://www.figma.com/file/cN9ICvikYvcorYB3MSFeTucF/General?node-id=1%3A2">
    <Container style={{ backgroundColor: '#333', height: '100vh' }}>
      <Section>
        <Header style={{ color: '#fff' }}>Steps</Header>
        <Flexbox>
          <Steps>1</Steps>
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
