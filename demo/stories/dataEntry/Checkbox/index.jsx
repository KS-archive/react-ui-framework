import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import { text, object, boolean } from '@storybook/addon-knobs';
import { Checkbox } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

export default () => (
  <WithFigma url="https://www.figma.com/file/bor49SDepwdNyVxh4nKtU4fw/Data-entry?node-id=1%3A2">
    <Container>
      <Section>
        <Header>Input</Header>
        <Flexbox>
          <Checkbox
            checked={boolean('checked', false)}
            className={text('className', 'checkboxClass')}
            error={text('error', '')}
            label={text('text', 'Some checkbox')}
            style={object('style', {})}
          />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
