import React from 'react';
import { SVGIcon } from 'react-ui-framework';
import { Container, Flexbox, Section, Header } from '../../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Simple icon</Header>
      <Flexbox>
        <SVGIcon
          path="icons/edit.svg"
          width={24}
          height={24}
        />
      </Flexbox>
    </Section>
  </Container>
);
