import React from 'react';
import { Container, Flexbox, Section, Header, StyledButton } from '../../helpers/styles';

export default () => (
  <Container style={{ backgroundColor: '#333' }}>
    <Section>
      <Header style={{ color: '#fff' }}>Filled buttons</Header>
      <Flexbox>
        <StyledButton>Primary</StyledButton>
        <StyledButton kind="accent">Accent</StyledButton>
        <StyledButton kind="white">White</StyledButton>
        <StyledButton kind="info">Info</StyledButton>
        <StyledButton kind="success">Success</StyledButton>
        <StyledButton kind="warning">Warning</StyledButton>
        <StyledButton kind="error">Error</StyledButton>
      </Flexbox>
    </Section>
    <Section>
      <Header style={{ color: '#fff' }}>Ghost buttons</Header>
      <Flexbox>
        <StyledButton ghost>Primary</StyledButton>
        <StyledButton ghost kind="accent">Accent</StyledButton>
        <StyledButton ghost kind="white">White</StyledButton>
        <StyledButton ghost kind="info">Info</StyledButton>
        <StyledButton ghost kind="success">Success</StyledButton>
        <StyledButton ghost kind="warning">Warning</StyledButton>
        <StyledButton ghost kind="error">Error</StyledButton>
      </Flexbox>
    </Section>
    <Section>
      <Header style={{ color: '#fff' }}>Buttons sizes</Header>
      <Flexbox>
        <StyledButton size="lg">Large</StyledButton>
        <StyledButton>Medium (default)</StyledButton>
        <StyledButton size="sm">Small</StyledButton>
      </Flexbox>
    </Section>
  </Container>
);
