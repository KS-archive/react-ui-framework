import React from 'react';
import { Select } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Basic select</Header>
      <Flexbox>
        <Select
          label="E-mail"
          name="email"
          items={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
      </Flexbox>
    </Section>
  </Container>
);
