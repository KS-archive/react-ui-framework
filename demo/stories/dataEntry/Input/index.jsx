import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import { text, object, select } from '@storybook/addon-knobs';
import { Input } from 'react-ui-framework';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

const types = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  tel: 'tel',
  url: 'url',
};

export default () => (
  <WithFigma url="https://www.figma.com/file/bor49SDepwdNyVxh4nKtU4fw/Data-entry?node-id=1%3A7">
    <Container>
      <Section>
        <Header>Input</Header>
        <Flexbox>
          <Input
            className={text('className', 'inputClass')}
            error={text('error', '')}
            label={text('label', 'E-mail')}
            name={text('name', 'email')}
            style={object('style', {})}
            type={select('type', types, 'text')}
            value={text('value', '')}
          />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
