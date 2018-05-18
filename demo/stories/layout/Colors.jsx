import React from 'react';
import { ColorCard } from 'react-ui-framework';
import { Container, Section, Header, Flexbox } from '../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Primary colors</Header>
      <Flexbox>
        <ColorCard color="var(--primary1)" />
        <ColorCard color="var(--primary2)" />
        <ColorCard color="var(--primary3)" />
      </Flexbox>
    </Section>
    <Section>
      <Header>Accent colors</Header>
      <Flexbox>
        <ColorCard color="var(--accent1)" />
        <ColorCard color="var(--accent2)" />
      </Flexbox>
    </Section>
    <Section>
      <Header>Greys</Header>
      <Flexbox>
        <ColorCard color="var(--grey1)" />
        <ColorCard color="var(--grey2)" />
        <ColorCard color="var(--grey3)" />
        <ColorCard color="var(--grey4)" />
        <ColorCard color="var(--grey5)" />
        <ColorCard color="var(--grey6)" />
        <ColorCard color="var(--grey7)" />
      </Flexbox>
    </Section>
    <Section>
      <Header>Notifications</Header>
      <Flexbox>
        <ColorCard color="var(--error)" />
        <ColorCard color="var(--warning)" />
        <ColorCard color="var(--success)" />
        <ColorCard color="var(--info)" />
      </Flexbox>
    </Section>
  </Container>
);
