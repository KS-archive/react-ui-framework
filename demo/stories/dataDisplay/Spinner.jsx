import React from 'react';
import { Spinner } from 'react-ui-framework';
import { Container, Header, Section, Flexbox } from '../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Spinners (from xxl to xs)</Header>
      <Flexbox>
        <Spinner style={{ marginRight: 24 }} size="xxl" />
        <Spinner style={{ marginRight: 24 }} size="xl" />
        <Spinner style={{ marginRight: 24 }} size="lg" />
        <Spinner style={{ marginRight: 24 }} />
        <Spinner style={{ marginRight: 24 }} size="sm" />
        <Spinner style={{ marginRight: 24 }} size="xs" />
      </Flexbox>
    </Section>
  </Container>
);
