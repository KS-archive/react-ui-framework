import React from 'react';
import { SVGIcon } from 'react-ui-framework';
import { text, number, color } from '@storybook/addon-knobs';
import { Container, Flexbox, Section, Header } from '../../../helpers/styles';

export default () => (
  <Container>
    <Section>
      <Header>Simple icon</Header>
      <Flexbox>
        <SVGIcon
          className={text('className', 'icon')}
          fill={color('fill', 'hsl(209, 100%, 55%)')}
          path={text('path', 'icons/edit.svg')}
          width={number('width', 24)}
          height={number('height', 24)}
        />
      </Flexbox>
    </Section>
  </Container>
);
