import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import { text, object } from '@storybook/addon-knobs';
import { CheckboxGroup } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

const items = [
  { label: 'One', name: 'one', style: { marginBottom: 16 } },
  { label: 'Two', name: 'two', style: { marginBottom: 16 } },
  { label: 'Three', name: 'three', style: { marginBottom: 16 } },
  { label: 'Four', name: 'four' }
];

export default () => (
  <WithFigma url="https://www.figma.com/file/bor49SDepwdNyVxh4nKtU4fw/Data-entry?node-id=1%3A2">
    <Container>
      <Section>
        <Header>Checkbox</Header>
        <Flexbox>
          <CheckboxGroup
            className={text('className', 'checkboxGroupClass')}
            error={text('error', '')}
            items={object('items', items)}
            style={object('style', {})}
            value={object('value', {})}
          />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
