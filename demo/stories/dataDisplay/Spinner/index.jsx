import React from 'react';
import { text, number, object, select } from '@storybook/addon-knobs';
import { Spinner } from 'react-ui-framework';
import { Container, Header, Section, Flexbox } from '../../../helpers/styles';

const sizes = {
  xxl: 'xxl',
  xl: 'xl',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
};

export default () => (
  <Container>
    <Section>
      <Header>Spinners (from xxl to xs)</Header>
      <Flexbox>
        <Spinner
          className={text('className', 'spinner')}
          duration={number('duration', 1500)}
          size={select('size', sizes, 'md')}
          style={object('style', { margin: 16 })}
        />
      </Flexbox>
    </Section>
  </Container>
);
