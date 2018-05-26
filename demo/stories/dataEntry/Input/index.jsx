import React from 'react';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import { Input } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

const types = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  tel: 'tel',
  url: 'url',
};

export default () => (
  <Container>
    <Section>
      <Header>Input</Header>
      <Flexbox>
        <Input
          className={text('className', 'inputClass')}
          error={text('error', '')}
          label={text('label', 'E-mail')}
          style={object('style', {})}
          type={select('type', types, 'text')}
          value={text('value', '')}
        />
      </Flexbox>
    </Section>
  </Container>
);
