import React from 'react';
import { Select } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Basic select</Header>
      <Flexbox>
        <Select label="E-mail" />
      </Flexbox>
    </Section>
  </Container>
);
