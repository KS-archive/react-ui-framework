import React from 'react';
import { Input } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Basic input</Header>
      <Flexbox>
        <Input label="E-mail" />
      </Flexbox>
    </Section>
    <Section>
      <Header>Error state</Header>
      <Flexbox>
        <Input label="E-mail" error="Some error occured" pristine={false} />
      </Flexbox>
    </Section>
  </Container>
);
