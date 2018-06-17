import React from 'react';
import { text, object, boolean } from '@storybook/addon-knobs';
import { Select } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

const items = [
  {
    "value": "one",
    "label": "One"
  },
  {
    "value": "two",
    "label": "Two"
  }
];

export default () => (
  <Container>
    <Section>
      <Header>Select</Header>
      <Flexbox>
        <Select
          className={text('className', 'ruf-select')}
          isClearable={boolean('isClearable', true)}
          error={text('error', '')}
          items={object('items', items)}
          label={text('label', 'E-mail')}
          name={text('name', 'email')}
          isSearchable={boolean('searchable', false)}
          style={object('style', {})}
        />
      </Flexbox>
    </Section>
  </Container>
);
