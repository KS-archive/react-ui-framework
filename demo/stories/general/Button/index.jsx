import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { WithFigma } from 'storybook-addon-figma';
import { Container, Flexbox, Section, Header, StyledButton } from '../../../helpers/styles';

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
        <Header style={{ color: '#fff' }}>Button</Header>
        <Flexbox>
          <StyledButton
            className={text('className', 'btn')}
            ghost={boolean('ghost', false)}
            kind={select('kind', kinds, 'primary')}
            label={text('label', 'Button example')}
            size={select('size', sizes, 'md')}
            style={object('style', {})}
            type={select('type', types, 'button')}
          />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
