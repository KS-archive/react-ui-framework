import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import ColorCard from '../../../helpers/ColorCard';
import { Container, Section, Header, Flexbox } from '../../../helpers/styles';

export default () => (
  <WithFigma url="https://www.figma.com/file/fokLDJ6eeChuquGuRz3mlbWN/Layout?node-id=1%3A5">
    <Container style={{ backgroundColor: '#fff' }}>
      <Section>
        <Header>Primary</Header>
        <Flexbox>
          <ColorCard colorName="primary1" colorValue="var(--primary1)" />
          <ColorCard colorName="primary2" colorValue="var(--primary2)" />
          <ColorCard colorName="primary3" colorValue="var(--primary3)" />
        </Flexbox>
      </Section>
      <Section>
        <Header>Accent</Header>
        <Flexbox>
          <ColorCard colorName="accent1" colorValue="var(--accent1)" />
          <ColorCard colorName="accent2" colorValue="var(--accent2)" />
        </Flexbox>
      </Section>
      <Section>
        <Header>Greys</Header>
        <Flexbox>
          <ColorCard colorName="grey1" colorValue="var(--grey1)" />
          <ColorCard colorName="grey2" colorValue="var(--grey2)" />
          <ColorCard colorName="grey3" colorValue="var(--grey3)" />
          <ColorCard colorName="grey4" colorValue="var(--grey4)" />
          <ColorCard colorName="grey5" colorValue="var(--grey5)" />
          <ColorCard colorName="grey6" colorValue="var(--grey6)" />
          <ColorCard colorName="grey7" colorValue="var(--grey7)" />
        </Flexbox>
      </Section>
      <Section>
        <Header>Notifications</Header>
        <Flexbox>
          <ColorCard colorName="info" colorValue="var(--info)" />
          <ColorCard colorName="success" colorValue="var(--success)" />
          <ColorCard colorName="warning" colorValue="var(--warning)" />
          <ColorCard colorName="error" colorValue="var(--error)" />
        </Flexbox>
      </Section>
      <Section>
        <Header>Text</Header>
        <Flexbox>
          <ColorCard colorName="text1" colorValue="var(--text1)" />
          <ColorCard colorName="text2" colorValue="var(--text2)" />
          <ColorCard colorName="text3" colorValue="var(--text3)" />
        </Flexbox>
      </Section>
      <Section>
        <Header>Other</Header>
        <Flexbox>
          <ColorCard colorName="background" colorValue="var(--background)" />
          <ColorCard colorName="overlay" colorValue="var(--overlay)" />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
