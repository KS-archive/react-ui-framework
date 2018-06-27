import React from 'react';
import { Steps } from 'react-ui-framework'
import { number } from '@storybook/addon-knobs';
import { WithFigma } from 'storybook-addon-figma';
import { Container, Flexbox, Section, Header } from '../../../helpers/styles';

export default () => (
  <WithFigma url="https://www.figma.com/file/cN9ICvikYvcorYB3MSFeTucF/General?node-id=1%3A2">
    <Container style={{ backgroundColor: '#333', height: '100vh' }}>
      <Section>
        <Header style={{ color: '#fff' }}>Steps</Header>
        <Flexbox>
          <Steps amount={number('amount', 4)} step={number('step', 2)} />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
